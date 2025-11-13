
import {Templates} from '../models/templateModel.js';

export async function getAllTemplates(req, res) {
  try {
    const templates = await Templates.find({});
    return res.status(200).json(templates);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch templates' });
  }
}

export async function createTemplate(req, res) {
  try {
    const { content, author } = req.body;
    const newTemplate = await Templates.create({ content, author });
    return res.status(201).json(newTemplate);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create template' });
  }
}