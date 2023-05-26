export function getGptTextArea(): HTMLTextAreaElement | null {
    return document.querySelector("textarea[tabindex='0']");
}

export function getGptSendButton(): HTMLButtonElement | null {
    const textArea = getGptTextArea();
    return textArea?.nextElementSibling as HTMLButtonElement | null;
}

export function getGptInputAndRegenerateDiv(): HTMLDivElement | null {
    const textArea = getGptTextArea();
    return textArea?.parentElement?.parentNode
        ?.firstChild as HTMLDivElement | null;
}
