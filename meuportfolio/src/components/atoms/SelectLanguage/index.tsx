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
    control: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
      width: '10rem',
      textAlign: 'center',
      paddingLeft: '10%',
      borderRadius: '30px',
      border: 0,
      boxShadow: 0,
      background: 'transparent',
      fontSize: '1rem',
      '&:hover': {
        background: 'var(--secondary-linear)',
      }
    }),
    menu: (provided: any) => ({
      ...provided,
      color: 'white',
      background: 'transparent',
      textAlign: 'left',
      fontSize: '1rem',
      paddingLeft: '15%',
    

      
    
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isFocused ? 'var(--back-color)' : 'transparent',
      color: state.isFocused ? 'var(--primary-color)' : 'white',
      borderRadius: '30px',
      '&:active': {
        background: 'transparent',
      }
     
  
    }),

    placeholder: (provided: any) => ({
      ...provided,
      color: 'white',
      outline: '0'
    }),

    input: (provided: any) => ({
      ...provided,
      color: 'white'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),

    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
      color: 'white'
    })
  };

  
  return (
    <Select
    
      value={selectedLanguage}
      onChange={handleLanguageChange}
      options={languageOptions}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      isSearchable={false}
      placeholder="I speak..."
      styles={customStyles}
      hideSelectedOptions={true}
  
    
    
      
    />
  );
};

export default LanguageSelect;
