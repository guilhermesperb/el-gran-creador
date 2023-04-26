const fs = require('fs')

const fileExtension = '.ts';

class CreateFile {
    constructor (fileName) {
        this.fileName = fileName
    }

    saveFile(text) {
        fs.writeFileSync(this.fileName+fileExtension, text)
    }
}

module.exports = CreateFile; 