"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { User } from "@prisma/client";


interface delBtn {
    id: number,
}

const DeleteButton: React.FC<delBtn> = ({ id }) => {
    const handleDelete = async () => {
        const confirmed = confirm("Удалить этого пользователя?");
        if (!confirmed) return;

        try {
            const res = await fetch(`/api/users/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                window.location.reload();
            } else {
                alert("Ошибка при удалении пользователя");
            }
        } catch (error) {
            alert("Ошибка соединения с сервером");
        }
    };

    return (
        <button
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors shadow-md cursor-pointer"
            onClick={handleDelete}
        >
            Удалить
        </button>
    );
};

export default DeleteButton;


interface Userss {
    user: User
}



export const Edit: React.FC<Userss> = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(user?.name || "");

    const handleSave = async () => {
        try {
            const res = await fetch(`/api/users/${user?.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            if (res.ok) {
                setOpen(false);
                window.location.reload();
            } else {
                alert("Ошибка при сохранении");
            }
        } catch (err) {
            console.error(err);
            alert("Ошибка запроса");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
                    Редактировать
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Редактировать профиль</DialogTitle>
                    <DialogDescription>
                        Внесите изменения и нажмите "Сохранить".
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Имя
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>


                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>Сохранить</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

