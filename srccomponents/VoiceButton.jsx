import PropTypes from 'prop-types';

const VoiceButton = ({ isListening, onClick, disabled }) => {
  const buttonStyle = {
    padding: '20px 40px',
    fontSize: '1.2em',
    borderRadius: '50px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: isListening ? '#ff4d4f' : '#187bcd',
    color: 'white',
    transition: 'background-color 0.3s',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  return (
    <button 
      style={buttonStyle} 
      onClick={onClick} 
      disabled={disabled}
    >
      {disabled 
        ? 'Loading Model...' 
        : isListening 
          ? '🛑 Stop & Translate' 
          : '🎙️ Start Speaking'}
    </button>
  );
};

VoiceButton.propTypes = {
  isListening: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default VoiceButton;
