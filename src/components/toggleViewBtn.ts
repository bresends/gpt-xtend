import { createOpenEyeSVG } from './EyeOpen';

export function createToggleViewBtn(gptXContainer: HTMLDivElement) {
    const openEyeSVG = createOpenEyeSVG();

    const showGPTXtendContainer = document.createElement('button');

    showGPTXtendContainer.classList.add(
        'absolute',
        'p-1',
        'text-gray-500',
        'enabled:dark:hover:text-gray-400'
    );

    showGPTXtendContainer.id = 'gpt-x-toggle-view-btn';

    showGPTXtendContainer.appendChild(openEyeSVG);

    showGPTXtendContainer.addEventListener('click', () => {
        gptXContainer.classList.toggle('hidden');
    });

    return showGPTXtendContainer;
}
