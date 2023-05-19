import { createToggleViewBtn } from './components/toggleViewBtn';

function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');
    gptXtendContainer.innerText = 'GPTXtend';
    gptXtendContainer.classList.add('gptxtend-container');
    return gptXtendContainer;
}

function insertElements() {
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

// Module: Main
function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textBoxContainer = document.querySelector(
                    "textarea[tabindex='0']"
                )?.parentElement;

                const gptXtend = document.querySelector('.gptxtend-container');

                if (textBoxContainer && !gptXtend) {
                    insertElements();
                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize the extension
initializeExtension();
