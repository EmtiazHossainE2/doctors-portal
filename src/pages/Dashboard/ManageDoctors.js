import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../conponents/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data : doctors , isLoading , refetch } = useQuery('doctors' ,() =>  fetch('http://localhost:5000/doctor' , {
        headers : {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h2 className='text-center text-2xl py-4'>Manage Doctors {doctors.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={index}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;