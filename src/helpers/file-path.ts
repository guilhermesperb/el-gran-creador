export class FilePath {
    constructor(private readonly basePath: string) {}

    getController() {
        return`${this.basePath}/controller/`;
    }
    getDomainEntity(){
        return `${this.basePath}/domain/entity/`;
    }

    getDomainRepository() {
        return `${this.basePath}/domain/repository/`;
    }

    getRepository() {
        return `${this.basePath}/repository/`;
    }
    
    getFactory() {
        return `${this.basePath}/factory/`;
    }
    
    getPorts() {
        return `${this.basePath}/ports/`;
    }

    getUseCase() {
        return `${this.basePath}/use-cases/`;
    }
}