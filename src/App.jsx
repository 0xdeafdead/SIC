import Header from "./components/Header";
import React, { useState } from "react";
import UserInputFields from "./components/UserInputFields";
import Table from "./components/Table";

const initialData = {
  initialInvestment: 1000,
  anualInvestment: 1000,
  expectedReturn: 6,
  duration: 10,
};

const roundNumbers = (value) => Math.floor(value);

const derivedData = (data) => {
  const calculations = [];
  let prevTotalInterest = 0;
  let investedCapital = data.initialInvestment;
  let prevInvestedCapital = data.initialInvestment;
  for (let year = 1; year <= data.duration; year++) {
    const interestPerYear = (data.expectedReturn / 100) * prevInvestedCapital;
    const totalInterest = interestPerYear + prevTotalInterest;
    investedCapital += data.anualInvestment;
    const investmentValue = investedCapital + totalInterest;
    const result = {
      year,
      investmentValue: roundNumbers(investmentValue),
      interestPerYear: roundNumbers(interestPerYear),
      totalInterest: roundNumbers(totalInterest),
      investedCapital: roundNumbers(investedCapital),
    };
    calculations.push(result);
    prevTotalInterest = totalInterest;
    prevInvestedCapital = investedCapital + totalInterest;
  }
  return calculations;
};

function App() {
  const [data, setData] = useState(initialData);

  function handleValueChange(newValue) {
    const newData = { ...data, ...newValue };
    setData(newData);
  }
  let isDataIInvalid = false;
  if (data.duration <= 0) {
    isDataIInvalid = true;
  }
  const calculations = derivedData(data);

  return (
    <>
      <Header />
      <UserInputFields data={data} handleValueChange={handleValueChange} />
      {isDataIInvalid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {!isDataIInvalid && <Table data={calculations} />}
    </>
  );
}

export default App;
