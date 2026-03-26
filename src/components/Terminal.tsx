import { useState } from 'react';

export default function Terminal() {
  const [output, setOutput] = useState<string[]>(['ChronoLattice™ System Terminal v1.0.0', 'Ready.']);
  const [input, setInput] = useState('');

  const handleCommand = () => {
    setOutput(prev => [...prev, `> ${input}`, `Executing: ${input}...`]);
    setInput('');
  };

  return (
    <div className="bg-black p-4 rounded-lg font-mono text-sm h-full flex flex-col gap-2">
      <div className="flex-1 overflow-y-auto space-y-1">
        {output.map((line, i) => <div key={i}>{line}</div>)}
      </div>
      <div className="flex gap-2">
        <span>&gt;</span>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}
