class Scaffold {
    constructor(
        entityUseCase, 
        controllerUseCase, 
        repositoryUseCase, 
        factoryUseCase, 
        domainRepositoryUseCase,
        portsUseCase
    ){
        this.entityUseCase = entityUseCase;
        this.controllerUseCase = controllerUseCase;
        this.repositoryUseCase = repositoryUseCase;
        this.factoryUseCase = factoryUseCase;
        this.domainRepositoryUseCase = domainRepositoryUseCase
        this.portsUseCase = portsUseCase;
    }

    run() {
        this.entityUseCase.execute();
        this.controllerUseCase.execute();
        this.repositoryUseCase.execute();
        this.factoryUseCase.execute();
        this.domainRepositoryUseCase.execute();
        this.portsUseCase.execute()
    }
}

module.exports = Scaffold; 