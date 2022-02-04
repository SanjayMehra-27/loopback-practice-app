import {Entity, model, property} from '@loopback/repository';

@model({name : "todo_table"})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: false,
  })
  desc: string;

  @property({
    type: 'boolean',
    required: false,
  })
  isComplete: boolean;




  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
