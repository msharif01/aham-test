"use client";

import { Select } from '@mantine/core';

export default function ActionDropdown(){
  return (
    <Select
      placeholder="Action"
      data={[
        { value: 'view', label: 'View' },
        { value: 'delete', label: 'Delete' },
      ]}
    />
  );
}