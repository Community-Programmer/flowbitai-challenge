import express from 'express';
import authMiddleware from '../middlewares/auth.js';
import fs from 'fs';
import path from 'path';


const registryPath = path.resolve(process.cwd(), 'registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));

const screenRouter  = express.Router();

// GET /api/me/screens
screenRouter.get('/screens', authMiddleware(), (req, res) => {
  const entry = registry.find(r => r.tenant === req.user.customerId);
  res.json(entry ? entry.screens : []);
});

export default screenRouter;
