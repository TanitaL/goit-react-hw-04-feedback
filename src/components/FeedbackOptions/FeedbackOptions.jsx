import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

const FeedbackOptions = ({options, onLeaveFeedback }) => { 
    return (
        <div>
            {options.map(option => {
                return (
                    <button type="button" onClick={() => onLeaveFeedback(option)}
                    className={css.btn}
                    key={option}
                >
                    {option}
                </button>
                );
            })}
        </div>)
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default FeedbackOptions;
