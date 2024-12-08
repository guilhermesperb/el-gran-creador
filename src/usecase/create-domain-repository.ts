import { FileCreator } from "../domain/file-creator";
import { kebabize, camelcalize } from '../helpers/file-name';

export class CreateDomainRepository {
    private varName: string;
    constructor (private readonly className: string, private readonly elSalvador: FileCreator) {
        this.varName = camelcalize(className)
    }

    execute() {
        const text = `import ${this.className} from "../entity/${this.varName}";

export default interface ${this.className}Repository {
    create(${this.varName}: ${this.className}): Promise<void>;
    findById(id: string): Promise<${this.className}>;
    getAll(): Promise<${this.className}[]>;
    update(${this.varName}: ${this.className}) : Promise<void>;
    delete(id: string) : Promise<void>;
}
`
        this.elSalvador.saveFile(text)
    }
}