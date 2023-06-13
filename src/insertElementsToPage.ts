import { createGPTXtendContainer } from './components/GptXContainer';
import { createToggleViewBtn } from './components/ToggleViewBtn';
import { getChatGPTElements } from './getPageElements';

export function insertGPTXtendElements() {
    const { sendButton, chatTextAreaAndButtonsTopContainer } =
        getChatGPTElements();

    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn();

    chatTextAreaAndButtonsTopContainer?.prepend(gptXtendContainer);
    sendButton?.parentElement?.insertBefore(toggleViewBtn, sendButton);
}
