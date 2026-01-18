import { describe, expect, it } from 'vitest';
import { uploadFileByImageRide, } from '../src/lib/upload-image.mjs'
describe('upload-image', () => {
  it('uploadFileByImageRide', async () => {
    const key = process.env.X_API_KEY
    const data = await uploadFileByImageRide('test/fixtures/demo.gif', { apiKey: key })
    console.log(data)
  })
//   it('uploadFileByUploadMe', async () => {
//     const key = process.env.UPLOAD_ME_API_KEY
//     const data = await uploadFileByUploadMe('test/fixtures/demo.gif', { apiKey: key })
//     console.log(data)
//   })
})