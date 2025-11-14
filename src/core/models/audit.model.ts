export class Audit {
    id: string;
    createdDate?: Date;
    modifiedDate?: Date;
    deleted?: boolean;
    
    constructor() {
        this.id = '';
    }
}
