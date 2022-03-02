import {Entity, model, property} from '@loopback/repository';

@model()
export class Curso extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IDCurso: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreCurso: string;


  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
