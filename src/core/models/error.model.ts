export class ErrorModel {
    static empty(): ErrorModel {
        return new ErrorModel('', '');
    }

    constructor(public operation: string, public message: string) {}
}
