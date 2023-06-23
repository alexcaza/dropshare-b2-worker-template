import { AwsClient } from 'aws4fetch'

export default {
  async fetch(request, env) {
    const aws = new AwsClient({
      accessKeyId: env.ACCESS_KEY_ID,
      secretAccessKey: env.SECRET_ACCESS_KEY,
      region: env.DEFAULT_REGION,
    })

    var url = new URL(request.url)
    // Switch the hostname to the S3 bucket
    // and keep the object id intact
    url.hostname = env.S3_BUCKET

    // Prevent people from hitting the file list
    if (url.pathname === '/' || url.pathname === '') {
      return new Response(null, { status: 204 })
    }

    var response = await aws.fetch(url, {
      headers: { cf: { cacheEverything: true } },
    })

    return response
  },
}
