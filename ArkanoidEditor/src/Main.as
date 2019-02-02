package {

    import flash.display.SimpleButton;
    import flash.display.Sprite;
    import flash.events.MouseEvent;
    import flash.filesystem.File;

    [SWF(width = "850", height = "550")]
public class Main extends Sprite {
        var _jsonSaver:JSONSaver;

        public function Main() {
            _jsonSaver = new JSONSaver();

            var sprite = new Sprite();
            sprite.y = 510;
            sprite.graphics.beginFill(0x00);
            sprite.graphics.drawRect(0, 0, 100, 20);

            var b = new SimpleButton(sprite, sprite, sprite, sprite);
            addChild(b);
            b.addEventListener(MouseEvent.CLICK, onClickHandler);
            
            var field:Field = new Field(_jsonSaver);
            addChild(field);
        }

        private function onClickHandler(event:MouseEvent):void {
            _jsonSaver.save();
        }
    }
}
