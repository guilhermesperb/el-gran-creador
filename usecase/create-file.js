const fs = require('fs')

class CreateFile {
    constructor (fileName) {
        this.fileName = fileName
    }

    saveFile(text) {
        console.log(this.fileName);
        console.log(text)
        fs.writeFileSync(this.fileName+'terter', text)
    }
}

module.exports = CreateFile; 