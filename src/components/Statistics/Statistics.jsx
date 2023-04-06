import PropTypes from "prop-types";
import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>
                <p className={css.statisticsItemText}>Good: {good}</p>
            </li>
            <li className={css.statisticsItem}>
                <p className={css.statisticsItemText}>Neutral: {neutral}</p>
            </li>
            <li className={css.statisticsItem}>
                <p className={css.statisticsItemText}>Bad: {bad}</p>
            </li>
            <li className={css.statisticsItem}>
                <p className={css.statisticsItemText}>Total: {total}</p>
            </li>
            <li className={css.statisticsItem}>
                <p className={css.statisticsItemText}>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;