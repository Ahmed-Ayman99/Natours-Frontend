import { useForm } from "react-hook-form";

import ButtonsGroup from "../../UI/ButtonsGroup";
import useUser from "../authuntication/useUser";
import useUpdateUser from "./useUpdateUser";
import FormRow from "../../UI/FormRow";
import Spinner from "../../UI/Spinner";
import Button from "../../UI/Button";
import Error from "../../UI/Error";
import Img from "../../UI/Img";

const FormUpdateUser = () => {
  const { user, isLoading, error } = useUser();
  const { register, reset, handleSubmit, formState } = useForm({
    defaultValues: { email: user.email, name: user.name, photo: user.photo },
  });

  const { updateUser, isUpdating } = useUpdateUser();
  const { errors } = formState;

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;

  const onHandleSubmit = (data) => {
    const form = new FormData();
    const photo = typeof data.photo === "string" ? data.photo : data.photo[0];

    form.append("name", data.name);
    form.append("email", data.email);
    form.append("photo", photo);

    updateUser(form, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="form form-user-data"
    >
      <FormRow label="name" error={errors?.name?.message}>
        <input
          {...register("name", {
            required: "This field is required",
            minLength: 5,
          })}
          disabled={isLoading}
          className="form__input"
          id="name"
          type="text"
        />
      </FormRow>

      <FormRow label="email">
        <input
          disabled
          {...register("email")}
          className="form__input"
          id="email"
          type="email"
          value={user.email}
        />
      </FormRow>

      <div className="form__group form__photo-upload">
        <Img
          className="form__user-photo"
          src={`/users/${user.photo}`}
          alt="User photo"
        />

        <FormRow label="Upload Photo ">
          <input
            {...register("photo")}
            disabled={isUpdating}
            name="photo"
            id="photo"
            type="file"
            accept="image/*"
            className="form__upload"
          />
        </FormRow>
      </div>

      <ButtonsGroup>
        <Button disabled={isUpdating} typeStyle="green">
          Save settings
        </Button>

        <Button type="reset" onClick={reset} disabled={isUpdating}>
          cancel
        </Button>
      </ButtonsGroup>
    </form>
  );
};

export default FormUpdateUser;
