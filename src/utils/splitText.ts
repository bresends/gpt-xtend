export function splitText(
    text: string | undefined,
    chunkSize: number
): string[] {
    if (!text) throw new Error('Text is null');

    const chunks: string[] = [];

    while (text.length > 0) {
        chunks.push(text.substring(0, chunkSize));
        text = text.substring(chunkSize, text.length);
    }
    return chunks;
}
