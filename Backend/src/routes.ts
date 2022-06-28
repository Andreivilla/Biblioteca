import { Router } from "express";

import {FindAllLivrosController} from "./modules/livro/useCases/findAllLivros/findAllLivrosController";
import {FindLivroByNameController} from "./modules/livro/useCases/findLivroByName/findLivroByNameController";
import {CreateLivroController} from "./modules/livro/useCases/createLivro/CreateLivroController";
import {CreateBibliotecarioController} from "./modules/bibliotecario/useCases/createBibliotecario/createBiblitecarioController";
import {CreateAssistenteController} from "./modules/assistente/useCases/createAssistente/CreateAssistenteController";
import {CreateUsuarioController} from "./modules/usuario/useCases/createUsuario/createUsuarioController";
import { CreateReservaController } from "./modules/reservas/useCases/createReserva/CreateReservaController";
import {GetTipoByIdController} from "./modules/tipos/useCases/getTiposById/getTiposByIdController";
import {GetColecaoByIdController} from "./modules/colecao/useCases/getColecaoById/getColecaoByIdController";
import { ResetRenovacoesController } from "./modules/itensEmpr/useCases/resetRenovacoes/resetRenovacoesController";
import {FindAllUsuarioController} from "./modules/usuario/useCases/findAllUsuario/findAllUsuarioController";
import {FindUsuarioByNameController} from "./modules/usuario/useCases/findUsuarioByName/findUsuarioByNameController";
import {FindBibliotecarioByIdController } from "./modules/bibliotecario/useCases/findBibliotecarioById/findBibliotecarioByIdController";
import {FindBibliotecarioByNameController} from "./modules/bibliotecario/useCases/findBibliotecarioByName/findBibliotecarioByNameController";
import {FindAssistenteByIdController} from "./modules/assistente/useCases/findAssistenteById/findAssistenteByIdController";
import {FindAssistenteByNameController} from "./modules/assistente/useCases/findAssistenteByName/findAssistenteByNameController";
import { FindReservaByLivroController } from "./modules/reservas/useCases/findReservaByLivro/findReservaByLivroController";
import { FindReservaByUsuarioController } from "./modules/reservas/useCases/findReservaByUsuario/findReservaByUsuarioController";
import { UpdateRenovacaoController } from "./modules/itensEmpr/useCases/updateRenovacao/updateRenovacaoController";
import { CreateEmprestimoController } from "./modules/emprestimos/useCases/createEmprestimo/createEmprestimoController";
import { FindEmprestimoByUsuarioController } from "./modules/emprestimos/useCases/findEmprestimoByUsuario/findEmprestimoByUsuarioController";
import { FindEmprestimoByLivroController } from "./modules/emprestimos/useCases/findEmprestimoByLivro/findEmprestimoByLivroController";

const routes = Router();

const findAllLivrosController = new FindAllLivrosController();
const findLivroByNameController = new FindLivroByNameController();

const createLivroController = new CreateLivroController();
const createBibliotecarioController = new CreateBibliotecarioController();
const createAssistenteController = new CreateAssistenteController();
const createUsuarioController =  new CreateUsuarioController();
const createReservaController = new CreateReservaController();

const getTipoByIdController = new GetTipoByIdController();
const getColecaoByIdController = new GetColecaoByIdController();

const resetRenovacoesController = new ResetRenovacoesController();
const updateRenovacaoController = new UpdateRenovacaoController();
const createEmprestimoController = new CreateEmprestimoController();


const findAllUsuarioController = new FindAllUsuarioController();
const findUsuarioByNameController = new FindUsuarioByNameController();

const findBibliotecarioByIdController = new FindBibliotecarioByIdController();
const findBibliotecarioByNameController = new FindBibliotecarioByNameController();

const findAssistenteByIdController = new FindAssistenteByIdController();
const findAssistenteByNameController = new FindAssistenteByNameController();

const findReservaByLivroController = new FindReservaByLivroController();
const findReservaByUsuarioController = new FindReservaByUsuarioController();

const findEmprestimoByUsuarioController = new FindEmprestimoByUsuarioController();
const findEmprestimoByLivroController = new FindEmprestimoByLivroController();


routes.get("/livros", findAllLivrosController.handle);
routes.post("/livro", findLivroByNameController.handle);

routes.post("/livronovo", createLivroController.handle);
routes.post("/bibliotecarionovo",createBibliotecarioController.handle);
routes.post("/assistentenovo",createAssistenteController.handle);
routes.post("/usuarionovo",createUsuarioController.handle);
routes.post("/reservanova", createReservaController.handle);

routes.post("/tipo", getTipoByIdController.handle);
routes.post("/colecao", getColecaoByIdController.handle);

routes.post("/resetEmpr", resetRenovacoesController.handle);

routes.post("/reempresta", updateRenovacaoController.handle);
routes.post("/empresta", createEmprestimoController.handle);

routes.post("/findusuario", findAllUsuarioController.handle);
routes.post("/findusuarionome", findUsuarioByNameController.handle);
routes.post("/findbibliotecarioid",findBibliotecarioByIdController.handle);
routes.post("/findbibliotecarionome", findBibliotecarioByNameController.handle);
routes.post("/findassistenteid",findAssistenteByIdController.handle);
routes.post("/findassistentenome", findAssistenteByNameController.handle);
routes.post("/findreservalivro", findReservaByLivroController.handle );
routes.post("/findreservausuario", findReservaByUsuarioController.handle );
routes.post("/findemprestimousuario", findEmprestimoByUsuarioController.handle);
routes.post("/findemprestimolivro",findEmprestimoByLivroController.handle);








export { routes };