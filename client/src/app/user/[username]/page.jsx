"use client";
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <h1>Welcome, {user.fullName}!</h1>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default UserProfile;
