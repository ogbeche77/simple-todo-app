import React from "react";
import { useForm } from "react-hook-form";

interface ChatName {
  name: string;
  lastName: string;
}

const Chat: React.FC<ChatName> = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo-text">
        <strong> First Name </strong>
      </label>
      <input
        type="text"
        placeholder="First Name"
        id="todo-text"
        name="firstname"
        ref={register}
      />{" "}
      {/* register an input */}
      <label htmlFor="todo-text">
        <strong> Last Name </strong>
      </label>
      <input
        type="text"
        placeholder="Last Name"
        id="todo-text"
        name="lastname"
        ref={register({ required: true })}
      />
      {errors.lastname && "Last name is required."}
      <label htmlFor="todo-text">
        <strong> Age </strong>
      </label>
      <input
        type="text"
        placeholder="Age"
        id="todo-text"
        name="age"
        ref={register({ pattern: /\d+/ })}
      />
      {errors.age && "Please enter number for age."}
      <input type="submit" />
    </form>
  );
};

export default Chat;
