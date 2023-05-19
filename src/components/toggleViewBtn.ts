import { createOpenEyeSVG } from './EyeOpen';

export function createToggleViewBtn(gptXContainer: HTMLDivElement) {
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

    showGPTXtendContainer.addEventListener('click', () => {
        gptXContainer.classList.toggle('hidden');
    });

    return showGPTXtendContainer;
}
