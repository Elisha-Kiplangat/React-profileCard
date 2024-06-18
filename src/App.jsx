import ProfileCard from './components/ProfileCard';
import './App.css'

function App() {
  const userProfile = {
    name: 'John Doe',
    image: '',
    bio: 'Web developer with a passion for creating amazing user experiences.',
    age: 30
  };

  const userProfile2 = {
    name: 'John Doe',
    image: './assets/profile-image',
    bio: 'Web developer with a passion for creating amazing user experiences.',
    age: 30
  };

  const userProfile3 = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/100',
    bio: 'Web developer with a passion for creating amazing user experiences.',
    age: 30
  };

  return (

    <>
    <h2>Profile Cards</h2>
    <div className="App">
      <ProfileCard
        name={userProfile.name}
        image={userProfile.image}
        bio={userProfile.bio}
        age={userProfile.age}
      />

      <ProfileCard
        name={userProfile2.name}
        image={userProfile2.image}
        bio={userProfile2.bio}
        age={userProfile2.age}
      />

      <ProfileCard
        name={userProfile3.name}
        image={userProfile3.image}
        bio={userProfile3.bio}
        age={userProfile3.age}
      />
    </div>
    </>
  );
}

export default App



