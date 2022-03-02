import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Docentes} from '../models';
import {DocentesRepository} from '../repositories';

export class DocentesController {
  constructor(
    @repository(DocentesRepository)
    public docentesRepository : DocentesRepository,
  ) {}

  @post('/docentes')
  @response(200, {
    description: 'Docentes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Docentes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docentes, {
            title: 'NewDocentes',
            exclude: ['IDDocente'],
          }),
        },
      },
    })
    docentes: Omit<Docentes, 'IDDocente'>,
  ): Promise<Docentes> {
    return this.docentesRepository.create(docentes);
  }

  @get('/docentes/count')
  @response(200, {
    description: 'Docentes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Docentes) where?: Where<Docentes>,
  ): Promise<Count> {
    return this.docentesRepository.count(where);
  }

  @get('/docentes')
  @response(200, {
    description: 'Array of Docentes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Docentes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Docentes) filter?: Filter<Docentes>,
  ): Promise<Docentes[]> {
    return this.docentesRepository.find(filter);
  }

  @patch('/docentes')
  @response(200, {
    description: 'Docentes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docentes, {partial: true}),
        },
      },
    })
    docentes: Docentes,
    @param.where(Docentes) where?: Where<Docentes>,
  ): Promise<Count> {
    return this.docentesRepository.updateAll(docentes, where);
  }

  @get('/docentes/{id}')
  @response(200, {
    description: 'Docentes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Docentes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Docentes, {exclude: 'where'}) filter?: FilterExcludingWhere<Docentes>
  ): Promise<Docentes> {
    return this.docentesRepository.findById(id, filter);
  }

  @patch('/docentes/{id}')
  @response(204, {
    description: 'Docentes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docentes, {partial: true}),
        },
      },
    })
    docentes: Docentes,
  ): Promise<void> {
    await this.docentesRepository.updateById(id, docentes);
  }

  @put('/docentes/{id}')
  @response(204, {
    description: 'Docentes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() docentes: Docentes,
  ): Promise<void> {
    await this.docentesRepository.replaceById(id, docentes);
  }

  @del('/docentes/{id}')
  @response(204, {
    description: 'Docentes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.docentesRepository.deleteById(id);
  }
}
