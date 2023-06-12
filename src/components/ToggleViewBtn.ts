import { chatGPTElements } from '../getPageElements';
import { toggleXtendVisibility } from '../utils/toggleXtendVisibility';
import { createOpenEyeSVG, createClosedEyeSVG } from './EyeSVG';

function placeXtendContainerBelowResponseButtons() {
    const { regenerateAndStopBtnTopDiv } = chatGPTElements();

    if (!regenerateAndStopBtnTopDiv) return;

    const parentElement = regenerateAndStopBtnTopDiv.parentNode;

    parentElement?.insertBefore(
        regenerateAndStopBtnTopDiv,
        parentElement.firstChild
    );
}

export function createToggleViewBtn() {
    const openEyeSVG = createOpenEyeSVG();
    const closedEyeSVG = createClosedEyeSVG();

    const showGPTXtendContainer = document.createElement('span');
    showGPTXtendContainer.classList.add('absolute', 'text-gray-500');
    showGPTXtendContainer.id = 'gptXtend-toggle-view-btn';

    showGPTXtendContainer.appendChild(openEyeSVG);

    showGPTXtendContainer.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        toggleXtendVisibility(openEyeSVG, closedEyeSVG);
        placeXtendContainerBelowResponseButtons();
    });

    return showGPTXtendContainer;
}
