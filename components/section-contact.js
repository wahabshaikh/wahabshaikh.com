import { useReducer } from "react";
import TextField from "./text-field";
import Section from "./section";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    case "reset":
    default:
      return INITIAL_STATE;
  }
};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };

  return (
    <Section id="contact" alternate>
      <h2 className="font-heading font-black text-5xl sm:text-7xl">Contact</h2>
      <p className="mb-8 text-center sm:text-lg text-gray-700 dark:text-gray-300">
        Interested? Send me a message.
      </p>

      <form
        className="w-full sm:w-1/2 flex flex-col justify-center space-y-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          input
          label="Name"
          type="text"
          name="name"
          state={state}
          updateFieldValue={updateFieldValue}
        />
        <TextField
          input
          label="Email"
          type="email"
          name="email"
          state={state}
          updateFieldValue={updateFieldValue}
        />
        <TextField
          textarea
          label="Message"
          name="message"
          state={state}
          updateFieldValue={updateFieldValue}
        />
        <button
          className="py-2 rounded-[0.25rem] shadow-sm font-bold bg-black text-white tracking-wide uppercase"
          type="submit"
        >
          Send
        </button>
      </form>
    </Section>
  );
}
