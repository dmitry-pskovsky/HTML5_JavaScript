function Ball(graphicContext) {
    GameObject.apply(this, arguments);

    this.velocity = {x:-5, y:-5};

    EventsStream.prototype.addEventListener(EventsStream.prototype.ENTER_FRAME, this.enterFrameHandler.bind(this));
    EventsStream.prototype.addEventListener(EventsStream.prototype.HIT_BALL, this.hitBallHandler.bind(this));
}

Ball.prototype = Object.create(GameObject.prototype);

Ball.prototype.enterFrameHandler = function (event) {
    this.update();
}

Ball.prototype.hitBallHandler = function (event) {
    switch (event.detail.type)
    {
        case "bottom":
        {
            this.reflectHorizontal();
            break;
        }
        case "top":
        {
            this.reflectHorizontal();
            break;
        }
        case "left":
        {
            this.reflectVertical();
            break;
        }
    }
}

Ball.prototype.drawBody = function () {
    this.body = this.graphicContext.drawBall();
    this.body.setPositionX(this.graphicContext.getSquareSize() * 5);
    this.body.setPositionY(this.graphicContext.getSquareSize() * (GameConstants.prototype.STAGE_HEIGHT - 2));

    GameObject.prototype.drawBody.call(this);
}

Ball.prototype.updatePosition = function () {
    console.log("update");
    this.body.setPositionX(this.body.getPositionX() + this.velocity.x);
    this.body.setPositionY(this.body.getPositionY() + this.velocity.y);
}

Ball.prototype.update = function () {
    this.updatePosition();
    this.graphicContext.updateScreen();
    this.contain(this.body, this.graphicContext.getRestictObject());
}

Ball.prototype.contain = function (sprite, container) {
    var collision = undefined;
    
    //Left
    if (sprite.getPositionX() < container.getPositionX()) {
        this.reflectVertical();
    }

    //Right
    if (sprite.getPositionX() + sprite.getWidth() > container.getWidth() + container.getPositionX()) {
        this.reflectVertical();
    }

    //Bottom
    if (sprite.getPositionY() + sprite.getHeight() > container.getHeight() + container.getPositionY()) {
        this.reflectHorizontal();
    }

    //Top
    if (sprite.getPositionY() <= container.getPositionY()) {
        this.reflectHorizontal();
    }

    return collision;
}

Ball.prototype.reflectVertical = function () {
    this.velocity.x = -this.velocity.x;
}

Ball.prototype.reflectHorizontal = function () {
    this.velocity.y = -this.velocity.y;
}