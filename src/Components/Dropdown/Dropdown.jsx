import React, { useState } from 'react';
import './Dropdown.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = ({ options, onChange, selected }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        if (option && option.value) {
            setSelectedOption(option);
            onChange(option.value);  
            setIsOpen(false);
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption.label}
                <ArrowDropDownIcon className={`arrow ${isOpen ? 'up' : 'down'}`} />
            </div>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;

 