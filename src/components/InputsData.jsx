import PropTypes from "prop-types";
import moment from "moment/moment";
import { useEffect, useState } from "react";

function InputsData({ setDay, setMonth, setYear }) {
  const [errorDay, setErrorDay] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorYear, setErrorYear] = useState("");

  const [day, setDayValue] = useState("");
  const [month, setMonthValue] = useState("");
  const [year, setYearValue] = useState("");

  const currentYear = moment().format("YYYY");

  useEffect(() => {
    if (day && month && year) {
      setDay(day);
      setMonth(month);
      setYear(year);
    }
  }, [day, month, year, setDay, setMonth, setYear]);

  function handleInputChange(e) {
    const { placeholder, value } = e.target;

    if (placeholder === "DD") {
      if (value.length > 2) {
        e.target.value = value.slice(0, 2);
      } else {
        setErrorDay("Must be a valid day");
      }
      if (value.length === 2 && (value > 31 || value <= 0)) {
        setErrorDay("Must be a valid day");
      } else if (value.length === 2) {
        setDayValue(value);
        setErrorDay("");
      } else if (value.length === 0) {
        setDayValue("");
        setErrorDay("This field is required");
      }
    } else if (placeholder === "MM") {
      if (value.length > 2) {
        e.target.value = value.slice(0, 2);
      } else {
        setErrorMonth("Must be a valid month");
      }
      if (value.length === 2 && (value > 12 || value <= 0)) {
        setErrorMonth("Must be a valid month");
      } else if (value.length === 2) {
        setMonthValue(value);
        setErrorMonth("");
      } else if (value.length === 0) {
        setMonthValue("");
        setErrorMonth("This field is required");
      }
    } else if (placeholder === "YYYY") {
      if (value.length > 4) {
        e.target.value = value.slice(0, 4);
      } else {
        setErrorYear("Must be a valid year");
      }
      if (value.length === 4 && (value > currentYear || value < 1970)) {
        setErrorYear("Must be a valid year");
      } else if (value.length === 4) {
        setYearValue(value);
        setErrorYear("");
      } else if (value.length === 0) {
        setYearValue("");
        setErrorYear("This field is required");
      }
    }
  }

  return (
    <div className="flex flex-row items-center font-bold text-SmokeyGrey">
      <div className="flex flex-col items-start justify-center">
        <label className={`tracking-widest ${errorDay ? "text-LightRed" : ""}`}>
          DAY
        </label>
        <input
          type="number"
          placeholder="DD"
          className={`mt-2 mr-10 p-2 w-24 rounded-md outline outline-offset-2 outline-1 outline-LightGrey ${
            errorDay ? "outline-1 outline-LightRed focus:outline-LightRed" : ""
          } hover:cursor-pointer focus:outline-Purple text-black`}
          onChange={handleInputChange}
        />
        <p className="text-LightRed font-extralight text-[10px] text-left mt-2">
          {errorDay}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <label
          className={`tracking-widest ${errorMonth ? "text-LightRed" : ""}`}
        >
          MONTH
        </label>
        <input
          type="number"
          placeholder="MM"
          className={`mt-2 mr-10 p-2 w-24 rounded-md outline outline-offset-2 outline-1 outline-LightGrey ${
            errorMonth
              ? "outline-1 outline-LightRed focus:outline-LightRed"
              : ""
          } hover:cursor-pointer focus:outline-Purple text-black`}
          onChange={handleInputChange}
        />
        <p className="text-LightRed font-extralight text-[10px] text-left mt-2">
          {errorMonth}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <label
          className={`tracking-widest ${errorYear ? "text-LightRed" : ""}`}
        >
          YEAR
        </label>
        <input
          type="number"
          placeholder="YYYY"
          className={`mt-2 mr-10 p-2 w-24 rounded-md outline outline-offset-2 outline-1 outline-LightGrey ${
            errorYear ? "outline-1 outline-LightRed focus:outline-LightRed" : ""
          } hover:cursor-pointer focus:outline-Purple text-black`}
          onChange={handleInputChange}
        />
        <p className="text-LightRed font-extralight text-[10px] text-left mt-2">
          {errorYear}
        </p>
      </div>
    </div>
  );
}

InputsData.propTypes = {
  setDay: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default InputsData;
