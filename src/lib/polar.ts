import { createHmac } from 'crypto';

export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');
  return signature === expectedSignature;
}

export function generateLicenseKey(): string {
  const segments = 4;
  const segmentLength = 5;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const parts: string[] = [];

  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)];
    }
    parts.push(segment);
  }

  return parts.join('-');
}

export function getCheckoutUrl(): string {
  return process.env.POLAR_CHECKOUT_URL || 'https://polar.sh/checkout/mock';
}
