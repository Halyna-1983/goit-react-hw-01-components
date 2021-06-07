import React from 'react';

// компоненти
import Layout from './components/Layout/Layout'

import user from './data/user.json';
import Profile from './components/Profile/Profile';
import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friendslist from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
//import FriendsListItem from './components/FriendListItem';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';


const App = () => (
  <Layout>
      <h2>Завдання 1 - Profile</h2>
     <Profile 
     name={user.name} 
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}/>

     <h2>Завдання 2 - Statistics</h2>

     <Statistics 
     title="Upload stats" 
     stats={statisticalData} />
     
     <h2>Завдання 3 - FriendList</h2>

     <FriendList 
     friends={friendslist} />

    <h2>Завдання 4 - Transactions</h2>

    <TransactionHistory 
    items={transactions} />
    
    </Layout>
  );


export default App;
