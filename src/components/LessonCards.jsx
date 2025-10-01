import PropTypes from 'prop-types';

const LessonCard = ({ title, content }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginTop: '30px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  };

  const titleStyle = {
    fontSize: '1.1em',
    marginBottom: '10px',
    borderBottom: '1px solid #eee',
    paddingBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  };

  const contentStyle = {
    whiteSpace: 'pre-wrap',
    fontSize: '0.9em',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

LessonCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default LessonCard;
