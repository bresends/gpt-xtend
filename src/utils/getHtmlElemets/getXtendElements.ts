export function getXtendContainer(): HTMLDivElement | null {
    return document.querySelector('.gpt-x-container');
}

export function getXtendProgressBar(): HTMLDivElement | null {
    return document.querySelector('.progress-bar');
}

export function getXtendChunkSize(): HTMLInputElement | null {
    return document.querySelector('#chunk-input-number');
}

export function getXtendPrompt(): {
    start: HTMLInputElement | null;
    end: HTMLInputElement | null;
} {
    return {
        start: document.querySelector('#prompt-start'),
        end: document.querySelector('#prompt-end'),
    };
}
