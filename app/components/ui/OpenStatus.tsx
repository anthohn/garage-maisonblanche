'use client'
import { useState, useEffect } from 'react';
import { isGarageOpen } from '@/lib/hoursData';

export default function OpenStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; status: string; nextOpening?: string }>({
    isOpen: false,
    status: 'Chargement...'
  });

  useEffect(() => {
    // Fonction pour mettre à jour le statut
    const updateStatus = () => {
      const currentStatus = isGarageOpen();
      setStatus(currentStatus);
    };

    // Mettre à jour immédiatement
    updateStatus();

    // Mettre à jour toutes les minutes
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <div 
        className={`w-2 h-2 rounded-full ${
          status.isOpen 
            ? 'bg-green-500 animate-pulse' 
            : 'bg-red-500'
        }`}
      ></div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600">{status.status}</span>
        {!status.isOpen && status.nextOpening && (
          <span className="text-xs text-gray-500">
            Ouvre {status.nextOpening}
          </span>
        )}
      </div>
    </div>
  );
}
