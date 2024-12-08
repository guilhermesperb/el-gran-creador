import { FileCreator } from "../domain/file-creator";
import fs from 'fs';

const fileExtension = '.ts';

export class ElSalvadorDeLosArquivos implements FileCreator{
    private fileName: string;

    constructor (private readonly filePath: string) {
        this.fileName = '';
    }

    saveFile(text: string) {
        fs.writeFileSync(this.fileName+fileExtension, text)
    }

    setFileName(filename: string) {
        const filepath = this.filePath.split('/').slice(0, -1).join('/')
        this.fileName = `${filepath}/${filename}`
    }
}