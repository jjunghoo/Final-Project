import { useSelector } from "react-redux";

export const CoverLetter = () => {
  const coverLetter = useSelector(
    (state) => state.employeeReducer.resume.coverLetter
  );
  console.log(coverLetter);

  return <div>123</div>;
};
