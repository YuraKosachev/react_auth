import { axiosInstance } from "../instance";
import { ILogInRequest, ILogInResponse } from "./types";

export const login = (params: ILogInRequest):AxiosPromise<ILogInResponse> => axiosInstance.post(Endpoints.AUTH.LOGIN, params)
