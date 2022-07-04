import { CreateDisciplineInput } from './create-discipline.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  id?: string;
}
