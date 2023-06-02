import { createPrompt } from './PromptInput';
import { createSendBtn } from './SendBtn';
import { createConfigBtn } from './ConfigBtn';
import { createProgressBar } from './ProgressBar';
import { createPromptBtn } from './PromptBtn';

export function createGPTXtendContainer() {
    const gptXtendContainer = document.createElement('div');
    const inputsContainer = document.createElement('div');
    const promptBtnContainer = document.createElement('div');

    gptXtendContainer.classList.add('hidden', 'gpt-x-container');

    inputsContainer.classList.add('flex', 'justify-between', 'gap-3');

    promptBtnContainer.classList.add('flex', 'gap-3');

    const promptStart = createPrompt({
        label: 'Prompt Start',
        defaultValue: 'Video Summary',
        id: 'prompt-start',
    });

    const promptEnd = createPrompt({
        label: 'Prompt End',
        defaultValue: 'VIDEO SUMMARY:',
        id: 'prompt-end',
    });

    const sendBtn = createSendBtn();
    const configBtn = createConfigBtn();
    const progressBar = createProgressBar();

    const summaryBtn = createPromptBtn({
        label: 'Summary',
        startText: `You have been tasked with creating a concise summary of a YouTube video using its transcription to supply college student notes to use himself.
You are to act like an expert in the subject the transcription is written about.        
Make a summary of the transcript. Use keywords from the transcript. Don't explain them. Keywords will be explained later.        
Additionally make a short complex analogy to give context and/or analogy from day-to-day life from the transcript.        
Create 10 bullet points (each with an appropriate emoji) that summarize the key points or important moments from the video's transcription.        
In addition to the bullet points, extract the most important keywords and any complex words not known to the average reader aswell as any acronyms mentioned.
For each keyword and complex word, provide an explanation and definition based on its occurrence in the transcription.
You are also a transcription AI and you have been provided with a text that may contain mentions of sponsorships or brand names.
Your task write what you have been said to do while avoiding any mention of sponsorships or brand names.
Please ensure that the summary, bullet points, and explanations fit within the 330-word limit, while still offering a comprehensive and clear understanding of the video's content. 

Use the following text:"
        `,
        endText: '',
    });

    const gist = createPromptBtn({
        label: 'Gist',
        startText: 'Extract the gist of the following text:',
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
