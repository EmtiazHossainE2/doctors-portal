import React, { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Loading from '../../../conponents/Loading';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{ sendEmailVerification: true });
    const [token] = useToken(user|| googleUser)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //user
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success(`Welcome to Doctors Portal `, { id: 'success' })
        }
    }, [token,from,navigate])

    //loading
    if (loading || updating || googleLoading) {
        return <Loading></Loading>
    }

    //error 
    let signUpError;
    if (error || googleError || updateError) {
        signUpError = <p className='text-red-500 text-lg'>Something is wrong</p>
    }

    //signup 
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        Swal.fire({
            text: `An email verification send  .Check Email`,
            icon: 'success',
            confirmButtonText: 'Okay'
        })
        await updateProfile({ displayName: data.myName });
    };

    return (
        <div className='flex h-[60vh] lg:h-[100vh] justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body border-2 lg:border-none">
                    <h2 className="text-center text-2xl ">Sign Up</h2>
                    {signUpError}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs text-lg"
                                    {...register("myName", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.myName?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.myName.message}</span>}
                                </label>
                            </div>
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
                                <label className="label pb-3">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs  text-white' type="submit" value="Sign Up" />
                        </form>
                        <p className='text-sm text-center pt-3 '>
                            Already have an account ?{" "}
                            <span className='cursor-pointer text-blue-600' onClick={() => navigate("/login")}>Log In</span>
                        </p>
                    </div>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase text-lg ">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;