import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Nota, NotaRelations} from '../models';

export class NotaRepository extends DefaultCrudRepository<
  Nota,
  typeof Nota.prototype.IDNota,
  NotaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Nota, dataSource);
  }
}
