import css from './FriendListItem.module.css';

export const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline ? `${css.status} ${css['is-online']}` : `${css.status}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
