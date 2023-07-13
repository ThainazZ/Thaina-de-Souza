import React, { useState } from 'react';
import Select from 'react-select';
import '../../../styles/variables.css';

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portuguese' },
  ];

  return (
    <div>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={languageOptions}
        styles={{
          control: (provided, state) => ({
            ...provided,
            width: 152,
            height: 62,
            borderColor: state.isFocused ? 'transparent' : 'transparent',
            borderRadius: 30,
            outline: 0,
            background: 'var(--primary-linear)',
            
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelect;
