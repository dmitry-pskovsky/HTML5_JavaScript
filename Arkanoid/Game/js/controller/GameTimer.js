function GameTimer() {
    setInterval(timerHandler, 20);

    function timerHandler() {
        EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.ENTER_FRAME));
    }
}
