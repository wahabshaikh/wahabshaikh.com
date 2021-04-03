import { useReducer } from "react";

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

export default function Form() {
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

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        updateStatus("SUCCESS");
      })
      .catch((error) => {
        console.error(error);
        updateStatus("ERROR");
      });
  };

  if (state.status === "SUCCESS") {
    return (
      <div className="w-4/5 sm:w-1/2 py-4 text-center bg-green-500 bg-opacity-50 rounded-[0.25rem] border-2 border-green-900 dark:border-green-100">
        <p className="text-xl font-bold tracking-wider">Message sent!</p>
        <button
          className="block mx-auto px-12 py-1 bg-black text-white rounded-[0.25rem]"
          type="reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <form
      className={`w-4/5 sm:w-1/2 flex flex-col justify-center space-y-3 ${
        state.status === "PENDING" && "pending"
      }`}
      onSubmit={handleSubmit}
    >
      {state.status === "ERROR" && (
        <p className="w-full py-4 text-center bg-red-500 bg-opacity-75 rounded-[0.25rem] border-2 border-red-900 dark:border-red-100">
          Something went wrong. Please try again.
        </p>
      )}

      <label className="label">
        Name
        <input
          className="field"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange("name")}
          required
        />
      </label>
      <label className="label">
        Email
        <input
          className="field"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange("email")}
          required
        />
      </label>
      <label className="label">
        Message
        <textarea
          className="field"
          type="text"
          name="name"
          value={state.message}
          onChange={handleChange("message")}
          required
        />
      </label>
      <button
        className="py-2 rounded-[0.25rem] shadow-sm font-bold bg-black text-white tracking-wide uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
