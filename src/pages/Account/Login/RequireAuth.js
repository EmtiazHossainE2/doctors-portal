import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../conponents/Loading";
import auth from "../../../Firebase/firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    else if (user?.emailVerified === false) {
        return <div className='flex h-[60vh]  justify-center items-center '>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body border-2 lg:border-none">
                    <h2 className="text-center text-3xl">Your email is not verified .</h2>
                    <h2 className="text-center text-xl">Please check your email  .</h2>
                    <button className='btn btn-black text-white   mt-4 py-2 '
                        onClick={async () => {
                            await sendEmailVerification();
                            Swal.fire({
                                text: `Successfully Sent email verification .Check Email`,
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }}
                    >
                        Resend Verification
                    </button>
                </div>
            </div>
        </div>

    }


    return children;
};

export default RequireAuth;