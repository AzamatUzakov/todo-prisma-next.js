'use client';

import { useState } from "react";

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Статус загрузки
    const [error, setError] = useState(""); // Для отображения ошибок
    const [successMessage, setSuccessMessage] = useState(""); // Сообщение об успехе

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username.trim()) return; // Если поле пустое, не отправляем запрос

        setIsLoading(true); // Включаем статус загрузки

        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Ошибка при добавлении пользователя");
                setSuccessMessage(""); // Очистить сообщение об успехе при ошибке
            } else {
                setSuccessMessage("Пользователь добавлен успешно!");
                setError(""); // Очистить ошибки при успехе
                setUsername(""); // Очистить поле ввода
            }

        } catch (err) {
            setError("Ошибка запроса: " + err);
            setSuccessMessage(""); // Очистить сообщение об успехе при ошибке
        } finally {
            setIsLoading(false); // Отключить статус загрузки
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center space-x-3 bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
            >
                <input
                    type="text"
                    placeholder="Add User"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    disabled={isLoading} // Отключить кнопку при загрузке
                >
                    {isLoading ? "Добавляю..." : "Добавить"} {/* Показать статус загрузки */}
                </button>
            </form>

            {error && <p className="text-red-500 mt-2">{error}</p>} {/* Сообщение об ошибке */}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>} {/* Сообщение об успехе */}
        </div>
    );
};

export default AddUser;
