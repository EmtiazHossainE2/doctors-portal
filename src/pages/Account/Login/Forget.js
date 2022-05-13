import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../conponents/Loading';
import auth from '../../../Firebase/firebase.init';

const Forget = () => {
    const [email, setEmail] = useState({ value: "", error: "" })
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()

    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide your Email" });
        }
    }
    //loading 
    if(sending){
        return <Loading/>
    }

    const forgetPassword = async(event) => {
        event.preventDefault()
        if(email.value=== ''){
            return 
        }
        if (email.value) {
            await sendPasswordResetEmail(email.value);
            toast.success(`Rest Password Send.Check your Email `, { id: "reset" });
            navigate('/login')
        }
        if (resetError) {
            toast.error(`Email is incorrect `, { id: "errorSend" });
        }
    }

    return (
        <div className='flex h-[50vh] justify-center items-center'>
            <div className="card lg:max-w-lg  shadow-xl">
                <div className="card-body">
                    {email?.error && <p className="text-red-500"> {email.error}</p>}
                    <form onSubmit={forgetPassword} className='space-y-4 pt-8 '>
                        <input  type="email" placeholder='Enter Email' onBlur={handleEmail} name='email' className="input input-bordered w-full max-w-md text-lg" />
                        <input  type="submit" value="Reset Now" className="btn btn-black text-white w-full max-w-md text-lg" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Forget;