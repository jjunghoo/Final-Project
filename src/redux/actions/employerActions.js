/** @format */

import {
  EMPLOYER_LIKED_ADD,
  EMPLOYER_LIKED_REMOVE,
  EMPLOYER_COMPANY_EDIT,
  EMPLOYER_COMPANY_ADD,
  EMPLOYER_COMPANY_REMOVE,
  EMPLOYER_BOOKMARK_EDIT,
  EMPLOYER_BOOKMARK_ADD,
  EMPLOYER_BOOKMARK_REMOVE,
} from "../type";

export const bookmarkAdd = (companyInfo) => ({
  type: EMPLOYER_BOOKMARK_ADD,
  payload: {
    companyInfo: companyInfo,
  },
});

export const bookmarkRemove = (companyInfo) => ({
  type: EMPLOYER_BOOKMARK_REMOVE,
  payload: {
    companyInfo: companyInfo,
  },
});

export const bookmarkEdit = (companyInfo) => ({
  type: EMPLOYER_BOOKMARK_EDIT,
  payload: {
    companyInfo: companyInfo,
  },
});

export const employerAdd = (companyInfo) => ({
  type: EMPLOYER_COMPANY_ADD,
  payload: {
    companyInfo: companyInfo,
  },
});

export const employerRemove = (companyInfo) => ({
  type: EMPLOYER_COMPANY_REMOVE,
  payload: {
    companyInfo: companyInfo,
  },
});

export const employerEdit = (companyInfo) => ({
  type: EMPLOYER_COMPANY_EDIT,
  payload: {
    companyInfo: companyInfo,
  },
});

export const likedAdd = (likedInfo) => ({
  type: EMPLOYER_LIKED_ADD,
  payload: {
    likedInfo: likedInfo,
  },
});

export const likedRemove = (likedInfo) => ({
  type: EMPLOYER_LIKED_REMOVE,
  payload: {
    likedInfo: likedInfo,
  },
});
