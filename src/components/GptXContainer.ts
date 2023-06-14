import { createConfigBtn } from './ConfigBtn';
import { createProgressBar } from './ProgressBar';
import { createPromptBtn } from './PromptBtn';
import { createPrompt } from './PromptInput';

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

    const configBtn = createConfigBtn();
    const progressBar = createProgressBar();

    const summaryBtn = createPromptBtn({
        label: 'Summary',
        startText: `You have been tasked with creating a concise summary of a YouTube video using its transcription to supply college student notes to use himself.
You are to act like an expert in the subject the transcription is written about.        
Make a summary of the transcript. Use keywords from the transcript. Don't explain them. Keywords will be explained later.        
Additionally make a short complex analogy to give context and/or analogy from day-to-day life from the transcript.        
Create 10 bullet points (each with an appropriate emoji) that summarize the key points or important moments from the video's transcription.        
In addition to the bullet points, extract the most important keywords, and acronyms mentioned.         
After the keywords, write an engaging and actionable Step by Step to apply what was said into daily life.         
You are also a transcription AI and you have been provided with a text that may contain mentions of sponsorships or brand names.
Your task write what you have been said to do while avoiding any mention of sponsorships or brand names.
Please ensure that the summary, bullet points, and explanations fit within the 330-word limit, while still offering a comprehensive and clear understanding of the video's content. 

Use the following text:
        `,
        endText: '',
    });

    const inDepth = createPromptBtn({
        label: 'In-Depth',
        startText: 'Write a in-depth summary of the following text:',
        endText: 'KEY TAKEAWAYS:',
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

    inputsContainer.appendChild(promptStart);
    inputsContainer.appendChild(promptEnd);
    inputsContainer.appendChild(configBtn);

    promptBtnContainer.appendChild(summaryBtn);
    promptBtnContainer.appendChild(inDepth);
    promptBtnContainer.appendChild(gist);
    promptBtnContainer.appendChild(stepBtn);

    gptXtendContainer.appendChild(inputsContainer);
    gptXtendContainer.appendChild(promptBtnContainer);
    gptXtendContainer.appendChild(progressBar);

    return gptXtendContainer;
}
