export {};

declare global {
  // type truyền vào fetchApi để call api
  interface IRequest {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: { [key: string]: unknown };
    queryParams?: Record<string, string | number | boolean>;
    useCredentials?: boolean;
    headers?: {
      Authorization?: string | null;
      Token?: string | null;
    };
    nextOption?: Record<string, unknown>;
  }

  // type dữ liệu trả về khi call Api
  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  //
}
