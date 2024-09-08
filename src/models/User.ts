import { Schema, model, Document } from 'mongoose';

interface IStudentInfo {
    university: string;
    major: string;
    institution: string;
}

interface IMentorInfo {
    expertise: string[];
    yearsOfExperience: number;
    institution: string;
}

export interface IUser extends Document {
    name: string;
    last_name: string;
    email: string;
    password: string;
    role: 'admin' | 'mentor' | 'student';
    studentInfo?: IStudentInfo;
    mentorInfo?: IMentorInfo;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'mentor', 'student'] },
    studentInfo: {
        institution: { type: String },
        university: { type: String },
        major: { type: String }
    },
    mentorInfo: {
        institution: { type: String },
        expertise: [{ type: String }],
        yearsOfExperience: { type: Number }
    }
}, {
    timestamps: true
});

userSchema.pre('save', function (next) {
    const user = this as IUser;

    if (user.role === 'student') {
        if (!user.studentInfo || !user.studentInfo.institution || !user.studentInfo.university || !user.studentInfo.major) {
            return next(new Error('Student information is incomplete'));
        }
    }

    if (user.role === 'mentor') {
        if (!user.mentorInfo || !user.mentorInfo.institution || !user.mentorInfo.expertise || !user.mentorInfo.yearsOfExperience) {
            return next(new Error('Mentor expertise is required'));
        }
    }

    next();
});

export default model<IUser>('User', userSchema);