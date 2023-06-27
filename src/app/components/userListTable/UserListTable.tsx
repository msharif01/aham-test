"use client"

import { Table } from '@mantine/core';

const users = [
  { accountNumber: "001", name: "person A", email: 'personA@gmail.com', phoneNumber: '0111111111' },
  { accountNumber: "002", name: "person B", email: 'personB@gmail.com', phoneNumber: '0122222222' },
  { accountNumber: "003", name: "person C", email: 'personC@gmail.com', phoneNumber: '0133333333' }
];



export default function UserListTable() {
  const rows = users.map((user) => (
    <tr key={user.accountNumber}>
      <td>{user.accountNumber}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
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
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}