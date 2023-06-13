import { getChatGPTElements, getGPTXtendElements } from './getPageElements';
import { injectGptFunctionality as injectGPTFunctionality } from './injectGPTFunctionality';
import { insertGPTXtendElements } from './insertElementsToPage';

function initializeContentScript() {
    const mutationObserver = new MutationObserver(() => {
        const { textArea } = getChatGPTElements();
        const { gptXtendContainer } = getGPTXtendElements();

        if (textArea && !gptXtendContainer) {
            insertGPTXtendElements();
            injectGPTFunctionality();
        }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
}

initializeContentScript();
