import { useState, useEffect } from 'react';

const usePersianNumber = (inputNumber) => {
    
    const numberToPersian = (num) => {
        const persianNumbers = {
            '0': '۰',
            '1': '۱',
            '2': '۲',
            '3': '۳',
            '4': '۴',
            '5': '۵',
            '6': '۶',
            '7': '۷',
            '8': '۸',
            '9': '۹',
        };
        
        return num.toString().split('').map(digit => persianNumbers[digit] || digit).join('');
    }

    const [persianNumber, setPersianNumber] = useState('');

    useEffect(() => {
        setPersianNumber(numberToPersian(inputNumber));
    }, [inputNumber]);

    return persianNumber;
};

export default usePersianNumber;