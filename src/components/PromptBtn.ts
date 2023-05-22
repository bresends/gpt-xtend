interface PromptBtnProps {
    text: string;
}
export function createPromptBtn({ text }: PromptBtnProps) {
    const promptBtn = document.createElement('span');
    promptBtn.innerText = text;

    promptBtn.classList.add(
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

    promptBtn.style.flex = '1 1 0%';
    promptBtn.style.alignSelf = 'flex-end';
    promptBtn.style.marginBottom = '10px';

    promptBtn.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
    });

    return promptBtn;
}
