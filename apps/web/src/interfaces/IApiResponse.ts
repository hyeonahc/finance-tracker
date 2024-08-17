export interface IApiResponse<TData = unknown, TError = unknown> {
  data?: TData;
  error?: TError;
  success: boolean;
}
