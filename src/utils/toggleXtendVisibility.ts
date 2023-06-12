import { createClosedEyeSVG, createOpenEyeSVG } from '../components/EyeSVG';
import { gptExtendElements } from '../getPageElements';

export function toggleXtendVisibility(
    eyeOpenSVG: SVGSVGElement,
    eyeClosedSVG: SVGSVGElement
) {
    const { gptXtendContainer, gptXtendToggleViewButton } = gptExtendElements();

    gptXtendContainer?.classList.toggle('hidden');

    if (gptXtendContainer?.classList.contains('hidden')) {
        gptXtendToggleViewButton?.replaceChild(eyeOpenSVG, eyeClosedSVG);
    } else {
        gptXtendToggleViewButton?.replaceChild(eyeClosedSVG, eyeOpenSVG);
    }
}
