import react from 'react';


export default function Inicial() {
return (
    <div className="p-6 max-w-sm mx-auto bg-gray-900 rounded-xl shadow-md flex items-center space-x-4">
  
  <div>
    <div className="text-xl font-medium text-white">Olá!</div>
    <p className="text-white">Para Começar seu teste, digite um e-mail</p>
    <input type="email" className="border border-yellow-300 bg-gray-800 focus:ring-2 focus:ring-blue-600 rounded-xl w-full" placeholder="exemplo@exemplo.com" />
  </div>
</div>
);
}