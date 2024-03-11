import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'express-handlebars';
import { printName } from './hbs/helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname,'..','public'));
  app.useStaticAssets(join(__dirname, './common', 'uploads'), { prefix: '/media' });
  app.setBaseViewsDir(join(__dirname,'..','views'));
 
  //var hbs = require('hbs');
  
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'layout_main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
      helpers: { printName },
    }),
  );
  app.setViewEngine('hbs');

  //hbs.registerPartials(join(__dirname,'views/partials'));
  
  await app.listen(3000);
}
bootstrap();
