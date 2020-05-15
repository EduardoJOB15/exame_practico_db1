import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"ingresos", name:"Suppliers"})
export class Supplier{
    @PrimaryColumn()
    SupplierID: number;

    @Column()
    SupplierName: string;

    @Column()
    Address: string;

    @Column()
    City: string;

    @Column()
    PostalCode: string;

    @Column()
    Country: string;

    @Column()
    Phone: string;
}

export interface ISupplier{    
    SupplierID: number;
    SupplierName: string;
    Address: string;
    City: string;
    PostalCode: string;
    Country: string;
    Phone: string;
}

export interface IResult{
    Successed: boolean;
    MSG: string
}