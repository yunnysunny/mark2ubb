import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function uploadFileByImageRide(path, options) {
  const form = new FormData()

  const file = await fs.promises.readFile(path)
  const filename = path.split('/').pop()
  form.append(
    'source',
    new Blob([file]),
    filename,
  )
//   form.append('format', 'txt')

  const res = await fetch('https://www.imageride.net/api/1/upload', {
    method: 'POST',
    body: form,
    headers: {
      'X-API-Key': options.apiKey,
    },
  })

  return (await res.text())
}

export async function uploadFileByUploadMe(path, options) {
    const form = new FormData()
    const file = await fs.promises.readFile(path)
    const filename = path.split('/').pop()
    form.append(
        'image',
        new Blob([file]),
        filename,
    )
    form.append('key', options.apiKey)
    const res = await fetch('https://upload.me/api/v1/upload', {
        method: 'POST',
        body: form,

    })

    return (await res.json())
}



