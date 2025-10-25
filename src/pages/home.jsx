export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold">Tokenized Social Network</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Every person has their own tradable token.
      </p>

      <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl hover:opacity-90 transition">
        Connect Wallet
      </button>
    </div>
  );
}
