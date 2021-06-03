import user from './user.json';
import Profile from './Profile';


function App() {
  return (
    <div style={{
      backgroundColor: 'Highlight',
      color: 'tomato'
    }}>
     <Profile 
     name={user.name} 
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}/>
    </div>
  );
}

export default App;
