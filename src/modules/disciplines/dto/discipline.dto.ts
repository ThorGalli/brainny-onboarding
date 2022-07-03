import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { StudentDTO } from 'src/modules/students/dto/student.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO)
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
