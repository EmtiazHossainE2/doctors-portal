import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../conponents/Loading';
import BookingModal from './BookingModal';
import SingleAppointment from './SingleAppointment';

const AvailableAppointment = ({ date }) => {
    // const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP');

    const { data: appointments, isLoading, error, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [formattedDate])


    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary uppercase py-16'>Available Appointments on {format(date, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12'>
                {
                    appointments?.map(appointment => <SingleAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></SingleAppointment>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;