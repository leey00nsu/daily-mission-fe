export interface GlobalResponse<T> {
  success: boolean;
  code: number;
  data: T;
  errors: object;
  meta: object;
}
