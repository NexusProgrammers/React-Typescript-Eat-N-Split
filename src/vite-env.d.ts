/// <reference types="vite/client" />

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface FriendProps {
  friend: Friend;
}

interface FriendsListProps {
  friends: Friend[];
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
}

interface FriendProps {
  friend: Friend;
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
}

interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

interface FormSplitBillProps {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
}

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}