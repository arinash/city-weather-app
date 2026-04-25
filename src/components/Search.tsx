interface SearchBarProps {
    query: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

export default function Search({ query, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-2">
        <input 
            type="text"
            value={query}
            placeholder="Enter the city name"
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onSearch()}
            className="flex-1 px-4 py-2 rounded-2xl border border-blueAccent/50 bg-white/50 text-blueAccent placeholder-blueAccent/50 focus:outline-none focus:bg-white focus:ring-2 text-sm"/>
        <button 
            onClick={onSearch}
            className="px-4 py-2 bg-blueAccent hover:bg-blueAccent/80 text-white font-medium rounded-2xl text-sm shadow-lg shadow-blueAccent/40">
            Search
        </button>
    </div>
  )
}
