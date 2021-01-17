const bs = require("browser-sync").create();
const clipboardy = require('clipboardy');
const axios = require('axios');
const fs = require('fs');

let old_cb; 
let new_cb;

var url_re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let dictionary = process.argv[2].match(url_re) ? process.argv[2] : "https://jisho.org/search/";

fs.writeFile('index.html', init_msg(), 'utf8', () => {});

bs.init({
    server: "./"
});

update();
setInterval(update, 1500);


async function update() {
	try {
		new_cb = clipboardy.readSync()
		if (old_cb != new_cb) {
			old_cb = new_cb
			const response = await axios.get(`${dictionary}${encodeURIComponent(new_cb)}`);
			fs.writeFile('index.html', response.data, 'utf8', () => {});
			bs.reload("index.html");
		}    
	} catch (error) {
		console.error(error);
	}
}


function init_msg() {
 	return `
	<h3>Welcome to clipboard monitoring for jisho.org!</h3>

	<p><strong><u>Reload this page to begin automatic searching</strong></u>. (ctrl + r) on windows/linux, (command + r) on Mac</u></strong></p>
	
	<p>If you accidently close this tab, head over to terminal and copy/paste the url into any browser. 
	<br> You'll likely want to use the url labeled \`Local:\`, for example: https://localhost:3000</p>

	<p>To end clipboard monitoring, go back to your terminal and hit (ctrl + c). <br>
	Mac users will also want to hit (control + c) not (command + c)</p>

	<p>To change your dictionary, simply provided it as an argument at runtime. <br>
	Example: <span style="font-family: monospace">node watchClipboard.js https://www.dictionary.com/browse/</span><br>
	Please note that errors while searching won't update your webpage. 
	Also, be sure your url is the full url for searching words on that dictionary</p>

	<a href="https://github.com/ryanjacquess/FineAsAny2021">Check out the open source code!</a>`
}
