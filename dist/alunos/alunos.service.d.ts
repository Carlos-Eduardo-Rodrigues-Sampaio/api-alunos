import { AlunosRepository } from './alunos.repository.js';
export declare class AlunosService {
    private readonly alunosRepository;
    constructor(alunosRepository: AlunosRepository);
    findAll(): Promise<import("./alunos.repository.js").AlunoRow[]>;
    findById(id: number): Promise<import("./alunos.repository.js").AlunoRow>;
    create(nome: string, curso: string): Promise<{
        id: number;
        nome: string;
        curso: string;
    }>;
    update(id: number, nome: string, curso: string): Promise<import("./alunos.repository.js").AlunoRow>;
    delete(id: number): Promise<number>;
}
