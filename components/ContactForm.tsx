import { useReducer } from "react";
import Error from "./error";
import Field from "./field";
import Success from "./success";

const INITIAL_STATE = { name: "", email: "", message: "", status: "IDLE" };
const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    case "updateStatus":
      return { ...state, status: action.status };

    case "reset":
    default:
      return INITIAL_STATE;
  }
};

const ContactForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateStatus = (status) =>
    dispatch({
      type: "updateStatus",
      status,
    });

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    dispatch({
      type: "updateFieldValue",
      field,
      value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStatus("PENDING");

    fetch("/api/pageclip", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        updateStatus("SUCCESS");
      })
      .catch((error) => {
        updateStatus("ERROR");
      });
  };

  if (state.status === "SUCCESS") {
    return <Success dispatch={dispatch} />;
  }

  return (
    <form
      className={`w-4/5 sm:w-1/2 flex flex-col justify-center items space-y-3 ${
        state.status === "PENDING" && "pending"
      }`}
      onSubmit={handleSubmit}
    >
      {state.status === "ERROR" && <Error />}

      <Field name="name" state={state} handleChange={handleChange} />
      <Field
        name="email"
        type="email"
        state={state}
        handleChange={handleChange}
      />
      <Field name="message" state={state} handleChange={handleChange} />

      <button className="button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
