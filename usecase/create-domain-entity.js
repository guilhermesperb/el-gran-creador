class CreateEntity {
    constructor (className, elSalvador) {
        this.className = className;
        this.elSalvador = elSalvador;
    }

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

module.exports = CreateEntity; 