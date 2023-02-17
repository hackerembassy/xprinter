const usb = require('usb');
const Jimp = require('jimp');
const TscBuffer = require('./tsc/TscBuffer');
const TscPrinter = require('./tsc/TscPrinter');

const device = usb.findByIds(/*vid*/1155, /*pid*/22339);
const xPrinterDev = new TscPrinter(device);

const printImage = async (imgPath) => {
  const img = await Jimp.read(imgPath);
  const buffer = await TscBuffer.bitmap(0, 0, img.bitmap)
  await xPrinterDev.Write(Buffer.concat([
    TscBuffer.cls(),
    TscBuffer.shift(200),
    buffer,
    TscBuffer.print(1)
  ]));
}

const printText = async (text) => {
  let data = Buffer.concat([
    TscBuffer.sizeBydot(60, 40),
    TscBuffer.cls(),
    TscBuffer.text(0, 0, "1", 0, 3, 3, text),
    TscBuffer.print(1),
  ])
  await xPrinterDev.Write(data)
}

const printBarcode = () => {
  [
    TscBuffer.sizeBymm(60,30),
    TscBuffer.gapBymm(0,0),
    TscBuffer.cls(),
    TscBuffer.barCode(60,50,"128",100,1,0,2,2,"Hello there"),
    TscBuffer.print(1)
  ].forEach(data => xPrinterDev.Write(data));
}

//printText("Test")
//printBarcode()
//printImage("./assets/gachibw.jpg")