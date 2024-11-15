"use client";
import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
    const [step, setStep] = useState(1);
    const [passkey, setPasskey] = useState("");
    const [error, setError] = useState("");
    const [username] = useState("admin");
    const [password, setPassword] = useState("");

    // Mock passkey for demonstration purposes
    const correctPasskey = "123456";

    // Handler for passkey submission
    const handlePasskeySubmit = (e) => {
        e.preventDefault();
        if (passkey === correctPasskey) {
            setStep(2); // Move to the login step if passkey is correct
            setError("");
        } else {
            setError("Invalid passkey. Please try again.");
        }
    };

    // Handler for login submission
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/login", {
                username,
                password,
            });

            if (response.status === 200) {
                alert("Login successful!");
                // Navigate to admin dashboard, e.g., using `router.push("/admin/dashboard")` if using Next.js
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Login failed. Please check your credentials.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Admin Portal</h2>

                {/* Step 1: Passkey */}
                {step === 1 && (
                    <form onSubmit={handlePasskeySubmit} className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">Enter 6-Digit Passkey</label>
                        <input
                            type="text"
                            maxLength={6}
                            value={passkey}
                            onChange={(e) => setPasskey(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                            required
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
                        >
                            Submit Passkey
                        </button>
                    </form>
                )}

                {/* Step 2: Login Form */}
                {step === 2 && (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value="admin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                            disabled
                        />

                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Password"
                            required
                        />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
