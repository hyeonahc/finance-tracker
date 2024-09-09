export interface IApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message: string;
  success: boolean;
}
