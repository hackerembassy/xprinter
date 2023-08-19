const escpos = require('escpos');
const path = require('path');
escpos.USB = require('escpos-usb');

const device  = new escpos.USB();
const options = { encoding: "GB18030", width: 58}
const printer = new escpos.Printer(device, options);

device.open(()=>{
  // escpos.Image.load(path.join(__dirname, 'imggrey.jpg'), (image)=>{
  //   console.log(image)
  //   printer.align('ct')
  //      .image(image, "D24")
  //      .then(() => { 
  //         printer.cut()
  //                .close(); 
  //      });
  printer
    .font('a')
    .align('ct')
    .style('bu')
    .size(1, 1)
  .text('TEST}')
  .barcode('1234567', 'EAN8')
  .table(["One", "Two", "Three"])
  .tableCustom(
    [
      { text:"Left", align:"LEFT", width:0.33, style: 'B' },
      { text:"Center", align:"CENTER", width:0.33},
      { text:"Right", align:"RIGHT", width:0.33 }
    ],
    { encoding: 'cp857', size: [1, 1] } // Optional
  )
  .qrimage('https://github.com/song940/node-escpos', function(err){
    this.cut();
    this.close();
  });
});