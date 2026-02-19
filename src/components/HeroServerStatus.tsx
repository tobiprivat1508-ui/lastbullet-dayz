import { useState, useEffect } from 'react';
import type { ServerStatus } from '../lib/types';

export default function HeroServerStatus() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/server-status');
        if (!res.ok) {
          throw new Error('Failed to fetch server status');
        }
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        // Fallback to default values if API fails
        setStatus({
          name: 'LAST BULLET DayZ',
          map: 'Chernarus',
          players: 0,
          maxPlayers: 60,
          online: false,
          ip: '88.99.253.242',
          port: 2302,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading || !status) {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded border border-white/10 bg-black/40 backdrop-blur-sm mb-8 animate-fade-in font-mono text-xs tracking-wider">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-accent-green uppercase">Server Status: Online</span>
        </span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">0/60</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">Chernarus</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 px-5 py-2 rounded border border-white/10 bg-black/40 backdrop-blur-sm mb-8 animate-fade-in font-mono text-xs tracking-wider">
      <span className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${status.online ? 'bg-accent-green animate-pulse' : 'bg-red-500'}`} />
        <span className={`uppercase ${status.online ? 'text-accent-green' : 'text-red-500'}`}>
          Server Status: {status.online ? 'Online' : 'Offline'}
        </span>
      </span>
      <span className="text-white/20">|</span>
      <span className="text-white/40">{status.players}/{status.maxPlayers}</span>
      <span className="text-white/20">|</span>
      <span className="text-white/40">{status.map}</span>
    </div>
  );
}
