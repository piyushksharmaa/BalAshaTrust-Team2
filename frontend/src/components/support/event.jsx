import "./DonationForm.css";
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const React = require('react');
const { useState } = require('react');
// Initialize i18next with the translations
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        multiform: {
          headline: 'Celebrate An Event',
          inputArea: 'Area:',
          companyName: 'Company Name',
          personName: 'Person Name',
          selectType: 'Select Type:',
          typeOfEvent: 'Type of Event',
          contactNo: 'Contact Number',
          bdayParty: 'Birthday Party',
          aParty: 'Anniversary Party',
          festival: 'Festival',
          specialDay: 'Any special day'
        },
      },
    },
    hi: {
      translation: {
        multiform: {
          headline: "जश्न मनाएं",
          inputArea: "इनपुट क्षेत्र:",
          companyName: "कंपनी का नाम",
          personName: "व्यक्ति का नाम",
          selectType: "प्रकार का चयन करें:",
          typeOfEvent: "माल का प्रकार",
          contactNo: "संपर्क संख्या",
          bdayParty: "जन्मदिन पार्टी",
          aParty: "वार्षिकोत्सव पार्टी",
          festival: "त्योहार",
          specialDay: "कोई विशेष दिन"
        }
        ,
      }
    },
    mr: {
      translation: {
        multiform: {
          headline: 'कार्यक्रम साजरा करा',
          inputArea: 'इनपुट क्षेत्र:',
          companyName: 'कंपनीचे नाव',
          personName: 'व्यक्तीचे नाव',
          selectType: 'प्रकार निवडा:',
          typeOfEvent: 'वस्त्राचा प्रकार',
          contactNo: 'संपर्क क्रमांक',
          bdayParty: 'वाढदिवस पार्टी',
          aParty: 'वाढदिवस सोहळा',
          festival: 'सण',
          specialDay: 'कोणताही विशेष दिवस'
        }
        ,
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
});

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="mr">मराठी</option>
      {/* Add more language options as needed */}
    </select>
  );
}

const EventForm = () => {
  const [inputArea, setInputArea] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [personName, setPersonName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { t } = useTranslation();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log({
      inputArea,
      companyName,
      personName,
      contactNumber,
      selectedType
    });

    setInputArea("");
    setCompanyName("");
    setPersonName("");
    setContactNumber("");
    setSelectedType("");
  };

  return (
    <div className="donation-form-mainContainer">
      <div className="kacchi">
        <div className="donation-form-container">
          <LanguageSelector />
          <h2 className="donation-form-heading">{t('multiform.headline')}</h2>
          <form className="donation-form" onSubmit={handleFormSubmit}>
            <div className="donation-form-group">
              <label htmlFor="inputArea" className="donation-form-label">
                {t('multiform.inputArea')}
              </label>
              <textarea
                id="inputArea"
                className="donation-form-textarea"
                value={inputArea}
                onChange={(e) => setInputArea(e.target.value)}
              ></textarea>
            </div>

            <div className="donation-form-group">
              <label htmlFor="companyName" className="donation-form-label">
                {t('multiform.companyName')}
              </label>
              <input
                type="text"
                id="companyName"
                className="donation-form-input"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="donation-form-group">
              <label htmlFor="personName" className="donation-form-label">
                {t('multiform.personName')}
              </label>
              <input
                type="text"
                id="personName"
                className="donation-form-input"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
              />
            </div>

            <div className="donation-form-group">
              <label htmlFor="contactNumber" className="donation-form-label">
                {t('multiform.contactNo')}
              </label>
              <input
                type="tel"
                id="contactNumber"
                className="donation-form-input"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            <div className="donation-form-group">
              <label htmlFor="selectedType" className="donation-form-label">
                {t('multiform.typeOfEvent')}
              </label>
              <select
                id="selectedType"
                className="donation-form-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">{t('multiform.selectType')}</option>
                <option value="Birthday">{t('multiform.bdayParty')}</option>
                <option value="Anniversary Party">{t('multiform.aParty')}</option>
                <option value="Festival">{t('multiform.festival')}</option>
                <option value="Special">{t('multiform.specialDay')}</option>

              </select>
            </div>

            <button type="submit" className="donation-form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      );
};

      export default EventForm;
