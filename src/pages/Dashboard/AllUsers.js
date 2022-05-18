import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../conponents/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, error, refetch } = useQuery(['users'], () =>
        fetch(`http://localhost:5000/user`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='md:p-4 mb-20'>
            <h2 className='text-2xl p-5'>Total User {users?.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;