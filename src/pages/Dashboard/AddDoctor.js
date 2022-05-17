import React from 'react';

const AddDoctor = () => {
    const handleBooking = (event) => {
        event.preventDefault()
        const doctorInfo = {
            doctorName: event.target.doctorName.value,
            doctorEmail: event.target.doctorEmail.value,
            specialty: event.target.specialty.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(doctorInfo);

    }
    return (
        <div className='pt-5 '>
            <h2 className="text-2xl text-center">Add a new doctor</h2>
            <div className='text-center'>
                <form onSubmit={handleBooking} className='space-y-4 pt-8 flex flex-col justify-center items-center '>
                    <input type="text" placeholder='Doctor Name'  name='doctorName' className="input input-bordered w-full max-w-md text-lg" />
                    <input type="email" placeholder=' Email' name='doctorEmail' className="input input-bordered w-full max-w-md text-lg" />
                    <input type="text" placeholder='Specialty' name='specialty' className="input input-bordered w-full max-w-md text-lg" />
                    <textarea rows={2} type="text" placeholder='Doctor Address' name='address' className=" input-bordered w-full textarea max-w-md text-lg " />
                    <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-md text-lg" />
                    <input type="submit" value="Add Now" className="btn btn-secondary text-white w-full max-w-md text-lg" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;