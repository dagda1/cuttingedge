import crypto from 'crypto';

export const nonce = `nonce-${crypto.randomBytes(16).toString('hex')}`;
