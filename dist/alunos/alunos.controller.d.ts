import { AlunosService } from './alunos.service.js';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    findAll(): {
        id: number;
        nome: string;
        curso: string;
    }[];
    findById(id: number): {
        id: number;
        nome: string;
        curso: string;
    } | undefined;
    create(body: {
        nome: string;
        curso: string;
    }): {
        id: number;
        nome: string;
        curso: string;
    };
    update(id: number, body: {
        nome: string;
        curso: string;
    }): {
        id: number;
        nome: string;
        curso: string;
    } | null;
    delete(id: number): boolean;
}
