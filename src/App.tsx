import { useState } from 'react';
import { MessageSquare, Terminal as TerminalIcon, Rocket, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';
import AIChat from './components/AIChat';
import Terminal from './components/Terminal';
import DeploymentServices from './components/DeploymentServices';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'Mission Control', icon: LayoutDashboard },
    { id: 'chat', name: 'AI Assistant', icon: MessageSquare },
    { id: 'terminal', name: 'System Terminal', icon: TerminalIcon },
    { id: 'deployment', name: 'Deployment Services', icon: Rocket },
  ];

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100 font-sans">
      <nav className="w-64 border-r border-neutral-800 p-4 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-white mb-8">ChronoLattice™</h1>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              activeTab === tab.id ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <tab.icon size={20} />
            {tab.name}
          </button>
        ))}
      </nav>
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeTab === 'dashboard' && <h2 className="text-2xl font-semibold">Mission Control Dashboard</h2>}
          {activeTab === 'chat' && <AIChat />}
          {activeTab === 'terminal' && <Terminal />}
          {activeTab === 'deployment' && <DeploymentServices />}
        </motion.div>
      </main>
    </div>
  );
}
