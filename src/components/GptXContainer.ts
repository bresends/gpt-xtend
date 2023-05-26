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

    const gist = createPromptBtn({
        label: 'Gist',
        startText: 'Extract the gist of the following:',
        endText: 'GIST:',
    });

    const stepBtn = createPromptBtn({
        label: 'Step by Step',
        startText:
            'Write an engaging and actionable Step by Step guide from the following text:',
        endText: 'STEP BY STEP GUIDE:',
    });

    const keyTakeaways = createPromptBtn({
        label: 'Takeaways',
        startText: 'What are the key takeaways from the following:',
        endText: 'KEY TAKEAWAYS:',
    });

    progressBar.id = 'progress-bar';

    inputsContainer.appendChild(promptStart);
    inputsContainer.appendChild(promptEnd);
    inputsContainer.appendChild(configBtn);
    inputsContainer.appendChild(sendBtn);

    promptBtnContainer.appendChild(summaryBtn);
    promptBtnContainer.appendChild(gist);
    promptBtnContainer.appendChild(stepBtn);
    promptBtnContainer.appendChild(keyTakeaways);

    gptXtendContainer.appendChild(inputsContainer);
    gptXtendContainer.appendChild(promptBtnContainer);
    gptXtendContainer.appendChild(progressBar);

    return gptXtendContainer;
}
