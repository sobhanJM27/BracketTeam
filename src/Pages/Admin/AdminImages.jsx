import React, { useRef, useState } from 'react'
import { useAuth, useAuthHooks } from '../../Hooks/useAuth';
import { addImage } from '../../API/Image';
import toast from 'react-hot-toast';
import Button from '../../Components/Button/Button';
import '../CSS/AdminImages.css';
import FormLoader from '../../Components/FormLoader/FormLoader';

const AdminImages = () => {

    const [imgUrl, setImgUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const imagesRef = useRef(null);
    const { token } = useAuth();
    const auth = useAuthHooks();

    const submitImages = async () => {
        if (imagesRef.current?.files) {
            const images = Array.from(imagesRef.current.files);
            setIsLoading(true);
            try {
                const res = await addImage({ token, ...auth }, images);
                toast.success("عکس اضافه شد");
                setImgUrl([...res]); 
            } catch (e) {
                console.log(e);
                toast.error("خطا در افزودن عکس");
            } finally {
                setIsLoading(false); 
            }
        }
    };

    return (
        <div className='image'>
            <h2>مدیریت عکس های وبلاگ</h2>
            <input
                type="file"
                ref={imagesRef}
                name="image"
                multiple
            />
            <Button
                intent='primary'
                size='small'
                label='اظافه کردن عکس'
                onClick={submitImages}
            />
            {isLoading ? <FormLoader /> : ''}
            {imgUrl}
        </div>
    )
};

export default AdminImages;