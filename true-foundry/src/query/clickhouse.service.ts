import { Injectable } from '@nestjs/common';
import { ClickHouse } from 'clickhouse';
import { clickhouseConfig } from './clickhouse.config';

@Injectable()
export class ClickHouseService {
  private readonly client: any;

  constructor() {
    this.client = new ClickHouse(clickhouseConfig);
  }

  async executeQuery(query: string): Promise<any> {
    try {
      const result = await this.client.query(query).toPromise();
      return result;
    } catch (error) {
      console.error('Error executing ClickHouse Query:', error);
      throw error;
    }
  }
}
