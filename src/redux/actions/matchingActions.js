/** @format */

import {
  MATCHING_ALL_INFO_GET,
  MATCHING_DATA_SCIENCE_INFO_GET,
  MATCHING_DESIGN_INFO_GET,
  MATCHING_MARKETING_INFO_GET,
  MATCHING_PROGRAMMING_INFO_GET,
} from "../type";

export const matchingAllInfoGet = (allInfo) => ({
  type: MATCHING_ALL_INFO_GET,
  payload: {
    allInfo: allInfo,
  },
});
export const matchingDataScienceInfoGet = (dataScienceInfo) => ({
  type: MATCHING_DATA_SCIENCE_INFO_GET,
  payload: {
    dataScienceInfo: dataScienceInfo,
  },
});
export const matchingDesignInfoGet = (designInfo) => ({
  type: MATCHING_DESIGN_INFO_GET,
  payload: {
    designInfo: designInfo,
  },
});
export const matchingMarketingInfoGet = (companyInfo) => ({
  type: MATCHING_MARKETING_INFO_GET,
  payload: {
    companyInfo: companyInfo,
  },
});
export const matchingProgrammingInfoGet = (marketingInfo) => ({
  type: MATCHING_PROGRAMMING_INFO_GET,
  payload: {
    marketingInfo: marketingInfo,
  },
});
