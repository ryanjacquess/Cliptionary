const clipboardy = require('clipboardy');

var oldclipboard = clipboardy.readSync();
var newclipboard;

while (true) {
    newclipboard = clipboardy.readSync()
    if (oldclipboard != newclipboard) {
        console.log(newclipboard);
        oldclipboard = newclipboard
    }
	setTimeout(() => true, 500);
}
