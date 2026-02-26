import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function StatusIndicator() {
  const [status, setStatus] = useState<'open' | 'closing' | 'closed'>('closed');
  const [timeUntil, setTimeUntil] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Opening hours: 8:00 - 22:00
      const openTime = 8 * 60;
      const closeTime = 22 * 60;

      if (currentTime >= openTime && currentTime < closeTime) {
        setStatus('open');
        const minutesUntilClose = closeTime - currentTime;
        const hoursUntil = Math.floor(minutesUntilClose / 60);
        const minsUntil = minutesUntilClose % 60;
        
        if (hoursUntil === 0 && minsUntil <= 60) {
          setTimeUntil(`Закроемся через ${minsUntil} мин`);
        } else {
          setTimeUntil(`Открыто до 22:00`);
        }
      } else if (currentTime >= closeTime) {
        setStatus('closed');
        const minutesUntilOpen = (24 * 60 - currentTime) + openTime;
        const hoursUntil = Math.floor(minutesUntilOpen / 60);
        const minsUntil = minutesUntilOpen % 60;
        setTimeUntil(`Откроемся через ${hoursUntil} ч ${minsUntil} мин`);
      } else {
        setStatus('closed');
        const minutesUntilOpen = openTime - currentTime;
        const hoursUntil = Math.floor(minutesUntilOpen / 60);
        const minsUntil = minutesUntilOpen % 60;
        setTimeUntil(`Откроемся через ${hoursUntil} ч ${minsUntil} мин`);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    open: 'bg-emerald-500',
    closing: 'bg-amber-500',
    closed: 'bg-rose-500',
  };

  const statusText = {
    open: 'Открыто',
    closing: 'Закрывается',
    closed: 'Закрыто',
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-2 h-2 rounded-full ${statusColors[status]}`}
        />
        <span className="text-sm text-[#f5f0e8]/80">{statusText[status]}</span>
      </div>
      <span className="text-sm text-[#c9a962]">•</span>
      <span className="text-sm text-[#f5f0e8]/60">{timeUntil}</span>
    </div>
  );
}
