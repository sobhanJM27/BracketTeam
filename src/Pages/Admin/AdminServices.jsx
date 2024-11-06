import React, { useState } from 'react';
import '../CSS/AdminServices.css';
import AdminServicesContent from '../../Components/AdminServicesContent/AdminServicesContent';
import AdminServicesPrice from '../../Components/AdminServicesPrice/AdminServicesPrice';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';
import { getAllProject, status } from '../../API/Services';
import { useMutation, useQuery } from '@tanstack/react-query';
import Button from '../../Components/Button/Button';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';

const AdminServices = () => {

    const { token } = useAuth();
    const auth = useAuthHooks();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['priceQuery'],
        queryFn: () => getAllProject()
    });

    const mutation = useMutation({
        mutationFn: status,
        onSuccess: () => {
            toast.success('وضعیت با موفقیت تغییر یافت');
        },
        onError: (error) => {
            console.log(error.message);
            toast.success('خطا در تغییر وضعیت');
        },
    })

    const handleStatusChange = (projectId, currentStatus) => {
        mutation.mutate({ token, ...auth, projectId, currentStatus });
    }

    const [statusState, setStatusState] = useState('pendding');

    const handleInputChange = (projectId, newStatus) => {
        setStatusState((prev) => ({
            ...prev,
            [projectId]: newStatus,
        }));
    }

    return (
        <div className='admin-services'>
            <AdminServicesContent />
            <AdminServicesPrice />
            <div className='admin-services-project'>
                <h2>پروژه های درخواستی</h2>
                <WithLoaderAndError {...{ data, isLoading, isError, error }}>
                    <ul>
                        {
                            Array.isArray(data) && data.map((item) => {
                                <li key={item?._id}>
                                    <span>{item?.userID}</span>
                                    <span>{item?.serviceID}</span>
                                    <div className='admin-services-project-status'>
                                        <input
                                            required
                                            value={statusState}
                                            name='status'
                                            onChange={(e) => handleInputChange(item?._id, e.target.value)}
                                        />
                                        <Button
                                            size='small'
                                            intent='primary'
                                            label='تغییر وضعیت'
                                            onClick={() => handleStatusChange(item?._id, item?.status)}
                                        />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </WithLoaderAndError>
            </div>
        </div>
    )
}

export default AdminServices;