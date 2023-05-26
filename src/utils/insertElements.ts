import { createGPTXtendContainer } from '../components/GptXContainer';
import { createToggleViewBtn } from '../components/ToggleViewBtn';
import {
    getGptInputAndRegenerateDiv,
    getGptSendButton,
    getGptTextArea,
} from './getHtmlElemets/getChatGPTElements';
import { handleChunkInput } from './splitAndSend';

export function insertGPTXtendElements() {
    const textArea = getGptTextArea();
    const sendTextBtn = getGptSendButton();
    const responseContainer = getGptInputAndRegenerateDiv();
    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    responseContainer?.appendChild(gptXtendContainer);

    sendTextBtn?.parentElement?.insertBefore(toggleViewBtn, sendTextBtn);

    textArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.altKey) {
            handleChunkInput();
        }
    });
}
