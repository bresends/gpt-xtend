import { createPrompt } from './PromptInput';
import { createSendBtn } from './SendBtn';
import { createConfigBtn } from './ConfigBtn';
import { createProgressBar } from './ProgressBar';
import { createPromptBtn } from './PromptBtn';

export function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');
    const inputsContainer = document.createElement('div');
    const promptBtnContainer = document.createElement('div');

    gptXtendContainer.classList.add('hidden');

    inputsContainer.classList.add(
        'gpt-x-container',
        'flex',
        'justify-between',
        'gap-3'
    );

    promptBtnContainer.classList.add('flex', 'gap-3');

    const promptStart = createPrompt(
        'Prompt Start',
        'Video Summary:',
        'prompt-start'
    );

    const promptEnd = createPrompt(
        'Prompt End',
        'VIDEO SUMMARY:',
        'prompt-end'
    );

    const sendBtn = createSendBtn();
    const configBtn = createConfigBtn();
    const progressBar = createProgressBar();
    const summaryBtn = createPromptBtn({ text: 'Video Summary' });
    const bulletBtn = createPromptBtn({ text: 'Bullet' });

    progressBar.id = 'progress-bar';

    inputsContainer.appendChild(promptStart);
    inputsContainer.appendChild(promptEnd);
    inputsContainer.appendChild(configBtn);
    inputsContainer.appendChild(sendBtn);

    promptBtnContainer.appendChild(summaryBtn);
    promptBtnContainer.appendChild(bulletBtn);

    gptXtendContainer.appendChild(inputsContainer);
    gptXtendContainer.appendChild(progressBar);
    gptXtendContainer.appendChild(promptBtnContainer);

    return gptXtendContainer;
}
