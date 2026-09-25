import { AlunosService } from './alunos.service.js';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    findAll(): Promise<import("./alunos.repository.js").AlunoRow[]>;
    findById(id: number): Promise<import("./alunos.repository.js").AlunoRow>;
    create(body: {
        nome: string;
        curso: string;
    }): Promise<{
        id: number;
        nome: string;
        curso: string;
    }>;
    update(id: number, body: {
        nome: string;
        curso: string;
    }): Promise<import("./alunos.repository.js").AlunoRow>;
    delete(id: number): Promise<number>;
}
