/** @format */

import { PROJECT_INFO_GET } from "../type";

export const projectInfoGet = (ProjectInfo) => ({
  type: PROJECT_INFO_GET,
  payload: ProjectInfo,
});
