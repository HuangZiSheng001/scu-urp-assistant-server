import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { InfoService } from './info.service'
import { InfoController } from './info.controller'
import { BachelorDegree, ScuUietp } from './info.entity'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([BachelorDegree, ScuUietp])
  ],
  providers: [InfoService],
  controllers: [InfoController]
})
export class InfoModule {}
