import {Router} from 'express';
import {getAAllTemplates} from '../controller/templateController.js';



export const templateRoutes = Router();

templateRoutes.get('/templates', getAllTemplates);