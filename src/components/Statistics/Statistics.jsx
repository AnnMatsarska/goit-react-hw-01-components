// import { getRandomColor } from './getRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ tittle = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{tittle}</h2>

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
