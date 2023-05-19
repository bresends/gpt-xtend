import { createOpenEyeSVG } from './components/EyeOpen';

interface ElementObject {
    element: HTMLElement | SVGElement;
    position: 'before' | 'after';
}

// Module: Main
function initializeExtension() {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const textBoxContainer = document.querySelector(
                    "textarea[tabindex='0']"
                )?.parentElement;

                const responseContainer = textBoxContainer?.parentNode;

                console.log('responseContainer', responseContainer);

                const gptXtend = responseContainer?.querySelector(
                    '.gptxtend-container'
                );

                if (textBoxContainer && !gptXtend) {
                    const newGPTXtend = document.createElement('div');
                    newGPTXtend.classList.add('gptxtend-container');
                    newGPTXtend.appendChild(createOpenEyeSVG());

                    responseContainer?.prepend(newGPTXtend);
                    observer.disconnect(); // Stop observing mutations after the desired mutation occurs
                    break;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize the extension
initializeExtension();
