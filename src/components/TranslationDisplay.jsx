import PropTypes from 'prop-types';

const TranslationDisplay = ({ text, isListening, isLoadingWasm }) => {
  let backgroundColor = '#e3f2fd'; // Default blue-light
  if (isListening) {
    backgroundColor = '#ffebee'; // Listening red-light
  } else if (isLoadingWasm) {
    backgroundColor = '#fff3e0'; // Loading amber-light
  }

  const style = {
    minHeight: '150px',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '10px',
    backgroundColor: backgroundColor,
    color: '#333',
    textAlign: 'left',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.5s',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.4em',
    fontWeight: 'bold',
    whiteSpace: 'pre-wrap', // Preserve formatting
  };

  return (
    <div style={style}>
      {text}
    </div>
  );
};

TranslationDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  isListening: PropTypes.bool,
  isLoadingWasm: PropTypes.bool,
};

export default TranslationDisplay;
