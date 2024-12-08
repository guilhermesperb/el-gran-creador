import { FileCreator } from "../domain/file-creator"

export class CreateEntity {
    constructor (private readonly className: string, private readonly elSalvador: FileCreator) {}

    execute() {
        const text = `import { v4 as uuid } from "uuid";

export default class ${this.className} {
    id: string;
    
    constructor(props: any) {
        this.id = props.id;
        if (!this.id) {
            this.id = uuid()
        }
    }
}`
        this.elSalvador.saveFile(text)
    }
}