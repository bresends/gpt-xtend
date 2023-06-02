import { createGPTXtendContainer } from '../components/GptXContainer';
import { createToggleViewBtn } from '../components/ToggleViewBtn';
import {
    getGptInputDiv,
    getGptSendButton,
    getGptTextArea,
} from './getHtmlElemets/getChatGPTElements';
import { handleChunkInput } from './splitAndSend';

export function insertGPTXtendElements() {
    const textArea = getGptTextArea();
    const sendTextBtn = getGptSendButton();
    const gptInputDiv = getGptInputDiv();
    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    gptInputDiv?.prepend(gptXtendContainer);

    sendTextBtn?.parentElement?.insertBefore(toggleViewBtn, sendTextBtn);

    textArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.altKey) {
            handleChunkInput();
        }
    });
}
