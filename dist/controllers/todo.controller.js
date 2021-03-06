"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoController = class TodoController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo) {
        return this.todoRepository.create(todo);
    }
    // @get('/todos/count')
    // @response(200, {
    //   description: 'Todo model count',
    //   content: {'application/json': {schema: CountSchema}},
    // })
    // async count(
    //   @param.where(Todo) where?: Where<Todo>,
    // ): Promise<Count> {
    //   return this.todoRepository.count(where);
    // }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async updateAll(todo, where) {
        return this.todoRepository.updateAll(todo, where);
    }
    async findById(id, filter) {
        return this.todoRepository.findById(id, filter);
    }
    async updateById(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Todo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Todo) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, {
                    title: 'NewTodo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Array of Todo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Todo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/todos'),
    (0, rest_1.response)(200, {
        description: 'Todo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Todo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Todo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/todos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Todo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Todo, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Todo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Todo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Todo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/todos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Todo DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoController.prototype, "deleteById", null);
TodoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.TodoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map