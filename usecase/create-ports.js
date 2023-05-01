const {kebabize, camelcalize} = require('../helpers/file-name')

class CreatePorts {
    constructor (className, elSalvador) {
        this.className = className;
        this.varName = camelcalize(className)
        this.fileName = kebabize(className)
        this.elSalvador = elSalvador;
    }

    createCreate(){
        this.elSalvador.setFileName(`create-${this.fileName}`)
        const text = `export interface ICreate${this.className} {
    execute(data: any):Promise<any>
}`;
        this.elSalvador.saveFile(text)
    }
    createUpdate(){
        this.elSalvador.setFileName(`update-${this.fileName}`)
        const text = `export interface IUpdate${this.className} {
    execute(data: any):Promise<any>
}`;
        this.elSalvador.saveFile(text)
    }
    createDelete(){
        this.elSalvador.setFileName(`delete-${this.fileName}`)
        const text = `export interface IDelete${this.className} {
    execute(data: any):Promise<any>
}`;
        this.elSalvador.saveFile(text)
    }
    createGetAll(){
        this.elSalvador.setFileName(`get-all-${this.fileName}s`)
        const text = `export interface IGetAll${this.className}s {
    execute(data: any):Promise<any>
}`;
        this.elSalvador.saveFile(text)
    }
    createGetById(){
        this.elSalvador.setFileName(`get-${this.fileName}`)
        const text = `export interface IGet${this.className} {
    execute(data: any):Promise<any>
}`;
        this.elSalvador.saveFile(text)
    }

    execute() {
        this.createCreate();
        this.createUpdate();
        this.createDelete();
        this.createGetAll();
        this.createGetById();
        
    }
}

module.exports = CreatePorts; 