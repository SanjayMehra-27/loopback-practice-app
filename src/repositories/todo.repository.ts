import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TestDbDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.testDB') dataSource: TestDbDataSource,
  ) {
    super(Todo, dataSource);
  }
}
