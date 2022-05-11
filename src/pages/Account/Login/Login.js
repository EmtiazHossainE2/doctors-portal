import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import toast from 'react-hot-toast';

const Login = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    //user 
    if(googleUser){
        navigate('/')
    }

    //error 
    let errorMessage;
    if (googleError) {
        errorMessage = <p className='text-red-500 pt-3 text-lg'> Pop up is Closed by user </p>
        toast.error(`Something is Wrong,Try Again`, { id: "googleError" });
    }


    return (
        <div className='flex h-[40vh] lg:h-[70vh] justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl">Log In</h2>
                    
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline uppercase text-lg ">Continue With Google</button>
                    {errorMessage}
                </div>
            </div>
        </div>
    );
};

export default Login;