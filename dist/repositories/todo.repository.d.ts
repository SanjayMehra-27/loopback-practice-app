import { DefaultCrudRepository } from '@loopback/repository';
import { TestDbDataSource } from '../datasources';
import { Todo, TodoRelations } from '../models';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: TestDbDataSource);
}
