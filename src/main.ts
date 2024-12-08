import Scaffold from './controllers/scaffold'
import { CreateController } from './usecase/create-controller'
import { CreateEntity } from './usecase/create-domain-entity'
import { CreateRepository } from './usecase/create-repository'
import { CreateDomainRepository } from './usecase/create-domain-repository';
import { ElSalvadorDeLosArquivos } from './usecase/create-file'
import { CreateUseCase } from './usecase/create-usecase'
import { kebabize } from './helpers/file-name'
import { FilePath } from './helpers/file-path';

const filePath = new FilePath('./output');
var className = process.argv[2]

if (!className) {
    throw new Error("Class Name is required")
}

const createEntity = new CreateEntity(
    className,
    new ElSalvadorDeLosArquivos(filePath.getDomainEntity()+kebabize(className))
);

const createDomainRepository = new CreateDomainRepository(
    className,
    new ElSalvadorDeLosArquivos(filePath.getDomainRepository()+kebabize(className))
);

const createController = new CreateController(
    className,
    new ElSalvadorDeLosArquivos(filePath.getController()+kebabize(className))
);

const createRepository = new CreateRepository(
    className,
    new ElSalvadorDeLosArquivos(filePath.getRepository()+kebabize(className))
);

const createUseCase = new CreateUseCase(
    className,
    new ElSalvadorDeLosArquivos(filePath.getUseCase()+kebabize(className))
);

const scaffold = new Scaffold(
    createEntity,
    createController,
    createRepository,
    createDomainRepository,
    createUseCase
)
scaffold.run()
