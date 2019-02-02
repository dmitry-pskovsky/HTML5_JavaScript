function CollisionController() {
    this.bricks = [];
    this.mothership;
    this.ball;
    this.lastCollision = false;

    EventsStream.prototype.addEventListener(EventsStream.prototype.OBJECT_CREATED, this.objectCreatedHandler.bind(this));
    EventsStream.prototype.addEventListener(EventsStream.prototype.ENTER_FRAME, this.enterFrameHandler.bind(this));
}

CollisionController.prototype.objectCreatedHandler = function (event) {
    if (event.detail instanceof Mothership)
        this.mothership = event.detail.body;
    else if (event.detail instanceof Ball)
        this.ball = event.detail.body;
    else if (event.detail instanceof Brick)
        this.bricks.push(event.detail);
}

CollisionController.prototype.enterFrameHandler = function (event) {
    this.checkAllBlocksCollision();
    this.checkMothershipCollision();
}

CollisionController.prototype.checkMothershipCollision = function () {
    if (this.lastCollision) {
        this.lastCollision = false;
        return;
    }

    var collision = this.getCollisionSide(this.ball, this.mothership);

    switch (collision)
    {
        case "vertical":
        {
            this.lastCollision = true;
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.HIT_BALL, {detail: {type:"left"}}));
            break;
        }
        case "horizontal":
        {
            this.lastCollision = true;
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.HIT_BALL, {detail: {type:"bottom"}}));
            break;
        }
    }
}

CollisionController.prototype.getRectangle = function (graphicObject) {
    var rect = {};
    rect.left = graphicObject.getPositionX();
    rect.right = rect.left + graphicObject.getWidth();
    rect.top = graphicObject.getPositionY();
    rect.bottom = rect.top + graphicObject.getHeight();
    
    return rect;
}

CollisionController.prototype.getRectCollision = function (rect1, rect2) {
    if (rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
        if (rect1.right > rect2.left && rect1.left < rect2.right) {
            return true;
        }
    }
    return false;
}

CollisionController.prototype.getCollisionSide = function (object1, object2) {
    var rect1 = this.getRectangle(object1);
    var rect2 = this.getRectangle(object2);
    var collisionSide = "";

    if (this.getRectCollision({left:rect1.left - 2, right:rect1.right + 4, top:rect1.top, bottom:rect1.bottom}, rect2)) {
        collisionSide = "vertical";
    }

    if (this.getRectCollision({left:rect1.left, right:rect1.right, top:rect1.top - 2, bottom:rect1.bottom + 4}, rect2)) {
        collisionSide = "horizontal";
    }
    console.log(collisionSide);
    return collisionSide;
}

CollisionController.prototype.checkAllBlocksCollision = function () {
    var length = this.bricks.length;
    for (var i = 0; i < length; i++) {
        this.checkBlockCollision(this.ball, this.bricks[i].body, this.bricks[i]);
    }
}

CollisionController.prototype.checkBlockCollision = function (object1, object2, brick) {
    if (this.lastCollision) {
        this.lastCollision = false;
        return;
    }

    var collision = this.getCollisionSide(object1, object2);

    switch (collision)
    {
        case "vertical":
        {
            this.lastCollision = true;
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.HIT_BALL, {detail: {type:"left"}}));
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.DESTROY_BRICK, {detail: brick}));
            break;
        }
        case "horizontal":
        {
            this.lastCollision = true;
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.HIT_BALL, {detail: {type:"bottom"}}));
            EventsStream.prototype.dispatchEvent(new CustomEvent(EventsStream.prototype.DESTROY_BRICK, {detail: brick}));
            break;
        }
    }
}