export function chatGPTElements() {
    const textArea = document.querySelector(
        "textarea[tabindex='0']"
    ) as HTMLTextAreaElement | null;

    const sendButton = textArea?.parentElement?.querySelector(
        'button'
    ) as HTMLButtonElement | null;

    const textAreaAndButtonsTopContainer = textArea?.parentElement
        ?.parentElement as HTMLDivElement | null;

    const processingInputDots = document.querySelector(
        '.text-2xl > span:not(.invisible)'
    );

    const regenerateAndStopBtnTopDiv =
        textArea?.parentElement?.parentElement?.querySelector(
            'div[class=""]'
        ) as HTMLDivElement | null;

    return {
        textArea,
        sendButton,
        textAreaAndButtonsTopContainer,
        processingInputDots,
        regenerateAndStopBtnTopDiv,
    };
}

export function gptExtendElements() {
    const gptXtendContainer = document.querySelector(
        '.gpt-x-container'
    ) as HTMLDivElement | null;

    const gptXtendProgressBar = document.querySelector(
        '.progress-bar'
    ) as HTMLDivElement | null;

    const gptXtendChunkSize = document.querySelector(
        '#chunk-input-number'
    ) as HTMLInputElement | null;

    const gptXtendToggleViewButton = document.querySelector(
        '#gptXtend-toggle-view-btn'
    ) as HTMLButtonElement | null;

    const gptXtendPromptStart = document.querySelector(
        '#prompt-start'
    ) as HTMLInputElement | null;

    const gptXtendPromptEnd = document.querySelector(
        '#prompt-end'
    ) as HTMLInputElement | null;

    return {
        gptXtendContainer,
        gptXtendProgressBar,
        gptXtendChunkSize,
        gptXtendToggleViewButton,
        gptXtendPromptStart,
        gptXtendPromptEnd,
    };
}
