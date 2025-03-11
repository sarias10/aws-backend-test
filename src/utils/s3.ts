import { S3Client } from '@aws-sdk/client-s3';
import { config } from '../config/env';

const s3 = new S3Client({
    region: config.aws.region,
    credentials: {
        accessKeyId: config.aws.accessKeyId,
        secretAccessKey: config.aws.secretAccessKey
    }
});

export default s3;