import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Notification
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { showNotification } from '@mantine/notifications';
import {siteInfo} from '../siteData/siteInfo';
import { IconCheck } from "@tabler/icons";

// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface FormSubmitState {
  message: string;
  success: boolean;
};

export function ContactUsForm() {
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const [formSubmitState, setFormSubmitState] = useState<FormSubmitState|undefined>(undefined);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
    <form
      onSubmit={form.onSubmit(async (values) => {
        // executeRecaptcha("contactUsForm").then()
        console.log(values);

        const endpoint = "/api/contactus";

        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSON.stringify(values),
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        console.log(result);
        if (result) {
          const responseResult: FormSubmitState = result as FormSubmitState;
          if (responseResult.success) {
            form.reset();
            setFormSubmitState(responseResult)
            showNotification({
              title: siteInfo.emailSentTitle,
              message: siteInfo.emailSentMessage,
              icon: <IconCheck size={16} />
            })
          }
        }
      })}
    >
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Get in touch
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps("email")}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps("subject")}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>

    </>
  );
}
