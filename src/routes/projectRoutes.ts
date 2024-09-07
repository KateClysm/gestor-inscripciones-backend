import express, { Request, Response } from 'express';
import Project from '../models/Project';

const router = express.Router();

// Crear un nuevo proyecto
router.post('/', async (req: Request, res: Response) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        // Verifica el tipo de error y maneja los errores de forma adecuada
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Obtener todos los proyectos
router.get('/', async (req: Request, res: Response) => {
    try {
        const projects = await Project.find().populate('entity', 'name description');
        res.json(projects);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Obtener un proyecto por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const project = await Project.findById(req.params.id).populate('entity', 'name description');
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Actualizar un proyecto por ID
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedProject) {
            res.json(updatedProject);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Eliminar un proyecto por ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (deletedProject) {
            res.json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

export default router;