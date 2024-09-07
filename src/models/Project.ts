import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    description: string;
    technologiesRequired: string[];
    technologiesRecommended: string[];
    startDate: Date;
    endDate: Date;
    entity: Schema.Types.ObjectId;
    mentors: Schema.Types.ObjectId[];
    students: Schema.Types.ObjectId[];
}

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologiesRequired: [{ type: String }],
    technologiesRecommended: [{ type: String }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    entity: { type: Schema.Types.ObjectId, ref: 'Entity', required: true },
    mentors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
});

export default model<IProject>('Project', projectSchema);