import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import '../../../styles/variables.css';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<{ value: string; label: string } | null>(null);

  const handleLanguageChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedLanguage(selectedOption);
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portuguese' },
  ];

  const getOptionLabel = (option: OptionTypeBase) => {
    return (
      <label
        style={{
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'lighter',
          textDecoration: 'none',
          outline: '0',
          cursor: 'pointer',
        }}

        onClick={() => handleLanguageChange(option)}
        >
        {option.label}
      </label>
    );
  };

  return (
    <div>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={languageOptions}
        getOptionLabel={getOptionLabel}
        isSearchable={false}
        placeholder="I speak..."
        styles={{
          control: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            width: 152,
            height: 62,
            padding: '5%',
            borderRadius: 30,
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? '0' : '0',
            background: 'var(--primary-linear)',
            '&:hover': {
              border: state.isFocused ? 0 : 0,
            },
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
            color: state.isFocused ? 'white' : 'white',
            outline: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: 'var(--primary-linear)',
            outline: '0',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'var(--primary-linear)' : 'var(--primary-linear)',
            color: 'var(--primary-linear)',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'var(--primary-linear)', // Update background color on hover
            },
          }),
          placeholder: (provided) => ({
            ...provided,
            color: 'white',
            outline: '0',
            display: 'flex',
            justifyContent: 'center',
          }),
        }}
      />


    </div>
  );
};

export default LanguageSelect;
