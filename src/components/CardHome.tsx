import react from 'react';

interface CardHomeProps {
  text: string;
  number: number;
  icon: string;
  

}

export function CardHome({text,number,icon}: CardHomeProps) {
  return(
    <div className="flex gap-1 bg-white ml-22 p-2 rounded-lg shadow-md w-1/4">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-bic">{icon}</div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            {text}
          </h3>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {number}
          </p>
        </div>
      </div>
    </div>
  );
}  