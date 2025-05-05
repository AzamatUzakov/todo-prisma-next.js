
const AddUser = () => {
    return (
        <>

            <div>

                <form className="flex items-center space-x-3 bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Add User"
                        className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddUser;