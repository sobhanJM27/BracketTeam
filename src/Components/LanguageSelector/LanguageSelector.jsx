import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ languages, selectedLang, onChange }) => {
  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <label
          key={lang.value}
          className={`language-option ${
            selectedLang === lang.value ? 'selected' : ''
          }`}
        >
          <input
            type="radio"
            value={lang.value}
            checked={selectedLang === lang.value}
            onChange={() => onChange(lang.value)}
          />
          {lang.label}
        </label>
      ))}
    </div>
  );
};

export default LanguageSelector;
