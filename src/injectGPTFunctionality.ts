import { getChatGPTElements, getGPTXtendElements } from './getPageElements';
import { handleChunkInput } from './utils/processChunks';

export function injectGPTFunctionality() {
    const { chatTextArea, chatSendButton } = getChatGPTElements();
    const { gptXtendContainer, gptXtendToggleViewButton } =
        getGPTXtendElements();

    chatTextArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (gptXtendContainer?.classList.contains('hidden')) return;
            event.preventDefault();
            handleChunkInput();
        }

        if (event.key === 'Enter' && event.altKey) {
            // If the extension is hidden, don't do anything
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
}
