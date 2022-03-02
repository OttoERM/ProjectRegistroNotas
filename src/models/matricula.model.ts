import {Entity, model, property} from '@loopback/repository';

@model()
export class Matricula extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IDMatricula: string;

  @property({
    type: 'string',
    required: true,
  })
  costo: string;

  @property({
    type: 'string',
    required: true,
  })
  IDCurso: string;


  constructor(data?: Partial<Matricula>) {
    super(data);
  }
}

export interface MatriculaRelations {
  // describe navigational properties here
}

export type MatriculaWithRelations = Matricula & MatriculaRelations;
