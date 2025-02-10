import { createUser } from "@/actions/create-user";
import { SubmitButton } from "@/components/submit-button";

export function PersonalInfo() {
  return (
    <form action={createUser}>
      Personal info
      <SubmitButton />
    </form>
  );
}