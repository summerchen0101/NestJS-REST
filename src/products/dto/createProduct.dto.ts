import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the book.',
    example: 'A Good Book',
    type: String,
  })
  readonly name: string;

  @ApiPropertyOptional()
  readonly desc: string;

  @ApiProperty()
  readonly author: string;
}
