import { FileCreator } from "../domain/file-creator";
import {kebabize, camelcalize, snakerize} from '../helpers/file-name';

export class CreateRepository {
    private fileName: string;
    private varName: string;
    private tableName: string;

    constructor (private readonly className: string, private readonly elSalvador: FileCreator) {;
        this.fileName = kebabize(className);
        this.varName = camelcalize(className);
        this.tableName = `${snakerize(className)}s`;
    }

    execute() {
        const text = `import ${this.className} from "../../../domain/entity/${this.fileName}";
import ${this.className}Repository from "../../../domain/repository/${this.fileName}-repository";

export class ${this.className}RepositoryDatabase implements ${this.className}Repository {

    constructor() {
        
    }

    async create(${this.varName}: ${this.className}): Promise<void> {
        
    }
    
    async getAll(): Promise<${this.className}[]> {
        
    }

    async findById(id: string): Promise<${this.className}> {
        
    }

    async update(${this.varName}: ${this.className}): Promise<void> {
        
    }

    async delete(id: string): Promise<void> {
        
    }    
}
        `
        this.elSalvador.saveFile(text)
    }
}
