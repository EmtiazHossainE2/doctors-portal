import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='text-center '>
                        <form className='space-y-3 pt-8 '>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                            <input type="email" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                            <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="Submit" class="btn btn-black text-white w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;