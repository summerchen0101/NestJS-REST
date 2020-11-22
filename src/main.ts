import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ProdcutModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Products Sample')
    .setDescription('The Products API description')
    .setVersion('1.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [ProdcutModule],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
