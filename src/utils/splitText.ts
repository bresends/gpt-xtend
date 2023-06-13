export function splitText(
    text: string | undefined,
    chunkSize: number
): string[] {
    if (!text) throw new Error('Text is null or undefined');
    if (chunkSize <= 0)
        throw new Error('Chunk size must be a positive integer');

    const SPACE_CHARACTER = ' ';
    const NO_SPACE_FOUND = -1;

    const chunks: string[] = [];
    let remainingText = text;

    while (remainingText.length > chunkSize) {
        let currentChunk = remainingText.substring(0, chunkSize);
        let lastSpacePosition = currentChunk.lastIndexOf(SPACE_CHARACTER);

        if (lastSpacePosition !== NO_SPACE_FOUND) {
            currentChunk = currentChunk.substring(0, lastSpacePosition);
        }

        chunks.push(currentChunk);
        remainingText = remainingText.substring(currentChunk.length).trim();
    }

    if (remainingText.length > 0) {
        chunks.push(remainingText);
    }

    return chunks;
}
