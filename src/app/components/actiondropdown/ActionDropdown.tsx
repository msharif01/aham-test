"use client";

import { useRouter } from "next/navigation";
import { Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userListTable/UserListTable";

import { Dialog, Group, Text, Button } from "@mantine/core";
import { FlagContext } from "@/app/userList/page";

export default function ActionDropdown() {
  const user = useContext(UserContext);
  const deleteFlag = useContext(FlagContext);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleChange = (value: string | null) => {
    if (value === "view") {
      router.push(`/userList/${user?._id}`);
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

  const deleteUser = async (id: string) => {
    try {
      await fetch(`/api/users/${user?._id}`, {
        method: "DELETE",
      });

      const res = await fetch("/api/users", {
        cache: "no-store",
      });

      handleClose()
      deleteFlag?.setIsUserDeleted?.(true);
      router.push("/userList")
    } catch (err) {
      console.log(err);
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
              if (user?._id) {
                deleteUser(user._id);
              }
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
