import { Rocket } from 'lucide-react';

export default function DeploymentServices() {
  const vectors = [
    { name: 'Nexus Ritual', status: 'Operational' },
    { name: 'Plasma Pulse', status: 'Active' },
    { name: 'Bloom Broadcast', status: 'Broadcasting' },
    { name: 'Genesis Seed', status: 'Deployed' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {vectors.map((v) => (
        <div key={v.name} className="border border-neutral-800 p-6 rounded-lg flex flex-col gap-2">
          <Rocket className="text-white" />
          <h3 className="text-lg font-semibold">{v.name}</h3>
          <span className="text-green-500">{v.status}</span>
        </div>
      ))}
    </div>
  );
}
