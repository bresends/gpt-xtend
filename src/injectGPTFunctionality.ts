import { chatGPTElements, gptExtendElements } from './getPageElements';
import { handleChunkInput } from './utils/processChunks';

export function injectGptFunctionality() {
    const { textArea, sendButton } = chatGPTElements();
    const { gptXtendContainer } = gptExtendElements();

    textArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (gptXtendContainer?.classList.contains('hidden')) return;
            event.preventDefault();
            handleChunkInput();
        }

        if (event.key === 'Enter' && event.altKey) {
            handleChunkInput();
        }
    });

    sendButton?.addEventListener('click', () => {
        if (gptXtendContainer?.classList.contains('hidden')) return;
        handleChunkInput();
    });
}
