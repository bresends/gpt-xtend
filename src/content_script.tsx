import { createOpenEyeSVG } from './components/EyeOpen';

// Module: Main
function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textBoxContainer = document.querySelector(
                    "textarea[tabindex='0']"
                )?.parentElement;

                const responseContainer = textBoxContainer?.parentNode;

                const sendText = document.querySelector(
                    "textarea[tabindex='0']"
                )?.nextElementSibling;

                const gptXtend = responseContainer?.querySelector(
                    '.gptxtend-container'
                );

                if (textBoxContainer && !gptXtend) {
                    const icon1 = createOpenEyeSVG();
                    const icon2 = createOpenEyeSVG();

                    const newGPTXtend = document.createElement('div');
                    newGPTXtend.classList.add('gptxtend-container');
                    newGPTXtend.appendChild(icon1);

                    responseContainer?.firstChild?.appendChild(newGPTXtend);

                    const showGPTXtend = document.createElement('button');
                    showGPTXtend.classList.add(
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

                    showGPTXtend.style.right = '0px';
                    showGPTXtend.appendChild(icon2);

                    sendText?.parentElement?.insertBefore(
                        showGPTXtend,
                        sendText
                    );

                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize the extension
initializeExtension();
