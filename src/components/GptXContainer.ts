import { createPrompt } from './Prompt';
import { createSendBtn } from './SendBtn';
import { createConfigBtn } from './ConfigBtn';
import { createProgressBar } from './ProgressBar';

export function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');
    const inputsContainer = document.createElement('div');

    gptXtendContainer.classList.add('hidden');

    inputsContainer.classList.add(
        'gpt-x-container',
        'flex',
        'justify-between',
        'gap-3'
    );

    const promptStart = createPrompt('Prompt Start', 'Video Summary:');
    const promptEnd = createPrompt('Prompt End', 'VIDEO SUMMARY:');
    const sendBtn = createSendBtn();
    const configBtn = createConfigBtn();
    const progressBar = createProgressBar();

    inputsContainer.appendChild(promptStart);
    inputsContainer.appendChild(promptEnd);
    inputsContainer.appendChild(configBtn);
    inputsContainer.appendChild(sendBtn);

    gptXtendContainer.appendChild(inputsContainer);
    gptXtendContainer.appendChild(progressBar);

    return gptXtendContainer;
}
