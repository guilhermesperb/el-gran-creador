class Scaffold {
    constructor(
        entityUseCase, 
        controllerUseCase, 
        repositoryUseCase, 
        domainRepositoryUseCase,
        useCaseUseCase,
    ){
        this.entityUseCase = entityUseCase;
        this.controllerUseCase = controllerUseCase;
        this.repositoryUseCase = repositoryUseCase;
        this.domainRepositoryUseCase = domainRepositoryUseCase
        this.useCaseUseCase = useCaseUseCase
    }

    run() {
        this.entityUseCase.execute();
        this.controllerUseCase.execute();
        this.repositoryUseCase.execute();
        this.domainRepositoryUseCase.execute();
        this.useCaseUseCase.execute();
    }
}

module.exports = Scaffold; 