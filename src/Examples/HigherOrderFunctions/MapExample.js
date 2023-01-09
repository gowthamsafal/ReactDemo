import React from "react";
const MapExample = () => {
  const data = [
    { id: 1, name: "Safal Do" },
    { id: 2, name: "Victor safal" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user.name}</div>
      ))}
    </div>
  );
};

export default MapExample;
