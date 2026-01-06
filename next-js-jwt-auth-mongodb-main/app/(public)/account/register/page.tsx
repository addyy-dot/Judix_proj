'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useUserService } from '_services';

export default Register;

function Register() {
    const userService = useUserService();

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const fields = {
        firstName: register('firstName', { required: 'First Name is required' }),
        lastName: register('lastName', { required: 'Last Name is required' }),
        username: register('username', { required: 'Username is required' }),
        password: register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
        })
    }

    async function onSubmit(user: any) {
        await userService.register(user);
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
                    maxWidth: '400px',
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                }}
            >
                <div className="card-body p-4">
                    <h4 className="text-center mb-4 fw-semibold text-primary">
                        Register
                    </h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input {...fields.firstName} type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message?.toString()}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input {...fields.lastName} type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message?.toString()}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input {...fields.username} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input {...fields.password} type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary w-100">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Register
                        </button>
                        <div className="text-center mt-3">
                            <Link href="/account/login" className="btn btn-outline-primary">← Back to Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
