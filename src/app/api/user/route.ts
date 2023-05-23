import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log("GET REQUEST");
}

export async function POST() {
  console.log("POST REQUEST");
}
