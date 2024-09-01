import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    app.useGlobalPipes(
        new ValidationPipe({ transform: true })
    )

    await app.listen(3000)
}

bootstrap()