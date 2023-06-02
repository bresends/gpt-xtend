import {
    getGptSendButton,
    getGptTextArea,
} from './getHtmlElemets/getChatGPTElements';

interface SubmitInput {
    text: string;
    chunkNumber: number;
    startPrompt: string;
    endPrompt: string;
}

function isSendButtonEnabled() {
    const sendBtn = getGptSendButton();
    return !sendBtn?.disabled;
}

export async function submitConversation({
    text,
    chunkNumber,
    startPrompt,
    endPrompt,
}: SubmitInput) {
    const textarea = getGptTextArea();

    const enterKeyEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        keyCode: 13, // Key code for the enter key
    });

    if (!textarea) throw new Error('TextArea not found');

    textarea.value = `${startPrompt}\n\nTranscript Part: ${chunkNumber}: ${text}\n\n${endPrompt}`;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    while (!isSendButtonEnabled()) {
        console.log("Can't Submit Trying Again...", isSendButtonEnabled());
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    textarea.dispatchEvent(enterKeyEvent);
}
