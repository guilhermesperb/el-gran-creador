const {kebabize, camelcalize, snakerize} = require('../helpers/file-name')

class CreateRepository {
    constructor (className, elSalvador) {
        this.className = className;
        this.fileName = kebabize(className);
        this.varName = camelcalize(className);
        this.tableName = `${snakerize(className)}s`;
        this.elSalvador = elSalvador;
    }

    execute() {
        const text = `import ${this.className} from "../../../domain/entities/${this.fileName}";
import I${this.className}Repository from "../../../domain/repository/${this.fileName}-repository";
import { DbAccess } from 'db-access'
import { dbAccess } from "../../../main/config/database";

export class ${this.className}RepositoryDatabase implements I${this.className}Repository {

    db: DbAccess

        constructor() {
        this.db = dbAccess()
    }
    async create(${this.varName}: ${this.className}): Promise<${this.className}> {
        this.db.query({
            insert: {
                values: {
                    id: ${this.varName}.id
                },
                table: '${this.tableName}'
            }
        }).build()
        return ${this.varName};
    }
    
    async getAll(): Promise<${this.className}[]> {
        this.db.query({select: ['*'], from: {table: '${this.tableName}'}})
        const ${this.varName}s = await this.db.build()

        let result${this.className}: ${this.className}[] = [];
        for (const ${this.varName} of ${this.varName}s) {
            result${this.className}s.push(new ${this.className}(${this.varName}))
        }
        return result${this.className}s;
    }

    async findById(id: string): Promise<${this.className}> {
        const [${this.varName}] = await this.db.query({select: ['*'], from: {table: '${this.tableName}'}, where: {eq: {id}}}).build()
        if (!${this.varName}) throw new Error("${this.className} not found");
        return new ${this.className}(${this.varName});
    }
    async update(${this.varName}: ${this.className}): Promise<any> {
        return await this.db.query({
            update: {
                values: ${this.varName},
                table: '${this.tableName}'
            },
            where: {
                eq: {id: ${this.varName}.id}
            }
        }).build();
    }
    async delete(${this.varName}: ${this.className}): Promise<any> {
        return await this.db.query({
            delete: {table: '${this.tableName}'},
            where: {
                eq: {id: ${this.varName}.id}
            }
        }).build();
    }    
}
        `
        this.elSalvador.saveFile(text)
    }
}

module.exports = CreateRepository; 