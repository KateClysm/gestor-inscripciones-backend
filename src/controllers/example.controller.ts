import { RequestHandler } from "express";
import Example from "../models/example.model"

// Obtener todos los videos
export const getExamples: RequestHandler = async (req, res) => {
    try {
        const examples = await Example.find();
        return res.json(examples);
    } catch (error) {
        res.json(error);
    }
};

// Crear un nuevo example
export const createExample: RequestHandler = async (req, res) => {
    const exampleFound = await Example.findOne({ url: req.body.url });
    if (exampleFound) {
        return res.status(301).json({ message: 'The URL already exists' });
    }

    const example = new Example(req.body);
    const savedExample = await example.save();
    res.json(savedExample);
};

// Obtener un example específico por ID
export const getExample: RequestHandler = async (req, res) => {
    const exampleFound = await Example.findById(req.params.id);
    if (!exampleFound) return res.status(204).json();
    return res.json(exampleFound);
};

// Eliminar un example específico por ID
export const deleteExample: RequestHandler = async (req, res) => {
    const exampleFound = await Example.findByIdAndDelete(req.params.id);
    if (!exampleFound) return res.status(204).json();
    return res.json(exampleFound);
};

// Actualizar un example específico por ID
export const updateExample: RequestHandler = async (req, res) => {
    const exampleUpdated = await Example.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exampleUpdated) {
        return res.status(204).json();
    }
    res.json(exampleUpdated);
};