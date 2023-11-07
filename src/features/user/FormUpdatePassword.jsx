import { useForm } from "react-hook-form";

import useUpdatePassword from "../authuntication/useUpdatePassword";
import ButtonsGroup from "../../UI/ButtonsGroup";
import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";

const FormUpdatePassword = () => {
  const { register, formState, getValues, reset, handleSubmit } = useForm();
  const { updatePassword, isLoading } = useUpdatePassword();

  const { errors } = formState;

  const onHandleSubmit = (data) => {
    updatePassword(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="form form-user-data"
    >
      <FormRow
        label="Current Password"
        error={errors?.currentPassword?.message}
      >
        <input
          {...register("currentPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isLoading}
          className="form__input"
          autoComplete="new-password"
          id="password-current"
          type="password"
          placeholder="••••••••"
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
          disabled={isLoading}
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
          disabled={isLoading}
          className="form__input"
          autoComplete="new-password"
          id="passwordConfirm"
          type="password"
          placeholder="••••••••"
        />
      </FormRow>

      <ButtonsGroup>
        <Button disabled={isLoading} typeStyle="green">
          Save password
        </Button>

        <Button type="reset" onClick={reset} disabled={isLoading}>
          cancel
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default FormUpdatePassword;
