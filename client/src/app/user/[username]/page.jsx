"use client";

import { useContext, useState } from 'react';
import { UserContext } from '@/context/userContext';
import { CalendarDays, Trash2 } from 'lucide-react';
import Link from 'next/link';

const initialGrievances = [
    {
        id: 1,
        date: '2025-05-09',
        content: 'The AC in the lab is not working properly. Please look into it soon.',
    },
    {
        id: 2,
        date: '2025-05-08',
        content: 'WiFi connectivity is unstable in Block A. It disrupts our online classes frequently.',
    },
];

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const [grievances, setGrievances] = useState(initialGrievances);

const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this grievance?")) {
            setGrievances(grievances.filter((g) => g.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            {user ? (
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Hello, {user.fullName} 👋</h1>
                            <p className="text-gray-600 mt-1">Email: {user.email || "Not provided"}</p>
                            <p className="text-gray-600">Role: {user.role || "User"}</p>
                        </div>
                        <Link href="/user/my-grievance/">
                            <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-green-700 transition">
                                + New Grievance
                            </button>
                        </Link>
                    </div>

                    {/* Grievances Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Grievances</h2>

                        {grievances.length > 0 ? (
                            <div className="grid gap-6">
                                {grievances.map((grievance) => (
                                    <div
                                        key={grievance.id}
                                        className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
                                    >
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                            <CalendarDays className="w-4 h-4" />
                                            <span>{grievance.date}</span>
                                        </div>
                                        <p className="text-gray-800 text-base leading-relaxed">
                                            {grievance.content}
                                        </p>
                                        <button
                                            onClick={() => handleDelete(grievance.id)}
                                            className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition"
                                            title="Delete Grievance"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-10">
                                <p className="text-lg">You haven't submitted any grievances yet.</p>
                                <p className="text-sm mt-2">Click the "New Grievance" button to get started.</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl text-gray-600 mt-20">Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default UserProfile;
