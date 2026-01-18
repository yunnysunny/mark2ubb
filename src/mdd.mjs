import { mathToPng } from './lib/math-to-image.mjs'
export function transform(md, options = {}) {
    let output = md
    if (options.math2Png) {
        output = md.replace(/\$\$(.+?)\$\$/gs, (match, p1) => {
            let math = p1.trim()
            const url = mathToPng(math)
            math = math.replaceAll(/\r?\n/g, ' ')
            return `![${math}](${url})\n`
        }).replace(/\$(.+?)\$/g, (match, p1) => {
            let math = p1.trim()
            const url = mathToPng(math)
            math = math.replaceAll(/\r?\n/g, ' ')
            return `![${math}](${url})`
        })
    }
    if (options.relativeImageBaseUrl) {
        output = output.replace(/!\[(.*?)\]\((.+?)\)/g, (match, alt, src) => {
            let newSrc = src
            if (src && !/^https?:\/\//i.test(src)) {
                newSrc = new URL(src, options.relativeImageBaseUrl).href
            }
            return `![${alt}](${newSrc})`
        })
    }
    return output
}
