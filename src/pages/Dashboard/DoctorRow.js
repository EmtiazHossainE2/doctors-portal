import React from 'react';
import Swal from 'sweetalert2';

const DoctorRow = ({ doctor, index, refetch }) => {
    // console.log(doctor);
    const { name, email, img, specialty } = doctor
    const handleDelete = () => {
        const url = `http://localhost:5000/doctor/${email}`;
        Swal.fire({
            text: `Are you sure to delete ${name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                }).then(data => {
                    // console.log(data);
                    if (data.status) {
                        Swal.fire({
                            text: `Successfully Delete Dr ${name}`,
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        refetch()
                    }
                })
            }
        })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td><button onClick={handleDelete} className='btn btn-xs btn-error'>Remove</button></td>
        </tr>
    );
};

export default DoctorRow;