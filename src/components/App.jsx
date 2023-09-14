import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friendlist } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './helpers/user.json';
import data from './helpers/data.json';
import friends from './helpers/friends.json';
import transactions from './helpers/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
