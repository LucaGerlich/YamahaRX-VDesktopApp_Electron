# YamahaRX-VDesktopApp_Electron

A node module based desktop application made with JavaScript and electron to control your yamaha receiver. Tested with my RX-V475, should work with all yamaha receivers with a network interface that interacts via XML.

This was made possible by [PSeitz](https://github.com/PSeitz/yamaha-nodejs)!

To use the app just download it and change the ip address in the Project/src/main.js file to yours. Regard that the automatic IP finder will cause a bug that'll make the program crash. I will fix this problem later on.

To compile an exe for your system you can use ```npm run make```
