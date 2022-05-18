import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../conponents/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://e-doctors-portal.herokuapp.com/appointment').then(res => res.json()))

    const imageStorageKey = '422e61968c3878a80022fbc5968b3094';

    /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
    const onSubmit = async data => {
        const image = data.image[0];
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('success', result);
                if (result.success) {
                    const img = result.data.url
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // console.log(doctorInfo);
                    fetch('https://e-doctors-portal.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.insertedId) {
                                Swal.fire({
                                    text: `Doctor Added Success`,
                                    icon: 'success',
                                    confirmButtonText: 'Thank you.'
                                })
                                reset();
                            }
                            else {
                                Swal.fire({
                                    text: `Failed to add the doctor`,
                                    icon: 'error',
                                    confirmButtonText: 'Try Again'
                                })
                            }
                        })
                }

            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-12'>
            <h2 className="text-2xl  text-center">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        className="input input-bordered w-full max-w-xs text-lg "
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder=" Email"
                        className="input input-bordered w-full max-w-xs text-lg"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs py-3">
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs pt-2 text-lg"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-lg text-white' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;