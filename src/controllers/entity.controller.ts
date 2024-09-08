import { RequestHandler } from 'express';
import Entity from '../models/Entity';

export const createEntity: RequestHandler = async (req, res) => {
    try {
        const newEntity = new Entity(req.body);
        await newEntity.save();
        res.status(201).json(newEntity);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const getEntities: RequestHandler = async (req, res) => {
    try {
        const entities = await Entity.find();
        res.json(entities);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const getEntity: RequestHandler = async (req, res) => {
    try {
        const entity = await Entity.findById(req.params.id);
        if (!entity) return res.status(404).json({ message: 'Entity not found' });
        res.json(entity);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const updateEntity: RequestHandler = async (req, res) => {
    try {
        const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntity) return res.status(404).json({ message: 'Entity not found' });
        res.json(updatedEntity);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const deleteEntity: RequestHandler = async (req, res) => {
    try {
        const deletedEntity = await Entity.findByIdAndDelete(req.params.id);
        if (!deletedEntity) return res.status(404).json({ message: 'Entity not found' });
        res.json({ message: 'Entity deleted' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};