export function getGptTextArea(): HTMLTextAreaElement | null {
    return document.querySelector("textarea[tabindex='0']");
}

export function getGptSendButton(): HTMLButtonElement | null | undefined {
    const textArea = getGptTextArea();
    return textArea?.parentElement?.querySelector('button');
}

export function getGptInputDiv(): HTMLDivElement | null {
    const textArea = getGptTextArea();
    return textArea?.parentElement?.parentElement as HTMLDivElement | null;
}
