import "./styles/App.css";
import ResultCalc from "./components/ResultCalc";
import InputsData from "./components/InputsData";
import { useState } from "react";
import styles from "./styles/style";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [errorResult, setErrorResult] = useState(false);

  function sendData() {
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    const resultData = { day: dayNum, month: monthNum, year: yearNum };

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      setErrorResult(true);
    } else {
      setErrorResult(false);
      setResult(resultData);
    }
  }

  return (
    <div className="h-[89vh] flex flex-col items-center justify-center px-40">
      <div
        className={`h-full m-12 w-[567px] font-poppins bg-White p-8 rounded-tl-[1.5rem] rounded-tr-[1.5rem] rounded-br-[7rem] rounded-bl-[1.5rem] ${styles.boxWidth}`}
      >
        <div className="flex flex-col">
          <InputsData setDay={setDay} setMonth={setMonth} setYear={setYear} />
          <form>
            <div className="flex items-center justify-center">
              <div className="line w-full h-[1.5px] bg-LightGrey"></div>
              <button
                className={`px-3.5 py-1.5 text-White rounded-full text-[30px] transition-all ${
                  errorResult
                    ? "bg-LightRed hover:bg-LightRed cursor-not-allowed"
                    : "bg-OffBlack hover:bg-Purple"
                }`}
                type="button"
                onClick={sendData}
              >
                <i className="ri-arrow-down-wide-line"></i>
              </button>
            </div>
            <ResultCalc result={result} />
          </form>
        </div>
      </div>

      <div className="attribution mt-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/sajjadnazaridev">Sajjad Nazari 🌻✌️</a>.
      </div>
    </div>
  );
}

export default App;