import { S3 } from 'aws-sdk'; 

export async function POST(req) { 
    const { file, fileName } = await req.json(); 
    const s3 = new S3({ 
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
        region: process.env.AWS_REGION
    }); 
    const params = { 
        Bucket: process.env.AWS_S3_BUCKET, 
        Key: fileName, 
        Body: Buffer.from(file, 'base64')
    }; 
    
    try { 
        await s3.upload(params).promise(); 
        return new Response(JSON.stringify({ message: 'File uploaded successfully' }), { status: 200 }); 
    } catch (error) { 
        return new Response(JSON.stringify({ error: error.message }), { status: 500 }); 
    } 
}