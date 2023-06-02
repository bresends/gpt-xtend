function extensionExecutionControl() {
    let isRunning = false;

    function start() {
        isRunning = true;
        console.log('Extension is running', isRunning);
    }

    function stop() {
        isRunning = false;
        console.log('Extension is stopped');
    }

    function getIsRunning() {
        return isRunning;
    }

    return {
        start,
        stop,
        getIsRunning,
    };
}

export const extensionExecutionController = extensionExecutionControl();