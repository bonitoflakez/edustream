const Profile = () => {
  const name = "John Doe";
  const username = "johndoe123";
  const studyTime = "10 hours";

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-gray-100 rounded-lg shadow-sm p-6 w-80 flex flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center mb-4">
          <img src="https://avatars.githubusercontent.com/u/83662512?s=200&v=4" className="object-fit w-full h-full"/>
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500 mb-2">@{username}</p>
        <p className="text-gray-500">Total study/stream time: {studyTime}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium urna vel nisi posuere blandit.
            Vestibulum id feugiat sapien, eget euismod elit.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Interests/Hobbies</h3>
          <p className="text-gray-600">
            Reading, hiking, coding, photography
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <ul className="list-disc text-gray-600">
            <li>Completed React course with distinction</li>
            <li>Won first prize in coding competition</li>
            <li>Published article in tech magazine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
