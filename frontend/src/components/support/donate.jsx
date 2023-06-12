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
          donation: 'Donation',
          inputArea: 'Input Area:',
          companyName: 'Company Name',
          personName: 'Person Name',
          selectType: 'Select Type:',
          typeOfGoods: 'Type of Goods',
          contactNo: 'Contact Number',
          clothes: 'Clothes',
          food: 'Food',
          toys: 'Toys',
        },
      },
    },
    hi: {
      translation: {
        multiform: {
          donation: 'दान',
          inputArea: 'इनपुट क्षेत्र:',
          companyName: 'कंपनी का नाम',
          personName: 'व्यक्ति का नाम',
          selectType: 'प्रकार का चयन करें:',
          typeOfGoods: 'माल का प्रकार',
          contactNo: 'संपर्क संख्या',
          clothes: 'कपड़े',
          food: 'खाद्य',
          toys: 'खिलौने',
        },
      }
    },
    mr: {
      translation: {
        multiform: {
          donation: 'दान',
          inputArea: 'इनपुट क्षेत्र:',
          companyName: 'कंपनीचे नाव',
          personName: 'व्यक्तीचे नाव',
          selectType: 'प्रकार निवडा:',
          typeOfGoods: 'वस्त्राचा प्रकार',
          contactNo: 'संपर्क क्रमांक',
          clothes: 'कपडे',
          food: 'अन्न',
          toys: 'खेळण्याची वस्तू',
        },
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

const DonationForm = () => {

  const [inputArea, setInputArea] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [personName, setPersonName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [inputText, setInputText] = useState('');

  const { t } = useTranslation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the state variables (inputArea, companyName, personName, contactNumber, selectedType)
    // Perform necessary validations and API calls if required
    console.log({
      inputArea,
      companyName,
      personName,
      contactNumber,
      selectedType
    });
    // Reset the form fields
    setInputArea("");
    setCompanyName("");
    setPersonName("");
    setContactNumber("");
    setSelectedType("");
  };

  return (
    <div className="donation-form-mainContainer">
      <div className="kacchi">
        <div className="donation-form-container ">
          <LanguageSelector />
          <h2 className="donation-form-heading">{t('multiform.donation')}.</h2>
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
                {t('multiform.typeOfGoods')}
              </label>
              <select
                id="selectedType"
                className="donation-form-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">{t('multiform.selectType')}</option>
                <option value="clothes">{t('multiform.clothes')}</option>
                <option value="food">{t('multiform.food')}</option>
                <option value="toys">{t('multiform.toys')}</option>
                {/* Add more options as needed */}
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

export default DonationForm;