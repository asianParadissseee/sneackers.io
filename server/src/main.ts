import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 7070
    app.enableCors()
    await app.listen(PORT, ()=> console.log(`server started on port ${PORT}`) )
}

bootstrap();
