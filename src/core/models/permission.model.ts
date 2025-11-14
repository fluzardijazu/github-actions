export class Role {
    id: string | undefined;
    name: string | undefined;

    static fromData(obj: any): Role {
        return Object.assign(new Role(), obj);
    }
}
