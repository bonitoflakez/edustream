"use client";
import { useState } from 'react';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      // Perform login operation with email/username and password
      console.log('Logging in with:', email, 'or', username, 'and', password);
    } else {
      // Perform signup operation with email, username, and password
      console.log('Signing up with:', email, username, 'and', password);
    }
    // Reset form fields
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="flex flex-col items-center gap-y-4 mb-4">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{isLogin ? 'Login' : 'Sign Up'}</button>
          <p className="text-gray-600 text-xs">{isLogin ? 'Need an account?' : 'Already have an account?'} <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-blue-500 focus:outline-none">{isLogin ? 'Sign Up' : 'Login'}</button></p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;