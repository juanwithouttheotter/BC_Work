import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";



function App() {
  const card =[];
  for (const friend of friends){
    card.push(<FriendCard
      name={friend.name}
      image={friend.image}
      occupation={friend.occupation}
      location={friend.location}
    ></FriendCard>)
  }

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {card}
      {friends.map(friend => (
        <FriendCard
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        />
      ))}
    </Wrapper>
  );
}



export default App
