import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Alumnos, AlumnosRelations} from '../models';

export class AlumnosRepository extends DefaultCrudRepository<
  Alumnos,
  typeof Alumnos.prototype.IDAlumno,
  AlumnosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Alumnos, dataSource);
  }
}
