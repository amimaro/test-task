import { BaseStore } from "./BaseStore";

export class BaseService<T> extends BaseStore<T> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(initialState: T) {
        super(initialState)        
    }
}
