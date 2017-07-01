import { LOAD_LIST_SUCCESS } from './constants'

export function getListSuccess(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}
