interface ErrorResponse {
	status: 'error';
	message: string;
}

interface OkResponse<T> {
	status: 'success';
	data: T;
}

export type { ErrorResponse, OkResponse };
