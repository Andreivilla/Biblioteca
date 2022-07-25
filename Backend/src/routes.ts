import { Router } from "express";

import LivroController from "./modules/LivroController";
import ReservaController from "./modules/ReservaController";
import EmprestaController from "./modules/EmprestaController";
import AssistenteController from "./modules/AssistenteController";
import BibliotecarioController from "./modules/BibliotecarioController";
import UsuarioController from "./modules/UsuarioController";
import ItemEmprController from "./modules/ItemEmprController";

const routes = Router();

routes.get("/livros", LivroController.index)
routes.post("/livro", LivroController.findByName)
routes.post("/livronovo", LivroController.create)


routes.post("/reservanova", ReservaController.create)
routes.post("/empresta", EmprestaController.create);
routes.post("/resetEmpr", ItemEmprController.update);
routes.post("/findemprestimolivro",EmprestaController.findById);


routes.post("/assistentenovo", AssistenteController.create);
routes.post("/bibliotecarionovo", BibliotecarioController.create);
routes.post("/usuarionovo", UsuarioController.create);


export { routes };