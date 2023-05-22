import { handleChunkInput } from '../utils/splitAndSend';

function createSendSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'w-6 h-6');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute(
        'd',
        'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
    );

    svg.appendChild(path);

    return svg;
}

export function createSendBtn() {
    const sendBtn = document.createElement('span');
    const sendSVG = createSendSVG();

    sendBtn.classList.add(
        'flex',
        'flex-col',
        'w-full',
        'py-2',
        'bg-gray-50',
        'dark:bg-white/5',
        'p-3',
        'rounded-md',
        'relative',
        'cursor-pointer'
    );

    sendBtn.style.flex = '1 1 0%';
    sendBtn.style.alignSelf = 'flex-end';
    sendBtn.style.marginBottom = '10px';

    sendBtn.appendChild(sendSVG);

    sendBtn.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        handleChunkInput();
    });

    return sendBtn;
}
