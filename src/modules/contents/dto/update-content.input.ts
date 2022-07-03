import { CreateContentInput } from './create-content.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  id?: string;
}
