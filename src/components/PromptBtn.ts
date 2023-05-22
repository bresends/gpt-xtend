interface PromptBtnProps {
    text: string;
}

function writingSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'w-5 h-5');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute(
        'd',
        'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
    );

    svg.appendChild(path);

    return svg;
}

export function createPromptBtn({ text }: PromptBtnProps) {
    const promptBtn = document.createElement('span');

    const svg = writingSVG();

    promptBtn.innerText = text;
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
    });

    return promptBtn;
}
