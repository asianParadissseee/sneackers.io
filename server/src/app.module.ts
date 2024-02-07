import {Module} from '@nestjs/common';
import {SneakersModule} from './sneakers/sneakers.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [],
            synchronize: true,
            autoLoadEntities: true
        })
    ],
    controllers: [],
    providers: [],

})
export class AppModule {
}
