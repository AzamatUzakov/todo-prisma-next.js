import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { title } = await request.json();

  if (!title) {
    return NextResponse.json(
      { error: "Title or content is missing" },
      { status: 400 }
    );
  }

  try {
    // ❗️Заменить на конкретный ID юзера (пока временно, без авторизации)
    const dummyUser = await prisma.user.findFirst(); // или передай конкретный email/ID

    if (!dummyUser) {
      return NextResponse.json({ error: "No users in DB" }, { status: 404 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        authorId: dummyUser.id,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
