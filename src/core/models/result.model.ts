import { ErrorModel } from './error.model';

export class ResultModel<T> {
    empty(): ResultModel<T> {
        return new ResultModel<T>(0, null, []);
    }

    constructor(
		public result: number,
		public data: T | null,
		public errors: ErrorModel[]
    ) {}
}
