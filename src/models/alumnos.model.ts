import {Entity, model, property} from '@loopback/repository';

@model()
export class Alumnos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IDAlumno?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  IDMatricula: string;

  @property({
    type: 'string',
    required: true,
  })
  IDClase: string;


  constructor(data?: Partial<Alumnos>) {
    super(data);
  }
}

export interface AlumnosRelations {
  // describe navigational properties here
}

export type AlumnosWithRelations = Alumnos & AlumnosRelations;
