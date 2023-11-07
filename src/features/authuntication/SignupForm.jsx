import { useForm } from "react-hook-form";

import ButtonsGroup from "../../UI/ButtonsGroup";
import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";
import useSignUp from "./useSignUp";

const SignupForm = () => {
  const { getValues, register, reset, handleSubmit, formState } = useForm();
  const { signup, isSignup } = useSignUp();
  const { errors } = formState;

  const handleOnSubmit = (data) => signup(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="form form--signup">
      <FormRow label="name" error={errors?.name?.message}>
        <input
          {...register("name", {
            required: "This field is required",
          })}
          disabled={isSignup}
          className="form__input"
          id="name"
          type="text"
          placeholder="name"
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isSignup}
          placeholder="you@example.com"
          className="form__input"
          type="email"
          id="email"
        />
      </FormRow>

      <FormRow label="New Password" error={errors?.Password?.message}>
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isSignup}
          className="form__input"
          autoComplete="new-password"
          id="Password"
          type="password"
          placeholder="••••••••"
        />
      </FormRow>

      <FormRow
        label="Password Confirm"
        error={errors?.passwordConfirm?.message}
      >
        <input
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
          disabled={isSignup}
          className="form__input"
          autoComplete="new-password"
          id="passwordConfirm"
          type="password"
          placeholder="••••••••"
        />
      </FormRow>

      <ButtonsGroup>
        <Button disabled={isSignup} typeStyle="green">
          Sign up
        </Button>

        <Button type="reset" onClick={reset} disabled={isSignup}>
          cancel
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default SignupForm;
