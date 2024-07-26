import moment from "moment";
import PropTypes from "prop-types";

function ResultCalc({ result }) {
  let days = "--";
  let months = "--";
  let age = "--";

  if (result) {
    const { day, month, year } = result;
    const birthDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
    const now = moment();
    
    age = now.diff(birthDate, "years");
    months = now.diff(birthDate, "months") % 12;
    days = now.diff(birthDate, "days") % 30;
  }

  return (
    <div className="h-[20rem] flex flex-col items-start justify-center font-bold text-7xl font-poppins italic">
      <h1>
        <span className="text-Purple">{age}</span> years
      </h1>
      <h1 className="mt-3">
        <span className="text-Purple">{months}</span> months
      </h1>
      <h1 className="mt-3">
        <span className="text-Purple">{days}</span> days
      </h1>
    </div>
  );
}

ResultCalc.propTypes = {
  result: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
};

export default ResultCalc;
