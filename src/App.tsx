import Main from "./components/Main"

function App() {

  return (
    <div className="min-h-screen bg-white/50 flex items-center justify-center p-3">
      <main className="w-full max-w-3xl bg-bg rounded-3xl p-12 flex flex-col items-center justify-center shadow-2xl shadow-blueAccent/50">
        <h1 className="text-4xl font-bold text-blueAccent mb-5">
          Where do you want to go today?
        </h1>
        <Main />
      </main>
    </div>
  )
}

export default App
