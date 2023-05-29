export function createChunkInput() {
    const container = document.createElement('div');
    container.classList.add(
        'hidden',
        'flex',
        'flex-col',
        'rounded-md',
        'shadow-[0_0_10px_rgba(0,0,0,0.10)]',
        'dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'
    );
    container.id = 'chunk-input-container';

    const label = document.createElement('label');
    label.classList.add('text-white', 'text-sm', 'py-2', 'px-4');

    label.textContent = 'Chunk Size';
    label.style.fontWeight = '700';

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('flex', 'flex-row');

    const decrementButton = document.createElement('button');
    decrementButton.classList.add(
        'text-white',
        'cursor-pointer',
        'outline-none'
    );

    const decrementButtonSpan = document.createElement('span');
    decrementButtonSpan.textContent = '−';
    decrementButton.appendChild(decrementButtonSpan);
    decrementButton.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        const oldValue = parseInt(input.value);
        if (oldValue < 3000) return;
        const newValue = oldValue - 3000;
        input.value = String(newValue);
    });

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('readonly', 'true');

    input.id = 'chunk-input-number';
    input.classList.add(
        'font-semibold',
        'text-md',
        'cursor-default',
        'text-white'
    );

    input.setAttribute('value', '13000');

    const incrementButton = document.createElement('button');

    incrementButton.setAttribute('data-action', 'increment');

    incrementButton.classList.add('text-white', 'cursor-pointer');

    const incrementButtonSpan = document.createElement('span');

    incrementButtonSpan.textContent = '+';

    incrementButton.appendChild(incrementButtonSpan);

    incrementButton.addEventListener('click', (event: MouseEvent) => {
        event.stopPropagation();
        const oldValue = parseInt(input.value);
        if (oldValue >= 20000) return;

        const newValue = oldValue + 3000;
        input.value = String(newValue);
    });

    inputContainer.appendChild(decrementButton);
    inputContainer.appendChild(input);
    inputContainer.appendChild(incrementButton);

    container.appendChild(label);
    container.appendChild(inputContainer);

    return container;
}
