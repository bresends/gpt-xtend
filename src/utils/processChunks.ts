import { getChatGPTElements, getGPTXtendElements } from '../getPageElements';
import { extensionExecutionController } from '../store';
import { splitText } from './splitText';
import { submitConversation } from './submitInput';

function isGPTProcessing() {
    const { processingInputDots } = getChatGPTElements();
    return !!processingInputDots;
}

export async function handleChunkInput() {
    const { chatTextArea } = getChatGPTElements();
    const {
        gptXtendProgressBar,
        gptXtendChunkSize,
        gptXtendToggleViewButton,
        gptXtendPromptStart,
        gptXtendPromptEnd,
    } = getGPTXtendElements();

    if (!gptXtendPromptStart || !gptXtendPromptEnd || !gptXtendProgressBar)
        throw new Error('Xtend not present');

    const chunks = splitText(
        chatTextArea?.value,
        parseInt(gptXtendChunkSize?.value || '12000')
    );

    const startPrompt = gptXtendPromptStart?.value;
    const endPrompt = gptXtendPromptEnd?.value;
    const numChunks = chunks.length;

    gptXtendToggleViewButton?.click();

    extensionExecutionController.start();
    for (let i = 0; i < numChunks; i++) {
        if (!extensionExecutionController.getIsRunning()) return;

        await submitConversation({
            text: chunks[i],
            chunkNumber: i + 1,
            startPrompt: startPrompt,
            endPrompt: endPrompt,
        });
        gptXtendProgressBar.style.width = `${((i + 1) / numChunks) * 100}%`;

        // Wait for GPT to finish processing before sending next chunk
        while (isGPTProcessing()) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
    extensionExecutionController.stop();
}
