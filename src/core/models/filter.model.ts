import queryString from 'query-string';

export enum FilterOperation {
	EQ = 'eq',
	NEQ = 'neq',
	GT = 'gt',
	GTE = 'gte',
	LT = 'lt',
	LTE = 'lte',
	CONTAINS = 'cont',
	NOT_CONTAINS = 'n_cont',
	IN = 'in',
	IN_LITERAL = 'in_literal',
}
export class Filter {
    public page: number;
    public pageSize: number;
    public totalItems: number;
    public query: string;
    public params: Record<string, string[]>;
    public simpleParams: Record<string, string>;
    public orderBy: string[];

    constructor(
        page = 1,
        pageSize = 30,
        totalItems = 0,
        query = '',
        params = {},
        simpleParams = {},
        orderBy = []
    ) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalItems = totalItems;
        this.query = query;
        this.params = params;
        this.orderBy = orderBy;
        this.simpleParams = simpleParams;
    }

    toQueryString(): string {
        const target = Object.assign(
            {},
            { page: this.page },
            this.params,
            this.simpleParams,
            { sort: this.orderBy },
            { size: this.pageSize }
        );
        const response = queryString.stringify(target, {
            skipEmptyString: true,
            skipNull: true,
        });
        return response;
    }

    fromQueryString(query: string): void {
        const parsed = queryString.parse(query);

        if (parsed['orderBy'] !== undefined)
            (parsed['orderBy'] as Array<string>).forEach((orderBy) => {
                this.orderBy.push(orderBy);
            });

        if (parsed['params'] !== undefined)
            this.params = parsed['orderBy'] as Record<string, any>;

        if (parsed['params'] !== undefined) this.query = parsed['params'] as string;

        if (parsed['pageSize'] !== undefined)
            this.pageSize = parseInt(parsed['pageSize'] as string);

        if (parsed['totalItems'] !== undefined)
            this.totalItems = parseInt(parsed['totalItems'] as string);

        if (parsed['page'] !== undefined)
            this.page = parseInt(parsed['page'] as string);
    }

    addFilter(field: string, operation: FilterOperation, value: any): void {
        this.removeFilter(field, operation);
        if (!this.params[operation]) this.params[operation] = [];
        this.params[operation].push(field + ':' + value);
    }

    removeFilter(field: string, operation: FilterOperation): void {
        if (!this.params[operation]) return;
        this.params[operation] = this.params[operation].filter((value: string) => {
            return !value.includes(field + ':');
        });
        if (this.params[operation].length == 0) {
            delete this.params[operation];
        }
    }
    addSimpleFilter(field: string, value: string): void {
        this.removeSimpleFilter(field);
        this.simpleParams[field]=value;
    }
    removeSimpleFilter(field: string): void {
        if (!this.simpleParams[field]) return;
        delete this.simpleParams[field];
    }
}
