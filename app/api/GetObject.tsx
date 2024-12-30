import { NoSuchKey, S3ServiceException, S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { fromEnv } from '@aws-sdk/credential-providers';

export async function GetImageFromS3(params: string) {
	const client = new S3Client({ region: 'us-east-2', credentials: fromEnv() });
	const bucketName = 'nkane';
	const key = 'portfolio/images/' + params + '.png';
	const input = {
		Bucket: bucketName,
		Key: key,
	};

	const command = new GetObjectCommand(input);

	try {
		const response = await client.send(command);

		if (response.Body === undefined) {
			return 'image not found';
		}

		// const str = await response.Body.transformToString();

		return response.Body;
	} catch (caught) {
		if (caught instanceof NoSuchKey) {
			console.error(
				`Error from S3 while getting object "${key}" from "${bucketName}". No such key exists.`,
			);
		} else if (caught instanceof S3ServiceException) {
			console.error(
				`Error from S3 while getting object from ${bucketName}.  ${caught.name}: ${caught.message}`,
			);
		} else {
			throw caught;
		}
	}
}
