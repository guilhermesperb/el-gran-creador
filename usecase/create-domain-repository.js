const {kebabize, camelcalize} = require('../helpers/file-name')

class CreateDomainRepository {
    constructor (className, elSalvador) {
        this.className = className;
        this.varName = camelcalize(className)
        this.elSalvador = elSalvador;
    }

    execute() {
        const text = `import ${this.className} from "../entity/${this.varName}";

export default interface I${this.className}Repository {
    create(${this.varName}: ${this.className}): Promise<${this.className}>;
    findById(${this.varName}: string): Promise<${this.className}>;
    getAll(): Promise<${this.className}[]>;
    update(${this.varName}: ${this.className}) : Promise<any>;
    delete(${this.varName}: ${this.className}) : Promise<any>;
}
`
        this.elSalvador.saveFile(text)
    }
}

module.exports = CreateDomainRepository; 