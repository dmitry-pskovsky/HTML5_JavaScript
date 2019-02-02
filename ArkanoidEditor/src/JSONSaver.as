package {
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;

	public class JSONSaver {
		var mapObject:Array = [];

		public function JSONSaver() {

		}

		public function addPoint(x:int, y:int):void {
			mapObject.push({x:x, y:y});
		}

		public function save():void {
			var jsonData = JSON.stringify(mapObject);
			
			var file:File = File.documentsDirectory;
			file = file.resolvePath("manifest.json");

			var fileStream:FileStream = new FileStream();
			fileStream.open(file, FileMode.WRITE);
			fileStream.writeUTFBytes(jsonData);
		}
	}
}
