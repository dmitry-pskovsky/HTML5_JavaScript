function GraphicObject3D(object) {
    this.object = object;
}

// Interface method
GraphicObject3D.prototype.setPositionX = function (value) {
    if (value == "undefined")
        return;

    this.object.position.set(value + this.object.geometry.parameters.width / 2, 10, this.object.position.z);
}

// Interface method
GraphicObject3D.prototype.setPositionY = function (value) {
    if (value == "undefined")
        return;

    this.object.position.set(this.object.position.x, 10, value + this.object.geometry.parameters.height / 2);
}

// Interface method
GraphicObject3D.prototype.getPositionX = function () {
    return this.object.position.x - this.object.geometry.parameters.width / 2;
}

// Interface method
GraphicObject3D.prototype.getPositionY = function () {
    return this.object.position.z - this.object.geometry.parameters.height / 2;
}

// Interface method
GraphicObject3D.prototype.getWidth = function () {
    return this.object.geometry.parameters.width;
}

// Interface method
GraphicObject3D.prototype.getHeight = function () {
    return this.object.geometry.parameters.height;
}
