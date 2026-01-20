"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface ZoomContextType {
    zoom: string | null | undefined;
    setZoom: (zoom: string | null | undefined) => void;
}

// Default context
const ZoomContext = createContext<ZoomContextType | undefined>(undefined);

// Custom hook
export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (!context) {
    throw new Error('useZoom must be used within ZoomProvider');
  }
  return context;
};

// Provider
export const ZoomProvider = ({ children }: { children: ReactNode }) => {
  const [zoom, setZoom] = useState(null);
  
  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};
