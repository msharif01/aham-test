"use client"

import { Table } from '@mantine/core';
import ActionDropdown from '../actiondropdown/ActionDropdown';
import { createContext } from 'react';
import {User} from '@/app/models/User';

const users = [
  { accountNumber: "001", name: "person A", email: 'personA@gmail.com', phoneNumber: '0111111111' },
  { accountNumber: "002", name: "person B", email: 'personB@gmail.com', phoneNumber: '0122222222' },
];

export type UserContextType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export const UserContext = createContext<UserContextType | null>(null);

type User = {
  name: string;
  email: string;
  phoneNumber: string;
};


type UserListTableProps = {
  data: User[];
};

export default function UserListTable({data}: UserListTableProps) {
  
  const peopleA = [
    {
        "_id": "649bd0dad21e0abe07cd1ee1",
        "name": "deadlock",
        "email": "deadlockk@gmail.com",
        "phoneNumber": "0111234567",
    },
    {
        "_id": "949bp9dad21e0ibe87cd1ee1",
        "name": "chamber",
        "email": "chamber@gmail.com",
        "phoneNumber": "014434567",
    },
  ];

  const peopleB = [
    {
        _id: "649bd0dad21e0abe07cd1ee1",
        name: "deadlock",
        email: "deadlockk@gmail.com",
        phoneNumber: "0111234567",
    },
    {
        _id: "949bp9dad21e0ibe87cd1ee1",
        name: "chamber",
        email: "chamber@gmail.com",
        phoneNumber: "014434567",
    },
  ];

  const rows = data.map((user) => (
    <tr key={user.email}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>
        <UserContext.Provider value={user}>
        <ActionDropdown />
        </UserContext.Provider>
        </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}