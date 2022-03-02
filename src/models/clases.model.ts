import {Entity, model, property} from '@loopback/repository';

@model()
export class Clases extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IDClase: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreClase: string;

  @property({
    type: 'string',
    required: true,
  })
  IDDocente: string;

  @property({
    type: 'string',
    required: true,
  })
  IDNota: string;


  constructor(data?: Partial<Clases>) {
    super(data);
  }
}

export interface ClasesRelations {
  // describe navigational properties here
}

export type ClasesWithRelations = Clases & ClasesRelations;
