import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from '@adminjs/nestjs';
import { MainModule } from './main/main.module';
import { FileModule } from './file/file.module';
import { NeuronApModule } from './neuron-ap/neuron-ap.module';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

@Module({
  imports: [
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
          	
          ],
        },
      }),
    }),
    MainModule,
    FileModule,
    NeuronApModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
