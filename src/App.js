import user from './data/user.json';
import Profile from './components/Profile';
import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics';
import friendslist from './data/friends.json';
import FriendList from './components/FriendList';
//import FriendsListItem from './components/FriendListItem';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory';


function App() {
  return (
    <div style={{
      backgroundColor: 'Highlight',
      color: 'tomato'
    }}>
      <h1>Завдання 1 - Profile</h1>
     <Profile 
     name={user.name} 
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}/>

     <h1>Завдання 2 - Statistics</h1>

     <Statistics 
     title="Upload stats" 
     stats={statisticalData} />
     
     <h1>Завдання 3 - FriendList</h1>

     <FriendList 
     friends={friendslist} />,

    <h1>Завдання 4 - Transactions</h1>

    <TransactionHistory 
    items={transactions} />;
    
    </div>
  )
}

export default App;
