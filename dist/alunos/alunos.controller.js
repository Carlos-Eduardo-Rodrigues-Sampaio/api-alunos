var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
let AlunosController = class AlunosController {
    alunosService;
    constructor(alunosService) {
        this.alunosService = alunosService;
    }
    findAll() {
        return this.alunosService.findAll();
    }
    findById(id) {
        return this.alunosService.findById(id);
    }
    create(body) {
        return this.alunosService.create(body.nome, body.curso);
    }
    update(id, body) {
        return this.alunosService.update(id, body.nome, body.curso);
    }
    delete(id) {
        return this.alunosService.delete(id);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "findById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "create", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "delete", null);
AlunosController = __decorate([
    Controller('alunos'),
    __metadata("design:paramtypes", [AlunosService])
], AlunosController);
export { AlunosController };
//# sourceMappingURL=alunos.controller.js.map