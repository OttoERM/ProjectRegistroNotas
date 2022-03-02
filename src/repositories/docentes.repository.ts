import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Docentes, DocentesRelations} from '../models';

export class DocentesRepository extends DefaultCrudRepository<
  Docentes,
  typeof Docentes.prototype.IDDocente,
  DocentesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Docentes, dataSource);
  }
}
