import { FileCreator } from "../domain/file-creator";

const {kebabize, camelcalize} = require('../helpers/file-name')

export class CreateUseCase {
    private varName: string;
    private fileName: string;
        
    constructor (private readonly className: string, private readonly elSalvador: FileCreator) {
        this.varName = camelcalize(className)
        this.fileName = kebabize(className)
        this.elSalvador = elSalvador;
    }

    createCreate(){
        this.elSalvador.setFileName(`create-${this.fileName}`)
        const text = `import ${this.className}Repository from "../../../domain/repository/${this.fileName}-repository";
import ${this.className} from "../../../domain/entity/${this.fileName}";

export class Create${this.className} {
    constructor (
        private readonly ${this.varName}Repository: ${this.className}Repository
    ){}

    async execute(data: any): Promise<any> {
        const ${this.varName} = new ${this.className}(data);
        return await this.${this.varName}Repository.create(${this.varName})
    }
    
}`;
        this.elSalvador.saveFile(text)
    }
    createUpdate(){
        this.elSalvador.setFileName(`update-${this.fileName}`)
        const text = `import ${this.className}Repository from '../../../domain/repository/${this.fileName}-repository';
import ${this.className} from "../../../domain/entity/${this.varName}";

export class Update${this.className} {
    constructor (
        private readonly ${this.varName}Repository: ${this.className}Repository
    ){}

    async execute(data: any): Promise<any> {
        const old${this.className} = await this.${this.varName}Repository.findById(data.id)     
        const ${this.varName} = new ${this.className}({...old${this.className},...data})

        this.${this.varName}Repository.update(${this.varName})
        return this.${this.varName}Repository.findById(${this.varName}.id);
    }
    
}`;
        this.elSalvador.saveFile(text)
    }
    createDelete(){
        this.elSalvador.setFileName(`delete-${this.fileName}`)
        const text = `import ${this.className}Repository from '../../../domain/repository/${this.fileName}-repository';
import ${this.className} from "../../../domain/entity/${this.varName}";

export class Delete${this.className} {
    constructor (
        private readonly ${this.varName}Repository: ${this.className}Repository
    ){}

    async execute(data: any): Promise<any> {
        const ${this.varName} = await this.${this.varName}Repository.findById(data)
        
        this.${this.varName}Repository.delete(${this.varName})
        
    }

}`;
        this.elSalvador.saveFile(text)
    }
    createGetAll(){
        this.elSalvador.setFileName(`get-all-${this.fileName}s`)
        const text = `import I${this.className}sRepository from "../../../domain/repositories/${this.fileName}-repository";

export class GetAll${this.className}s {
    constructor (
        private readonly ${this.varName}sRepository: I${this.className}sRepository
    ){}
    async execute(): Promise<any> {
        return await this.${this.varName}sRepository.getAll()
    }
    
}`;
        this.elSalvador.saveFile(text)
    }
    createGetById(){
        this.elSalvador.setFileName(`get-${this.fileName}`)
        const text = ``;
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