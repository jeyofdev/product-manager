export const Input = ({ onChange, name, label, id, type = "text", value }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        value={value}
        aria-describedby="emailHelp"
        onChange={onChange}
      />
    </div>
  );
};
