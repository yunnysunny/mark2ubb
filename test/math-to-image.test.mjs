import { describe, it } from 'vitest';
import { mathToPng, } from '../src/lib/math-to-image.mjs';
describe('math-to-image', () => {
  // it('mathToSvg', async () => {
  //   const svg = mathToSvg('\\int_0^\\infty x^2 dx')
  //   console.log(svg)
  // })
  it('mathToPng', async () => {
    // console.log(svg)

    const png = mathToPng('\\dpi{200}\\int_0^\\infty x^2 dx')
    console.log(png)
  })
})

