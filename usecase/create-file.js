const fs = require('fs')

const fileExtension = '.ts';

class CreateFile {
    constructor (fileName) {
        this.fileName = fileName
    }

    saveFile(text) {
        fs.writeFileSync(this.fileName+fileExtension, text)
    }

    setFileName(filename) {
        const filepath = this.fileName.split('/').slice(0, -1).join('/')
        this.fileName = `${filepath}/${filename}`
    }
}

module.exports = CreateFile; 