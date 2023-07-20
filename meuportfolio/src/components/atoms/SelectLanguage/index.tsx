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

  const primaryLinearColor = 'var(--primary-linear)';

  const customOptionLabel = (option: any) => {
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

  const CustomIndicator = (props: any) => {
    return (
      <div
        style={{
          ...props.getStyles('indicatorContainer', props),
          transform: props.isFocused ? 'rotate(180deg)' : 'none',
          color: props.isFocused ? 'white' : 'white',
          outline: 'none',
        }}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div>
      <Select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        options={languageOptions}
        getOptionLabel={customOptionLabel}
        isSearchable={false}
        placeholder="I speak..."
        styles={{
          control: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            width: 162,
            height: 62,
            padding: '5%',
            borderRadius: 30,
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? '0' : '0',
            background: primaryLinearColor,
            '&:hover': {
              border: state.isFocused ? 0 : 0,
            },
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? 'white' : 'white',
            outline: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: primaryLinearColor,
            outline: '0',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? primaryLinearColor : primaryLinearColor,
            color: primaryLinearColor,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: primaryLinearColor, // Update background color on hover
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
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: CustomIndicator,
        }}
      />
    </div>
  );
};

export default LanguageSelect;
