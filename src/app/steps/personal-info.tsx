import { createUser } from "@/app/actions/create-user";
import { SubmitButton } from "@/app/components/submit-button";

export function PersonalInfo() {
  return (
    <form action={createUser}>
      Personal info
      <SubmitButton />
    </form>
  );
}