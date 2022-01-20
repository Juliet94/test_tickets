import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './radio-button.module.scss';

export default function RadioButton({ currency }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        className={cn('visually-hidden', styles.input)}
        type="radio"
        name="currency"
      />
      <span className={cn(styles.text, styles[`text_${currency}`])}>
        {currency}
      </span>
    </label>
  );
}

RadioButton.propTypes = {
  currency: PropTypes.string.isRequired,
};
