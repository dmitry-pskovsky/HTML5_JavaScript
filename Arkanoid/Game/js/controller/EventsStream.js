function EventsStream() {
    var eventTarget = document.createDocumentFragment();

    function delegate(method) {
        this[method] = eventTarget[method].bind(eventTarget)
    }

    [
        "addEventListener",
        "dispatchEvent",
        "removeEventListener"
    ].forEach(delegate, this)
}

EventsStream.prototype = Object.create(EventTarget.prototype);

EventsStream.prototype.MOUSE_MOVE = "mousemove";
EventsStream.prototype.ENTER_FRAME = "enterfraame";
EventsStream.prototype.OBJECT_CREATED = "objectcreated";
EventsStream.prototype.HIT_BALL = "hitBall";
EventsStream.prototype.DESTROY_BRICK = "destroybrick";

EventsStream.call(EventsStream.prototype);

