import { insertElementsToGPT } from './utils/insertElements';
import { handleChunkInput } from './utils/splitAndSend';

// Module: Main
function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textArea = document.querySelector(
                    "textarea[tabindex='0']"
                ) as HTMLTextAreaElement;

                const textBoxContainer = textArea?.parentElement;

                textArea?.addEventListener(
                    'keydown',
                    (event: KeyboardEvent) => {
                        if (event.key === 'Enter' && event.altKey) {
                            handleChunkInput();
                        }
                    }
                );

                const gptXtend = document.querySelector('.gpt-x-container');

                if (textBoxContainer && !gptXtend) {
                    insertElementsToGPT();
                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize the extension
initializeExtension();
