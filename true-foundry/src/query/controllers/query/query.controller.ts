import { Controller, Post, Get, Req, HttpException, HttpStatus } from '@nestjs/common';
import { QueryService } from '../../services/query/query.service';
import { ClickHouseService } from '../../clickhouse.service';

@Controller()
export class QueryController {
    constructor(private queryService: QueryService, private readonly clickhouseService: ClickHouseService) { }
    @Post('query')
    async makeRequest(@Req() req: Request): Promise<any> {
        try {
            const body = req.body;
            const reqPrompt = body["text"];
            const username = body["username"];
            const response = await this.queryService.fetchResponse(reqPrompt);
            const insertQuery = `
      INSERT INTO sample2 (username, request, response, inputToken, outputToken, timeTaken, createdAt)
      VALUES ('${username}', '${reqPrompt.substring(0, 20)}', '${response["text"].substring(0, 20)}', '${response["inputToken"]}', '${response["outputToken"]}', '${response["timeTaken"]}', '${new Date().getTime()}');
    `;
            await this.clickhouseService.executeQuery(insertQuery);
            return response;
        } catch (error) {
            console.error(error);
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Get('dashboard')
    async dashboard(): Promise<any> {
        const fetchAllQuery = `
      SELECT * FROM sample2;
    `;
        const res = this.clickhouseService.executeQuery(fetchAllQuery);
        return res;
    }


}
