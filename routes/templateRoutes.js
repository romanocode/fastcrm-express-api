import {Router} from 'express';
import { getAllTemplates, createTemplate } from '../controller/templateController.js';



export const templateRoutes = Router();

templateRoutes.get('/templates', getAllTemplates);
templateRoutes.post('/templates', createTemplate);