
var remote = require('remote')

function goToInfo() {

  remote.getCurrentWindow().loadUrl('file://' + __dirname + '/info.html')

}

function goToPrepare() {

  remote.getCurrentWindow().loadUrl('file://' + __dirname + '/prepare.html')

}

function goToDetect() {

  remote.getCurrentWindow().loadUrl('file://' + __dirname + '/detect.html')

}

function goToTrain() {

  remote.getCurrentWindow().loadUrl('file://' + __dirname + '/train.html')

}

function goToRecognize() {

  //console.log('jump' + 'file://' + __dirname + '/recognize.html');

  remote.getCurrentWindow().loadUrl('file://' + __dirname + '/recognize.html')

}
