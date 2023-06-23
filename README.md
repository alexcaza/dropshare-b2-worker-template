# Cloudflare worker to serve shared files from a Backblaze B2 bucket

Using Backblaze's S3 compatible API to create clean URLs for B2 files instead of it exposing the bucket name.

## Use this template

```
npx wrangler generate projectname https://github.com/alexcaza/dropshare-b2-worker-template
```

## Secrets

Create a `secrets.json` file with the following keys:

```json
{
  "ACCESS_KEY_ID": "<B2_APPLICATION_KEY_ID>",
  "SECRET_ACCESS_KEY": "<B2_APPLICATION_KEY>",
  "DEFAULT_REGION": "<B2_BUCKET_REGION>",
  "S3_BUCKET": "<B2_BUCKET_NAME>.<B2_S3_BUCKET_URL>"
}
```

To add the secrets to the worker:
`npx wrangler secret:bulk secrets.json`

## Deploying the worker

`npx wrangler deploy index.js`
