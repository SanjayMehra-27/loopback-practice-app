"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Todo = class Todo extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Todo.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Todo.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Todo.prototype, "desc", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Todo.prototype, "isComplete", void 0);
Todo = (0, tslib_1.__decorate)([
    (0, repository_1.model)({ name: "todo_table" }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map