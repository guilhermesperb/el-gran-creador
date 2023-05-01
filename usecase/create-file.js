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
        this.fileName = this.fileName.split('/').slice(0, -1).join('/')
        this.fileName = `${this.fileName}/${filename}`
        console.log(this.fileName)
        // console.log(teste)
    }
}

module.exports = CreateFile; 