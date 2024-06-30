const PI2 = Math.PI * 2;

const COLORS = [
  "#FF0000", // Red
  "#FF4000", // Red-Orange
  "#FF8000", // Orange
  "#FFBF00", // Yellow-Orange
  "#FFFF00", // Yellow
  "#BFFF00", // Yellow-Green
  "#80FF00", // Green
  "#40FF00", // Green
  "#00FF00", // Green
  "#00FF40", // Green-Cyan
  "#00FF80", // Cyan
  "#00FFBF", // Cyan
  "#00FFFF", // Cyan
  "#0040FF", // Blue
  "#8000FF", // Violet
  "#BF00FF", // Violet
  "#FF00FF"  // Magenta
];

export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save();
    // ctx.fillStyle = '#000';
    // ctx.beginPath();
  
    const angle = PI2 / this.sides;
    const angle2 = PI2 / 4;
  
    ctx.translate(this.x, this.y);

    this.rotate -= moveX * 0.008;
    ctx.rotate(this.rotate);
  
    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);
  
      // (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

      // ctx.beginPath();
      // ctx.arc(x, y, 30, 0, PI2, false);
      // ctx.fill();

      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.translate(x, y);
      ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++) {
        const x2 = 160 * Math.cos(angle2 * j);
        const y2 = 160 * Math.sin(angle2 * j);
        (j == 0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    // ctx.fill();
    // ctx.closePath();
    ctx.restore();
  }
}

