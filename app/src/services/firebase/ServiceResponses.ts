export default interface ServiceSuccessResponse {
  success: boolean;
  error?: string;
}

export interface SuccessResponseWithValue {
  success: boolean;
  value: any;
  error?: string;
}
