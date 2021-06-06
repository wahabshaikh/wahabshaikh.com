export default function Field({ name, type = "text", state, handleChange }) {
  return (
    <label className="label">
      {name}

      {name === "message" ? (
        <textarea
          className="field"
          name={name}
          value={state[name]}
          onChange={handleChange(name)}
          required
        />
      ) : (
        <input
          className="field"
          type={type}
          name={name}
          value={state[name]}
          onChange={handleChange(name)}
          required
        />
      )}
    </label>
  );
}
