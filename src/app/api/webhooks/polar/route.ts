import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature, generateLicenseKey } from '@/lib/polar';

interface PolarWebhookPayload {
  type: string;
  data: {
    id: string;
    customer_email: string;
    product_id: string;
    amount: number;
    currency: string;
    status: string;
  };
}

export async function POST(request: NextRequest) {
  const secret = process.env.POLAR_WEBHOOK_SECRET;

  if (!secret) {
    console.error('POLAR_WEBHOOK_SECRET is not set');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  const signature = request.headers.get('x-polar-signature') || '';
  const body = await request.text();

  if (!verifyWebhookSignature(body, signature, secret)) {
    console.error('Invalid webhook signature');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const payload: PolarWebhookPayload = JSON.parse(body);

  switch (payload.type) {
    case 'checkout.completed': {
      const licenseKey = generateLicenseKey();
      const customerEmail = payload.data.customer_email;

      // TODO: Replace with actual implementation:
      // 1. Store license key in database
      // 2. Send confirmation email with license key
      // 3. Activate license for the customer
      console.log(`[Polar Webhook] New purchase:`, {
        orderId: payload.data.id,
        email: customerEmail,
        licenseKey,
        product: payload.data.product_id,
        amount: payload.data.amount,
        currency: payload.data.currency,
      });

      return NextResponse.json({
        success: true,
        licenseKey,
        message: 'License generated successfully',
      });
    }

    case 'checkout.refunded': {
      // TODO: Deactivate license key
      console.log(`[Polar Webhook] Refund:`, {
        orderId: payload.data.id,
        email: payload.data.customer_email,
      });

      return NextResponse.json({ success: true, message: 'Refund processed' });
    }

    default: {
      console.log(`[Polar Webhook] Unhandled event: ${payload.type}`);
      return NextResponse.json({ success: true, message: 'Event received' });
    }
  }
}
