import React from 'react';
import Swal from 'sweetalert2';

const UserRow = ({ user, index, refetch }) => {
    const { email, lastLogin, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if(res.status === 403){
                    Swal.fire({
                        icon: 'error',
                        confirmButtonText: 'Failed to make admin'
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        text: `Successfully added an Admin`,
                        icon: 'success',
                        confirmButtonText: 'Thank you.'
                    })
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role ?
                    <button className='btn btn-xs btn-primary'>Admin</button>
                    :
                    <button className='btn btn-xs btn-'>User</button>
                }
            </td>
            <td>
                {role ?
                    <button disabled className='btn btn-xs'>Make Admin</button>
                    :
                    <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>
                }
            </td>
            <td><button className='btn btn-xs btn-error'>Remove</button></td>
        </tr>
    );
};

export default UserRow;