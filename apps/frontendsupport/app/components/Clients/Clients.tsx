import { Box } from '@cutting/component-library';
import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';

const clients = [
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696609565/volvo_qhsx69.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696610104/lloyds_bank_logol_vnortq.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696680163/apple_whmbee.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/hp_jlfi7z.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696691538/redhat_sms6oc.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/waitrose_qmcwgn.png',
  'https://res.cloudinary.com/ddospxsc8/image/upload/v1696596781/disclosure_efy46i.png',
] as const;

export function Clients(): JSX.Element {
  return (
    <>
      {clients.map((c) => (
        <Box key={c} marginRight="xxxlarge" className="box">
          <LazyLoadedImage layout="constrained" src={c.trim()} />
        </Box>
      ))}
    </>
  );
}
