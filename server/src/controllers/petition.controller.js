import { asyncHandler } from "../utils/asyncHandler.js"
import { Petition, Upvote } from "../models/petition.model.js";

// Create a petition
export const createPetition = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400);
        throw new Error('Please provide both title and description');
    }

    const petition = new Petition({
        user: req.user._id,
        name: req.user.username,
        email: req.user.email,
        title,
        description,
    });

    const createdPetition = await petition.save();

    res.status(201).json({
        message: "Petition created successfully",
        petition: createdPetition,
    });
});

// Upvote a petition (increment upvoteCount)
export const upvotePetition = asyncHandler(async (req, res) => {
    const petitionId = req.params.id;
    const userId = req.user._id;

    const petition = await Petition.findById(petitionId);
    if (!petition) {
        res.status(404);
        throw new Error('Petition not found');
    }

    // Check if the user has already upvoted this petition
    const existingUpvote = await Upvote.findOne({ user: userId, petition: petitionId });
    if (existingUpvote) {
        res.status(400);
        throw new Error('You have already upvoted this petition');
    }

    // Increment the upvoteCount
    petition.upvoteCount += 1;
    await petition.save();

    const upvote = new Upvote({
        user: userId,
        petition: petitionId
    });
    await upvote.save();

    res.status(200).json({
        message: "Petition upvoted successfully",
        upvoteCount: petition.upvoteCount
    });
});

export const getPetitionById = asyncHandler(async (req, res) => {
    const { id } = req.params;  // Petition ID from the request parameters

    // Find the petition by ID
    const petition = await Petition.findById(id);

    if (!petition) {
        res.status(404);
        throw new Error('Petition not found');
    }

    res.status(200).json({
        message: "Petition details fetched successfully",
        petition,
    });
});
