import { FC } from "react";
import Friend from "./Friend";

interface FriendsListProps {
  friends: Friend[];
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
}

const FriendsList: FC<FriendsListProps> = ({
  friends,
  onSelection,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
