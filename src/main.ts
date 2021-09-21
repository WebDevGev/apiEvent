import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('EventApp')
        .setDescription('Event App with calendar')
        .setVersion('1.0.0')
        .addTag('Gev')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.enableCors()

    await app.listen(PORT, ()=>{console.log(`Server is run on port ${PORT}`);
    })
}

start()