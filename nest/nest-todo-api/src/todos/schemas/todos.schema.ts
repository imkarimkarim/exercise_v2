import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({ timestamps: true })
export class Todo {
  @Prop({
    required: true,
    unique: false,
  })
  title: string;

  @Prop({
    required: false,
    unique: false,
    default: '',
  })
  description: number;

  @Prop({
    required: false,
    unique: false,
    default: false,
  })
  isDone: boolean;

  @Prop({
    required: false,
    unique: false,
    default: 0,
  })
  nice: number;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
