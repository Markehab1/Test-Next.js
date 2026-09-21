export async function GET() {
  return Response.json({ message: "Hello from the server!" })
}

export async function POST(request) {
  const body = await request.json()
  return Response.json({ received: body })
}