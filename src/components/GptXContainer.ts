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
    const summaryBtn = createPromptBtn({
        label: 'Video Summary',
        startText: 'Video Summary:',
        endText: 'VIDEO SUMMARY:',
    });
    const bulletBtn = createPromptBtn({
        label: 'Bullet List',
        startText: 'Create a list of bullet items:',
        endText: 'BULLET LIST:',
    });
    const conciseBtn = createPromptBtn({
        label: 'Concise',
        startText: 'Create a concise list from this text:',
        endText: 'CONCISE LIST:',
    });

    progressBar.id = 'progress-bar';

    inputsContainer.appendChild(promptStart);
    inputsContainer.appendChild(promptEnd);
    inputsContainer.appendChild(configBtn);
    inputsContainer.appendChild(sendBtn);

    promptBtnContainer.appendChild(summaryBtn);
    promptBtnContainer.appendChild(bulletBtn);
    promptBtnContainer.appendChild(conciseBtn);

    gptXtendContainer.appendChild(inputsContainer);
    gptXtendContainer.appendChild(promptBtnContainer);
    gptXtendContainer.appendChild(progressBar);

    return gptXtendContainer;
}
