import { createOpenEyeSVG } from './components/EyeOpen';

function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');
    gptXtendContainer.innerText = 'GPTXtend';
    gptXtendContainer.classList.add('gptxtend-container');
    return gptXtendContainer;
}

function createToggleViewBtn() {
    const openEyeSVG = createOpenEyeSVG();

    const showGPTXtendContainer = document.createElement('button');

    showGPTXtendContainer.classList.add(
        'absolute',
        'p-1',
        'text-gray-500',
        'enabled:dark:hover:text-gray-400',
        'disabled:hover:bg-transparent',
        'dark:disabled:hover:bg-transparent',
        'right-1',
        'md:right-1',
        'disabled:opacity-40'
    );

    showGPTXtendContainer.appendChild(openEyeSVG);

    return showGPTXtendContainer;
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
    const toggleViewBtn = createToggleViewBtn();

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
