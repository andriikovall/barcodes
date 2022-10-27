const { createCanvas } = require("canvas");
const fs = require("fs");

const BAR_WIDTH = 1;
const PADDING_HORIZONTAL = 20;
const PADDING_VERTICAL = 20;
const FONT_SIZE = 14;
const FONT_VERTICAL_PADDING = 12;
const CANVAS_HEIGHT = 200 + FONT_SIZE + FONT_VERTICAL_PADDING;
const BARCODE_HEIGHT =
  CANVAS_HEIGHT - (FONT_SIZE + FONT_VERTICAL_PADDING) - PADDING_VERTICAL;

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

  const inputWithSpaces = addSpaces(barcodeInput).toUpperCase();

  ctx.font = `${FONT_SIZE}px Arial`;
  const { width: textWidth } = ctx.measureText(inputWithSpaces);
  const textX = canvas.width / 2 - textWidth / 2;
  const textY =
    BARCODE_HEIGHT + PADDING_VERTICAL + FONT_VERTICAL_PADDING + FONT_SIZE / 2;
  ctx.fillText(inputWithSpaces, textX, textY);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(fileName, buffer);
};

const addSpaces = (str) => [...str].join(" ");

module.exports = {
  drawBarcode,
};
