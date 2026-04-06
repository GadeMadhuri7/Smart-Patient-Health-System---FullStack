import CommonLayout from "../components/CommonLayout";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <CommonLayout>
      {(cardStyle) => (
        <div style={cardStyle}>
          <h3>Profile</h3>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Age: {user?.age}</p>
          <p>Gender: {user?.gender}</p>
        </div>
      )}
    </CommonLayout>
  );
}

export default Profile;