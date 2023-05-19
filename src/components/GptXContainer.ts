import { createPrompt } from './Prompt';

export function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');

    gptXtendContainer.classList.add(
        'hidden',
        'gpt-x-container',
        'flex',
        'justify-between',
        'gap-3'
    );

    const promptStart = createPrompt('Prompt Start', 'Video Summary:');
    const promptEnd = createPrompt('Prompt End', 'VIDEO SUMMARY:');

    gptXtendContainer.appendChild(promptStart);
    gptXtendContainer.appendChild(promptEnd);

    return gptXtendContainer;
}
