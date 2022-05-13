import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Loading from '../../../conponents/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //user
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            toast.success(`Welcome to Doctors Portal `, { id: 'success' })
        }
    }, [googleUser, user, from, navigate])

    //loading
    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    //error 
    let signInError;
    if (error) {
        signInError = <p className='text-red-500 text-lg'>Could not find user</p>
    }
    // googleError 
    let gError;
    if (googleError) {
        gError = <p className='text-red-500 text-lg'>Pop up is Closed by user</p>
    }

    //login 
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='flex h-[60vh] lg:h-[100vh] justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body border-2 lg:border-none">
                    <h2 className="text-center text-2xl">Log In</h2>
                    {signInError}
                    {gError}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs text-lg"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Please Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs text-lg"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password Must be 6 characters or more'
                                        },
                                        pattern: {
                                            value: /(?=.*[!@#$%^&*])/,
                                            message: 'At least one special character'
                                        }
                                    })}
                                />
                                <label className="label ">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                </label>
                            </div>
                            <label className="label pb-2">
                                <Link to='/forget' className="label-text-alt font-bold text-primary text-[15px] link link-hover">Forgot password?</Link>
                            </label>
                            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>
                        <p className='toggle-page py-2 '>
                            New to Doctors Portal ?{" "}
                            <span className='cursor-pointer text-blue-600' onClick={() => navigate("/signup")}>Create New Account</span>
                        </p>
                    </div>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase text-lg ">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;