"use client";

import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function UserForm() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          withAsterisk
        />

        <Checkbox
          mt="md"
          label="I agree with the terms and conditions"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit" className="outline_btn">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
