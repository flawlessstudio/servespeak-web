import PropTypes from 'prop-types';

const LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  zh: 'Chinese',
  ja: 'Japanese',
};

const LanguageSelector = ({ sourceLang, targetLang, onSourceChange, onTargetChange, onSwap }) => {
  const selectStyle = {
    padding: '10px',
    margin: '0 10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  const swapButtonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ddd',
    cursor: 'pointer',
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  };

  return (
    <div style={containerStyle}>
      <select 
        style={selectStyle} 
        value={sourceLang} 
        onChange={(e) => onSourceChange(e.target.value)}
      >
        {Object.entries(LANGUAGES).map(([code, name]) => (
          <option key={code} value={code}>{name} (Source)</option>
        ))}
      </select>

      <button style={swapButtonStyle} onClick={onSwap} title="Swap Languages">
        🔄
      </button>

      <select 
        style={selectStyle} 
        value={targetLang} 
        onChange={(e) => onTargetChange(e.target.value)}
      >
        {Object.entries(LANGUAGES).map(([code, name]) => (
          <option key={code} value={code}>{name} (Target)</option>
        ))}
      </select>
    </div>
  );
};

LanguageSelector.propTypes = {
  sourceLang: PropTypes.string.isRequired,
  targetLang: PropTypes.string.isRequired,
  onSourceChange: PropTypes.func.isRequired,
  onTargetChange: PropTypes.func.isRequired,
  onSwap: PropTypes.func.isRequired,
};

export default LanguageSelector;
