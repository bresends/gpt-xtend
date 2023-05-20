import { createPrompt } from './Prompt';
import { createSendBtn } from './SendBtn';
import { createConfigBtn } from './ConfigBtn';

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
    const configBtn = createConfigBtn();

    gptXtendContainer.appendChild(promptStart);
    gptXtendContainer.appendChild(promptEnd);
    gptXtendContainer.appendChild(configBtn);
    gptXtendContainer.appendChild(sendBtn);

    return gptXtendContainer;
}
