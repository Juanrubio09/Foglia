import { Router, response } from "express";
import {methods as languageControllers} from "./../controllers/language.controllers"

const router = Router();

//router.get("/", (request, response)=>{
  //response.send("<h1>El cambio se realizo correctamente en el servidor</h1>" );
//});

router.get("/", languageControllers.addLanguage);


export default router;