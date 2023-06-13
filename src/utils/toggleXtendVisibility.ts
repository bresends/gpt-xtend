import { createClosedEyeSVG, createOpenEyeSVG } from '../components/EyeSVG';
import { getGPTXtendElements } from '../getPageElements';

export function toggleXtendVisibility(
    eyeOpenSVG: SVGSVGElement,
    eyeClosedSVG: SVGSVGElement
) {
    const { gptXtendContainer, gptXtendToggleViewButton } =
        getGPTXtendElements();

    gptXtendContainer?.classList.toggle('hidden');

    if (gptXtendContainer?.classList.contains('hidden')) {
        gptXtendToggleViewButton?.replaceChild(eyeOpenSVG, eyeClosedSVG);
    } else {
        gptXtendToggleViewButton?.replaceChild(eyeClosedSVG, eyeOpenSVG);
    }
}
