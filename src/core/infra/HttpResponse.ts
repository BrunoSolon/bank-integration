export type HttpResponse = {
  statusCode: number;
  body: any;
};

export function ok<T>(dto?: T): HttpResponse {
  return {
    statusCode: 200,
    body: dto
  };
}

export function fail(error: Error) {
  return {
    statusCode: 500,
    body: {
      error: error.message
    }
  };
}
