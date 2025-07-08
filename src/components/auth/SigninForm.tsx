import { Flex, Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon,LockClosedIcon } from "@radix-ui/react-icons";
import { TextField } from '@radix-ui/themes';

import React from "react";

function SigninForm() {
  return (
    <Flex direction="column" gap="2" width="300px">
      <label htmlFor="email">Email</label>
      <TextField.Root
        type="email"
        placeholder="email@admin.com"
        autoFocus
      >
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root
        type="password"
        placeholder="••••••••"
      >
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Button>Sign In</Button>
    </Flex>
  );
}

export default SigninForm;
