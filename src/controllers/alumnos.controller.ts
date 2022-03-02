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
import {Alumnos} from '../models';
import {AlumnosRepository} from '../repositories';

export class AlumnosController {
  constructor(
    @repository(AlumnosRepository)
    public alumnosRepository : AlumnosRepository,
  ) {}

  @post('/alumnos')
  @response(200, {
    description: 'Alumnos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Alumnos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alumnos, {
            title: 'NewAlumnos',
            exclude: ['IDAlumno'],
          }),
        },
      },
    })
    alumnos: Omit<Alumnos, 'IDAlumno'>,
  ): Promise<Alumnos> {
    return this.alumnosRepository.create(alumnos);
  }

  @get('/alumnos/count')
  @response(200, {
    description: 'Alumnos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Alumnos) where?: Where<Alumnos>,
  ): Promise<Count> {
    return this.alumnosRepository.count(where);
  }

  @get('/alumnos')
  @response(200, {
    description: 'Array of Alumnos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Alumnos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Alumnos) filter?: Filter<Alumnos>,
  ): Promise<Alumnos[]> {
    return this.alumnosRepository.find(filter);
  }

  @patch('/alumnos')
  @response(200, {
    description: 'Alumnos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alumnos, {partial: true}),
        },
      },
    })
    alumnos: Alumnos,
    @param.where(Alumnos) where?: Where<Alumnos>,
  ): Promise<Count> {
    return this.alumnosRepository.updateAll(alumnos, where);
  }

  @get('/alumnos/{id}')
  @response(200, {
    description: 'Alumnos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Alumnos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Alumnos, {exclude: 'where'}) filter?: FilterExcludingWhere<Alumnos>
  ): Promise<Alumnos> {
    return this.alumnosRepository.findById(id, filter);
  }

  @patch('/alumnos/{id}')
  @response(204, {
    description: 'Alumnos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alumnos, {partial: true}),
        },
      },
    })
    alumnos: Alumnos,
  ): Promise<void> {
    await this.alumnosRepository.updateById(id, alumnos);
  }

  @put('/alumnos/{id}')
  @response(204, {
    description: 'Alumnos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() alumnos: Alumnos,
  ): Promise<void> {
    await this.alumnosRepository.replaceById(id, alumnos);
  }

  @del('/alumnos/{id}')
  @response(204, {
    description: 'Alumnos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.alumnosRepository.deleteById(id);
  }
}
