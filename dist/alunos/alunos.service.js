var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let AlunosService = class AlunosService {
    alunos = [
        {
            id: 1,
            nome: 'Ana',
            curso: 'Sistemas de Informação',
        },
        {
            id: 2,
            nome: 'Carlos',
            curso: 'Ciência da Computação',
        },
    ];
    findAll() {
        return this.alunos;
    }
    findById(id) {
        return this.alunos.find((aluno) => aluno.id === id);
    }
    create(nome, curso) {
        const novoAluno = {
            id: this.alunos.length + 1,
            nome,
            curso,
        };
        this.alunos.push(novoAluno);
        return novoAluno;
    }
    update(id, nome, curso) {
        const aluno = this.alunos.find((aluno) => aluno.id === id);
        if (!aluno) {
            return null;
        }
        aluno.nome = nome;
        aluno.curso = curso;
        return aluno;
    }
    delete(id) {
        const index = this.alunos.findIndex((aluno) => aluno.id === id);
        if (index === -1) {
            return false;
        }
        this.alunos.splice(index, 1);
        return true;
    }
};
AlunosService = __decorate([
    Injectable()
], AlunosService);
export { AlunosService };
//# sourceMappingURL=alunos.service.js.map