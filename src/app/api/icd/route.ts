import { getAllUsers } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = getAllUsers();
    return NextResponse.json({ users });
  }
catch (error) {
    return NextResponse.json({ error });
}
}
