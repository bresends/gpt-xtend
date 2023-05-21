export function createProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    progressContainer.appendChild(progressBar);

    return progressContainer;
}
