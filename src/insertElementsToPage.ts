import { createGPTXtendContainer } from './components/GptXContainer';
import { createToggleViewBtn } from './components/ToggleViewBtn';
import { chatGPTElements } from './getPageElements';

export function insertGPTXtendElements() {
    const { sendButton, textAreaAndButtonsTopContainer } = chatGPTElements();

    const gptXtendContainer = createGPTXtendContainer();
    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    textAreaAndButtonsTopContainer?.prepend(gptXtendContainer);
    sendButton?.parentElement?.insertBefore(toggleViewBtn, sendButton);
}
