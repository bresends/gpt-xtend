import { createToggleViewBtn } from '../components/ToggleViewBtn';
import { createGPTXtendContainer } from '../components/GptXContainer';

export function insertElementsToGPT() {
    const sendTextBtn = document.querySelector(
        "textarea[tabindex='0']"
    )?.nextElementSibling;

    const textBoxContainer = document.querySelector(
        "textarea[tabindex='0']"
    )?.parentElement;

    const responseContainer = textBoxContainer?.parentNode;

    const gptXtendContainer = createGPTXtendContainer();

    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    responseContainer?.firstChild?.appendChild(gptXtendContainer);

    sendTextBtn?.parentElement?.insertBefore(toggleViewBtn, sendTextBtn);
}
