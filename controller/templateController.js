
import {Templates} from '../model/templateModel.js';

export async function getAAllTemplates(){
    return Templates.find({});
}

export function createTemplate(){
    
}