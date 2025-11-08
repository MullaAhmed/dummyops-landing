// Enhanced color palette with better visual appeal
const ENHANCED_COLORS = [
  "#3B82F6", // Blue
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Purple
  "#06B6D4", // Cyan
  "#F97316", // Orange
  "#84CC16", // Lime
  "#EC4899", // Pink
  "#6366F1", // Indigo
  "#14B8A6", // Teal
  "#F43F5E", // Rose
  "#A855F7", // Violet
  "#22C55E", // Green
  "#FACC15", // Yellow
] as const;

export const getRandomColor = (): string => {
  return ENHANCED_COLORS[Math.floor(Math.random() * ENHANCED_COLORS.length)];
};

export const getRandomGradient = (): string => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

// Legacy color list for backwards compatibility
export const colorList = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#008000",
  "#FFD700",
  "#800000",
  "#FFB6C1",
  "#008080",
];

export { ENHANCED_COLORS };