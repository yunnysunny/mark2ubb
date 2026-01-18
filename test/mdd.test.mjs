import { describe, it } from 'vitest';
import { transform } from '../src/mdd.mjs';
describe('mdd', () => {
  it('transform', async () => {
    const md = `
# Sample Document
Here is an image:

![Alt text](./images/picture.png)
And here is some math:

Inline math: $E=mc^2$
Block math:
$$
\\int_0^\\infty e^{-x} dx = 1
$$
`;
    const result = transform(md, {
      relativeImageBaseUrl: 'https://example.com/assets/',
      math2Png: true,
    });
    console.log(result);
  });
});
