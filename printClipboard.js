const clipboardy = require('clipboardy');
const axios = require('axios');

var oldclipboard = clipboardy.readSync();
var newclipboard;

while (true) {
    newclipboard = clipboardy.readSync()
    if (oldclipboard != newclipboard) {
        console.log(newclipboard);
        oldclipboard = newclipboard

		getPage();
    }
	setTimeout(getPage, 500);
}

async function getPage() {
	try {
		const response = await axios.get('https://jisho.org/search/%E4%BD%95/');
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
