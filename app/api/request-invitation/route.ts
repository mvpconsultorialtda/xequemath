
import { NextResponse } from 'next/server';
import { requestInvitationSchema } from '@/app/schemas/request-invitation';

export async function POST(request: Request) {
  const data = await request.json();

  try {
    requestInvitationSchema.parse(data);
  } catch (error) {
    return NextResponse.json({ message: 'Dados inválidos', errors: error.errors }, { status: 400 });
  }

  console.log('Request invitation data:', data);

  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json({ message: 'Seu pedido de convite foi enviado com sucesso! Você receberá um e-mail em breve.' });
}
