import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/firebase.init';
import Swal from 'sweetalert2'

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user] = useAuthState(auth)
    const { name, slots } = treatment
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const bookingInfo = {
            treatment: treatment.name,
            date: formattedDate,
            slot,
            patient: event.target.patient.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }


        if (bookingInfo.phone === '') {
            Swal.fire({
                icon: 'error',
                confirmButtonText: 'Provide Phone Number'
            })
            return
        }
        else {
            axios.post('http://localhost:5000/booking', bookingInfo)
                .then(function (response) {
                    if (response.data.success) {
                        Swal.fire({
                            text: `Your Appointment is set, ${bookingInfo?.date} at ${bookingInfo?.slot}`,
                            icon: 'success',
                            confirmButtonText: 'Thank you.'
                        })
                    }
                    else {
                        Swal.fire({
                            text: `Already have an appointment on, ${response?.data?.booking?.date} at ${response?.data?.booking?.slot}`,
                            icon: 'error',
                            confirmButtonText: 'Try Another Day'
                        })
                    }
                    refetch()
                    setTreatment(null)
                })
                .catch(function (error) {
                    console.log(error);
                    toast.error(`Something is wrong . Try later `, { id: "bookingError" });
                });
        }

        // fetch('http://localhost:5000/booking', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookingInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if(data.success){
        //             toast.success(`Your Appointment is set, ${bookingInfo?.date} at ${bookingInfo?.slot}` , { id: "booking" })
        //         }
        //         else{
        //             toast.error(`Already have an appointment on, ${data?.booking?.date} at ${data?.booking?.slot}` , { id: "bookingError" })
        //         }
        //         setTreatment(null)
        //     });



    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='text-center '>
                        <form onSubmit={handleBooking} className='space-y-4 pt-8 '>
                            <input type="text" name='date' disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-md text-lg " />
                            <select name='slot' className="select select-bordered w-full max-w-md space-y-8 text-lg">
                                {slots.map((slot, index) =>
                                    <option value={slot} key={index}>{slot}</option>)
                                }
                            </select>
                            <input type="text" disabled value={user?.displayName || ''} name='patient' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="email" disabled value={user?.email || ''} name='email' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="submit" value="Submit" className="btn btn-black text-white w-full max-w-md text-lg" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;