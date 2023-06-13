import { getChatGPTElements, getGPTXtendElements } from './getPageElements';
import { handleChunkInput } from './utils/processChunks';

export function injectGptFunctionality() {
    const { textArea, sendButton } = getChatGPTElements();
    const { gptXtendContainer, gptXtendToggleViewButton } =
        getGPTXtendElements();

    textArea?.addEventListener('keydown', (event: KeyboardEvent) => {
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

    sendButton?.addEventListener('click', () => {
        if (gptXtendContainer?.classList.contains('hidden')) return;
        handleChunkInput();
    });
}
