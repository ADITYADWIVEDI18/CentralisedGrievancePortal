import React from 'react';

const FormAndCards = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                {/* Top Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Welcome User
                </h1>

                {/* Main Layout */}
                <div className=" gap-8">
                    {/* Left: Form Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Submit a grievance</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium">
                                    Grievance
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Write your complaint here"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right: Cards Section */}
                    <div className="grid space-y-6 mt-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Track your grievances</h2>
                        <Card
                            title="Project Alpha"
                            description="This is a brief overview of Project Alpha. Learn more about its features and impact."
                        />
                        <Card
                            title="Beta Version Released"
                            description="Exciting updates in the latest beta version. Find out what’s new and improved."
                        />
                        <Card
                            title="Upcoming Features"
                            description="A sneak peek into the upcoming features we’re working on for the next release."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Card Component
const Card = ({ title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default FormAndCards;
