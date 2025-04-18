"use client";

import { createContext, useContext, useState, FC, ReactNode } from "react";
import { BoxShadowState } from "@/types";

const initialState: BoxShadowState = {
  offsetX: 0,
  offsetY: 0,
  blurRadius: 10,
  spreadRadius: 0,
  color: "#000000",
  opacity: 0.2,
  inset: false,
};

interface ShadowContextType {
  shadow: BoxShadowState;
  updateShadow: (
    property: keyof BoxShadowState,
    value: number | string | boolean
  ) => void;
  resetShadow: () => void;
  getCssString: () => string;
}

const ShadowContext = createContext<ShadowContextType | undefined>(undefined);

export const ShadowProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shadow, setShadow] = useState<BoxShadowState>(initialState);

  const updateShadow = (
    property: keyof BoxShadowState,
    value: number | string | boolean
  ) => {
    setShadow((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const resetShadow = () => {
    setShadow(initialState);
  };

  const getCssString = () => {
    const {
      offsetX,
      offsetY,
      blurRadius,
      spreadRadius,
      color,
      opacity,
      inset,
    } = shadow;
    const rgba = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
      color.slice(3, 5),
      16
    )}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;

    return `${
      inset ? "inset " : ""
    }${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${rgba}`;
  };

  return (
    <ShadowContext.Provider
      value={{ shadow, updateShadow, resetShadow, getCssString }}
    >
      {children}
    </ShadowContext.Provider>
  );
};

export const useShadow = () => {
  const context = useContext(ShadowContext);
  if (context === undefined) {
    throw new Error("useShadow must be used within a ShadowProvider");
  }
  return context;
};
