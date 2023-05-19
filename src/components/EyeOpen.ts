export function createOpenEyeSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'w-5 h-5');

    const path1 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    path1.setAttribute('stroke-linecap', 'round');
    path1.setAttribute('stroke-linejoin', 'round');
    path1.setAttribute(
        'd',
        'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178'
    );

    const path2 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    path2.setAttribute('stroke-linecap', 'round');
    path2.setAttribute('stroke-linejoin', 'round');
    path2.setAttribute('d', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z');

    // Append the path elements to the SVG element
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
}
