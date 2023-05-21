interface SubmitInput {
    text: string;
    chunkNumber: number;
    startPrompt: string;
    endPrompt: string;
}

export async function submitConversation({
    text,
    chunkNumber,
    startPrompt,
    endPrompt,
}: SubmitInput) {
    const textarea = document.querySelector(
        "textarea[tabindex='0']"
    ) as HTMLTextAreaElement | null;

    const enterKeyEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        keyCode: 13,
    });

    if (!textarea) return;

    textarea.value = `${startPrompt}\n\nTranscript Part: ${chunkNumber}: ${text}\n\n${endPrompt}`;
    textarea.dispatchEvent(enterKeyEvent);
}
