import { IsOptional, IsString } from 'class-validator'

export class UpdateTaskDto {
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
