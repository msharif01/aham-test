"use client";

import { useRouter } from "next/navigation";
import { Select } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userListTable/UserListTable";

import { Dialog, Group, Text, Button } from "@mantine/core";
// import useSWR from "swr";

export default function ActionDropdown() {
  const user = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("/api/users", {
        cache: "no-store",
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json()

      setData(data);
      setIsLoading(false);
    };
    getData()
  }, []);

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
      setData(data)
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
