function GraphicContext3D(paraqmeters) {
    this.paraqmeters = paraqmeters;
    this.init();
    this.animate();
}

GraphicContext3D.prototype.SQUARE_SIZE = 20;
GraphicContext3D.prototype.DISPLAY_WIDTH = 800;
GraphicContext3D.prototype.DISPLAY_HEIGHT = 500;

var container, stats;
var camera, scene, renderer;

GraphicContext3D.prototype.init = function() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera(45, GraphicContext3D.prototype.DISPLAY_WIDTH/GraphicContext3D.prototype.DISPLAY_HEIGHT, 0.2, 5000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;

    scene = new THREE.Scene();

    // Grid

    var step = this.SQUARE_SIZE;
    var size = GameConstants.prototype.STAGE_WIDTH * this.SQUARE_SIZE;
    var sizeH = GameConstants.prototype.STAGE_HEIGHT * this.SQUARE_SIZE;

    var geometry = new THREE.Geometry();

    for ( var i = 0; i <= sizeH; i += step ) {
        geometry.vertices.push( new THREE.Vector3( 0, 0, i ) );
        geometry.vertices.push( new THREE.Vector3( size, 0, i ) );
    }

    for ( var i = 0; i <= size; i += step ) {
        geometry.vertices.push( new THREE.Vector3( i, 0, 0 ) );
        geometry.vertices.push( new THREE.Vector3( i, 0, sizeH ) );
    }

    var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

    var line = new THREE.LineSegments( geometry, material );
    scene.add( line );

    // Lights

    var ambientLight = new THREE.AmbientLight(0x10);
    scene.add( ambientLight );

    var directionalLight = new THREE.DirectionalLight(0xffff22);
    directionalLight.position.x =  - 0.1;
    directionalLight.position.y =  - 0.1;
    directionalLight.position.z =  - 0.1;
    directionalLight.position.normalize();
    scene.add( directionalLight );

    var directionalLight = new THREE.DirectionalLight(0xff44ff);
    directionalLight.position.x = 0.2;
    directionalLight.position.y =  0.2;
    directionalLight.position.z =  0.2;
    directionalLight.position.normalize();
    scene.add( directionalLight );

    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor( 0xf0f0f0 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( GraphicContext3D.prototype.DISPLAY_WIDTH, GraphicContext3D.prototype.DISPLAY_HEIGHT );
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', this.onWindowResize, false );

}

GraphicContext3D.prototype.onWindowResize = function() {
    camera.left = window.innerWidth / - 2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / - 2;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

//
GraphicContext3D.prototype.animate = function() {
    requestAnimationFrame( GraphicContext3D.prototype.animate );

    GraphicContext3D.prototype.render();
}

GraphicContext3D.prototype.render = function() {
    camera.position.x = this.SQUARE_SIZE * GameConstants.prototype.STAGE_WIDTH / 2;
    camera.position.y = 640;
    camera.position.z = this.SQUARE_SIZE * GameConstants.prototype.STAGE_HEIGHT / 2;
    camera.lookAt( {x:camera.position.x, y:0, z:camera.position.z});

    renderer.render( scene, camera );
}


GraphicContext3D.prototype.drawCube = function (x, y) {

    var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../assets/index.jpg') } );

    var geometry = new THREE.BoxGeometry( this.SQUARE_SIZE, this.SQUARE_SIZE, this.SQUARE_SIZE );
   // var material = new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: 0.5 } );

    var cube = new THREE.Mesh( geometry, material );

    cube.position.x = this.SQUARE_SIZE / 2 + x * this.SQUARE_SIZE;
    cube.position.y = (this.SQUARE_SIZE) / 2;
    cube.position.z = this.SQUARE_SIZE / 2 + y * this.SQUARE_SIZE;

    scene.add( cube );

    return cube;
}

GraphicContext3D.prototype.drawRect = function (x, y, width, height) {

    var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../assets/index.jpg') } );

    var geometry = new THREE.BoxGeometry( width, height, height);

    var cube = new THREE.Mesh( geometry, material );

    cube.position.x = width / 2 + x * width;
    cube.position.y = (height) / 2;
    cube.position.z = height / 2 + y * height;

    return cube;
}

//------------------------------------------------------------------------------------------
// Interface method
GraphicContext3D.prototype.drawBrick = function (x, y) {
    var cube = this.drawCube(x, y);

    return new GraphicObject3D(cube);

}

// Interface method
GraphicContext3D.prototype.drawBall = function () {
    var cube = this.drawCube(0, 0);

    return new GraphicObject3D(cube);
}

// Interface method
GraphicContext3D.prototype.drawMothership = function (widthSquares, heightSquares) {
    var rect = GraphicContext3D.prototype.drawRect(0, 0, widthSquares * this.SQUARE_SIZE, this.SQUARE_SIZE);

    scene.add( rect );

    return new GraphicObject3D(rect);
}

// Interface method
GraphicContext3D.prototype.remove = function (graphicObject) {
    scene.remove(graphicObject.object);
}

// Interface method
GraphicContext3D.prototype.getSquareSize = function () {
    return this.SQUARE_SIZE;
}

// Interface method
GraphicContext3D.prototype.updateScreen = function () {

}

GraphicContext3D.prototype.getRestictObject = function () {
    return new RestictObject3D(0, 0, GameConstants.prototype.STAGE_WIDTH, GameConstants.prototype.STAGE_HEIGHT, this);
}

function RestictObject3D(x, y, width, height, graphicContext) {
    this.x = graphicContext.getSquareSize() * x ;
    this.y = graphicContext.getSquareSize() * y;
    this.width = graphicContext.getSquareSize() * width;
    this.height = graphicContext.getSquareSize() * height;

    // Interface method
    this.getPositionX = function () {
        return this.x;
    }

    // Interface method
    this.getPositionY = function () {
        return this.y;
    }

    // Interface method
    this.getWidth = function () {
        return this.width;
    }

    // Interface method
    this.getHeight = function () {
        return this.height;
    }
}
