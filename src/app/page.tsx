"use client";

import { useActionState, JSX } from "react";

import { action } from "../lib/actions";

export default function Home(): JSX.Element {
  const [state, dispatch] = useActionState(action, 0);

  return (
    <div>
      <form action={dispatch}>
        <input type="text" name="input1" />
        <input type="submit" />
      </form>
      Server Actions called {state} times.
    </div>
  );
}
