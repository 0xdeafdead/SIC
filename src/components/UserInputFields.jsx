import UserInput from "./UserInput";

export default function UserInputFields({ data, handleValueChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          value={data.initialInvestment}
          handleChange={(val) => handleValueChange({ initialInvestment: val })}
        />
        <UserInput
          label="Anual Investement"
          value={data.anualInvestment}
          handleChange={(val) => handleValueChange({ anualInvestment: val })}
        />
        <UserInput
          label="Expected Return"
          value={data.expectedReturn}
          handleChange={(val) => handleValueChange({ expectedReturn: val })}
        />
        <UserInput
          label="Duration"
          value={data.duration}
          handleChange={(val) => handleValueChange({ duration: val })}
        />
      </div>
    </section>
  );
}
