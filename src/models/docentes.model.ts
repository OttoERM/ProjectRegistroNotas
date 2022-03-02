import {Entity, model, property} from '@loopback/repository';

@model()
export class Docentes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IDDocente?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreDocente: string;

  @property({
    type: 'string',
    required: true,
  })
  salario: string;

  @property({
    type: 'string',
    required: true,
  })
  sexoDocente: string;


  constructor(data?: Partial<Docentes>) {
    super(data);
  }
}

export interface DocentesRelations {
  // describe navigational properties here
}

export type DocentesWithRelations = Docentes & DocentesRelations;
