import React, { useState } from 'react';
import './AdminServicesPrice.css';
import Button from '../../Components/Button/Button';
import FormLoader from '../../Components/FormLoader/FormLoader';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import { addServices, deleteService, getAllServices } from '../../API/Services';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const AdminServicesContent = () => {

    const { token } = useAuth();
    const auth = useAuthHooks();
    const queryClient = useQueryClient();

    const [isLoading, setIsLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [priceData, setPriceData] = useState({
        fa: {
            titleFa: '',
            featureFa: '',
            priceFa: '',
        },
        en: {
            titleEn: '',
            featureEn: '',
            priceEn: '',
        }
    });

    const { data: priceQuery, isLoading: priceLoading, isError, error } = useQuery({
        queryKey: ['priceQuery'],
        queryFn: () => getAllServices()
    });
    const addPriceMutation = useMutation({
        mutationFn: (newPrice) =>
            addServices(
                { token, ...auth },
                newPrice.fa.titleFa,
                newPrice.fa.featureFa,
                newPrice.fa.priceFa,
                newPrice.en.titleEn,
                newPrice.en.featureEn,
                newPrice.en.priceEn,
            ),
        onSuccess: () => {
            setIsLoading(false);
            queryClient.invalidateQueries(['priceQuery']);
            toast.success('خدمات با موفقیت اضافه شد');
            setPriceData({
                fa: {
                    titleFa: '',
                    featureFa: '',
                    priceFa: '',
                },
                en: {
                    titleEn: '',
                    featureEn: '',
                    priceEn: '',
                }
            });
        },
        onError: (e) => {
            console.log(e);
            setIsLoading(false);
            toast.error('خطا در اظافه کردن خدمات');
        },
    });
    const deleteServiceMutation = useMutation({
        mutationFn: (id) => deleteService(id, { token, ...auth }),
        onSuccess: () => {
            setDeleteLoading(true);
            queryClient.invalidateQueries(['service']);
            toast.success('سرویس با موفقیت حذف شد');
        },
        onError: () => {
            setDeleteLoading(false);
            toast.error('خطا در حذف سرویس');
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.endsWith('Fa')) {
            const faFieldName = name;
            setPriceData((prevData) => ({
                ...prevData,
                fa: { ...prevData.fa, [faFieldName]: value },
            }));
        } else if (name.endsWith('En')) {
            const enFieldName = name;
            setPriceData((prevData) => ({
                ...prevData,
                en: { ...prevData.en, [enFieldName]: value },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newPrice = {
            fa: {
                titleFa: priceData.fa?.titleFa,
                featureFa: priceData.fa?.featureFa,
                priceFa: priceData.fa?.priceFa,
            },
            en: {
                titleEn: priceData.en?.titleEn,
                featureEn: priceData.en?.featureEn,
                priceEn: priceData.en?.priceEn,
            }
        }
        try {
            await addPriceMutation.mutateAsync(newPrice);
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='admin-services-price'>
            <h2>مدیریت خدمات</h2>
            <input
                type="text"
                name='titleFa'
                placeholder='عنوان'
                value={priceData.fa?.titleFa}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="featureFa"
                placeholder='ویژگی'
                value={priceData.fa?.featureFa}
                onChange={handleChange}
                required
            />
            <input
                type='number'
                name="priceFa"
                placeholder='قیمت'
                value={priceData.fa?.priceFa}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name='titleEn'
                placeholder='title'
                value={priceData.en?.titleEn}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="featureEn"
                placeholder='feature'
                value={priceData.en?.featureFa}
                onChange={handleChange}
                required
            />
            <input
                name="priceEn"
                type='number'
                required
                placeholder='price'
                value={priceData.en?.priceEn}
                onChange={handleChange}
            />
            <Button
                intent='primary'
                size='small'
                label='اضافه کردن خدمات'
                onClick={handleSubmit}
            />
            {isLoading ? <FormLoader /> : ''}
            <h2>خدمات اظافه شده به خدمات</h2>
            <WithLoaderAndError {...{ data: priceQuery, isLoading: priceLoading, isError, error }}>
                <ul>
                    {
                        Array.isArray(priceQuery) && priceQuery.map((item) => {
                            return (
                                <li key={item._id}>
                                    <span>{item.fa?.title}</span>
                                    <span>{item.en?.title}</span>
                                    <span>{item.fa?.feature}</span>
                                    <span>{item.en?.feature}</span>
                                    <span>{item.fa?.price}</span>
                                    <span>{item.en?.price}</span>
                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            deleteServiceMutation.mutate(item._id);
                                        }}
                                    >
                                        حذف
                                    </button>
                                    {deleteLoading ? <FormLoader /> : ''}
                                </li>
                            )
                        })
                    }
                </ul>
            </WithLoaderAndError>
        </div>
    )
}

export default AdminServicesContent;