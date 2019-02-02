function Mothership(graphicContext) {
    this.mouseX = 0;
    this.mouseY = 0;

    GameObject.apply(this, arguments);
    EventsStream.prototype.addEventListener(EventsStream.prototype.MOUSE_MOVE, this.mouseMoveHandler.bind(this));
    EventsStream.prototype.addEventListener(EventsStream.prototype.ENTER_FRAME, this.enterFrameHandler.bind(this));
}

Mothership.prototype = Object.create(GameObject.prototype);
Mothership.prototype.WIDTH = 4;

Mothership.prototype.mouseMoveHandler = function (event) {
    this.mouseX = event.detail.positionX;
    this.mouseY = event.detail.positionY;
}

Mothership.prototype.enterFrameHandler = function (event) {
    this.setPosition({x:this.mouseX, y:this.mouseY});

    this.contain(this.body, this.graphicContext.getRestictObject());
    this.graphicContext.updateScreen();
}

Mothership.prototype.drawBody = function () {
    this.body = this.graphicContext.drawMothership(Mothership.prototype.WIDTH, 1);
    this.body.setPositionX(this.graphicContext.getSquareSize() * 5);
    this.body.setPositionY(this.graphicContext.getSquareSize() * (GameConstants.prototype.STAGE_HEIGHT - 1));
    
    GameObject.prototype.drawBody.call(this);
}

Mothership.prototype.setPosition = function (point) {
    this.body.setPositionX(point.x/* - Mothership.prototype.WIDTH / 2 * this.graphicContext.getSquareSize()*/);
    this.graphicContext.updateScreen();
}

Mothership.prototype.contain = function (sprite, container) {
    var collision = undefined;

    //Left
    if (sprite.getPositionX() < container.getPositionX()) {
        sprite.setPositionX(container.getPositionX());
        collision = "left";
    }

    //Right
    if (sprite.getPositionX() + sprite.getWidth() > container.getWidth() + container.getPositionX()) {
        sprite.setPositionX(container.getWidth()  + container.getPositionX() - sprite.getWidth());
        collision = "right";
    }

    //Return the `collision` value
    return collision;
}


