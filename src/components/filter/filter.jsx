import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './filter.module.scss';
import RadioButton from '../radio-button/radio-button';
import Checkbox from '../checkbox/checkbox';

import { CURRENCY, STOPS } from '../../const';
import { changeFilterStops } from '../../store/actions';

export default function Filter() {
  const dispatch = useDispatch();
  const [stops, setStops] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
  });
  const [allStops, setAllStops] = useState(true);

  useEffect(() => {
    const checkedStops = Object.keys(stops);
    const filteredStops = [];

    checkedStops.forEach((stop) => {
      if (stops[stop]) {
        filteredStops.push(+stop);
      }
    });

    dispatch(changeFilterStops(filteredStops));
  }, [dispatch, stops]);

  useEffect(() => {
    if (stops[0] && stops[1] && stops[2] && stops[3]) {
      setAllStops(true);
    } else {
      setAllStops(false);
    }
  }, [stops]);

  const onCheckboxStopChange = (evt) => {
    setStops((prevState) => ({
      ...prevState,
      [evt.target.value]: evt.target.checked,
    }));

    if (stops[0] && stops[1] && stops[2] && stops[3]) {
      setAllStops(true);
    } else {
      setAllStops(false);
    }
  };

  const onAllStopsChange = () => {
    if (stops[0] && stops[1] && stops[2] && stops[3]) {
      setAllStops(false);
      setStops({
        0: false,
        1: false,
        2: false,
        3: false,
      });
    }

    if (!stops[0] || !stops[1] || !stops[2] || !stops[3]) {
      setAllStops(true);
      setStops({
        0: true,
        1: true,
        2: true,
        3: true,
      });
    }
  };

  const onOnlyButtonClick = (checkbox) => {
    setStops({
      0: false,
      1: false,
      2: false,
      3: false,
      [checkbox]: true,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className="visually-hidden"> Фильтр </h2>
      <form>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            Валюта
          </legend>
          <ul className={styles.list_currency} role="none">
            <li>
              <RadioButton currency={CURRENCY.RUB} />
            </li>
            <li>
              <RadioButton currency={CURRENCY.USD} />
            </li>
            <li>
              <RadioButton currency={CURRENCY.EUR} />
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            Количество пересадок
          </legend>
          <ul className={styles.list_stops} role="none">
            <li className={styles.stop_item}>
              <Checkbox
                stop={STOPS.all.name}
                onChange={onAllStopsChange}
                checkedStop={allStops}
              />
            </li>
            <li className={styles.stop_item}>
              <Checkbox
                stop={STOPS.none.name}
                onChange={onCheckboxStopChange}
                checkedStop={stops[0]}
              />
              <button
                className={styles.button}
                type="button"
                onClick={() => onOnlyButtonClick(STOPS.none.value)}
              >
                Только
              </button>
            </li>
            <li className={styles.stop_item}>
              <Checkbox
                stop={STOPS.one.name}
                onChange={onCheckboxStopChange}
                checkedStop={stops[1]}
              />
              <button
                className={styles.button}
                type="button"
                onClick={() => onOnlyButtonClick(STOPS.one.value)}
              >
                Только
              </button>
            </li>
            <li className={styles.stop_item}>
              <Checkbox
                stop={STOPS.two.name}
                onChange={onCheckboxStopChange}
                checkedStop={stops[2]}
              />
              <button
                className={styles.button}
                type="button"
                onClick={() => onOnlyButtonClick(STOPS.two.value)}
              >
                Только
              </button>
            </li>
            <li className={styles.stop_item}>
              <Checkbox
                stop={STOPS.three.name}
                onChange={onCheckboxStopChange}
                checkedStop={stops[3]}
              />
              <button
                className={styles.button}
                type="button"
                onClick={() => onOnlyButtonClick(STOPS.three.value)}
              >
                Только
              </button>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
}
