"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
    const [grievances, setGrievances] = useState([
        {
            id: 1,
            author: "John Doe",
            date: "2024-02-10T14:48:00.000Z",
            content: "The cafeteria food quality needs improvement.",
            status: "Pending"
        },
        {
            id: 2,
            author: "Jane Smith",
            date: "2024-02-12T10:30:00.000Z",
            content: "Wi-Fi connectivity issues in the library.",
            status: "Resolved"
        },
        {
            id: 3,
            author: "Emily Johnson",
            date: "2024-02-14T08:15:00.000Z",
            content: "Water leakage in the second-floor restroom.",
            status: "Pending"
        },
        {
            id: 4,
            author: "Michael Brown",
            date: "2024-02-15T16:50:00.000Z",
            content: "Lack of parking space near the main building.",
            status: "Resolved"
        },
        {
            id: 5,
            author: "Sarah Lee",
            date: "2024-02-16T10:20:00.000Z",
            content: "Poor lighting in the stairwells.",
            status: "Pending"
        },
        {
            id: 6,
            author: "David Kim",
            date: "2024-02-17T11:45:00.000Z",
            content: "Broken elevator in Building A.",
            status: "Pending"
        },
        {
            id: 7,
            author: "Olivia White",
            date: "2024-02-18T13:05:00.000Z",
            content: "Unresponsive air conditioning in the classrooms.",
            status: "Resolved"
        }
    ]);
    
    const [petitions, setPetitions] = useState([
        {
            id: 1,
            author: "Chris Redfield",
            title: "Improve Campus Security",
            upvotes: 120,
            status: "Active"
        },
        {
            id: 2,
            author: "Leon Kennedy",
            title: "More Eco-Friendly Initiatives",
            upvotes: 85,
            status: "Active"
        },
        {
            id: 3,
            author: "Jill Valentine",
            title: "Free Wi-Fi Access in All Areas",
            upvotes: 50,
            status: "Closed"
        }
    ]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Admin Dashboard</h2>
            <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Grievance List</h3>
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-blue-100 text-blue-900">
                            <th className="p-3 border">Author</th>
                            <th className="p-3 border">Date</th>
                            <th className="p-3 border">View</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grievances.map((grievance) => (
                            <tr key={grievance.id} className="border-b">
                                <td className="p-3 border">{grievance.author}</td>
                                <td className="p-3 border">{new Date(grievance.date).toLocaleDateString()}</td>
                                <td className="p-3 border text-blue-500 cursor-pointer underline" onClick={() => openModal(grievance)}>View</td>
                                <td className={`p-3 border ${grievance.status === "Resolved" ? "text-green-600" : "text-yellow-500"}`}>
                                    {grievance.status === "Resolved" ? "Already Resolved" : grievance.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Petition List</h3>
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-[#DBEAFE] text-green-900">
                            <th className="p-3 border">Author</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Upvotes</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {petitions.map((petition) => (
                            <tr key={petition.id} className="border-b">
                                <td className="p-3 border">{petition.author}</td>
                                <td className="p-3 border">{petition.title}</td>
                                <td className="p-3 border">{petition.upvotes}</td>
                                <td className={`p-3 border ${petition.status === "Closed" ? "text-red-600" : "text-green-600"}`}>{petition.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-xl font-bold mb-4">{selectedItem.content}</h3>
                        <p className="text-gray-700"><strong>Author:</strong> {selectedItem.author}</p>
                        <p className="text-gray-700"><strong>Date:</strong> {new Date(selectedItem.date).toLocaleDateString()}</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={closeModal} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
