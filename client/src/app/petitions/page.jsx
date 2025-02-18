"use client";
import { useState } from "react";

export default function PetitionPage() {
    const [petition, setPetition] = useState({
        author: "John Doe",
        email: "john.doe@example.com",
        content: "We need better public transportation facilities in our city. The buses are overcrowded, and the routes are limited. Sign this petition to bring change!",
        upvotes: 5
    });

    const [hasUpvoted, setHasUpvoted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [newPetition, setNewPetition] = useState({ heading: "", content: "" });

    const handleUpvote = () => {
        if (!hasUpvoted) {
            setPetition((prev) => ({ ...prev, upvotes: prev.upvotes + 1 }));
            setHasUpvoted(true);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("New Petition Submitted:", newPetition);
        setShowForm(false);
    };

    return (
        <div className="min-h-screen p-8 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Petition Page</h2>

            {/* Display First Petition */}
            <div className="bg-white p-6 shadow-xl rounded-xl w-full max-w-2xl transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-900">{petition.author}</h3>
                <p className="text-gray-500 text-sm">{petition.email}</p>
                <p className="mt-4 text-gray-700 text-lg">{petition.content}</p>
                
                <div className="flex justify-between items-center mt-6">
                    <p className="text-lg font-semibold text-blue-700">Upvotes: {petition.upvotes}</p>
                    <button 
                        onClick={handleUpvote} 
                        disabled={hasUpvoted}
                        className={`px-5 py-2 text-white font-semibold rounded-lg shadow-md transition-all ${hasUpvoted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                        {hasUpvoted ? "Upvoted" : "Upvote"}
                    </button>
                </div>
            </div>

            {/* Raise a Petition Button */}
            {!showForm && (
                <button 
                    onClick={() => setShowForm(true)} 
                    className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-105"
                >
                    Raise a Petition
                </button>
            )}

            {/* Petition Form */}
            {showForm && (
                <div className="bg-white p-6 shadow-xl rounded-xl mt-6 w-full max-w-lg transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enter Your Petition</h3>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                        <input 
                            type="text"
                            placeholder="Enter Petition Heading" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                            value={newPetition.heading}
                            onChange={(e) => setNewPetition({ ...newPetition, heading: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Describe your petition..." 
                            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                            value={newPetition.content}
                            onChange={(e) => setNewPetition({ ...newPetition, content: e.target.value })}
                            required
                        />
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105"
                        >
                            Submit Petition
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
