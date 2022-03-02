import {Entity, model, property} from '@loopback/repository';

@model()
export class Nota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  IDNota: string;

  @property({
    type: 'string',
    required: true,
  })
  P1: string;

  @property({
    type: 'string',
    required: true,
  })
  P2: string;

  @property({
    type: 'string',
    required: true,
  })
  P3: string;

  @property({
    type: 'string',
    required: true,
  })
  P4: string;


  constructor(data?: Partial<Nota>) {
    super(data);
  }
}

export interface NotaRelations {
  // describe navigational properties here
}

export type NotaWithRelations = Nota & NotaRelations;
