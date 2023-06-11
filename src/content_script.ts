import { getGptTextArea } from './utils/getHtmlElemets/getChatGPTElements';
import { getXtendContainer } from './utils/getHtmlElemets/getXtendElements';
import { insertGPTXtendElements } from './utils/insertElements';

function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textArea = getGptTextArea();
                const gptXtend = getXtendContainer();

                if (textArea && !gptXtend) {
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
