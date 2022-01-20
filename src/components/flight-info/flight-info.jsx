import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './flight-info.module.scss';

export default function FlightInfo({
  destination, time, place, placeName, date,
}) {
  const year = date.getFullYear();
  const month = date.toLocaleString('ru', {
    month: 'short',
  });
  const day = date.getDate();
  const weekday = date.toLocaleString('ru', {
    weekday: 'short',
  });

  return (
    <div className={cn(styles.wrapper, destination && styles.wrapper_destination)}>
      <span className={styles.time}>
        {time}
      </span>
      <span>
        {`${place}, ${placeName}`}
      </span>
      <span className={styles.date}>
        {`${day} ${month} ${year}, ${weekday}`}
      </span>
    </div>
  );
}

FlightInfo.propTypes = {
  destination: PropTypes.bool,
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

FlightInfo.defaultProps = {
  destination: false,
};
