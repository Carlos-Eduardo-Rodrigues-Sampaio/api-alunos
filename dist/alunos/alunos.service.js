var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, } from '@nestjs/common';
import { AlunosRepository, } from './alunos.repository.js';
let AlunosService = class AlunosService {
    alunosRepository;
    constructor(alunosRepository) {
        this.alunosRepository = alunosRepository;
    }
    findAll() {
        return this.alunosRepository.findAll();
    }
    async findById(id) {
        const aluno = await this.alunosRepository.findById(id);
        if (!aluno) {
            throw new NotFoundException('Aluno não encontrado');
        }
        return aluno;
    }
    create(data) {
        return this.alunosRepository.create(data.nome, data.curso);
    }
    async update(id, data) {
        await this.findById(id);
        return this.alunosRepository.update(id, data.nome, data.curso);
    }
    async delete(id) {
        await this.findById(id);
        await this.alunosRepository.delete(id);
    }
};
AlunosService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AlunosRepository])
], AlunosService);
export { AlunosService };
//# sourceMappingURL=alunos.service.js.map