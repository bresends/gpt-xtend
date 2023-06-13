import { createGPTXtendContainer } from './components/GptXContainer';
import { createToggleViewBtn } from './components/ToggleViewBtn';
import { getChatGPTElements } from './getPageElements';

export function insertGPTXtendElements() {
    const { chatSendButton, chatTextAreaAndButtonsTopContainer } =
        getChatGPTElements();

    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn();

    chatTextAreaAndButtonsTopContainer?.prepend(gptXtendContainer);
    chatSendButton?.parentElement?.insertBefore(toggleViewBtn, chatSendButton);
}
