function MouseEventManager() {
    window.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
}

MouseEventManager.prototype.mouseMoveHandler = function (event) {
    EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.MOUSE_MOVE, {detail: {positionX:event.clientX, positionY:event.clientY}}));
}
