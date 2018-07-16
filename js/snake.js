class Snake {
  constructor(length, tiles) {
    this.length = length;
    this.direction = 'right';
    this.start = [];
    this.body = [];
    this.tiles = tiles;
    this.generateSnake();
  }
  generateSnake() {
    var startIndex = this.tiles.length / 2;
    for (var i = 0; i < this.length; i++) {
      this.tiles[startIndex + 4 - i].setSnake();
    }
  }
}
