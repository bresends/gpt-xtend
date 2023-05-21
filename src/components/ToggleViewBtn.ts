import { createOpenEyeSVG, createClosedEyeSVG } from './EyeSVG';

export function createToggleViewBtn(gptXContainer: HTMLDivElement) {
    let open = false;

    const openEyeSVG = createOpenEyeSVG();
    const closedEyeSVG = createClosedEyeSVG();

    const showGPTXtendContainer = document.createElement('span');

    showGPTXtendContainer.classList.add(
        'absolute',
        'p-1',
        'text-gray-500',
        'enabled:dark:hover:text-gray-400'
    );

    showGPTXtendContainer.id = 'gpt-x-toggle-view-btn';

    showGPTXtendContainer.appendChild(openEyeSVG);

    showGPTXtendContainer.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        open = !open;
        gptXContainer.classList.toggle('hidden');

        if (!open) {
            showGPTXtendContainer.replaceChild(openEyeSVG, closedEyeSVG);
        } else {
            showGPTXtendContainer.replaceChild(closedEyeSVG, openEyeSVG);
        }
    });

    return showGPTXtendContainer;
}
