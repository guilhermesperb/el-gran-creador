const Scaffold = require('./controllers/scaffold')
const CreateController = require('./usecase/create-controller')
const CreateEntity = require('./usecase/create-domain-entity')
const CreateRepository = require('./usecase/create-repository')
const CreateFactory = require('./usecase/create-factory')
const CreateDomainRepository = require('./usecase/create-domain-repository')
const ElSalvadorDeLosArquivos = require('./usecase/create-file')
const CreatePorts = require('./usecase/create-ports')
const CreateUseCase = require('./usecase/create-usecase');
const {kebabize} = require('./helpers/file-name')

const basePath = './output';
const paths = {
    controller: `${basePath}/controller/`,
    domainEntity: `${basePath}/domain/entity/`,
    domainRepository: `${basePath}/domain/repository/`,
    repository: `${basePath}/repository/`,
    factory: `${basePath}/factory/`,
    ports: `${basePath}/ports/`,
    usecase: `${basePath}/usecase/`
}

var className = process.argv[2]

if (!className) {
    throw new Error("Class Name is required")
}

const createEntity = new CreateEntity(
    className,
    new ElSalvadorDeLosArquivos(paths.domainEntity+kebabize(className))
)
const createDomainRepository = new CreateDomainRepository(
    className,
    new ElSalvadorDeLosArquivos(paths.domainRepository+kebabize(className))
);
;
const createController = new CreateController(
    className,
    new ElSalvadorDeLosArquivos(paths.controller+kebabize(className))
);
const createRepository = new CreateRepository(
    className,
    new ElSalvadorDeLosArquivos(paths.repository+kebabize(className))
);

const createFactory = new CreateFactory(
    className,
    new ElSalvadorDeLosArquivos(paths.factory+kebabize(className))
);

const createPorts = new CreatePorts(
    className,
    new ElSalvadorDeLosArquivos(paths.ports+kebabize(className))
);

const createUseCase = new CreateUseCase(
    className,
    new ElSalvadorDeLosArquivos(paths.usecase+kebabize(className))
);

const scaffold = new Scaffold(
    createEntity,
    createController,
    createRepository,
    createFactory,
    createDomainRepository,
    createPorts,
    createUseCase
)
scaffold.run()
