"use client";
import { trpc } from "@myorg/trpc/src/client";
export function Login() {
  const mutation = trpc.login.useMutation({
    // onSuccess: (data) => {
    //   alert(`Mutation successful: ${data}`);
    // },
    // onError: (error) => {
    //   alert(`Error: ${error.message}`);
    // },
  });
  const handleLogin = () => {
    const name = "John Doe";
    mutation.mutate({ name });
  };
  return (
    <div>
      <h1>Login Form</h1>
      <button onClick={handleLogin} disabled={mutation.isPending}>
        Login
      </button>
      {mutation.isPending && <p>Loading...</p>}
      {mutation.isError && <p>Error: {mutation.error?.message}</p>}
      {mutation.isSuccess && <p>Response: {mutation.data.user.name}</p>}
    </div>
  );
}
