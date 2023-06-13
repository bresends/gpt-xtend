import { getChatGPTElements } from '../getPageElements';

interface SubmitInput {
    text: string;
    chunkNumber: number;
    startPrompt: string;
    endPrompt: string;
}

function isSendButtonEnabled() {
    const { sendButton } = getChatGPTElements();
    return !sendButton?.disabled;
}

export async function submitConversation({
    text,
    chunkNumber,
    startPrompt,
    endPrompt,
}: SubmitInput) {
    const { textArea } = getChatGPTElements();

    const enterKeyEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        keyCode: 13, // Key code for the enter key
    });

    if (!textArea) throw new Error('TextArea not found');

    textArea.value = `${startPrompt}\n\n\`\`\`\nTranscript Part: ${chunkNumber}: ${text}\n\`\`\`\n\n${endPrompt}`;
    textArea.dispatchEvent(new Event('input', { bubbles: true }));

    while (!isSendButtonEnabled()) {
        console.log("Can't Submit Trying Again...", isSendButtonEnabled());
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    textArea.dispatchEvent(enterKeyEvent);
}
