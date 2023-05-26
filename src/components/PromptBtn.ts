import { getXtendPrompt } from '../utils/getHtmlElemets/getXtendElements';

function writingSVG() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'w-5 h-5');

    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute(
        'd',
        'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
    );

    svg.appendChild(path);
    svg.style.marginTop = '0.25rem';
    return svg;
}

interface PromptBtnProps {
    label: string;
    startText: string;
    endText: string;
}

export function createPromptBtn({ label, startText, endText }: PromptBtnProps) {
    const promptBtn = document.createElement('span');

    const svg = writingSVG();

    promptBtn.innerText = label;
    promptBtn.classList.add('prompt-btn');

    promptBtn.classList.add(
        'py-2',
        'px-3',
        'rounded-md',
        'cursor-pointer',
        'flex',
        'justify-between',
        'bg-gray-50',
        'dark:bg-white/5',
        'gap-3'
    );

    promptBtn.appendChild(svg);

    promptBtn.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        const { start: startPromptInput, end: endPromptInput } =
            getXtendPrompt();

        if (!startPromptInput || !endPromptInput) return;

        startPromptInput.value = startText;
        endPromptInput.value = endText;
    });

    return promptBtn;
}
