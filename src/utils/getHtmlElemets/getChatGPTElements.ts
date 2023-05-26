export function getGptTextArea(): HTMLTextAreaElement | null {
    return document.querySelector("textarea[tabindex='0']");
}

export function getGptSendButton(): HTMLButtonElement | null {
    return getGptTextArea()?.nextElementSibling as HTMLButtonElement | null;
}

export function getGptInputAndRegenerateDiv(): HTMLDivElement | null {
    return getGptTextArea()?.parentElement?.parentNode
        ?.firstChild as HTMLDivElement | null;
}
