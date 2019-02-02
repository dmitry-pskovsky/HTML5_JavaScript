function GraphicContext2D(paraqmeters) {
    this.paraqmeters = paraqmeters;
    this.aliases();
    this.createStage();
}

GraphicContext2D.prototype.aliases = function () {
    this.Container = PIXI.Container;
    this.autoDetectRenderer = PIXI.autoDetectRenderer;
    this.loader = PIXI.loader;
    this.resources = PIXI.loader.resources;
    this.Sprite = PIXI.Sprite;
    this.Graphics = PIXI.Graphics;
}

GraphicContext2D.prototype.createStage = function () {
    this.renderer = this.autoDetectRenderer(this.paraqmeters.stageWidth * this.getSquareSize(), this.paraqmeters.stageHeight * this.getSquareSize());
    this.renderer.view.style.border = "1px dashed black";
    this.renderer.backgroundColor = 0xf0f0f0;

    //Add the canvas to the HTML document
    document.body.appendChild(this.renderer.view);

    //Create a container object called the `stage`
    this.stage = new this.Container();

    //Tell the `renderer` to `render` the `stage`
    this.renderer.render(this.stage);
}

GraphicContext2D.prototype.drawRect = function (x, y) {
    var graphics = new this.Graphics();

    graphics.beginFill(0x00000);
    graphics.drawRect(x * this.paraqmeters.squareWidth + 1, y * this.paraqmeters.squareHeight + 1,
        this.paraqmeters.squareWidth - 2, this.paraqmeters.squareHeight - 2);
    return graphics;
}

GraphicContext2D.prototype.drawRect2 = function (x, y, width, height, color) {
    var graphics = new this.Graphics();

    graphics.beginFill(color);
    graphics.drawRect(x, y, width, height);

    this.stage.addChild(graphics);

    return graphics;
}

//------------------------------------------------------------------------------------------
// Interface method
GraphicContext2D.prototype.drawBrick = function (x, y) {
    var container = new PIXI.DisplayObjectContainer();

    var graphics = this.drawRect(0, 0);
    container.addChild(graphics);

    this.stage.addChild(container);

    var graphicObject = new GraphicObject2D(container);
    graphicObject.setPositionX(x * this.paraqmeters.squareWidth + 7);
    graphicObject.setPositionY(y * this.paraqmeters.squareHeight);

    return graphicObject;
}

GraphicContext2D.prototype.drawBall = function () {
    var container = new PIXI.DisplayObjectContainer();

    var graphics = this.drawRect(0, 0);
    container.addChild(graphics);

    this.stage.addChild(container);

    return new GraphicObject2D(container);
}

// Interface method
GraphicContext2D.prototype.drawMothership = function (widthSquares, heightSquares) {
    var container = new PIXI.DisplayObjectContainer();

    var graphics;
    for (var i = 0; i < widthSquares; i++) {
        graphics = this.drawRect(i, 0);
        container.addChild(graphics);
    }

    this.stage.addChild(container);

    return new GraphicObject2D(container);
}

// Interface method
GraphicContext2D.prototype.remove = function (graphicObject) {
    graphicObject.object.parent.removeChild(graphicObject.object);
    graphicObject.object = null;
}

// Interface method
GraphicContext2D.prototype.getSquareSize = function () {
    return this.paraqmeters.squareWidth;
}

// Interface method
GraphicContext2D.prototype.updateScreen = function () {
    this.renderer.render(this.stage);
}

// Interface method
GraphicContext2D.prototype.getRestictObject = function () {
    return new GraphicObject2D(new RestictObject2D(0, 0, GameConstants.prototype.STAGE_WIDTH, GameConstants.prototype.STAGE_HEIGHT, this));
}

function RestictObject2D(x, y, width, height, graphicContext) {
    this.x = graphicContext.getSquareSize() * x ;
    this.y = graphicContext.getSquareSize() * y;
    this.width = graphicContext.getSquareSize() * width;
    this.height = graphicContext.getSquareSize() * height;
}

