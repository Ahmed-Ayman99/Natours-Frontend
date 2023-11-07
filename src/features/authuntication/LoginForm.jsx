import { useForm } from "react-hook-form";

import ButtonsGroup from "../../UI/ButtonsGroup";
import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";
import useLogIn from "./useLogIn";

const defaultValues = { email: "ahmed@gmail.com", password: "pass1234" };

const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues,
  });
  const { login, isLogin } = useLogIn();
  const { errors } = formState;

  const onHandleSubmit = (data) => login(data);

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="form .form__group">
      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLogin}
          placeholder="you@example.com"
          className="form__input"
          type="email"
          id="email"
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          disabled={isLogin}
          className="form__input"
          placeholder="••••••••"
          type="Password"
          id="Password"
        />
      </FormRow>

      <ButtonsGroup>
        <Button disabled={isLogin} typeStyle="green">
          Login
        </Button>

        <Button type="reset" onClick={reset} disabled={isLogin}>
          cancel
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default LoginForm;
