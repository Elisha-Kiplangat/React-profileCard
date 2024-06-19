import './ProfileCard.scss';

const ProfileCard = ({ name, image, bio, age }) => {
  return (
    <>
    
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile.age"><b>Age:</b> {age}</p>
      <p className="profile-bio">{bio}</p>
    </div>

    </>
  );
};

export default ProfileCard;
