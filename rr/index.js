const { CHARACTERS_TO_BINARY_MAP } = require("./constants");
const { drawBarcode } = require("./draw");

const ACCEPTABLE_SYMBOLS_REGEX = /^[a-zA-Z0-9-,.$/+%:]+$/;

const isAcceptable = (input) => {
  return ACCEPTABLE_SYMBOLS_REGEX.test(input);
};

const input = process.argv[2]?.toLowerCase();

if (!input || !isAcceptable(input)) {
  console.error("Invalid input");
  process.exit(1);
}

const inputToBinaryBarcode = (input) => {
  const startStopBin = '100101101101';
  const separator = '00';
  const binaryBarcode = [...input]
    .map((symbol) => CHARACTERS_TO_BINARY_MAP[symbol])
    .join(separator);

  return `${startStopBin}${separator}${binaryBarcode}${separator}${startStopBin}`;
};

drawBarcode(inputToBinaryBarcode(input), input, "barcode.png");
