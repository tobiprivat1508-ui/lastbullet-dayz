import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiveMap() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="relative w-full rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#141414]" style={{ paddingBottom: '56.25%' }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#141414] z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#e8791d] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-[#666]">Karte wird geladen...</p>
            </div>
          </div>
        )}
        <iframe
          src="https://www.izurvive.com/chernarusplus/"
          title="DayZ Livemap"
          className="absolute inset-0 w-full h-full"
          onLoad={() => setLoading(false)}
          allow="fullscreen"
        />
      </div>
      <p className="text-center text-sm text-[#666] mt-4">
        Powered by iZurvive
      </p>
    </motion.div>
  );
}
