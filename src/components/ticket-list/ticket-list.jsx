import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ticket-list.module.scss';

import TicketItem from '../ticket-item/ticket-item';
import { getFilter, getTickets } from '../../store/selectors';
import { filterByStops, sortByPrice } from '../../utils';

export default function TicketList() {
  const tickets = useSelector(getTickets);
  const filter = useSelector(getFilter);

  const filteredTickets = filterByStops(tickets, filter);
  const sortedTickets = sortByPrice(filteredTickets);

  return (
    filteredTickets.length > 0 ? (
      <ul className={styles.list}>
        {sortedTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticketData={ticket} />
        ))}
      </ul>
    ) : (
      <div className={styles.wrapper_not_found}>
        <div className={styles.inner_wrapper}>
          <p>Ничего не найдено. Попробуйте изменить фильтры</p>
        </div>
      </div>
    )
  );
}
