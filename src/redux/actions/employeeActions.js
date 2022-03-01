/** @format */

import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_EDIT,
} from "../type";

export const employeeInfoGet = (EmployeeInfo) => ({
  type: EMPLOYEE_INFO_GET,
  payload: EmployeeInfo,
});
export const employeeResumeGet = (EmployeeInfo) => ({
  type: EMPLOYEE_RESUME_GET,
  payload: {
    resume: EmployeeInfo.resume,
  },
});
export const employeeResumeEdit = (ResumeInfo) => ({
  type: EMPLOYEE_RESUME_EDIT,
  payload: {
    resume: ResumeInfo,
  },
});
