// // mathjax-svg.mjs
// import { mathjax } from '@mathjax/src/js/mathjax.js'
// import { TeX } from '@mathjax/src/js/input/tex.js'
// import { SVG } from '@mathjax/src/js/output/svg.js'
// import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js'
// import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js'

// // 1. 适配器（无 DOM 环境）
// const adaptor = liteAdaptor()
// RegisterHTMLHandler(adaptor)

// // 2. 输入 & 输出配置
// const tex = new TeX({
//   packages: ['base', 'ams'],
// })

// const svg = new SVG({
//   fontCache: 'none', // 输出为独立 SVG（不依赖全局 font cache）
// })

// // 3. 创建 MathJax 文档
// const html = mathjax.document('', {
//   InputJax: tex,
//   OutputJax: svg,
// })

// export function mathToSvg(
//   latex,
// ) {
//   const node = html.convert(latex, {
//     display: true,
//   })
//   const svg = adaptor.firstChild(node)
//   return adaptor.outerHTML(svg)
// }

export function mathToPng(
  latex,
) {
    const expression = encodeURIComponent(latex);
    return `https://latex.codecogs.com/png.image?${expression}`;
}