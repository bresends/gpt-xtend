interface SubmitInput {
    text: string;
    chunkNumber: number;
    startPrompt: string;
    endPrompt: string;
}

export function submitConversation({
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

    if (!textarea || !textarea.value) return;

    textarea.value = `${startPrompt}\n\nTranscript Part: ${chunkNumber}: ${text}\n\n${endPrompt}`;
    textarea.dispatchEvent(enterKeyEvent);
}
