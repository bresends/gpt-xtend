import { insertElementsToGPT } from './utils/insertElements';
import { submitConversation } from './utils/submitInput';

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
                        // event.stopPropagation();
                        if (event.key === 'Enter' && event.altKey) {
                            // event.preventDefault();
                            // submitConversation({
                            //     chunkNumber: 0,
                            //     startPrompt: 'Text',
                            //     text: 'Whatever',
                            //     endPrompt: 'Video',
                            // });
                            console.log('Alt + Enter pressed on Container');
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
