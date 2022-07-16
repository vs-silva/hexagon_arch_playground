import { Module } from '@nestjs/common';
import { HubSqlDatabaseModule } from './hub-databases/hub-sql-database.module';
import { HubDomainsModule } from './hub-domains/hub-domains.module';

@Module({
  imports: [HubSqlDatabaseModule, HubDomainsModule],
})
export class AppModule {}
