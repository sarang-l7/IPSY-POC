"use client";
// import { trpc } from "@ipsy/trpc/src/client";
import { useState } from "react";
import { Box, Button, Field, Input, Stack } from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  //   const mutation = trpc.login.login.useMutation({
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //     onError: (error) => {
  //       console.error(`Error: ${error.message}`);
  //     },
  //   });

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, "formdata");
    // mutation.mutate({ email: formData.email, password: formData.password });
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (!res.ok) {
      // setError("Invalid email or password");
      return;
    }

    window.location.reload();
  };
  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="50px"
      p="4"
      boxShadow="md"
      borderRadius="lg"
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
          <Field.Root orientation="horizontal">
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="me@example.com"
              flex="1"
              onChange={handleChange}
              name="email"
            />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Password</Field.Label>
            <Input
              placeholder="***"
              flex="1"
              onChange={handleChange}
              name="password"
            />
          </Field.Root>
          {/* {mutation.isError && <div>Check the inputs</div>} */}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
