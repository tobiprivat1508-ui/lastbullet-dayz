import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { ServerStatus } from '../lib/types';

export default function ServerStatusComponent() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated server status - replace with real BattleMetrics/CFTools API
    const fetchStatus = async () => {
      try {
        // TODO: Replace with actual API call
        // const res = await fetch('https://api.battlemetrics.com/servers/YOUR_SERVER_ID');
        // const data = await res.json();
        setStatus({
          name: 'LAST BULLET DayZ',
          map: 'Chernarus',
          players: 42,
          maxPlayers: 60,
          online: true,
          ip: '0.0.0.0',
          port: 2302,
        });
      } catch {
        setStatus(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 animate-pulse">
        <div className="h-6 bg-[#2a2a2a] rounded w-1/3 mb-4" />
        <div className="h-4 bg-[#2a2a2a] rounded w-2/3" />
      </div>
    );
  }

  if (!status) {
    return (
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 text-center">
        <p className="text-[#666]">Server-Status nicht verfügbar</p>
      </div>
    );
  }

  const playerPercent = (status.players / status.maxPlayers) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">{status.name}</h3>
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
          status.online
            ? 'bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20'
            : 'bg-red-500/10 text-red-500 border border-red-500/20'
        }`}>
          <span className={`w-2 h-2 rounded-full ${status.online ? 'bg-[#2ecc71] animate-pulse' : 'bg-red-500'}`} />
          {status.online ? 'Online' : 'Offline'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-[#666] mb-1">Spieler</p>
          <p className="text-2xl font-bold">
            <motion.span
              key={status.players}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-[#e8791d]"
            >
              {status.players}
            </motion.span>
            <span className="text-[#666] text-lg"> / {status.maxPlayers}</span>
          </p>
        </div>
        <div>
          <p className="text-sm text-[#666] mb-1">Karte</p>
          <p className="text-lg font-medium">{status.map}</p>
        </div>
      </div>

      {/* Player bar */}
      <div className="mb-4">
        <div className="w-full h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${playerPercent}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, #2ecc71 0%, ${playerPercent > 80 ? '#e8791d' : '#2ecc71'} 100%)`,
            }}
          />
        </div>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(`${status.ip}:${status.port}`)}
        className="w-full py-2 bg-[#e8791d] hover:bg-[#f59e3f] text-white rounded-lg transition-colors font-medium text-sm cursor-pointer"
      >
        Verbinden — {status.ip}:{status.port}
      </button>
    </motion.div>
  );
}
