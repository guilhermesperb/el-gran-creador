class CreateController {
    constructor (className, elSalvador) {
        this.className = className;
        this.elSalvador = elSalvador;
    }

    execute() {
        const text = 'alo mundo'
        this.elSalvador.saveFile(text)
    }
}

module.exports = CreateController; 