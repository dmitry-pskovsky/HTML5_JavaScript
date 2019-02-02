function BricksWall(graphicContext, contentObject) {
    this.contentObject = contentObject;
    this.bricks = [];
    GameObject.apply(this, arguments);

    EventsStream.prototype.addEventListener(EventsStream.prototype.DESTROY_BRICK, this.removeBrick.bind(this));
}

BricksWall.prototype = Object.create(GameObject.prototype);

BricksWall.prototype.initialize = function () {
    this.drawBody();
}

BricksWall.prototype.drawBody = function () {
    for (var i = 0; i < this.contentObject.length; i++) {
        this.bricks.push(new Brick(this.graphicContext, this.contentObject[i].x, this.contentObject[i].y, this));//this.graphicContext.drawBrick(this.contentObject[i].x, this.contentObject[i].y);
    }

    this.graphicContext.updateScreen();
}

BricksWall.prototype.removeBrick = function (event) {
    var index = this.bricks.indexOf(event.detail);
    this.bricks.splice(index, 1);
    event.detail.body.object.visible = false;
    event.detail.destroy();
}