# Thermal printer XPrinter XP-236B  
## About
- Adjustable print speed: Min 50.8mm/s, Max 101mm/s  
- Adjustable paper width: Min 20mm, Max 60mm  
- Maximum paper roll diameter: 80mm  
- Support QR CODE Printing  

Full Product Specification: https://www.xprintertech.com/xp-236b

## How to use
The simplest way to print with it is by using NiceLabel 2017. You can find it on the internet or in our internal space storage (ask residents for ftp credentials).
Then download and install a driver from here
https://www.seagullscientific.com/downloads/printer-drivers/xprinter-xp-236b/
Open Template.nlbl file with NiceLabel and replace its content with yours.  

## Manual print
If you have a lot of free time and you a ready to learn 300 page manual about using TSPL printer language (and writing its commands directly to usb bus) you could try to tinker around with ManualPrint nodejs module in this repo. We will be grateful if you could find a way to make it a working solution.
For this solution to work you need to have libusb compatible driver installed instead of the standard one. You can install it with Zadig from here 
https://zadig.akeo.ie/. Device vid = 1155, pid = 22339.
