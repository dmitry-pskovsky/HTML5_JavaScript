/**
 * Created by Dmitry on 9/19/2016.
 */
package {
	import flash.display.Shape;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Point;

	public class Field extends Shape {

		public static const WIDTH:int = 800;
		public static const HEIGHT:int = 500;

		private var _jsonSaver:JSONSaver;

		public function Field(jsonSaver:JSONSaver) {
			_jsonSaver = jsonSaver;

			initialize();

			addEventListener(Event.ADDED_TO_STAGE, addedToStageHandler);
		}

		private function addedToStageHandler(event:Event):void {
			stage.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, mouseMoveHandler);
		}

		private function mouseMoveHandler(event:MouseEvent):void {
			if (event.buttonDown) {
				if (event.stageY < 500)
					drawRect(event.stageX / 20, event.stageY / 20);
			}
		}

		private function mouseDownHandler(event:MouseEvent):void {
			if (event.stageY < 500)
				drawRect(event.stageX / 20, event.stageY / 20);
		}

		private function initialize():void {
			drawGrid();
		}

		private function drawLine(start:Point, end:Point) {
			graphics.beginFill(0xe4e4e4);
			graphics.lineStyle(1, 0xe4e4e4);
			graphics.moveTo(start.x, start.y);
			graphics.lineTo(end.x, end.y);
			graphics.endFill();
		}

		private function drawRect(x:int, y:int) {
			graphics.beginFill(0xe4e4e4);
			graphics.drawRect(x * 20, y * 20, 20, 20);

			_jsonSaver.addPoint(x, y);
		}

		private function drawGrid():void {
			for (var i:int = 0; i < 40; i++) {
				drawLine(new Point(i * 20, 0), new Point(i * 20, HEIGHT));
				for (var j:int = 0; j < 25; j++) {
					drawLine(new Point(0, j * 20), new Point(WIDTH, j * 20));
				}
			}
		}
	}
}
