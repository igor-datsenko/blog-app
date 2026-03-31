export function RegisterForm({ onSwitchToLogin }) {


    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Имя</label>
                <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Ваше имя"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Пароль</label>
                <input
                    type="password"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="••••••••"
                />
            </div>

            <button
                type="button"
                className="w-full rounded-lg bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition"
            >
                Зарегистрироваться
            </button>

            <p className="text-center text-sm text-gray-600">
                Уже есть аккаунт?{" "}
                <button
                    type="button"
                    onClick={onSwitchToLogin()}
                    className="text-blue-600 hover:underline"
                >
                    Войти
                </button>
            </p>
        </form>
    );
}