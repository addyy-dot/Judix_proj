'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useUserService } from '_services';
import { Spinner } from '_components';

export default Home;

function Home() {
    const userService = useUserService();
    const user = userService.currentUser;

    useEffect(() => {
        userService.getCurrent();
    }, []);

    if (user) {
        return (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
            >
                <div
                    className="card border-0 text-center"
                    style={{
                        maxWidth: '500px',
                        width: '100%',
                        borderRadius: '12px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                        background: 'rgba(255, 255, 255, 0.95)',
                    }}
                >
                    <div className="card-body p-5">
                        <h1 className="mb-3 fw-semibold text-primary">Hi {user.firstName}!</h1>
                        <p className="mb-4">You&apos;re logged in with Next.js & JWT using a MongoDB!</p>
                        <Link href="/users" className="btn btn-primary btn-lg">Manage Users</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Spinner />;
    }
}
