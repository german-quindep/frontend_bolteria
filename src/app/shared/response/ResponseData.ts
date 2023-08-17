export interface ResponseData<T, S> {
  message: string;
  status: number;
  data: T;
  error: S;
}
