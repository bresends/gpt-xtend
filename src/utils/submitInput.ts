import { getChatGPTElements } from '../getPageElements';

interface SubmitInput {
    text: string;
    chunkNumber: number;
    startPrompt: string;
    endPrompt: string;
}

function ischatSendButtonEnabled() {
    const { chatSendButton } = getChatGPTElements();
    return !chatSendButton?.disabled;
}

export async function submitConversation({
    text,
    chunkNumber,
    startPrompt,
    endPrompt,
}: SubmitInput) {
    const { chatTextArea } = getChatGPTElements();

    const enterKeyEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        keyCode: 13, // Key code for the enter key
    });

    if (!chatTextArea) throw new Error('TextArea not found');

    chatTextArea.value = `${startPrompt}\n\n\`\`\`\nTranscript Part: ${chunkNumber}: ${text}\n\`\`\`\n\n${endPrompt}`;
    chatTextArea.dispatchEvent(new Event('input', { bubbles: true }));

    while (!ischatSendButtonEnabled()) {
        console.log("Can't Submit Trying Again...", ischatSendButtonEnabled());
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    chatTextArea.dispatchEvent(enterKeyEvent);
}
