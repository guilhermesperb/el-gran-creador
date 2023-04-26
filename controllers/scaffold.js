class Scaffold {
    constructor(entityUseCase, controllerUseCase, repositoryUseCase, factoryUseCase){
        this.entityUseCase = entityUseCase;
        this.controllerUseCase = controllerUseCase;
        this.repositoryUseCase = repositoryUseCase;
        this.factoryUseCase = factoryUseCase
    }

    run() {
        this.entityUseCase.execute();
        this.controllerUseCase.execute();
        this.repositoryUseCase.execute();
        this.factoryUseCase.execute();
    }
}

module.exports = Scaffold; 