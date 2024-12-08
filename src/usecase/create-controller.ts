import { FileCreator } from "../domain/file-creator";

const {kebabize, camelcalize} = require('../helpers/file-name')

export class CreateController {
    private varName: string;
    constructor (readonly className: string, private readonly elSalvador: FileCreator) {
        this.varName = camelcalize(className)
    }

    execute() {
        const text = `import { GetAll${this.className}UseCase } from "../use-cases/get-all-${kebabize(this.className)}s"
import { Create${this.className}UseCase } from "../use-cases/create-${kebabize(this.className)}";
import { Update${this.className}UseCase } from "../use-cases/update-${kebabize(this.className)}";
import { Delete${this.className}UseCase } from "../use-cases/delete-${kebabize(this.className)}";

export class ${this.className}Controller {
    constructor(
        
    ) {}
    
    async getAll(req: any) {
        return await this.getAll${this.className}UseCase.execute()
    }

    async create(req: any) {
        const ${this.varName}Data = req.body;
        return await this.create${this.className}UseCase.execute(${this.varName}Data)
    }

    async update(req: any) {
        let ${this.varName}Data: any = req.body;
        ${this.varName}Data = {...${this.varName}Data, id: req.params.id}
        return await this.update${this.className}UseCase.execute(${this.varName}Data)
    }

    async delete(req: any) {
        const ${this.varName}Data: any = {id: req.params.id}
        await this.delete${this.className}UseCase.execute(${this.varName}Data)
    }
}`
        this.elSalvador.saveFile(text)
    }
}