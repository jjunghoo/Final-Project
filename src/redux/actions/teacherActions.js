/** @format */

import {
  TEACHER_INFO_GET,
  TEACHER_INFO_EDIT,
  TEACHER_COMMENT_EDIT,
  TEACHER_COMMENT_ADD,
  TEACHER_COMMENT_REMOVE,
} from "../type";

export const teacherInfoGet = (TeacherInfo) => ({
  type: TEACHER_INFO_GET,
  payload: TeacherInfo,
});

export const teacherInfoEdit = (TeacherInfo) => ({
  type: TEACHER_INFO_EDIT,
  payload: TeacherInfo,
});

export const teacherCommentEdit = (CommentInfo) => ({
  type: TEACHER_COMMENT_EDIT,
  payload: CommentInfo,
});

export const teacherCommentAdd = (CommentInfo) => ({
  type: TEACHER_COMMENT_ADD,
  payload: CommentInfo,
});

export const teacherCommentRemove = (CommentInfo) => ({
  type: TEACHER_COMMENT_REMOVE,
  payload: CommentInfo,
});
