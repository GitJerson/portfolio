import './cursor.css'
import './cursor.js'
function Cursor() {
  return (
    <div className="m-0 min-h-screen overflow-x-hidden hero-bg before:content-[''] 
    before:fixed before:inset-0 before:pointer-events-none before:z-0">
      <div id="cursor-root" className="fixed pointer-events-none z-99999 top-0 left-0 will-change-transform">
        <div id="cursor-qi" className="absolute w-11 h-11 border border-dashed border-[rgba(147,51,234,0.18)] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform transition-width transition-height transition-opacity"></div>
        <div id="cursor-aura" className='absolute w-11 h-11 border border-solid border-[rgba(212,175,55,0.25)] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform transition-width transition-height transition-opacity'></div>
        <div id="cursor-main" className="absolute w-7 h-7 translate-x-[-50%] translate-y-[-50%]">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full h-full '>
            <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="#d4af37" strokeWidth="1" fill="rgba(212,175,55,0.05)" />
            <path d="M14 8 L20 14 L14 20 L8 14 Z" stroke="#d4af37" strokeWidth="0.8" fill="rgba(212,175,55,0.12)" />
            <line x1="14" y1="2" x2="14" y2="8" stroke="#d4af37" strokeWidth="0.8" opacity="0.6" />
            <line x1="14" y1="20" x2="14" y2="26" stroke="#d4af37" strokeWidth="0.8" opacity="0.6" />
            <line x1="2" y1="14" x2="8" y2="14" stroke="#d4af37" strokeWidth="0.8" opacity="0.6" />
            <line x1="20" y1="14" x2="26" y2="14" stroke="#d4af37" strokeWidth="0.8" opacity="0.6" />
            <circle cx="14" cy="14" r="2" fill="#f0c945" opacity="0.9" />
            <circle cx="14" cy="3" r="1" fill="#d4af37" opacity="0.5" />
            <circle cx="25" cy="14" r="1" fill="#d4af37" opacity="0.5" />
            <circle cx="14" cy="25" r="1" fill="#d4af37" opacity="0.5" />
            <circle cx="3" cy="14" r="1" fill="#d4af37" opacity="0.5" />
          </svg>
        </div>
        <div id="cursor-dot" className='absolute w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
        <div id="cursor-burst" className='absolute w-12 h-12 border border-[rgba(212,175,55,0.7)] rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none'></div>
      </div>
    </div>
  );
}

export default Cursor
