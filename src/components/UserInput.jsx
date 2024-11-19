export default function UserInput({ label, handleChange, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input
        {...props}
        type="number"
        onChange={(e) => {
          let value = e.target.value;
          if (value === "") {
            value = 0;
          } else {
            value = Number(value);
          }
          return handleChange(value);
        }}
      />
    </p>
  );
}
