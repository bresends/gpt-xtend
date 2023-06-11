import { chatGPTElements, gptExtendElements } from './getPageElements';
import { injectGptFunctionality } from './injectGPTFunctionality';
import { insertGPTXtendElements } from './insertElementsToPage';

function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const { textArea } = chatGPTElements();
                const { gptXtendContainer } = gptExtendElements();

                if (textArea && !gptXtendContainer) {
                    insertGPTXtendElements();
                    injectGptFunctionality();
                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

initializeExtension();
