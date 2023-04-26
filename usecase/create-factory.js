const {kebabize, camelcalize, snakerize} = require('../helpers/file-name')

class CreateFactory {
    constructor (className, elSalvador) {
        this.className = className;
        this.elSalvador = elSalvador;
        this.varName = camelcalize(className);
        this.fileName = kebabize(className);
    }

    execute() {
        const text = `import { ${this.className}Controller } from "../controllers/${this.fileName}"
import { ${this.className}RepositoryDatabase } from "../repositories/database/${this.fileName}-repository";
import { Create${this.className} } from "../usecases/${this.fileName}/create-${this.fileName}";
import { Delete${this.className} } from "../usecases/${this.fileName}/delete-${this.fileName}";
import { GetAll${this.className}s } from "../usecases/${this.fileName}/get-all-${this.fileName}s";
import { Update${this.className} } from "../usecases/${this.fileName}/update-${this.fileName}";

export const make${this.className}Controller = () : ${this.className}Controller => {
    const ${this.varName}Repository = new ${this.className}RepositoryDatabase();
    const getAll${this.className}UseCase = new GetAll${this.className}(${this.varName}Repository);
    const create${this.className}UseCase = new Create${this.className}(${this.varName}Repository);
    const update${this.className}UseCase = new Update${this.className}(${this.varName}Repository);
    const delete${this.className}UseCase = new Delete${this.className}(${this.varName}Repository);

    const controller = new ${this.className}Controller(
        getAll${this.className}UseCase,
        create${this.className}UseCase,
        update${this.className}UseCase,
        delete${this.className}UseCase
    ); 
    
    return controller
}`
        this.elSalvador.saveFile(text)
    }
}

module.exports = CreateFactory; 