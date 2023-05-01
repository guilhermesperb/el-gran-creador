class Scaffold {
    constructor(
        entityUseCase, 
        controllerUseCase, 
        repositoryUseCase, 
        factoryUseCase, 
        domainRepositoryUseCase,
        portsUseCase,
        useCaseUseCase,
    ){
        this.entityUseCase = entityUseCase;
        this.controllerUseCase = controllerUseCase;
        this.repositoryUseCase = repositoryUseCase;
        this.factoryUseCase = factoryUseCase;
        this.domainRepositoryUseCase = domainRepositoryUseCase
        this.portsUseCase = portsUseCase;
        this.useCaseUseCase = useCaseUseCase
    }

    run() {
        this.entityUseCase.execute();
        this.controllerUseCase.execute();
        this.repositoryUseCase.execute();
        this.factoryUseCase.execute();
        this.domainRepositoryUseCase.execute();
        this.portsUseCase.execute()
        this.useCaseUseCase.execute();
    }
}

module.exports = Scaffold; 