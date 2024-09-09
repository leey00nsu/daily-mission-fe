export interface GlobalResponse<T> {
  success: boolean;
  code: number;
  data: T;
  errors: {
    message: string;
  };
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
