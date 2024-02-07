import { Module } from '@nestjs/common';
import { QueryService } from './services/query/query.service';
import { QueryController } from './controllers/query/query.controller';
import { ClickHouseService } from './clickhouse.service';

@Module({
  controllers: [QueryController],
  providers: [QueryService,ClickHouseService],
  exports: [ClickHouseService],
})
export class QueryModule {}
