import type { Shadows } from '@mui/material/styles/shadows'

const createElevationShadow = (elevation: number): string => {
  return `0 0 ${elevation}px rgba(0,0,0,0.08)`
}

export const createMuiShadows = (): Shadows => {
  return [
    'none',
    createElevationShadow(1),
    createElevationShadow(2),
    createElevationShadow(3),
    createElevationShadow(4),
    createElevationShadow(5),
    createElevationShadow(6),
    createElevationShadow(7),
    createElevationShadow(8),
    createElevationShadow(9),
    createElevationShadow(10),
    createElevationShadow(11),
    createElevationShadow(12),
    createElevationShadow(13),
    createElevationShadow(14),
    createElevationShadow(15),
    createElevationShadow(16),
    createElevationShadow(17),
    createElevationShadow(18),
    createElevationShadow(19),
    createElevationShadow(20),
    createElevationShadow(21),
    createElevationShadow(22),
    createElevationShadow(23),
    createElevationShadow(24),
  ]
}
