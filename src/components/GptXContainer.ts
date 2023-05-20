import { createPrompt } from './Prompt';
import { createSendBtn } from './sendBtn';

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
    const sendBtn = createSendBtn();

    gptXtendContainer.appendChild(promptStart);
    gptXtendContainer.appendChild(promptEnd);
    gptXtendContainer.appendChild(sendBtn);

    return gptXtendContainer;
}
