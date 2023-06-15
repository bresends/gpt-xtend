import { getChatGPTElements, getGPTXtendElements } from './getPageElements';
import { injectGPTFunctionality as injectGPTFunctionality } from './injectGPTFunctionality';
import { insertGPTXtendElements } from './insertElementsToPage';

function initializeContentScript() {
    const mutationObserver = new MutationObserver(() => {
        const { chatTextArea } = getChatGPTElements();
        const { gptXtendContainer } = getGPTXtendElements();

        if (chatTextArea && !gptXtendContainer) {
            insertGPTXtendElements();
        }
        injectGPTFunctionality();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
}

initializeContentScript();
