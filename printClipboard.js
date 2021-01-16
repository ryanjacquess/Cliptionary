const clipboardy = require('clipboardy');
const axios = require('axios');

loop();

function loop() {
	var old_cb = clipboardy.readSync();
	var new_cb;

    setInterval((old_cp, new_cb) => {
		new_cb = clipboardy.readSync();
		console.log("Looped");

		if (old_cb != new_cb) {
			console.log(new_cb);
			old_cb = new_cb

			//getPage();
		}
	}, 3000);
}

async function getPage() {
	try {
		const response = await axios.get('https://jisho.org/search/%E4%BD%95/');
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
