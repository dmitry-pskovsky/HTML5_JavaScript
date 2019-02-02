function Brick() {
    this.x = arguments[1];
    this.y = arguments[2];
    this.bricksWall = arguments[3];

    GameObject.apply(this, arguments);
}

Brick.prototype = Object.create(GameObject.prototype);

Brick.prototype.drawBody = function () {
    this.body = this.graphicContext.drawBrick(0, 0);

    this.body.setPositionX(this.graphicContext.getSquareSize() * this.x);
    this.body.setPositionY(this.graphicContext.getSquareSize() * this.y);

    this.graphicContext.updateScreen();

    GameObject.prototype.drawBody.call(this);
}

Brick.prototype.destroyHandler = function (event) {
    if (event.detail === this.body.object)
        this.destroy();
}

Brick.prototype.destroy = function () {
    this.body.object.removeChildren();
    //this.graphicContext.remove();
    //this.graphicContext.remove(this.body);
    this.graphicContext.updateScreen();
}