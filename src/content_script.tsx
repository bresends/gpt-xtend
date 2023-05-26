import { insertGPTXtendElements } from './utils/insertElements';

function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textArea = document.querySelector(
                    "textarea[tabindex='0']"
                ) as HTMLTextAreaElement;

                const textBoxContainer = textArea?.parentElement;

                const gptXtend = document.querySelector('.gpt-x-container');

                if (textBoxContainer && !gptXtend) {
                    insertGPTXtendElements();
                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize the extension
initializeExtension();
