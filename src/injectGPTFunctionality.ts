import { getChatGPTElements, getGPTXtendElements } from './getPageElements';
import { extensionExecutionController } from './store';
import { handleChunkInput } from './utils/processChunks';

export function injectGPTFunctionality() {
    const { chatTextArea, chatSendButton, stopAndRegenerateBtn, pageLinks } =
        getChatGPTElements();
    const { gptXtendContainer, gptXtendToggleViewButton } =
        getGPTXtendElements();

    chatTextArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (gptXtendContainer?.classList.contains('hidden')) return;
            event.preventDefault();
            handleChunkInput();
        }

        if (event.key === 'Enter' && event.altKey) {
            // If the extension is showing, don't trigger on Alt + Enter
            if (!gptXtendContainer?.classList.contains('hidden')) return;
            handleChunkInput();
        }
    });

    document.body?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'x' && event.altKey) {
            gptXtendToggleViewButton?.click();
        }
    });

    chatSendButton?.addEventListener('click', () => {
        if (gptXtendContainer?.classList.contains('hidden')) return;
        handleChunkInput();
    });

    const stopExecution = () => extensionExecutionController.stop();

    stopAndRegenerateBtn?.addEventListener('click', stopExecution);

    pageLinks?.forEach((link) => {
        link.addEventListener('click', stopExecution);
    });
}
