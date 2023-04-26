const {kebabize, camelcalize} = require('../helpers/file-name')

class CreateController {
    constructor (className, elSalvador) {
        this.className = className;
        this.varName = camelcalize(className)
        this.elSalvador = elSalvador;
    }

    execute() {
        const text = `import { IGetAll${this.className}s } from "../ports/get-all-${kebabize(this.className)}s"
import { ICreate${this.className} } from "../ports/create-${kebabize(this.className)}";
import { IUpdate${this.className} } from "../ports/update-${kebabize(this.className)}";
import { IDelete${this.className} } from "../ports/delete-${kebabize(this.className)}";

export class ${this.className}sController {
    constructor(
        private readonly getAll${this.className}sUseCase: IGetAll${this.className},
        private readonly create${this.className}UseCase: ICreate${this.className},
        private readonly update${this.className}UseCase: IUpdate${this.className},
        private readonly delete${this.className}UseCase: IDelete${this.className}
    ) {}
    
    async getAll(req: any) {
        return await this.getAll${this.className}sUseCase.execute()
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
        return await this.getAll${this.className}sUseCase.execute()
    }
}`
        this.elSalvador.saveFile(text)
    }
}

module.exports = CreateController; 