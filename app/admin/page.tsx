import { FiUser, FiLock } from "react-icons/fi";

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                <form className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-10 pt-8 pb-10 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">Вход в админ-панель</h2>

                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="login">
                            Логин
                        </label>
                        <div className="relative">
                            <FiUser className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                id="login"
                                type="text"
                                placeholder="admin"
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
                            Пароль
                        </label>
                        <div className="relative">
                            <FiLock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            Войти
                        </button>
                    </div>
                </form>
                <p className="text-center text-white text-sm mt-4">
                    &copy;2025 Админ-панель. Все права защищены.
                </p>
            </div>
        </div>
    );
};

export default Page;
