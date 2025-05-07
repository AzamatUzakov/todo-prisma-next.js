// app/api/users/[id]/route.ts

import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// 👇 Правильная сигнатура
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(
      { message: "Пользователь удалён" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id);
  const body = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: body.name,
        email: body.email, 
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Ошибка обновления" }, { status: 500 });
  }
}
