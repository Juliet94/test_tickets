import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './checkbox.module.scss';

import { STOPS } from '../../const';

export default function Checkbox({ stop, onChange, checkedStop }) {
  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        className={cn('visually-hidden', styles.input)}
        type="checkbox"
        value={STOPS[stop].value}
        onChange={onChange}
        checked={checkedStop}
      />
      <span className={styles.text}>
        {STOPS[stop].desc}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  stop: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedStop: PropTypes.bool.isRequired,
};
