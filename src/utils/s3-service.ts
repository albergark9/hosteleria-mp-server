import * as S3 from 'aws-sdk/clients/s3';
import * as fs from "fs";

async function uploadOneFile(file: Express.Multer.File, path: string, name: string) {
  // read file
  const fileContent = fs.readFileSync(file.path);

  // s3 access credentials
  const s3 = new S3({
    accessKeyId: process.env.BUCKET_ACCESSKEY,
    secretAccessKey: process.env.BUCKET_SECRETKEY
  });

  // params to access s3 bucket
  let params = {
    Bucket: process.env.BUCKET_NAME,
    Key: path + name,
    Body: fileContent,
    ACL: 'public-read',
  };

  // upload the file
  s3.upload(params, function (err: any, data: any) {
    if (err) {
      console.log('There was an error uploading your file: ', err);
      throw err;
    }
    console.log('File: ' + file.originalname + ' successfully uploaded to S3 as: ' + name);
    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Temp File deleted after upload');
    });
  });
}

async function uploadStream(filePath: string, doc: any): Promise<string> {
  // s3 access credentials
  const s3 = new S3({
    accessKeyId: process.env.BUCKET_ACCESSKEY,
    secretAccessKey: process.env.BUCKET_SECRETKEY
  });

  // params to access s3 bucket
  let params: S3.PutObjectRequest = {
    ACL: 'public-read',
    Body: doc,
    Bucket: process.env.BUCKET_NAME,
    ContentType: 'application/pdf',
    Key: filePath + '/report.pdf'
  };

  // initialize variable to store the aws url
  let res: any = undefined;

  try {
    res = await s3.upload(params).promise();
    console.log('-- File uploaded successfully to ' + res.Location);

  } catch (error: any) { throw error; }

  return res.Location;
}

// TODO: review
async function getSignedUrl(filePathName: string) {
  // s3 access credentials
  const s3 = new S3({
    accessKeyId: process.env.BUCKET_ACCESSKEY,
    secretAccessKey: process.env.BUCKET_SECRETKEY,
    region: 'us-east-2'
  });

  try {
    const signedUrlExpireSeconds = 60 * 5;

    const url = await s3.getSignedUrlPromise('getObject', {
      Bucket: process.env.BUCKET_NAME,
      Key: filePathName,
      Expires: signedUrlExpireSeconds,

    });

    return url;

  } catch (e) {
    throw new Error(`Could not retrieve url signerd from S3: ${e.message}`)
  }

}

async function getElement(filePath: string): Promise<any> {
  // s3 access credentials
  const s3 = new S3({
    accessKeyId: process.env.BUCKET_ACCESSKEY,
    secretAccessKey: process.env.BUCKET_SECRETKEY
  });

  // params to access s3 bucket
  let params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath
  };

  return await s3.getObject(params).promise();
}

// delete every item inside filepath
async function emptyS3Directory(filepath: string) {
  const s3 = new S3({
    accessKeyId: process.env.BUCKET_ACCESSKEY,
    secretAccessKey: process.env.BUCKET_SECRETKEY
  });

  var params = {
    Bucket: process.env.BUCKET_NAME,
    Prefix: filepath
  };

  const listedObjects = await s3.listObjectsV2(params).promise();

  if (listedObjects.Contents.length === 0) return;

  const deleteParams = {
    Bucket: process.env.BUCKET_NAME,
    Delete: { Objects: [] as any }
  };

  listedObjects.Contents.forEach(({ Key }) => {
    deleteParams.Delete.Objects.push({ Key });
  });

  await s3.deleteObjects(deleteParams).promise();

  if (listedObjects.IsTruncated) await emptyS3Directory(filepath);
}

export {
  uploadOneFile,
  uploadStream,
  getSignedUrl,
  getElement,
  emptyS3Directory
};
