export function createPrompt(label: string, defaultValue: string) {
    const promptContainer = document.createElement('div');
    const promptLabel = document.createElement('label');
    const promptInput = document.createElement('input');

    promptInput.setAttribute('type', 'text');
    promptInput.setAttribute('value', defaultValue);

    promptLabel.innerText = label;

    promptContainer.classList.add('flex', 'flex-col', 'w-full', 'py-2');

    promptLabel.classList.add('p-2');

    promptInput.classList.add(
        'focus:ring-0',
        'focus-visible:ring-0',
        'py-2',
        'border',
        'border-black/10',
        'bg-white',
        'dark:border-gray-900/50',
        'dark:text-white',
        'dark:bg-gray-700',
        'rounded-md',
        'shadow-[0_0_10px_rgba(0,0,0,0.10)]',
        'dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'
    );

    promptContainer.appendChild(promptLabel);
    promptContainer.appendChild(promptInput);

    return promptContainer;
}
