import React from 'react';
import styles from './main-page.module.scss';

import TicketList from '../ticket-list/ticket-list';
import Filter from '../filter/filter';

export default function MainPage() {
  return (
    <main>
      <h1 className="visually-hidden"> Продажа авиа билетов </h1>
      <section className={styles.section}>
        <Filter />
        <TicketList />
      </section>
    </main>
  );
}
