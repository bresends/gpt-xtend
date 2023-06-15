function extensionExecutionControl() {
    let isRunning = false;

    function start() {
        isRunning = true;
    }

    function stop() {
        isRunning = false;
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
