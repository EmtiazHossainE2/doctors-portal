import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    //user 
    if (googleUser) {
        navigate('/')
    }

    //error 
    let errorMessage;
    if (googleError) {
        errorMessage = <p className='text-red-500 pt-3 text-lg'> Pop up is Closed by user </p>
        toast.error(`Something is Wrong,Try Again`, { id: "googleError" });
    }

    //login 
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='flex h-[60vh] lg:h-[100vh] justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body border-2 ">
                    <h2 className="text-center text-2xl">Log In</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-lg">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="input input-bordered w-full max-w-xs text-lg"
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
                                <label class="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-lg">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="input input-bordered w-full max-w-xs text-lg"
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
                                <label class="label pb-3">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />

                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase text-lg ">Continue With Google</button>
                    {errorMessage}
                </div>
            </div>
        </div>
    );
};

export default Login;