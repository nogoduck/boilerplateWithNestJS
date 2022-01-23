import { Prop, Schema } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
  versionKey: false,
};

@Schema(options)
export class UserModel extends Document {
  @ApiProperty({
    example: 'InputYourName',
    description: 'name',
    required: true,
  })
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'email',
    required: true,
  })
  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '5342uL7rxMrWVm6b',
    description: 'password',
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
