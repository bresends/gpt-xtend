import { submitConversation } from './submitInput';

export function textToChunks(text: string, chunkSize: number): string[] {
    const chunks: string[] = [];
    while (text.length > 0) {
        chunks.push(text.substring(0, chunkSize));
        text = text.substring(chunkSize, text.length);
    }
    return chunks;
}

function observeRemoval(target: Element): Promise<void> {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (
                    mutation.removedNodes.length > 0 &&
                    !document.contains(target)
                ) {
                    observer.disconnect();
                    resolve();
                    return;
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    });
}

export async function handleChunkInput() {
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
    const progressBar = document.querySelector(
        '.progress-bar'
    ) as HTMLDivElement;

    const chunkSizeInput = document.querySelector(
        '#chunk-input-number'
    ) as HTMLInputElement;

    const startPromptInput = document.querySelector(
        '#prompt-start'
    ) as HTMLInputElement;

    const endPromptInput = document.querySelector(
        '#prompt-end'
    ) as HTMLInputElement;

    const chunks = textToChunks(
        textarea?.value,
        parseInt(chunkSizeInput?.value || '12000')
    );

    const startPrompt = startPromptInput?.value;
    const endPrompt = endPromptInput?.value;

    const numChunks = chunks.length;

    const gptIsProcessingSVG = document.querySelector(
        '.text-2xl > span:not(.invisible)'
    );

    for (let i = 0; i < numChunks; i++) {
        // submitConversation({
        //     text: chunks[i],
        //     chunkNumber: i + 1,
        //     startPrompt: startPrompt,
        //     endPrompt: endPrompt,
        // });
        // progressBar.style.width = `${((i + 1) / numChunks) * 100}%`;

        // while (!isChatGptReady()) {
        //     console.log('Inside While', !isChatGptReady());
        //     await new Promise((resolve) => setTimeout(resolve, 1000));
        // }

        while (gptIsProcessingSVG) {
            console.log('Inside While', gptIsProcessingSVG);
            await observeRemoval(gptIsProcessingSVG);
        }
    }
}
