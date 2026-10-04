import React, { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';
import './CSS/Language.css'; 
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: 'en', name: 'ENG', flag: 'US' }, 
  { code: 'fi', name: 'FIN', flag: 'FI' },
];

export const CustomLanguageSelector = ({ onChange }) => {
  
  const [selected, setSelected] = useState(i18n.language || 'en');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  const handleLangChange = (lng) => {
    setSelected(lng);
  };

  i18n.on('languageChanged', handleLangChange);

  return () => {
    i18n.off('languageChanged', handleLangChange);
  };
}, []);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== selected) {
      i18n.changeLanguage(savedLang);
      setSelected(savedLang);
    }
  }, []);

const handleChange = (selectedLang) => {
  const previousLang = selected;
  setSelected(selectedLang);
  i18n.changeLanguage(selectedLang);
  localStorage.setItem('language', selectedLang);
  if (onChange) onChange(selectedLang);
  setOpen(false);

  if (previousLang !== selectedLang) {
    console.log(`Language chanced: ${previousLang.toUpperCase()} ➡ ${selectedLang.toUpperCase()}`);
  }
};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLang = languages.find(l => l?.code === selected);

  return (
    <div className="language_dropdown-wrapper" ref={dropdownRef}>
      <button
        className="language_dropdown-toggle"
        onClick={() => setOpen(!open)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
<span className="language_selected">
  <ReactCountryFlag
    countryCode={selectedLang?.flag}
    svg
    className="language_flag"
    style={{ width: '24px', height: '24px' }}
  />
  {selectedLang?.name}
</span>
        <span
          className={`language_arrow ${open ? 'language_arrow-up' : 'language_arrow-down'}`}
        />
      </button>

{open && (
  <ul className="language_dropdown-menu" role="listbox">
    {languages
      .filter(lang => lang.code !== selected) // poista valittu kieli
      .map(lang => (
<li
  key={lang?.code}
  role="option"
  aria-selected={selected === lang.code}
  tabIndex={0}
  className="language_option"
  onClick={() => handleChange(lang.code)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleChange(lang?.code);
    }
  }}
>
  <ReactCountryFlag
    countryCode={lang?.flag}
    svg
    className="language_flag"
    style={{
      width: '24px',
      height: '24px',
      marginRight: '8px'
    }}
  />
  {lang.name}
</li>
      ))}
  </ul>
)}
    </div>
  );
};
