"use client"

import { Table } from '@mantine/core';
import ActionDropdown from '../actiondropdown/ActionDropdown';
import { createContext } from 'react';
import {User} from '@/app/models/User';

const users = [
  { accountNumber: "001", name: "person A", email: 'personA@gmail.com', phoneNumber: '0111111111' },
  { accountNumber: "002", name: "person B", email: 'personB@gmail.com', phoneNumber: '0122222222' },
  { accountNumber: "003", name: "person C", email: 'personC@gmail.com', phoneNumber: '0133333333' }
];

export type UserContextType = {
  accountNumber: string;
  name: string;
  email: string;
  phoneNumber: string;
};

export const UserContext = createContext<UserContextType | null>(null);

type UserListTableProps = {
  data: typeof User;
};

export default function UserListTable({data}: UserListTableProps) {
  const rows = users.map((user) => (
    <tr key={user.accountNumber}>
      <td>{user.accountNumber}</td>
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
          <th>Account Number</th>
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