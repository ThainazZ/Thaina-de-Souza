import { useState } from 'react';
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

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      display: 'flex',
      textAlign: 'center',
      width: 162,
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
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
      color: 'white',
      outline: 'none',
      display: 'flex',
      textAlign: 'center',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: 'var(--primary-linear)',
      outline: '0',
      display: 'flex',
      justifyContent: 'center',
      color: 'white'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'var(--primary-linear)' : 'var(--primary-linear)',
      color: state.isSelected ? 'white' : 'var(--primary-linear)',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'var(--primary-linear)',
        color: 'white',
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'white',
      outline: '0',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
    }),
    input: (provided: any) => ({
      ...provided,
      color: 'white',
      display: ' flex',
      textAlign: 'center'
    }),
  };

  return (
    <div>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={languageOptions}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        isSearchable={false}
        placeholder="I speak..."
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelect;
