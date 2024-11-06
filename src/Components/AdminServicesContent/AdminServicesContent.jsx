import React, { useState } from 'react';
import './AdminServicesContent.css';
import Button from '../../Components/Button/Button';
import FormLoader from '../../Components/FormLoader/FormLoader';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import { addDesc, getDesc } from '../../API/Services';
import WithLoaderAndError from '../../Components/WithLoaderAndError/WithLoaderAndError';

const AdminServicesContent = () => {

    const { token } = useAuth();
    const auth = useAuthHooks();
    const queryClient = useQueryClient();

    const [isLoading, setIsLoading] = useState(false);
    const [descData, setDescData] = useState({
        fa: {
            titleFa: '',
            descriptionFa: '',
            titleSeoFa: '',
        },
        en: {
            titleEn: '',
            descriptionEn: '',
            titleSeoEn: '',
        }
    });

    const { data: descQuery, isLoading: descLoading, isError, error } = useQuery({
        queryKey: ['descQuery'],
        queryFn: () => getDesc()
    });
    console.log(descQuery)
    const addDescMutation = useMutation({
        mutationFn: (newDesc) =>
            addDesc(
                { token, ...auth },
                newDesc.fa?.titleFa,
                newDesc.fa?.descriptionFa,
                newDesc.fa?.titleSeoFa,
                newDesc.en?.titleEn,
                newDesc.en?.descriptionEn,
                newDesc.en?.titleSeoEn,
            ),
        onSuccess: () => {
            setIsLoading(false);
            queryClient.invalidateQueries(['descQuery']);
            toast.success('محتوا با موفقیت اضافه شد');
            setDescData({
                fa: {
                    titleFa: '',
                    descriptionFa: '',
                    titleSeoFa: '',
                },
                en: {
                    titleEn: '',
                    descriptionEn: '',
                    titleSeoEn: '',
                }
            });
        },
        onError: (e) => {
            console.log(e);
            setIsLoading(false);
            toast.error('خطا در اظافه کردن محتوا');
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.endsWith('Fa')) {
            const faFieldName = name;
            setDescData((prevData) => ({
                ...prevData,
                fa: { ...prevData.fa, [faFieldName]: value },
            }));
        } else if (name.endsWith('En')) {
            const enFieldName = name;
            setDescData((prevData) => ({
                ...prevData,
                en: { ...prevData.en, [enFieldName]: value },
            }));
        } else {
            setDescData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newDesc = {
            fa: {
                titleFa: descData.fa?.titleFa,
                descriptionFa: descData.fa?.descriptionFa,
                titleSeoFa: descData.fa?.titleSeoFa,
            },
            en: {
                titleEn: descData.en?.titleEn,
                descriptionEn: descData.en?.descriptionEn,
                titleSeoEn: descData.en?.titleSeoEn,
            }
        }
        try {
            await addDescMutation.mutateAsync(newDesc);
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='admin-services-content'>
            <h2>مدیریت محتوای خدمات</h2>
            <input
                type="text"
                name="titleSeoFa"
                placeholder='عنوان سئو خدمات'
                value={descData.fa?.titleSeoFa}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name='titleFa'
                placeholder='عنوان محتوای خدمات'
                value={descData.fa?.titleFa}
                onChange={handleChange}
                required
            />
            <textarea
                name="descriptionFa"
                required
                placeholder='محتوای خدمات'
                value={descData.fa?.descriptionFa}
                onChange={handleChange}
            ></textarea>
            <input
                type="text"
                name="titleSeoEn"
                placeholder='services seo title'
                value={descData.en?.titleSeoEn}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name='titleEn'
                placeholder='services title'
                value={descData.en?.titleEn}
                onChange={handleChange}
                required
            />
            <textarea
                name="descriptionEn"
                required
                placeholder='services description'
                value={descData.en?.descriptionEn}
                onChange={handleChange}
            ></textarea>
            <Button
                intent='primary'
                size='small'
                label='اضافه کردن محتوا'
                onClick={handleSubmit}
            />
            {isLoading ? <FormLoader /> : ''}
            <h2>محتوای اظافه شده به خدمات</h2>
            <WithLoaderAndError {...{ data: descQuery, isLoading: descLoading, isError, error }}>
                <ul>
                    <li key={descQuery?._id}>
                        <span>{descQuery?.fa?.titleSeo}</span>
                        <span>{descQuery?.en?.titleSeo}</span>
                        <span>{descQuery?.fa?.title}</span>
                        <span>{descQuery?.en?.title}</span>
                        <p>{descQuery?.fa?.description}</p>
                        <p>{descQuery?.en?.description}</p>
                    </li>
                </ul>
            </WithLoaderAndError>
        </div>
    )
}

export default AdminServicesContent;