export default function Card({ logo , color, title, value, change}) {
    return (
      <div className={`card w-64 flex-1 min-w-[200px] ${color} rounded-lg shadow-md p-5 relative`}> {/* Thêm relative */}
        {/* Logo - positioned top right */}
        <div className="absolute top-4 right-4"> {/* Thêm container cho logo */}
          <img src={logo} alt="Company Logo" className="h-8 w-auto" /> {/* Thêm class cho kích thước */}
        </div>
  
        <div className="flex flex-col space-y-2">
          <h3 className="text-black text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold">${value}</p>
  
          <div className="flex items-center">
            <span className="text-green-500 text-sm flex items-center">
              ▲ {change}%
            </span>
            <span className="text-gray-400 text-sm ml-1">period of change</span>
          </div>         
        </div>
      </div>
    );
  }