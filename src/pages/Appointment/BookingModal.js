import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ selected, treatment, setTreatment }) => {
    const { name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        // const slot = event.target.slot.value 
        // const name = event.target.name.value 
        // const phone = event.target.phone.value 
        // const email = event.target.email.value
        const bookingValue = {
            name: treatment.name,
            date: event.target.date.value,
            slot: event.target.slot.value,
            myName: event.target.myName.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }
        console.log(bookingValue);
        setTreatment(null)


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
                            <input type="text" name='date' disabled value={format(selected, 'PP')} className="input input-bordered w-full max-w-md text-lg " />
                            <select name='slot' className="select select-bordered w-full max-w-md space-y-8 text-lg">
                                {slots.map(slot => <option value={slot}>{slot}</option>)}
                            </select>
                            <input type="text" placeholder="Full Name" name='myName' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="email" placeholder="Enter Email" name='email' className="input input-bordered w-full max-w-md text-lg" />
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