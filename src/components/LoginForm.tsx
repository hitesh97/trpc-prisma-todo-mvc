import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userLoginInput, CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { siteInfo } from "../siteData/siteInfo";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Title,
} from "@mantine/core";
import { AppRouter } from "../server/routers/_app";
import { TRPCClientError } from "@trpc/client";

const VerifyToken = ({ hash }: { hash: string }) => {
  const router = useRouter();
  const { data, isLoading } = trpc.user["verify-otp"].useQuery({
    hash,
  });

  if (isLoading) {
    return <p>Verifying...</p>;
  }

  router.push(data?.redirect.includes("login") ? "/" : data?.redirect || "/");

  return <p>Redirecting...</p>;
};

function LoginForm2() {
  const { handleSubmit, register } = useForm<userLoginInput>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { mutate, error } = trpc.user.login.useMutation({
    onSuccess: (token) => {
      router.push(`${router.asPath}#token=${token}`);
    },
  });

  function onSubmit(values: userLoginInput) {
    mutate(values);
  }

  const hash = router.asPath.split("#token=")[1];

  if (hash && hash.length > 0) {
    return <VerifyToken hash={hash} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}

        {success && <p>Check your email</p>}
        <h1>Login</h1>

        <input
          type="email"
          placeholder="jane.doe@example.com"
          {...register("email")}
        />
        <input type="password" {...register("password")} />
        <button>Login</button>
      </form>

      <Link href="/register">Register</Link>
    </>
  );
}

export type LoginType = "login" | "register";
export interface LoginProps {
  logintype: LoginType;
  props?: PaperProps;
}
export function isTRPCClientError(
  cause: unknown
): cause is TRPCClientError<AppRouter> {
  return cause instanceof TRPCClientError;
}

export function LoginForm(props: LoginProps) {
  const [LoginType, setLoginType] = useState(props.logintype);

  const { handleSubmit: handleSubmitLogin, register } =
    useForm<userLoginInput>();
  const [formError, setFormError] = useState({message: ""});
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { mutate, error } = trpc.user.login.useMutation({
    onSuccess: (token) => {
      router.push(`${router.asPath}#token=${token}`);
    },
    onError: (error) => {
      if (isTRPCClientError(error)) {
        if (error.message && error.message.length) {
          const messageParsed = JSON.parse(error.message);
          if (messageParsed && messageParsed.length > 0) {
            console.log("----- logging message :: 2 -----");
            console.log(messageParsed[0].message);
            console.log(messageParsed[0].path[0]);
            console.log("----- logging message  :: 2 -----");
            setFormError(messageParsed);
          }
        }
      }
    },
  });

  function onSubmit(values: userLoginInput) {
    mutate(values);
  }

  const hash = router.asPath.split("#token=")[1];

  if (hash && hash.length > 0) {
    return <VerifyToken hash={hash} />;
  }

  // useEffect(() => {
  //   if (error) {
  //     if (error) {
  //       setFormError(JSON.parse(error.message));
  //     }
  //   }

  // }, [error]);

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
          marginBottom: "20px",
        })}
      >
        Welcome to {siteInfo.companyName}!
      </Title>
      {/* <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text> */}

      <Paper radius="md" p="xl" withBorder {...props}>
        {/* <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text> */}

        {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group> */}

        {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

        <form onSubmit={handleSubmitLogin(onSubmit)}>
          <Stack>
            {formError&& <p>{formError.message}</p>}
            {success && <p>Check your email</p>}

            {LoginType === "register" && (
              <TextInput label="Name" placeholder="Your name" />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...register("email")}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...register("password")}
            />

            {LoginType === "register" && (
              <Checkbox label="I accept terms and conditions" />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() =>
                setLoginType(LoginType === "register" ? "login" : "register")
              }
              size="xs"
            >
              {LoginType === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(LoginType)}</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
export default LoginForm;
