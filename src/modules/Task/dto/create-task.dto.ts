import { IsOptional, IsString } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  constructor(title: string, description: string) {
    this.title = title ?? ''
    this.description = description ?? ''
  }
}
