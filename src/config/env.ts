import * as dotenv from 'dotenv';

const isProduction = process.env.NODE_ENV === 'production';

// Sino es producción entonces es desarrollo
if(!isProduction){
    const envFile = '.env.development';
    dotenv.config({ path: envFile });
    console.log(`🛠️ Loaded environment variables from ${envFile}`);
}

export const config = {
    port: process.env.PORT,
    secret: process.env.JWT_SECRET as string, // jwt.sign() espera que el segundo argumento sea una cadena (string) que representa la clave secreta o la clave privada
    db: {
        host: process.env.DB_HOST as string,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        name: process.env.DB_NAME as string,
    },
    aws: {
        region: process.env.AWS_DEFAULT_REGION as string,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
        awsS3BucketPostMedia: process.env.AWS_S3_BUCKET_POST_MEDIA as string,
        awsCloudformationDomain: process.env.AWS_CLOUDFORMATION_DOMAIN as string
    }
};
