import { useSelector } from "react-redux";

export const Resume = () => {
  const resume = useSelector((state) => state.employeeReducer.resume);

  console.log(resume);
  return <h1>Hello World 2</h1>;
};
