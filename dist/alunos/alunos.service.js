var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { AlunosRepository } from './alunos.repository.js';
let AlunosService = class AlunosService {
    alunosRepository;
    constructor(alunosRepository) {
        this.alunosRepository = alunosRepository;
    }
    findAll() {
        return this.alunosRepository.findAll();
    }
    findById(id) {
        return this.alunosRepository.findById(id);
    }
    create(nome, curso) {
        return this.alunosRepository.create(nome, curso);
    }
    async update(id, nome, curso) {
        await this.alunosRepository.update(id, nome, curso);
        return this.alunosRepository.findById(id);
    }
    delete(id) {
        return this.alunosRepository.delete(id);
    }
};
AlunosService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AlunosRepository])
], AlunosService);
export { AlunosService };
//# sourceMappingURL=alunos.service.js.map