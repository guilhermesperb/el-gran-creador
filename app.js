const Scaffold = require('./controllers/scaffold')
const CreateController = require('./usecase/create-controller')
const CreateEntity = require('./usecase/create-entity')
const CreateRepository = require('./usecase/create-repository')
const ElSalvadorDeLosArquivos = require('./usecase/create-file')

const basePath = './output';
const paths = {
    controller: `${basePath}/controller/`,
    entity: `${basePath}/entity/`,
    repository: `${basePath}/repository/`
}

var className = process.argv[2]
var tableName = process.argv[3]
console.log(paths)

const createController = new CreateController(
    className,
    new ElSalvadorDeLosArquivos(paths.controller)
);
const createEntity = new CreateEntity(
    className,
    new ElSalvadorDeLosArquivos(paths.controller)
);
const createRepository = new CreateRepository(
    className,
    tableName,
    new ElSalvadorDeLosArquivos(paths.controller)
);

const scaffold = new Scaffold(
    createController
)
scaffold.run()
