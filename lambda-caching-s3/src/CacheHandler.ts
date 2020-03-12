// dependencies
import { S3ContentService } from "./service/S3ContentService"


export class CacheHandler {

    s3ContentService: S3ContentService;

    constructor(s3ContentService: S3ContentService) {
        this.s3ContentService = s3ContentService;
    }

    public handler = async (event: any, context: any): Promise<any> => {
        //console.log("context\n"+context);
        //console.log(event.httpMethod);
        //console.log(JSON.stringify(event));
        console.log(`Query Params ${event.queryStringParameters}`)
        //
        let fileName = event.queryStringParameters.fileName;
        let ttl = event.queryStringParameters.ttl;

        console.log(`ttl :: ${ttl}, fileName :: ${fileName} `);

        let content = await this.s3ContentService.getFile(ttl, fileName);
        //
        return {
            statusCode: 200,
            body: content
        }
    }
}