import { chatGPTElements } from '../getPageElements';
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

export function createToggleViewBtn(gptXContainer: HTMLDivElement) {
    let open = false;

    const openEyeSVG = createOpenEyeSVG();
    const closedEyeSVG = createClosedEyeSVG();

    const showGPTXtendContainer = document.createElement('span');
    showGPTXtendContainer.classList.add('absolute', 'text-gray-500');
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

        placeXtendContainerBelowResponseButtons();
    });

    return showGPTXtendContainer;
}
