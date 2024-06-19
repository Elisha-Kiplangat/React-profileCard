import ProfileCard from './components/ProfileCard';
import './App.scss'
import image from './assets/profile-image.jpeg'

function App() {
  const users = [
  {
    name: 'Danny',
    image: image,
    bio: 'Web developer with a passion for creating amazing user experiences.',
    age: 22
  },
  
  {
    name: 'Andrey',
    image: image,
    bio: 'A data scientist.',
    age: 30
  },

  {
    name: 'Santos',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
  },
  {
    name: 'Santos',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
  },
  {
    name: 'John',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
  },
  {
    name: 'Jane',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
  },
  {
    name: 'Ken',
    image: image,
    bio: 'Tech product reviewer.',
    age: 28
  }

  ]

  return (

    <>
    <h2>Profile Cards</h2>
    <div className="App">
      {users.map((userProfile) => (
        <ProfileCard
          name={userProfile.name}
          image={userProfile.image}
          bio={userProfile.bio}
          age={userProfile.age}
        />
      ))
      }
    
      
    </div>
    </>
  );
}

export default App



