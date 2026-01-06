'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useUserService } from '_services';

export default Login;

function Login() {
    const userService = useUserService();

    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const fields = {
        username: register('username', { required: 'Username is required' }),
        password: register('password', { required: 'Password is required' })
    };

    async function onSubmit({ username, password }: any) {
        await userService.login(username, password);
    }

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
        >
            <div
                className="card border-0"
                style={{
                    maxWidth: '380px',
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                }}
            >
                <div className="card-body p-4">
                    <h4 className="text-center mb-4 fw-semibold text-primary">
                        Login
                    </h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                {...fields.username}
                                type="text"
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                {errors.username?.message?.toString()}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input
                                {...fields.password}
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                                {errors.password?.message?.toString()}
                            </div>
                        </div>

                        <button
                            disabled={formState.isSubmitting}
                            className="btn btn-primary w-100 py-2"
                        >
                            {formState.isSubmitting && (
                                <span className="spinner-border spinner-border-sm me-2"></span>
                            )}
                            Login
                        </button>

                        <div className="text-center mt-3">
                            <span className="text-muted me-1">New user?</span>
                            <Link
                                href="/account/register"
                                className="text-decoration-none"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
