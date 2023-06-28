"use client";

import { UserData } from "@/app/userList/[id]/page";
import { TextInput, Button, Group, Box, Dialog, Text } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useRouter } from "next/navigation";
import { useState } from "react";

type UserFormProps = {
  data: UserData;
};

export default function UserForm({ data }: UserFormProps) {
  const [error, setError] = useState<Error | null>(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (values: Record<string, string>) => {
    const { name, email, phoneNumber } = values;

    try {
      const res = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
        }),
      });

      res.status === 201 && router.push("/userList");      
    } catch (err) {
      console.error(err);
      setError(err as Error);
    }
  };

  const form = useForm({
    initialValues: {
      name: data?.name || "",
      email: data?.email || "",
      phoneNumber: data?.phoneNumber || "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (<>
      <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Full Name"
          placeholder="Siti Nurhaliza Binti Kahar"
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <TextInput
          withAsterisk
          label="Phone Number"
          placeholder="0137614520"
          {...form.getInputProps("phoneNumber")}
        />

        <Group position="right" mt="md">
          <Button type="submit" className="outline_btn">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
    </>

  );
}
