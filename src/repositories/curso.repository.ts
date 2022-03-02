import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Curso, CursoRelations} from '../models';

export class CursoRepository extends DefaultCrudRepository<
  Curso,
  typeof Curso.prototype.IDCurso,
  CursoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Curso, dataSource);
  }
}
