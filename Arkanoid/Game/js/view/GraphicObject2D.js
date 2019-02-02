function GraphicObject2D(object) {
    this.object = object;
}

// Interface method
GraphicObject2D.prototype.setPositionX = function (value) {
    this.object.x = value - 7;
}

// Interface method
GraphicObject2D.prototype.setPositionY = function (value) {
    this.object.y = value;
}

// Interface method
GraphicObject2D.prototype.getPositionX = function () {
    return this.object.x + 7;
}

// Interface method
GraphicObject2D.prototype.getPositionY = function () {
    return this.object.y;
}

// Interface method
GraphicObject2D.prototype.getWidth = function () {
    return this.object.width;
}

// Interface method
GraphicObject2D.prototype.getHeight = function () {
    return this.object.height;
}