import { createGPTXtendContainer } from './components/GptXContainer';
import { createToggleViewBtn } from './components/ToggleViewBtn';
import { chatGPTElements } from './getPageElements';

export function insertGPTXtendElements() {
    const { sendButton, responseTopContainer } = chatGPTElements();

    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    responseTopContainer?.prepend(gptXtendContainer);
    sendButton?.parentElement?.insertBefore(toggleViewBtn, sendButton);
}
