"use client"

import { Table } from '@mantine/core';
import ActionDropdown from '../actiondropdown/ActionDropdown';
import { createContext } from 'react';
import {User} from '@/app/models/User';

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