import AddUser from '@/components/AddUser';
import DeleteButton, { Edit } from '@/components/Buttons';
import prisma from '@/lib/prisma'


async function Dashboard() {
    const users = await prisma.user.findMany()


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4 py-16">
            <div className="max-w-2xl w-full">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 font-[family-name:var(--font-geist-sans)]">
                    Admin
                </h1>

                <div className='flex justify-center mb-10'>
                    <AddUser />
                </div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 font-[family-name:var(--font-geist-sans)]">
                                {user.name}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Пользователь ID: {user.id}
                            </p>
                            <div className='flex items-center mt-5 gap-2 cursor-pointer'>
                                <DeleteButton id={user.id} />
                                <Edit user={user} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;