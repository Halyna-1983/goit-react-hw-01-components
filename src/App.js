import user from './data/user.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json'


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
     {/* <Statistics stats={Statistics.percentage} />; */}

    </div>
  )
}

export default App;
