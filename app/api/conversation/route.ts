import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "Answer questions as short and quickly as possible. You must do it under 75 tokens.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openAi.apiKey) {
      return new NextResponse("OpenAI Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const response = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    await increaseApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("CONVERSATTION_ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
