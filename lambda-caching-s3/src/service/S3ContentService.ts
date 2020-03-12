import { MisUtil } from "../util/MisUtil";
import { config } from "../config/config";

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
export class S3ContentService {

    public getFile = async (ttl: any, fileName: any = 'seattleValues.json') => {
        let key = 'North America/USA/Washington/Seattle/' + fileName;
        var params = {
            Bucket: config.BUCKET_NAME,
            Key: key
        }
        console.log(`params :: ${JSON.stringify(params)}`)
        let s3Objects;
        let content;
        try {
            s3Objects = await s3.getObject(params).promise();
            if (s3Objects && s3Objects.LastModified) {
                console.log(`Last Modified:  ${s3Objects.LastModified}`);
                content = s3Objects.Body.toString();
                console.log(`Content:: ${content}`);
                if (MisUtil.isExpired(s3Objects.LastModified, ttl)) {
                    console.log('content expired');
                    //recreating content
                    content = await this.saveContent(this.createContent(), key);
                }
            } else {
                console.log("File not exists in S3");
                //recreating content
                content = await this.saveContent(this.createContent(), key);
            }
        } catch (e) {
            console.log(e)
            console.log('File not exists, create new file Object');
            //File not exists, create new file Object
            //recreating content
            content = await this.saveContent(this.createContent(), key);
        }
        return content;
    }
    /*
    Function save the content to bucket
    */
    saveContent = async (content: any, key: any) => {
        var params = {
            Bucket: config.BUCKET_NAME,
            Key: key,
            Body: content
        }

        try {
            let s3Response = await s3.putObject(params).promise();
            console.log(`Object succesfully stored ${JSON.stringify(s3Response)}`);
        }
        catch (ex) {
            console.log(`Exception:: ${ex}`);
        }

        return content;
    }

    /*
    Function to create dummy content to be cached in S3
    */
    createContent = () => {
        console.log('creating content');
        let content = [];
        content.push({ "cases": Math.floor((Math.random() * 100) + 1), "state": "washington" });
        content.push({ "cases": Math.floor((Math.random() * 100) + 1), "state": "NY" });
        content.push({ "currentTime": MisUtil.getCurrentTime() });
        return JSON.stringify(content)
    }
}
