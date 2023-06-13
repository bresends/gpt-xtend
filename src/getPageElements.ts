export function getChatGPTElements() {
    const chatTextArea = document.querySelector(
        "textarea[tabindex='0']"
    ) as HTMLTextAreaElement | null;

    const chatSendButton = chatTextArea?.parentElement?.querySelector(
        'button'
    ) as HTMLButtonElement | null;

    const chatTextAreaAndButtonsTopContainer = chatTextArea?.parentElement
        ?.parentElement as HTMLDivElement | null;

    const processingInputDots = document.querySelector(
        '.text-2xl > span:not(.invisible)'
    );

    const regenerateAndStopBtnTopDiv =
        chatTextArea?.parentElement?.parentElement?.querySelector(
            'div[class=""]'
        ) as HTMLDivElement | null;

    return {
        chatTextArea,
        chatSendButton,
        chatTextAreaAndButtonsTopContainer,
        processingInputDots,
        regenerateAndStopBtnTopDiv,
    };
}

export function getGPTXtendElements() {
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
