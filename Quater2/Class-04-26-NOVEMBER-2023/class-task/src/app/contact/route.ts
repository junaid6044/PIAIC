import { NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json({ message: 'Contact Page Custom Route' }, { status: 200 })
}