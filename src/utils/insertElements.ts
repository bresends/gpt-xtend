import { createGPTXtendContainer } from '../components/GptXContainer';
import { createToggleViewBtn } from '../components/ToggleViewBtn';
import { handleChunkInput } from './splitAndSend';

export function insertElementsToGPT() {
    const sendTextBtn = document.querySelector(
        "textarea[tabindex='0']"
    )?.nextElementSibling;

    const textArea = document.querySelector(
        "textarea[tabindex='0']"
    ) as HTMLTextAreaElement;

    const textBoxContainer = document.querySelector(
        "textarea[tabindex='0']"
    )?.parentElement;

    const responseContainer = textBoxContainer?.parentNode;

    const gptXtendContainer = createGPTXtendContainer();

    const toggleViewBtn = createToggleViewBtn(gptXtendContainer);

    responseContainer?.firstChild?.appendChild(gptXtendContainer);

    sendTextBtn?.parentElement?.insertBefore(toggleViewBtn, sendTextBtn);

    textArea?.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && event.altKey) {
            handleChunkInput();
        }
    });
}
