import { Link } from "react-router-dom";

function PerfilPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl w-full">
        <div className="absolute top-5 left-5 mb-4">
          <Link to="/" className="text-gray-700 hover:text-black text-xl">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Nome do Usuário</h2>
            <p className="text-gray-600 mb-4">email@exemplo.com</p>
            <p className="text-gray-800 mb-2">
              <strong>Bio:</strong> Aqui vai uma breve descrição sobre o
              usuário.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PerfilPage;
