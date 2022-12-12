import { request } from '@/shared/request';
// #region 编辑用户
export interface IEditUserResult {
  code: number;
  msg: string;
  result: boolean;
}

export interface IEditUserParams {
  id: number;
}

export interface IEditUserData {
  name: string;
  age: number;
  mobile: string;
  address?: string;
  tags?: string[];
}

/**
 * 编辑用户
 * @param {IEditUserParams} params
 * @param {IEditUserData} data
 * @returns
 */
export function editUser(params: IEditUserParams, data: IEditUserData) {
  return request<IEditUserResult>(`${env.API_HOST}/api/user/edit`, {
    method: 'POST',
    data,
    params,
  });
}
