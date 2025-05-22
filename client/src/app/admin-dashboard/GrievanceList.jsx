"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GrievanceList({ openModal }) {
    const [grievances, setGrievances] = useState([]);

    useEffect(() => {
        const fetchGrievances = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/grievances/archive', {
                    withCredentials: true,
                });
                setGrievances(res.data.data);
            } catch (error) {
                console.error("Error fetching grievances:", error);
            }
        };
        fetchGrievances();
    }, []);

    const handleResolveGrievance = async (id) => {
        try {
            const res = await axios.put(
                `http://localhost:8000/api/v1/grievances/${id}/mark-as-resolved`,
                {},
                { withCredentials: true }
            );

            if (res.data.success) {
                setGrievances((prev) =>
                    prev.map((g) => (g._id === id ? { ...g, status: true } : g))
                );
            }
        } catch (error) {
            console.error("Error resolving grievance:", error);
        }
    };

    return (
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
                    {grievances.slice().reverse().map((grievance) => (
                        <tr key={grievance._id} className="border-b">
                            <td className="p-3 border">{grievance.name}</td>
                            <td className="p-3 border">
                                {new Date(grievance.submittedAt).toLocaleDateString()}
                            </td>
                            <td
                                className="p-3 border text-blue-500 cursor-pointer underline"
                                onClick={() => openModal(grievance)}
                            >
                                View
                            </td>
                            <td className="p-3 border">
                                <div className="flex items-center justify-between">
                                    <span className={grievance.status ? "text-green-600" : "text-red-500"}>
                                        {grievance.status ? "Resolved" : "Pending"}
                                    </span>
                                    {!grievance.status && (
                                        <button
                                            className="ml-4 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                            onClick={() => handleResolveGrievance(grievance._id)}
                                        >
                                            Solve Issue
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
