# Clipboard Dictionary
Ever started reading in a new language only to quickly realize the importance of a dictionary crutch? Remember how irritated you got opening a new search window every second word?

Fear no more! *Clipboard Dictionary* has got your back. With automatic searches right from your clipboard, you can forget about manually researching every word!

Default dictionary is jisho.org. Specify your own dictionary as an optional argument
```sh
$ node ./watchClipboard.js
$ node ./watchClipboard.js https://www.dictionary.com/browse/
```

## Setting up
*Clipboard Dictionary* requires the following dependencies to be installed on your system:
 - git
 - npm
 - node.js

### Macos with homebrew
In terminal:
```sh
$ brew install node
$ git clone https://github.com/ryanjacquess/Cliptionary
$ cd Cliptionary
$ npm install
$ node ./watchClipboard.js
```
If you don't have brew, get it [here](https://brew.sh/#install)
Alternatively you could directly install [npm and node](https://www.npmjs.com/get-npm) from their website.
### Windows
In command line or powershell:
```sh
> git clone https://github.com/ryanjacquess/Cliptionary
> cd Cliptionary
> npm install
> node watchClipboard.js
```
