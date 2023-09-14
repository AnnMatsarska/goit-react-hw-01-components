import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transactions-history']}>
      <thead>
        <tr className={css['title-row']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.row} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
