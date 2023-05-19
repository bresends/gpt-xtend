import { insertElementsToGPT } from './utils/insertElements';

// Module: Main
function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textBoxContainer = document.querySelector(
                    "textarea[tabindex='0']"
                )?.parentElement;

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
