import {CacheHandler} from "./CacheHandler"
import {S3ContentService} from "./service/S3ContentService"

const s3ContentService = new S3ContentService();
const cacheHandler = new CacheHandler(s3ContentService);
export const cacheHandlerLambda = cacheHandler.handler;