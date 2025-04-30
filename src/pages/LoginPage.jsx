import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute top-5 left-5 mb-4">
        <Link to="/" className="text-gray-700 hover:text-black text-xl">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Ainda não tem uma conta?
          <Link to="/singup">
            <span className="text-blue-500 cursor-pointer">Cadastre-se</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
