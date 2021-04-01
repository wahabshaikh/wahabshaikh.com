export default function TextField({
  input,
  textarea,
  label,
  type,
  name,
  state,
  updateFieldValue,
}) {
  return (
    <label className="flex flex-col">
      <span className="text-xs tracking-widest uppercase">{label}</span>
      {input && (
        <input
          className="text-gray-900 rounded-[0.25rem] border-gray-400 shadow-sm"
          type={type}
          name={name}
          value={state[name]}
          onChange={updateFieldValue(name)}
        />
      )}
      {textarea && (
        <textarea
          className="text-gray-900 rounded-[0.25rem] border-gray-400 shadow-sm"
          name={name}
          value={state[name]}
          onChange={updateFieldValue(name)}
        />
      )}
    </label>
  );
}
