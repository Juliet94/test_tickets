import React from 'react';
import PropTypes from 'prop-types';
import styles from './ticket-item.module.scss';
import logo from './turkish-airlines.svg';

import { adaptDate, declOfNum } from '../../utils';

import FlightInfo from '../flight-info/flight-info';

const STOP_TITLES = ['пересадка', 'пересадки', 'пересадок'];

export default function TicketItem({ ticketData }) {
  const {
    origin,
    originName,
    destination,
    destinationName,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    stops,
    price,
  } = ticketData;

  const adaptedDepartureDate = adaptDate(departureDate);
  const adaptedArrivalDate = adaptDate(arrivalDate);

  return (
    <li className={styles.item}>
      <div className={styles.inner_wrapper}>
        <img className={styles.img} src={logo} width={100} alt="Логотип авиакомпании Turkish Airlines" />
        <button className={styles.button} type="button">
          Купить
          <br />
          {`за ${price} ₽`}
        </button>
      </div>
      <div className={styles.info}>
        <FlightInfo
          time={departureTime}
          place={origin}
          placeName={originName}
          date={adaptedDepartureDate}
        />
        <div className={styles.transfer_wrapper}>
          <span className={styles.transfer}>
            {stops > 0 ? `${stops} ${declOfNum(stops, STOP_TITLES)}` : 'Без пересадок'}
          </span>
        </div>
        <FlightInfo
          destination
          time={arrivalTime}
          place={destination}
          placeName={destinationName}
          date={adaptedArrivalDate}
        />
      </div>
    </li>
  );
}

TicketItem.propTypes = {
  ticketData: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    originName: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destinationName: PropTypes.string.isRequired,
    departureDate: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    arrivalDate: PropTypes.string.isRequired,
    arrivalTime: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
