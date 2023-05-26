import { getGptTextArea } from './getHtmlElemets/getChatGPTElements';
import {
    getXtendChunkSize,
    getXtendContainer,
    getXtendProgressBar,
    getXtendPrompt,
    getXtendToggleViewButton,
} from './getHtmlElemets/getXtendElements';
import { submitConversation } from './submitInput';

export function textToChunks(
    text: string | undefined,
    chunkSize: number
): string[] {
    if (!text) throw new Error('Text is null');

    const chunks: string[] = [];

    while (text.length > 0) {
        chunks.push(text.substring(0, chunkSize));
        text = text.substring(chunkSize, text.length);
    }
    return chunks;
}

function isChatGptReady() {
    // If the dot of response is not present, the GPT can be assumed to be ready
    const gptIsProcessingSVG = document.querySelector(
        '.text-2xl > span:not(.invisible)'
    );
    return !gptIsProcessingSVG;
}

export async function handleChunkInput() {
    const textarea = getGptTextArea();
    const progressBar = getXtendProgressBar();
    const chunkSizeInput = getXtendChunkSize();
    const toggleViewBtn = getXtendToggleViewButton();
    const { start: startPromptInput, end: endPromptInput } = getXtendPrompt();

    if (!startPromptInput || !endPromptInput || !progressBar)
        throw new Error('Xtend not present');

    const chunks = textToChunks(
        textarea?.value,
        parseInt(chunkSizeInput?.value || '12000')
    );

    const startPrompt = startPromptInput?.value;
    const endPrompt = endPromptInput?.value;
    const numChunks = chunks.length;

    // Reset the Progress Bar
    progressBar.style.width = '0%';

    toggleViewBtn?.click();
    console.log('Sending chunks to GPT');

    for (let i = 0; i < numChunks; i++) {
        await submitConversation({
            text: chunks[i],
            chunkNumber: i + 1,
            startPrompt: startPrompt,
            endPrompt: endPrompt,
        });
        progressBar.style.width = `${((i + 1) / numChunks) * 100}%`;

        while (!isChatGptReady()) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}
