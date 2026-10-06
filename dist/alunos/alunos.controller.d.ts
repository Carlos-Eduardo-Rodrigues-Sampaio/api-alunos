import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: number;
        nome: string;
        curso: string;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        nome: string;
        curso: string;
    }>;
    create(data: CreateAlunoDto): import("../generated/prisma/models.js").Prisma__AlunoClient<{
        id: number;
        nome: string;
        curso: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(id: number, data: UpdateAlunoDto): Promise<{
        id: number;
        nome: string;
        curso: string;
    }>;
    delete(id: number): Promise<void>;
}
