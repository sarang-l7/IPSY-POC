"use client";
import { useState } from "react";
import { Box, Button, Field, Input, Stack, Spinner } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("signin", {
      email: formData.email,
      password: formData.password,
    });

    if (result?.ok) {
      window.location.reload();
    }
    setLoading(false);
  };

  return (
    <Box maxW="400px" mx="auto" m="4" p="4" boxShadow="xs">
      <form onSubmit={handleSubmit}>
        <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
          <Field.Root orientation="horizontal">
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="me@example.com"
              flex="1"
              onChange={handleChange}
              name="email"
              p="1"
            />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Password</Field.Label>
            <Input
              placeholder="***"
              flex="1"
              onChange={handleChange}
              name="password"
              type="password"
              p="1"
            />
          </Field.Root>
          <Button type="submit" loading={loading}>
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
