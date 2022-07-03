import { Field, InputType } from '@nestjs/graphql';
import { UpdateLesssonInput } from 'src/modules/lessons/dto/update-lesson.input';

@InputType()
export class CreateContentInput {
  description: string;
  linkContent?: string;
  lessonId?: string;
}
