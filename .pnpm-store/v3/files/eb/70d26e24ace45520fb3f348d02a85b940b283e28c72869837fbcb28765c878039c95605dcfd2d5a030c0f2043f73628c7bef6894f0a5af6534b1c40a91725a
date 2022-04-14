import { deserializeCss } from '@vanilla-extract/integration';
import { getOptions } from 'loader-utils';

function virtualFileLoader () {
  const {
    source
  } = getOptions(this);
  const callback = this.async();
  deserializeCss(source).then(deserializedCss => {
    callback(null, deserializedCss);
  });
}

export { virtualFileLoader as default };
