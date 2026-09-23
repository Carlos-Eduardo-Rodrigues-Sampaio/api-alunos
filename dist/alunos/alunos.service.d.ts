export declare class AlunosService {
    private alunos;
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
    create(nome: string, curso: string): {
        id: number;
        nome: string;
        curso: string;
    };
    update(id: number, nome: string, curso: string): {
        id: number;
        nome: string;
        curso: string;
    } | null;
    delete(id: number): boolean;
}
