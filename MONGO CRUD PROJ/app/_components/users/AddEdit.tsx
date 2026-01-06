'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useAlertService, useUserService } from '_services';

export { AddEdit };

function AddEdit({ title, user }: { title: string, user?: any }) {
    const router = useRouter();
    const alertService = useAlertService();
    const userService = useUserService();

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm({ defaultValues: user });
    const { errors } = formState;

    const fields = {
        firstName: register('firstName', { required: 'First Name is required' }),
        lastName: register('lastName', { required: 'Last Name is required' }),
        username: register('username', { required: 'Username is required' }),
        password: register('password', {
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
            // password only required in add mode
            validate:  value => !user && !value ? 'Password is required' : undefined
        })
    };

    async function onSubmit(data: any) {
        alertService.clear();
        try {
            // create or update user based on user prop
            let message;
            if (user) {
                await userService.update(user.id, data);
                message = 'User updated';
            } else {
                await userService.create(data);
                message = 'User added';
            }

            // redirect to user list with success message
            router.push('/users');
            alertService.success(message, true);
        } catch (error: any) {
            alertService.error(error);
        }
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
                    maxWidth: '500px',
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                }}
            >
                <div className="card-body p-4">
                    <h1 className="text-center mb-4 fw-semibold text-primary">{title}</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="mb-3 col">
                                <label className="form-label">First Name</label>
                                <input {...fields.firstName} type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.firstName?.message?.toString()}</div>
                            </div>
                            <div className="mb-3 col">
                                <label className="form-label">Last Name</label>
                                <input {...fields.lastName} type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.lastName?.message?.toString()}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col">
                                <label className="form-label">Username</label>
                                <input {...fields.username} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                            </div>
                            <div className="mb-3 col">
                                <label className="form-label">
                                    Password
                                    {user && <em className="ms-1">(Leave blank to keep the same password)</em>}
                                </label>
                                <input {...fields.password} type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary me-2">
                                {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                                Save
                            </button>
                            <button onClick={() => reset()} type="button" disabled={formState.isSubmitting} className="btn btn-secondary me-2">Reset</button>
                            <Link href="/users" className="btn btn-outline-primary">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}