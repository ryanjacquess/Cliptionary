const clipboardy = require('clipboardy');

var oldclipboard = clipboardy.readSync();
var newclipboard;

var running = true;

while (running) {
    newclipboard = clipboardy.readSync()
    if (oldclipboard != newclipboard) {
        console.log(newclipboard);
        oldclipboard = newclipboard
    }
}
