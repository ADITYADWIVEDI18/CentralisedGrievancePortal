import mongoose, { Schema } from 'mongoose';

const petitionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the user who created the petition
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    upvoteCount: {
        type: Number,
        default: 0, // Number of upvotes
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const upvoteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    petition: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Petition'
    }
}, {
    timestamps: true
});

export const Petition = mongoose.model('Petition', petitionSchema);
export const Upvote = mongoose.model('Upvote', upvoteSchema)

