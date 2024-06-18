import ProfileCard from './components/ProfileCard';
import './App.css'
import image from './assets/profile-image.jpeg'

function App() {
  const userProfile = {
    name: 'Danny',
    image: image,
    bio: 'Web developer with a passion for creating amazing user experiences.',
    age: 22
  };

  const userProfile2 = {
    name: 'Andrey',
    image: image,
    bio: 'A data scientist.',
    age: 30
  };

  const userProfile3 = {
    name: 'Santos',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
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



