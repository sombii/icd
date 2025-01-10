import { NextResponse } from 'next/server';

export async function GET() {
  // const users = getAllUsers();
  return NextResponse.json({ name:"sanjoge" });
}
