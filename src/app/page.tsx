"use client";

import { useFormState } from "react-dom";

import { action } from "../lib/actions";

export default function Home() {
  const [state, dispatch] = useFormState(action, 0);

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
