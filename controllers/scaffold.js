class Scaffold {
    constructor(controllerUseCase, tableName){
        this.controllerUseCase = controllerUseCase;
        this.tableName = tableName
    }

    run() {
        this.controllerUseCase.execute()
    }
}

module.exports = Scaffold; 