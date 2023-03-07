import PropTypes from 'prop-types';
import css from './/style.module.css';

export const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positiveFeedback}</li>
      </ul>
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
};
