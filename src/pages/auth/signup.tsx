import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { userRegister, type UserRegister } from "~/common/schemas/users";
import { api } from "~/utils/api";

export default function SignUpPage() {
  const { handleSubmit, register } = useForm<UserRegister>({
    resolver: zodResolver(userRegister),
  });

  function onSubmit(values: UserRegister) {
    const { mutate } = api.auth.register.useMutation({
      onMutate: () => {
        notifications.show({
          id: "register-account",
          loading: true,
          title: "Registering",
          message: "Your account is registering...",
          autoClose: false,
          withCloseButton: false,
        });
      },
      onSuccess: () => {
        notifications.update({
          id: "register-account",
          color: "teal",
          title: "Register",
          message: "Your account is register",
          icon: <IconCheck size="1rem" />,
          autoClose: 2000,
        });
      },
    });

    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box maw={320} mx="auto">
        <TextInput
          label="Username"
          placeholder="Username"
          withAsterisk
          {...register("username")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          withAsterisk
          {...register("email")}
        />
        <PasswordInput
          mt="md"
          label="Password"
          withAsterisk
          placeholder="Password"
          {...register("password")}
        />
        <PasswordInput
          mt="md"
          label="Confirm password"
          placeholder="Confirm password"
          withAsterisk
          {...register("confirmPassword")}
        />

        <Button mt="md" type="submit">
          Create account
        </Button>
      </Box>
    </form>
  );
}
