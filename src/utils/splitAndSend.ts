import { submitConversation } from './submitInput';

export function textToChunks(text: string, chunkSize: number): string[] {
    const chunks: string[] = [];
    while (text.length > 0) {
        chunks.push(text.substring(0, chunkSize));
        text = text.substring(chunkSize, text.length);
    }
    return chunks;
}

export async function handleChunkInput() {
    // progressBar,
    // chunkSizeInput,
    // startPromptInput,
    // endPromptInput
    function isChatGptReady() {
        // If not present, the GPT can be assumed to be ready
        const gptIsProcessingSVG = document.querySelector(
            '.text-2xl > span:not(.invisible)'
        );
        return !gptIsProcessingSVG;
    }

    const textarea = document.querySelector(
        "textarea[tabindex='0']"
    ) as HTMLTextAreaElement;

    const fullText = textarea?.value;

    const chunks = textToChunks(fullText, 12000);

    // const startPrompt = startPromptInput.value;
    // const endPrompt = endPromptInput.value;

    // const chunkSize = parseInt(chunkSizeInput.value);
    const chunkSize = 12000;
    const numChunks = chunks.length;

    for (let i = 0; i < numChunks; i++) {
        // if (!isRunning) {
        //     break;
        // }
        const chunk = fullText.slice(i * chunkSize, (i + 1) * chunkSize);

        submitConversation({
            text: chunk,
            chunkNumber: i + 1,
            startPrompt: 'startPrompt',
            endPrompt: 'endPrompt',
        });
        // progressBar.style.width = `${((i + 1) / numChunks) * 100}%`;

        while (!isChatGptReady()) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}
