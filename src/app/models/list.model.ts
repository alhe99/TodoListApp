import { ListItems } from './list.item.model';
export class List {

    id: number;
    tittle: string;
    createAt: Date;
    endedAt: Date;
    complete: boolean;
    items: ListItems[];

    constructor(tittle: string){
        this.tittle = tittle;
        this.createAt = new Date();
        this.complete = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}