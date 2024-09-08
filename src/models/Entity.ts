import { Schema, model, Document } from 'mongoose';

export interface IEntity extends Document {
    name: string;
    description: string;
    type: string;
}

const entitySchema = new Schema<IEntity>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String }
}, {
    timestamps: true
});

export default model<IEntity>('Entity', entitySchema);