const { createCanvas } = require("canvas");
const fs = require("fs");

const BAR_WIDTH = 2;
const PADDING_HORIZONTAL = 80;
const PADDING_VERTICAL = 50;
const CANVAS_HEIGHT = 200;
const BARCODE_HEIGHT = CANVAS_HEIGHT - PADDING_VERTICAL * 2;

const drawBarcode = (barcodeBin, barcodeInput, fileName) => {
  const canvas = createCanvas(
    barcodeBin.length * BAR_WIDTH + PADDING_HORIZONTAL * 2,
    CANVAS_HEIGHT
  );

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < barcodeBin.length; i++) {
    const x = i * BAR_WIDTH + PADDING_HORIZONTAL;
    const y = PADDING_VERTICAL;

    if (barcodeBin[i] === "1") {
      ctx.fillStyle = "black";
    } else {
      ctx.fillStyle = "white";
    }

    ctx.fillRect(x, y, BAR_WIDTH, BARCODE_HEIGHT);
  }

  // todo: text

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(fileName, buffer);
};

module.exports = {
  drawBarcode,
};
