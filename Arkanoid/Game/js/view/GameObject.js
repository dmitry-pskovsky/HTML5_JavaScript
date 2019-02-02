function GameObject(graphicContext) {
    this.graphicContext = graphicContext;
    this.initialize();
}

GameObject.prototype.initialize = function () {
    this.drawBody();
}

GameObject.prototype.drawBody = function () {
    EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.OBJECT_CREATED, {detail: this}));
}