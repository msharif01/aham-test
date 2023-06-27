"use client";

import { useRouter } from "next/navigation";
import { Select } from "@mantine/core";
import { useContext, useState } from "react";
import { UserContext } from "../userListTable/UserListTable";

import { Dialog, Group, Text, Button } from "@mantine/core";

export default function ActionDropdown() {
  const user = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleChange = (value: string | null) => {
    if (value === "view") {
      router.push(`/userList/${user?.accountNumber}`);
    } else if (value === "delete") {
      handleClickOpen();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // TODO: API DELETE
  const deleteUser = async () => {
    try {
      const isRedeem = true;
      handleClose();
      // setData(newData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Select
        placeholder="Action"
        data={[
          { value: "view", label: "View" },
          { value: "delete", label: "Delete" },
        ]}
        onChange={handleChange}
      />

      <Dialog
        opened={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Are you sure to delete this user ?
        </Text>

        <Group align="flex-end">
          <Button
          className="outline_btn"
            autoFocus
            onClick={() => {
              deleteUser();
            }}
          >
            Yes
          </Button>

          <Button className="black_btn" autoFocus onClick={() => handleClose()}>
            No
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
