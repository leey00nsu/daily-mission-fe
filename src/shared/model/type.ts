export interface GlobalResponse<T> {
  success: boolean;
  code: number;
  data: T;
  errors: object;
  meta: {
    isNext: boolean;
  };
}

export interface Page<T> {
  data: T[];
  meta: {
    isNext: boolean;
  };
}
