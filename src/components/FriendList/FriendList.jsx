import css from './FriendList.module.css';
import { FriendlistItem } from '../FriendListItem/FriendListItem';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendlistItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};
