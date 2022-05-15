import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../conponents/Loading';

const AllUsers = () => {
    const { data: users, isLoading, error, refetch } = useQuery(['users'], () => 
    fetch(`http://localhost:5000/user`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    console.log(users);
    return (
        <div className='md:p-4'>
            <h2 className='text-2xl p-5'>All users {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>creationTime</th>
                            <th>lastLogin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.creationTime}</td>
                                    <td>{user.lastLogin}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;