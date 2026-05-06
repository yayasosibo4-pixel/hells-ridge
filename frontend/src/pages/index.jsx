import React from "react";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold text-yellow-500">HELL'S RIDGE</h1>
      <p className="mt-4 text-lg">Where the story does not end - it possesses.</p>
      <a href="/library" className="mt-6 px-4 py-2 bg-yellow-600 hover:bg-yellow-400 rounded">
        Enter Library
      </a>
    </div>
  );
}
