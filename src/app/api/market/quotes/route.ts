import { getQuotes } from "@/services/brapi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tickers = searchParams.get("tickers")?.split(",").map((t) => t.trim()).filter(Boolean) || [];

  if (tickers.length === 0) {
    return NextResponse.json({ error: "Informe ao menos um ticker." }, { status: 400 });
  }

  const quotes = await getQuotes(tickers);
  return NextResponse.json({ quotes });
}
