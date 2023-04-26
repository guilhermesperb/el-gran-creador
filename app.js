const Scaffold = require('./controllers/scaffold')
const CreateController = require('./usecase/create-controller')
const CreateEntity = require('./usecase/create-entity')
const CreateRepository = require('./usecase/create-repository')
const CreateFactory = require('./usecase/create-factory')
const ElSalvadorDeLosArquivos = require('./usecase/create-file')
const {kebabize} = require('./helpers/file-name')

const basePath = './output';
const paths = {
    controller: `${basePath}/controller/`,
    entity: `${basePath}/entity/`,
    repository: `${basePath}/repository/`,
    factory: `${basePath}/factory/`
}

var className = process.argv[2]
// console.log(className)

const createEntity = new CreateEntity(
    className,
    new ElSalvadorDeLosArquivos(paths.entity+kebabize(className))
);
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

const scaffold = new Scaffold(
    createEntity,
    createController,
    createRepository,
    createFactory
)
scaffold.run()
