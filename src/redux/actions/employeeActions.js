/** @format */

import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_EDIT,
  EMPLOYEE_ID_GET_REQUEST,
} from "../type";

export const employeeIDGet = (TestPayload) => ({
  type: EMPLOYEE_ID_GET_REQUEST,
  payload: "테스트중입니다.",
});

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
