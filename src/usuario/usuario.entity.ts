import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome: string

    @Column()
    cpf: string

    @Column()
    username: string

    @Column()
    password: string
}