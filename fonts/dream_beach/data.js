const dream_beach = {
  name: "dreamBeach",
  fontStep: 3,
  space: 30,
  letters: {
    А: {
      el: 3,
      path: "M52.07 107.65c0,0 23.81,-47 46.16,-84.11 3.13,-5.19 -4.22,-10.71 -9.29,-4.32 -10.05,12.66 -23.09,31.96 -37.53,49.52 -14.45,17.56 -30.77,35.79 -48.75,53.49m-0.52 -28.75c14.72,-11.7 30.9,-20.45 48.06,-23.28m0 0c7.69,-1.27 14.4,-2.05 22.66,-2",
    },

    Б: {
      step: -7,
      el: 4,
      path: "M76.53 67.72c-29.59,-0.28 -57.35,26.44 -68.82,39.03 -11.47,12.59 -3.92,21.12 10.63,14.97 11.61,-4.91 42.48,-28.71 38.04,-50.33 -0.09,-0.43 0.1,0.43 0,0m0 0c-1.04,-4.51 -8.14,-12.6 -28.8,-6.58m1.15 -15.34c-25.05,11.34 -32.32,-5.35 -7.74,-18.65 16.52,-8.94 47.86,-13.16 66.63,-14.17m-36.83 4.63l-33.98 63.72",
    },

    В: {
      el: 4,
      path: "M50.79 21.28l-33.98 63.72m59.72 -17.27c-29.59,-0.28 -57.35,26.44 -68.82,39.03 -11.47,12.59 -3.92,21.12 10.63,14.97 11.85,-5.02 42.7,-30.07 38.04,-50.33m0 0c-1.04,-4.51 -2.95,-8.06 -7.61,-11.92m-23.43 -11.89c-19.58,19.3 -32.17,6.15 -13.71,-14.83 18.46,-20.98 53.43,-39.73 66.02,-25.74 7.78,8.64 -5.11,29.02 -22.19,46.21 -9.8,9.86 -19.09,16.61 -30.58,16.64",
    },

    Г: {
      el: 3,
      path: "M27.88 38c10.26,-3.25 21.27,-5.78 30.44,-7.47m0 0c27.11,-4.97 46.22,-4 46.22,-4m-39.17 -4.76c-33.02,40.29 -51.48,72.75 -63.23,94.85",
    },

    Д: {
      el: 3,
      path: "M23.4 59.11c-14.41,10.91 -24.21,0.12 -10.35,-14.83 9.17,-9.89 26.85,-22.15 41.61,-26.29 19.04,-5.33 24.43,2.43 21.7,19.21 -5.13,31.55 -31.87,66.09 -60.14,82.23 -12.46,7.11 -18.86,-1.22 -9.88,-12.48 16.45,-20.63 40.67,-31.3 56.2,-34.12m0 0c3.54,-0.64 7.59,-0.82 11.65,-0.28m-27.31 -37.49l-26.54 57.87",
    },

    Е: {
      el: 1,
      path: "M63.81 39.53c12.87,-7.97 11.28,-24.73 -7.83,-15.95 -17.34,7.97 -33.59,21.49 -40.85,29.1 -5.87,6.16 -3.03,11.73 4.44,11.14 4.41,-0.35 11.45,-4.32 17.31,-5.11 7.29,-0.98 10.61,6.74 5,10.72 -8.59,6.1 -26.49,15.75 -35.15,26.17 -11.14,13.43 -0.53,26.51 16.22,19.1 15.52,-6.86 35.79,-26.72 49.53,-47.35",
    },

    Ё: {
      el: 3,
      path: "M63.81 39.53c12.87,-7.97 11.28,-24.73 -7.83,-15.95 -17.34,7.97 -33.59,21.49 -40.85,29.1 -5.87,6.16 -3.03,11.73 4.44,11.14 4.41,-0.35 11.45,-4.32 17.31,-5.11 7.29,-0.98 10.61,6.74 5,10.72 -8.59,6.1 -26.49,15.75 -35.15,26.17 -11.14,13.43 -0.53,26.51 16.22,19.1 15.52,-6.86 35.79,-26.72 49.53,-47.35m-9.54 -65.05l-5.51 12.52m22.82 -12.52l-5.51 12.52",
    },

    Ж: {
      el: 3,
      path: "M107.48 51.6c23.78,-39.73 3.36,-41.97 -16.23,-17.91 -15.67,19.25 -24.51,40.05 -29.35,55.13 -5.18,16.15 -0.15,29.83 22.07,12.02 18.45,-14.78 43.09,-36.93 43.09,-36.93m-88.82 -42.88c12.89,-9.86 25.93,-5.64 25.82,12.3 -0.13,22.56 -26.4,62.48 -44.39,74.14 -12.31,7.97 -18.3,3.76 -17.46,-9.11 0.8,-12.3 5.27,-24.81 12.51,-39.29m69.85 -37.96l-42.28 85.13",
    },

    З: {
      el: 1,
      path: "M10.47 99.93c-12.87,7.97 -11.28,24.73 7.83,15.95 17.34,-7.97 33.59,-21.49 40.85,-29.1 5.87,-6.16 3.03,-11.73 -4.44,-11.14 -4.41,0.35 -11.45,4.32 -17.31,5.11 -7.29,0.98 -10.61,-6.74 -5,-10.72 8.59,-6.1 26.49,-15.75 35.15,-26.17 11.14,-13.43 0.53,-26.51 -16.22,-19.1 -6.22,2.75 -13.19,7.58 -20.21,13.71",
    },

    И: {
      el: 1,
      path: "M38.52 19.46c-2.73,9.01 -7.84,20.76 -15.15,32.31 -11.6,18.33 -18.92,32.39 -21.04,46.3 -1.33,8.71 4.3,13.5 14.36,6.35 28.31,-20.14 44.82,-50.89 63.3,-79.24 3.76,-5.77 12.8,-2.76 8.03,5.02 -4.77,7.78 -31.83,53.87 -36.85,65.66 -3.55,8.34 2.68,15.49 12.1,8.71 5.29,-3.81 11.37,-12.04 15.41,-17.21",
    },

    Й: {
      el: 2,
      path: "M38.52 19.46c-2.73,9.01 -7.84,20.76 -15.15,32.31 -11.6,18.33 -18.92,32.39 -21.04,46.3 -1.33,8.71 4.3,13.5 14.36,6.35 28.31,-20.14 44.82,-50.89 63.3,-79.24 3.76,-5.77 12.8,-2.76 8.03,5.02 -4.77,7.78 -31.83,53.87 -36.85,65.66 -3.55,8.34 2.68,15.49 12.1,8.71 5.29,-3.81 11.37,-12.04 15.41,-17.21m-24.99 -83.08l28.23 2.63",
    },

    К: {
      el: 4,
      path: "M50.8 14.7l-21.58 42.43m0 0l-27.09 53.26m98.61 -89.81c-33.57,33.57 -84.78,38.89 -84.78,38.89m45.61 46.45c-16.51,-17.91 -24.57,-35.99 -24.18,-50.8",
    },

    Л: {
      el: 1,
      path: "M51.55 107.65c0,0 23.81,-47 46.16,-84.11 3.13,-5.19 -4.22,-10.71 -9.29,-4.32 -29.52,37.17 -51.62,68.87 -86.28,103.01",
    },

    М: {
      el: 1,
      path: "M79.15 112.94c12.46,-44.42 31.88,-74.44 35.5,-81.44 3.22,-6.23 -3.92,-10.43 -8.81,-5.07 -19.18,21.02 -31.84,43.46 -47.25,73.3 -4.08,7.89 -13.58,4.56 -10.23,-4.11 3.11,-8.05 27.28,-52.34 32.86,-65.5 2.89,-6.83 -5.27,-10.51 -10.07,-4.29 -7.38,9.57 -20.6,39.08 -69,83.56",
    },

    Н: {
      step: -20,
      el: 4,
      path: "M85.09 15.53l-53.81 110.24m14.92 -108.84l-40.29 82.54m-3.78 -30.08c6.41,-0.35 12.53,-0.6 18.83,-0.75m0 0c12.6,-0.32 25.29,-0.26 38.14,0.13",
    },

    О: {
      el: 2,
      path: "M70.46 64.99c-55.74,17.05 -62.59,-16.61 -32.21,-39.85 12.89,-9.86 25.93,-5.64 25.82,12.3 -0.05,8.99 -3.85,19.96 -9.88,31.36m0 0c-9.41,17.79 -23.81,35.84 -34.51,42.77 -12.31,7.97 -18.3,3.76 -17.46,-9.11 0.8,-12.3 5.27,-24.81 12.51,-39.29",
    },

    П: {
      el: 2,
      path: "M2.13 107.55l32.46 -86.18m13.15 89.25c0.78,-28.06 15.76,-51.57 24.23,-80.59 2.05,-7.03 -4.4,-10.01 -9.85,-5.37 -19.04,16.21 -28.94,36.58 -48.16,51.49",
    },

    Р: {
      el: 2,
      path: "M55.88 41.77l-40.57 90.09m10.07 -54c-22.01,6.09 -29.72,-4.09 -17.37,-19.55 14.66,-18.36 46.76,-32.52 69.42,-34.67 29.46,-2.79 33,16.88 15.32,36.51 -12.81,14.23 -35.87,28.39 -61.87,37.12",
    },

    С: {
      el: 1,
      path: "M49.58 64.87c23.78,-39.73 3.36,-41.97 -16.23,-17.91 -15.67,19.25 -24.51,40.05 -29.35,55.13 -5.18,16.15 -0.15,29.83 22.07,12.02 18.45,-14.78 43.09,-36.93 43.09,-36.93",
    },

    Т: {
      el: 3,
      path: "M2.13 123.04c5.3,-13.55 30.78,-63 41.45,-83.58m0 0c2.97,-5.72 4.48,-8.6 4.48,-8.6m-36.4 16.4c25.6,-6.4 52.57,-14.05 59.35,-8.78",
    },

    У: {
      el: 3,
      path: "M41.15 27.79c0,0 -20.78,44.87 -24.09,55.11 -3.31,10.24 5.42,14.45 13.85,6.93 8.43,-7.53 54.51,-63.24 54.51,-63.24m-14.76 66.85c-39.15,8.13 -61.13,24.69 -65.95,32.22 -4.82,7.53 -3.61,15.66 9.94,11.74 13.55,-3.91 31.32,-25.6 42.76,-53.9 11.44,-28.31 9.63,-34.89 9.63,-34.89",
    },

    Ф: {
      el: 2,
      path: "M8.29 124.29c13.03,-26.48 33.57,-67.36 43.13,-85.33 2.65,-4.97 -1.93,-9.83 -7.81,-7.3 -7.97,3.43 -18.08,12.25 -24.38,18.54 -18.22,18.18 -21.4,36.38 -11.83,47.14 5.91,6.65 18.71,7.85 32.02,-1.19 18.85,-12.8 38.98,-37.5 41.67,-53.51 1.55,-9.22 -3.82,-17.98 -19.83,-9.78",
    },

    Х: {
      el: 3,
      path: "M39.18 33.67c0,0 4.52,67.46 5.72,81.01 1.2,13.55 14.15,5.72 14.15,5.72m21.98 -89.14c-37.04,27.4 -58.42,53 -78.9,89.74",
    },

    Ц: {
      el: 1,
      path: "M38.52 32.74c-2.73,9.01 -7.84,20.76 -15.15,32.31 -11.6,18.33 -18.92,32.39 -21.04,46.3 -1.33,8.71 4.3,13.5 14.36,6.35 28.31,-20.14 44.82,-50.89 63.3,-79.24 3.76,-5.77 12.8,-2.76 8.03,5.02 -2.62,4.28 -12.47,19.91 -20.74,35.55 -11.12,21.03 -14.3,35.76 4,39.04 5.47,0.98 15.8,9.02 -5.55,32.88",
    },

    Ч: {
      el: 3,
      path: "M65.02 45.63l-42.28 85.13m-20.6 -61.17c35.07,-9.51 48.22,-26.42 53.48,-35.36 4.7,-8 -0.58,-14.54 -10.14,-9.11 -10.57,6 -22.97,25.29 -28.37,39.5m0 0c-10.22,26.91 2.47,31.71 28.28,20.54",
    },

    Ш: {
      el: 3,
      path: "M100.4 40.46c-16.52,34.68 -36.27,68.07 -46.06,78.24 -13.91,14.45 -20.18,5.51 -16.67,-6.27 7.86,-26.4 25.87,-59.62 25.87,-59.62m-24.61 -25.08c-1.98,18.41 -30.11,59.45 -35.87,80.41 -2.8,10.17 0.09,23.55 16.77,10.34 8.32,-6.59 10.47,-8.33 22.91,-20.74m51.86 9.91c-15.05,22.49 -23.83,23.83 -24.35,-11.26",
    },

    Щ: {
      el: 3,
      path: "M100.4 40.46c-16.52,34.68 -36.27,68.07 -46.06,78.24 -13.91,14.45 -20.18,5.51 -16.67,-6.27 7.86,-26.4 25.87,-59.62 25.87,-59.62m-24.61 -25.08c-1.98,18.41 -30.11,59.45 -35.87,80.41 -2.8,10.17 0.09,23.55 16.77,10.34 8.32,-6.59 10.47,-8.33 22.91,-20.74m35.68 53.2c21.36,-23.86 11.02,-31.9 5.55,-32.88 -5.61,-1 -10.5,-4 -13.72,-21.66",
    },

    Ъ: {
      el: 1,
      path: "M9.86 49.12c11.87,3.6 20.7,-5.15 26.94,-7.43 8.51,-3.11 12.02,3.7 8.93,8.88l-40 67.17c-8.97,15.05 -0.52,18.19 18.37,7.92 20.9,-11.36 34.85,-24.99 32.43,-38.96 -0.76,-4.51 -7.35,-12.6 -28.39,-6.58",
    },

    Ы: {
      el: 2,
      path: "M54.05 36.61l-48.32 81.14c-8.97,15.05 -0.52,18.19 18.37,7.92 20.9,-11.36 34.85,-24.99 32.43,-38.96 -0.76,-4.51 -7.35,-12.6 -28.39,-6.58m79.29 -39.21l-58.39 98.04",
    },

    Ь: {
      el: 1,
      path: "M54.05 36.61l-48.32 81.14c-8.97,15.05 -0.52,18.19 18.37,7.92 20.9,-11.36 34.85,-24.99 32.43,-38.96 -0.76,-4.51 -7.35,-12.6 -28.39,-6.58",
    },

    Э: {
      el: 2,
      path: "M4.53 100.52c-1.09,3.99 -1.84,7.9 -2.22,11.78 -1.27,12.87 4.58,17.08 17.16,9.11 10.93,-6.93 25.93,-24.98 35.93,-42.77 6.41,-11.41 10.58,-22.37 10.93,-31.36 0.7,-17.94 -12.19,-22.16 -25.41,-12.3 -13.22,9.86 -27.79,29.93 -27.79,29.93m15.74 19.01c11.52,-4.14 18.63,-3.85 25.29,-3.1",
    },

    Ю: {
      el: 3,
      path: "M44.42 35.06l-42.28 85.13m98.27 -45.36c-55.74,17.05 -62.59,-16.61 -32.21,-39.85 12.89,-9.86 25.93,-5.64 25.82,12.3 -0.05,8.99 -3.85,19.96 -9.88,31.36m0 0c-9.41,17.79 -23.81,35.84 -34.51,42.77 -12.31,7.97 -18.3,3.76 -17.46,-9.11 0.58,-8.97 5.88,-19.71 9.99,-29.98 2.04,-5.09 0.19,-9.85 -6.95,-9.88 -2.33,-0.01 -4.12,0.09 -9.68,0.64",
    },

    Я: {
      el: 2,
      path: "M51.81 119.83l37.13 -74.17c3.61,-7.21 -1.68,-13.89 -10.07,-10.04 -25.75,11.84 -45.32,30.53 -44.58,44.45 0.51,9.67 16.8,9.6 36.79,1.3m-68.95 49.15c32.04,-11.86 46.27,-27.61 56.21,-44.83",
    },

    а: {
      el: 2,
      path: "M24.31 66.92c-4.56,7.18 -7.45,12.54 -11.01,17.14 -5.2,6.7 -13.53,3.02 -10.52,-5.62 1.86,-5.33 6.43,-10.87 11.27,-14.85 6.2,-5.09 14.85,-7.05 22.26,-3.89m0 0c-1.22,2.11 -9.6,16.97 -11.3,21.05 -2.56,6.12 3.14,10.14 8.89,5.08 4.5,-3.96 12.7,-13.14 17.53,-18.9",
    },

    б: {
      step: -30,
      el: 1,
      path: "M10.13 83.08c6.1,-5.93 10.77,-9.84 14.54,-14.27 5.5,-6.45 0.21,-13.86 -7.64,-9.16 -4.85,2.9 -9.34,8.51 -12.25,14.05 -8.94,17.04 6.8,21.71 17.46,9.58 16.12,-18.34 14.48,-24.86 6.57,-39.26 -6.44,-11.72 -10.93,-26.15 9.91,-28.23 20.85,-2.08 24.84,-0.75 34.38,-7.03",
    },

    в: {
      step: -12,
      el: 2,
      path: "M2.13 87.08c12.02,-26.51 20.88,-46.35 37.1,-69.73 5.04,-7.26 12.53,-2.39 9.79,4.82 -2.53,6.64 -13.39,26.25 -28.9,28.01m-17.99 36.9c11.02,2.86 15.05,-0.51 21.1,-5.96 5.05,-4.56 10.15,-11.32 13.15,-17.7 3.69,-7.83 -5.13,-11.75 -10.32,-5.42 -4.52,5.5 -9.43,14.64 -13.25,22.74",
    },

    г: {
      el: 1,
      path: "M2.13 66.92c4.29,-8.09 9.25,-11.96 11.06,-12.94 6.71,-3.62 12.26,1.53 8.74,7.93 -3.67,6.69 -11,8.57 -15.84,13.15 -10.19,9.66 2.85,16.66 11.68,8.77 3.72,-3.33 6.33,-6.38 13.72,-16.91",
    },

    д: {
      el: 2,
      stepBack: 23,
      path: "M49.59 87.58c-5.88,1.73 -10.45,2.98 -14.8,4.07m0 0c-15.68,3.92 -26.1,8.21 -31.29,16.57 -3.84,6.18 0.7,14.29 9.94,8.36 20.63,-13.25 30.66,-45.03 32.9,-55.38 1.66,-7.64 -5.67,-8.19 -9.34,-5.23 -7.7,6.23 -15.46,14.27 -17.69,21.53 -1.83,5.94 4.43,9.62 9.34,5.8 3.55,-2.77 6.32,-10.06 8.58,-16.38",
    },

    е: {
      el: 1,
      path: "M2.89 76.24c10.7,-0.95 17.47,-6.5 20.11,-12.57 3.4,-7.82 -4.72,-12.66 -12.08,-5.89 -4.41,4.05 -7.66,10.2 -8.56,15.98 -1.44,9.25 4.03,14.75 14.21,9.14 5.17,-2.84 11.84,-7.99 17.74,-15.98",
    },

    ё: {
      el: 1,
      path: "M2.89 76.24c10.7,-0.95 17.47,-6.5 20.11,-12.57 3.4,-7.82 -4.72,-12.66 -12.08,-5.89 -4.41,4.05 -7.66,10.2 -8.56,15.98 -1.44,9.25 4.03,14.75 14.21,9.14 5.17,-2.84 11.84,-7.99 17.74,-15.98",
    },

    ж: {
      el: 3,
      path: "M13.05 86.75c13.29,-6.06 20.38,-16.65 22.71,-22.5 4.29,-10.81 -5.43,-14.92 -16.14,-8.65 -4.78,2.8 -10.74,7.04 -17.48,13.87m67.54 -4.1c10.69,-10.24 1.7,-16.43 -6.1,-10.27 -5.76,4.55 -10.6,11.19 -12.92,17.04 -4.29,10.81 5.43,14.92 16.14,8.65 4.78,-2.8 10.74,-7.04 17.48,-13.87m-48.16 17.69c3.48,-9.08 9.22,-21.05 14.92,-31.82",
    },

    з: {
      stepBack: 10,
      el: 3,
      path: "M58.71 88.59c-4.7,0.76 -7.95,1.13 -14.6,2.42m0 0c-12.04,2.33 -28.28,5.59 -37.71,15.2 -8.05,8.2 -4.25,16.72 7.74,14.09 9.27,-2.03 18.78,-7.69 26.39,-20.05 1.32,-2.15 3.18,-6.24 3.59,-9.24 0.84,-6.2 -0.37,-14.74 -15.63,-10.13m-4.91 -13.96c16.94,-19.38 32.21,-8.72 9.64,12.86",
    },

    и: {
      el: 2,
      path: "M15.58 53.98c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m16.64 11.44c-6.51,10.73 -9.4,15.25 -13.92,21.05 -3.76,4.82 -9.74,3.2 -9.14,-2.6 0.81,-7.82 1.31,-14.18 2.64,-24.53",
    },

    й: {
      el: 3,
      path: "M15.58 53.98c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m16.64 11.44c-6.51,10.73 -9.4,15.25 -13.92,21.05 -3.76,4.82 -9.74,3.2 -9.14,-2.6 0.81,-7.82 1.31,-14.18 2.64,-24.53m-11.25 -21.02l18.82 2.01",
    },

    к: {
      el: 3,
      path: "M51.82 66.92c-6.75,9.47 -28.81,33.11 -33.96,11.65m-7.3 0.59c12.65,0.53 24.2,-8.85 35.95,-25.99m-44.38 43.61c4.82,-12.55 12.75,-29.1 20.63,-43.99",
    },

    л: {
      el: 2,
      path: "M38.86 94.08l17.71 -39.78m-54.43 12.62c0.41,5.07 1.43,13.25 3.9,19.38 3.37,8.36 10.54,12.26 20.22,0.49 10.74,-13.06 18.47,-33.89 30.31,-32.49",
    },

    м: {
      el: 2,
      path: "M2.13 66.92c0.41,5.07 1.43,13.25 3.9,19.38 3.37,8.36 10.54,12.26 20.22,0.49 7.44,-9.04 12.58,-24.59 17.61,-31.77 4.54,-6.48 13.05,-2.4 9.8,5.02 -3.06,6.99 -6.54,12.76 -8.14,18.17 -2.17,7.29 4.86,11.56 10.5,5.62 6.08,-6.41 15.52,-20.95 20.91,-28.35m16.64 11.44c-6.51,10.73 -9.4,15.25 -13.92,21.05 -3.76,4.82 -9.74,3.2 -9.14,-2.6 0.81,-7.82 1.31,-14.18 2.64,-24.53",
    },

    н: {
      stepBack: 10,
      el: 3,
      path: "M43.39 75.18l-31.42 0.03m9.86 -20.19l-9.86 20.19 -9.83 20.14m51.1 -40.33l-19.69 40.33",
    },

    о: {
      el: 2,
      path: "M43.62 66.92c-6.91,11.7 -14.01,14.59 -21.92,13.15m0 0c-5.28,-0.96 -12.15,-3.77 -15.05,-9.54 -3.74,-7.44 2.19,-16.93 11.06,-15.52 10.24,1.62 11.36,12.81 7.65,19.64 -3.03,5.59 -8.73,11.65 -13.74,14.03 -7.48,3.55 -14.02,-0.61 -5.4,-17.32",
    },

    п: {
      el: 2,
      path: "M10.83 54.64l-8.7 36.11m3.51 -14.59c6.41,-6.04 13.83,-12.76 18.86,-17.13 5.85,-5.08 10.73,-0.35 9.08,5.49 -1.88,6.65 -6.31,11.85 -7.31,17.6 -0.73,4.18 2.83,7.93 8.76,3.57 4.2,-3.08 8.7,-8.45 16.96,-18.76",
    },

    р: {
      stepBack: 20,
      el: 3,
      path: "M28.18 55.03c-8.14,21.08 -18.07,42.99 -26.05,70.69m58.72 -58.8c-10.46,14.76 -29.52,22.35 -36.67,24.99m1.02 -29.33c4.4,-2.29 7.72,-4.21 10.48,-5.09 4.7,-1.5 7.83,1.64 6.45,6.3 -1.88,6.34 -5.51,16.78 -9.28,24.08",
    },

    с: {
      el: 1,

      path: "M22.19 65.37c10.69,-10.24 1.7,-16.43 -6.1,-10.27 -5.76,4.55 -10.6,11.19 -12.92,17.04 -4.29,10.81 5.43,14.92 16.14,8.65 4.78,-2.8 10.74,-7.04 17.48,-13.87",
    },

    т: {
      el: 3,

      path: "M10.83 54.64l-8.7 36.11m3.51 -14.59c6.41,-6.04 15.62,-17.38 20.65,-21.75 5.85,-5.08 10.97,-1.42 9.24,4.75l-6.43 22.86m3.07 -10.92l10.35 -9.56c3.47,-3.21 9.16,-1.81 8.94,3.28 -0.17,4.09 -2.74,9.62 -3.3,12.38 -1.04,5.12 3.71,7.38 7.94,4.34 3.91,-2.8 8.48,-8.48 11.61,-14.63",
    },

    у: {
      stepBack: 15,
      el: 3,
      path: "M28.26 59.02c-5.39,6.7 -10.64,13.86 -12.45,18.36 -2.6,6.47 2.48,11.37 10.58,6.01 6.03,-3.99 14.68,-12.42 23.55,-23.39m11.07 28.26c-4.58,0.63 -10.27,1.46 -16.91,2.75m0 0c-12.04,2.33 -28.28,5.59 -37.71,15.2 -8.05,8.2 -4.25,16.72 7.74,14.09 9.27,-2.03 18.78,-7.69 26.39,-20.05 4.84,-7.86 6.95,-26.47 7.53,-37.94",
    },

    ф: {
      el: 3,
      path: "M71.01 80.1c-4.42,1.07 -11.8,0.4 -14.14,-0.02m0 0c-5.28,-0.96 -12.15,-3.77 -15.05,-9.54 -3.74,-7.44 2.19,-16.93 11.06,-15.52 13.01,2.07 10.9,17.32 4.13,25.09 -8.48,9.74 -21.01,8.48 -26.9,-2.55m-10.8 3.25c-10.71,6.28 -20.44,2.17 -16.14,-8.65 2.32,-5.85 8.24,-13.71 18.38,-17.23 8.16,-2.84 17.05,0.22 12.59,12.01l-22.37 59.09",
    },

    х: {
      el: 3,
      path: "M41.74 44.18l-39.6 56.92m11.22 -46.6l8.29 18.57m0 0l3.51 7.86c2.01,4.51 7.42,4.85 10.9,0.61l12.02 -14.62",
    },

    ц: {
      el: 3,
      path: "M24.38 105.3c5.93,-5.71 9.35,-11.78 11.53,-18.41m-20.34 -32.91c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m1.82 31.4c-4.13,-0.43 -8.21,-2.22 -7.53,-8.3 0.88,-7.81 0.59,-7.4 1.92,-17.75",
    },

    ч: {
      el: 2,
      path: "M32.26 53.98l-21.54 38.38m0.44 -42.91c-16.81,25.26 -7.81,32.32 7.95,27.95",
    },

    ш: {
      el: 3,
      path: "M30.41 53.98c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m16.64 11.44c-6.51,10.73 -9.4,15.25 -13.92,21.05 -3.76,4.82 -9.74,3.2 -9.14,-2.6 0.81,-7.82 1.31,-14.18 2.64,-24.53m-31.8 -7.93c-4.12,5.69 -9.02,14.05 -10.64,20.97 -2.71,11.53 4.61,13.33 14.38,5.69",
    },

    щ: {
      el: 3,
      path: "M39.22 105.3c5.28,-5.09 15.31,-15.51 7.37,-19.51 -2.26,-1.14 -3.8,-3.27 -3.36,-7.2 0.88,-7.81 0.59,-7.4 1.92,-17.75m-14.73 -6.86c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m-35.59 -2.57c-4.12,5.69 -9.02,14.05 -10.64,20.97 -2.71,11.53 4.61,13.33 14.38,5.69",
    },

    ъ: {
      el: 2,
      path: "M16.89 56.55c-3.06,6.22 -9.04,16.54 -11.93,23.32 -3.48,8.17 1.15,10.99 7.97,9.29 7.71,-1.93 15.04,-8.16 9.13,-14.39 -3.48,-3.67 -5.72,-5.03 -10.46,-8.24m-9.46 -12.02c2.88,1.71 7.22,2.74 14.76,2.04",
    },
    ы: {
      el: 2,
      path: "M15.25 56.55c-3.06,6.22 -9.04,16.54 -11.93,23.32 -3.48,8.17 1.15,10.99 7.97,9.29 7.71,-1.93 15.04,-8.16 9.13,-14.39 -3.48,-3.67 -5.72,-5.03 -10.46,-8.24m31.16 -8.92c-3.78,7.58 -8.25,16.27 -9.53,20.41 -2.64,8.48 4.12,10.09 9.67,6.5 7.16,-4.64 12.01,-10.65 17.1,-17.6",
    },

    ь: {
      el: 1,
      path: "M15.25 56.55c-3.06,6.22 -9.04,16.54 -11.93,23.32 -3.48,8.17 1.15,10.99 7.97,9.29 7.71,-1.93 15.04,-8.16 9.13,-14.39 -3.48,-3.67 -5.72,-5.03 -10.46,-8.24",
    },

    э: {
      el: 2,
      path: "M2.44 66.92c4.79,-10.64 11.01,-12.59 15.28,-11.91 10.24,1.62 11.36,12.81 7.65,19.64 -3.03,5.59 -8.73,11.65 -13.74,14.03 -6.47,3.07 -12.23,0.37 -8.1,-11.22m10.31 -5.29l12.31 0.81",
    },

    ю: {
      el: 3,
      path: "M52.57 81.18c-4.33,-0.26 -7.95,-0.72 -10.05,-1.11m0 0c-5.28,-0.96 -12.15,-3.77 -15.05,-9.54 -3.74,-7.44 2.19,-16.93 11.06,-15.52 10.24,1.62 11.36,12.81 7.65,19.64 -3.03,5.59 -8.73,11.65 -13.74,14.03 -5.45,2.59 -10.08,1.12 -9.35,-6.41 0.64,-6.59 0,-9.81 -11.57,-11.09m-9.38 21.07l17.71 -39.78",
    },

    я: {
      el: 2,
      path: "M60.81 66.92c-5.28,7.77 -12.85,17.84 -20.39,23.41 -7.81,5.76 -13.79,1.68 -10.69,-5.99 3.05,-7.57 6.21,-13.17 12.5,-24.04 2.61,-4.51 -1.3,-10.62 -10.37,-7.86 -5.9,1.8 -9.72,6.89 -10.11,10.41 -0.78,7.18 2.82,10.47 10.5,15.58m-25.91 -11.51c-1.59,4.98 -3.46,11.01 -4.01,14.83 -1.67,11.52 7.98,11.34 14.37,5.74 5.27,-4.62 7.16,-7.11 11.01,-12.29",
    },
    A: {
      el: 3,
      path: "M52.07 107.61c0,0 23.81,-47 46.16,-84.11 3.13,-5.19 -4.22,-10.71 -9.29,-4.32 -10.05,12.66 -23.09,31.96 -37.53,49.52 -14.45,17.56 -30.77,35.79 -48.75,53.49m-0.52 -28.75c14.72,-11.7 30.9,-20.45 48.06,-23.28m0 0c7.69,-1.27 14.4,-2.05 22.66,-2",
    },

    B: {
      el: 4,
      path: "M50.79 21.23l-33.98 63.72m59.72 -17.27c-29.59,-0.28 -57.35,26.44 -68.82,39.03 -11.47,12.59 -3.92,21.12 10.63,14.97 11.85,-5.02 42.7,-30.07 38.04,-50.33m0 0c-1.04,-4.51 -2.95,-8.06 -7.61,-11.92m-23.43 -11.89c-19.58,19.3 -32.17,6.15 -13.71,-14.83 18.46,-20.98 53.43,-39.73 66.02,-25.74 7.78,8.64 -5.11,29.02 -22.19,46.21 -9.8,9.86 -19.09,16.61 -30.58,16.64",
    },

    C: {
      el: 1,
      path: "M49.58 53.61c23.78,-39.73 3.36,-41.97 -16.23,-17.91 -15.67,19.25 -24.51,40.05 -29.35,55.13 -5.18,16.15 -0.15,29.83 22.07,12.02 18.45,-14.78 43.09,-36.93 43.09,-36.93",
    },

    D: {
      el: 3,
      path: "M23.4 59.06c-14.41,10.91 -24.21,0.12 -10.35,-14.83 9.17,-9.89 26.85,-22.15 41.61,-26.29 19.04,-5.33 24.43,2.43 21.7,19.21 -5.13,31.55 -31.87,66.09 -60.14,82.23 -12.46,7.11 -18.86,-1.22 -9.88,-12.48 16.45,-20.63 40.67,-31.3 56.2,-34.12m0 0c3.54,-0.64 7.59,-0.82 11.65,-0.28m-27.31 -37.49l-26.54 57.87",
    },

    E: {
      el: 1,
      path: "M63.81 39.48c12.87,-7.97 11.28,-24.73 -7.83,-15.95 -17.34,7.97 -33.59,21.49 -40.85,29.1 -5.87,6.16 -3.03,11.73 4.44,11.14 4.41,-0.35 11.45,-4.32 17.31,-5.11 7.29,-0.98 10.61,6.74 5,10.72 -8.59,6.1 -26.49,15.75 -35.15,26.17 -11.14,13.43 -0.53,26.51 16.22,19.1 15.52,-6.86 35.79,-26.72 49.53,-47.35",
    },

    F: {
      el: 4,
      path: "M58.65 57.6c-16.23,0.56 -26.28,3.09 -26.28,3.09m-4.5 -27.99c10.26,-3.25 21.27,-5.78 30.44,-7.47m0 0c27.11,-4.97 46.22,-4 46.22,-4m-39.17 -4.76c-33.02,40.29 -51.48,72.75 -63.23,94.85",
    },

    G: {
      el: 1,
      path: "M50.4 41.78c2.64,-5.14 5.48,-12.18 6.23,-15.72 2.03,-9.62 -9.48,-12.23 -16.29,-5.99 -15.88,14.57 -34.65,46.4 -38.09,73.71 -0.95,7.52 4.4,10.64 11.28,5.55 13.49,-10 28.93,-33.23 34.01,-41.32 4.42,-7.03 13.11,-3.66 10.5,4.35 -3.78,11.61 -19.95,65.97 -53.44,59.04",
    },

    H: {
      el: 4,
      path: "M85.09 15.49l-53.81 110.24m14.92 -108.84l-40.29 82.54m-3.78 -30.08c6.41,-0.35 12.53,-0.6 18.83,-0.75m0 0c12.6,-0.32 25.29,-0.26 38.14,0.13",
    },

    I: {
      el: 3,
      path: "M37.54 18.63l23.14 -1.83m-6.53 0.51l-42.28 85.13m-9.73 0.77l20.31 -1.61",
    },

    J: {
      el: 2,
      path: "M6.16 78.4c-1.45,4.85 -3.61,13.51 -3.97,18.63 -0.92,13.12 9.83,15.55 19.48,4.7 16.07,-18.08 33.47,-59.51 39.7,-81.34m-27.79 3.22c13.58,-2.24 20.93,-2.73 27.79,-3.22 13.12,-0.93 13.49,6.88 7.2,13.66",
    },

    K: {
      el: 4,
      path: "M50.8 14.65l-21.58 42.43m0 0l-27.09 53.26m98.61 -89.81c-33.57,33.57 -84.78,38.89 -84.78,38.89m45.61 46.45c-16.51,-17.91 -24.57,-35.99 -24.18,-50.8",
    },

    L: {
      el: 3,
      path: "M33.68 64.52c6.04,-0.75 10.51,-1.94 15.5,-3.29m0 0c13.26,-3.58 26.32,-20.2 33.47,-43.58 3.19,-10.44 -8.11,-12.51 -12.39,-3.56 -6.14,12.86 -36.67,82.58 -42.44,95.77m-25.69 9.78c46.86,-17.63 61.27,-17.07 71.21,-13.29",
    },

    M: {
      el: 1,
      path: "M79.15 112.89c12.46,-44.42 31.88,-74.44 35.5,-81.44 3.22,-6.23 -3.92,-10.43 -8.81,-5.07 -19.18,21.02 -31.84,43.46 -47.25,73.3 -4.08,7.89 -13.58,4.56 -10.23,-4.11 3.11,-8.05 27.28,-52.34 32.86,-65.5 2.89,-6.83 -5.27,-10.51 -10.07,-4.29 -7.38,9.57 -20.6,39.08 -69,83.56",
    },

    N: {
      el: 2,
      path: "M2.13 107.51l32.46 -86.18m13.15 89.25c0.78,-28.06 15.76,-51.57 24.23,-80.59 2.05,-7.03 -4.4,-10.01 -9.85,-5.37 -19.04,16.21 -28.94,36.58 -48.16,51.49",
    },

    O: {
      el: 2,
      path: "M70.46 62.69c-55.74,17.05 -62.59,-16.61 -32.21,-39.85 12.89,-9.86 25.93,-5.64 25.82,12.3 -0.05,8.99 -3.85,19.96 -9.88,31.36m0 0c-9.41,17.79 -23.81,35.84 -34.51,42.77 -12.31,7.97 -18.3,3.76 -17.46,-9.11 0.8,-12.3 5.27,-24.81 12.51,-39.29",
    },

    P: {
      el: 2,
      path: "M55.88 30.3l-40.57 90.09m10.07 -54c-22.01,6.09 -29.72,-4.09 -17.37,-19.55 14.66,-18.36 46.76,-32.52 69.42,-34.67 29.46,-2.79 33,16.88 15.32,36.51 -12.81,14.23 -35.87,28.39 -61.87,37.12",
    },

    Q: {
      el: 2,
      path: "M18.49 95.56c10.83,-2.31 17.64,-3.05 23.36,-3.11m0 0c8.35,-0.1 12.94,0.61 17.09,3.7m0.99 -73.64c9.6,4.97 5.62,29.89 -8.9,55.66 -14.51,25.77 -34.06,42.63 -43.66,37.66 -9.6,-4.97 -5.62,-29.89 8.9,-55.66 14.51,-25.77 34.06,-42.63 43.66,-37.66z",
    },

    R: {
      el: 3,
      path: "M55.88 30.3l-40.57 90.09m10.07 -54c-22.01,6.09 -29.72,-4.09 -17.37,-19.55 14.66,-18.36 46.76,-32.52 69.42,-34.67 29.46,-2.79 33,16.88 15.32,36.51 -12.81,14.23 -35.87,28.39 -61.87,37.12m72.7 28.15c-38.89,6.71 -52.73,-21.69 -60.64,-32.67",
    },

    S: {
      el: 2,
      path: "M90.07 20.54c-4.52,-11.14 -13.55,-7.83 -28.31,-2.41 -14.76,5.42 -15.96,18.67 -8.43,31.62 7.53,12.95 29.51,30.72 19.88,53.91 -9.64,23.19 -47.28,18.37 -61.13,11.74 -13.85,-6.63 -11.74,-13.18 -2.71,-19.84 9.03,-6.66 53.6,-25.96 80.71,-12.98",
    },

    T: {
      step: -20,
      el: 3,
      path: "M2.13 113.79c5.3,-13.55 30.78,-63 41.45,-83.58m0 0c2.97,-5.72 4.48,-8.6 4.48,-8.6m-36.4 16.4c25.6,-6.4 52.57,-14.05 59.35,-8.78",
    },

    U: {
      el: 1,
      path: "M38.52 20.22c-2.73,9.01 -7.84,20.76 -15.15,32.31 -11.6,18.33 -18.92,32.39 -21.04,46.3 -1.33,8.71 4.3,13.5 14.36,6.35 28.31,-20.14 44.82,-50.89 63.3,-79.24 3.76,-5.77 12.8,-2.76 8.03,5.02 -4.77,7.78 -31.83,53.87 -36.85,65.66 -3.55,8.34 2.68,15.49 12.1,8.71 5.29,-3.81 11.37,-12.04 15.41,-17.21",
    },

    V: {
      step: -10,
      el: 1,
      path: "M16.25 28.67c-6.63,24.09 -12.65,60.53 -13.85,70.47 -1.2,9.94 1.51,17.47 13.85,4.52 12.35,-12.95 40.05,-60.83 48.79,-87.93",
    },

    W: {
      el: 2,
      path: "M21.64 41.02c-11.74,23.79 -17.47,51.5 -19.27,60.23 -1.81,8.73 7.23,11.44 11.74,3.91 4.52,-7.53 30.72,-50.89 30.72,-50.89m29.21 -43.06c22.89,-3.61 16.56,18.67 12.05,33.43 -4.52,14.76 -24.39,51.8 -35.84,58.12 -11.44,6.32 -12.65,-2.11 -11.74,-9.34 0.9,-7.23 6.32,-39.15 6.32,-39.15",
    },

    X: {
      el: 3,
      path: "M39.18 21.75c0,0 4.52,67.46 5.72,81.01 1.2,13.55 14.15,5.72 14.15,5.72m21.98 -89.14c-37.04,27.4 -58.42,53 -78.9,89.74",
    },

    Y: {
      el: 3,
      path: "M41.15 16.33c0,0 -20.78,44.87 -24.09,55.11 -3.31,10.24 5.42,14.45 13.85,6.93 8.43,-7.53 54.51,-63.24 54.51,-63.24m-14.76 66.85c-39.15,8.13 -61.13,24.69 -65.95,32.22 -4.82,7.53 -3.61,15.66 9.94,11.74 13.55,-3.91 31.32,-25.6 42.76,-53.9 11.44,-28.31 9.63,-34.89 9.63,-34.89",
    },

    Z: {
      el: 2,
      path: "M38.57 34.7c29.51,-9.94 35.84,-10.54 44.87,-12.05 9.03,-1.51 14.76,5.12 7.83,11.44 -6.93,6.32 -68.16,50.63 -82.86,76.88m59.98 -15.41c-25.6,0 -66.25,18.04 -66.25,18.04",
    },

    a: {
      el: 2,
      path: "M24.31 69.78c-4.56,7.18 -7.45,12.54 -11.01,17.14 -5.2,6.7 -13.53,3.02 -10.52,-5.62 1.86,-5.33 6.43,-10.87 11.27,-14.85 6.2,-5.09 14.85,-7.05 22.26,-3.89m0 0c-1.22,2.11 -9.6,16.97 -11.3,21.05 -2.56,6.12 3.14,10.14 8.89,5.08 4.5,-3.96 12.7,-13.14 17.53,-18.9",
    },

    b: {
      el: 2,
      path: "M35.85 19.38c-9.03,15.06 -31,59.65 -33.71,67.63m0 0c11.02,2.86 15.05,-0.51 21.1,-5.96 5.05,-4.56 10.15,-11.32 13.15,-17.7 3.69,-7.83 -5.13,-11.75 -10.32,-5.42 -4.52,5.5 -9.43,14.64 -13.25,22.74",
    },

    c: {
      el: 1,
      path: "M22.19 69.78c10.69,-10.24 1.7,-16.43 -6.1,-10.27 -5.76,4.55 -10.6,11.19 -12.92,17.04 -4.29,10.81 5.43,14.92 16.14,8.65 4.78,-2.8 10.74,-7.04 17.48,-13.87",
    },

    d: {
      el: 2,
      path: "M24.61 68.84c-3.2,4.58 -6.27,10.12 -10.57,15.25 -6.13,7.32 -15.25,3.28 -10.67,-5.88 3.07,-6.12 9.44,-12.43 14.82,-15.82 4.01,-2.53 7.53,-3.42 14.85,0.92m18.77 -33c-9.31,17.26 -22.91,41.64 -26.17,48.5 -3.47,7.3 4.47,10.96 9.3,5.48 3.87,-4.4 5.88,-6.83 11.43,-14.52",
    },

    e: {
      el: 1,
      path: "M2.89 79.09c10.7,-0.95 17.47,-6.5 20.11,-12.57 3.4,-7.82 -4.72,-12.66 -12.08,-5.89 -4.41,4.05 -7.66,10.2 -8.56,15.98 -1.44,9.25 4.03,14.75 14.21,9.14 5.17,-2.84 11.84,-7.99 17.74,-15.98",
    },

    f: {
      el: 1,
      path: "M44.75 34.43c-18.07,25 -36.45,64.35 -42.16,83.04 -2.42,7.9 5.42,11.22 10.54,4.67 7.39,-9.45 11.42,-25.94 15.83,-48.33 0.65,-3.32 1.7,-5.98 5.57,-7.09 5.32,-1.53 11.79,-0.49 16.32,3.06",
    },

    g: {
      el: 2,
      path: "M51.31 93.3c-4.12,-0.28 -10.86,-0.21 -16.51,1.21m0 0c-15.68,3.92 -26.1,8.21 -31.29,16.57 -3.84,6.18 0.7,14.29 9.94,8.36 20.63,-13.25 30.66,-45.03 32.9,-55.38 1.66,-7.64 -5.67,-8.19 -9.34,-5.23 -7.7,6.23 -15.46,14.27 -17.69,21.53 -1.83,5.94 4.43,9.62 9.34,5.8 3.55,-2.77 6.32,-10.06 8.58,-16.38",
    },

    h: {
      stepBack: 10,
      el: 3,
      path: "M42.62 25.85c-12.8,23.64 -32.59,58.48 -40.49,72.67m12.03 -21.42c10.93,-4.72 15.73,-5.86 21.52,-7.32m0 0c-1.41,3.22 -2.18,5.84 -2.84,7.83 -2.56,7.66 4.08,10.38 8.88,5.46 3.58,-3.67 8.72,-9.75 11.37,-13.29",
    },

    i: {
      el: 2,
      path: "M23.58 39.58l-6.37 11.43m-6.18 11.81c-3.78,7.58 -7.03,13.92 -8.31,18.05 -2.64,8.48 4.12,10.09 9.67,6.5 7.16,-4.64 12.01,-10.65 17.1,-17.6",
    },

    j: {
      stepBack: 40,
      el: 3,
      path: "M54.84 35.54l-2.52 14.59m-1.81 10.48l-1.58 9.17c-1.66,9.61 -3.85,16.41 -6.06,22.3 -6.84,18.23 -16.13,33.37 -26.93,41.23 -10.83,7.89 -17.92,-0.6 -11.14,-11.14 8.65,-13.45 20.27,-21.37 37.15,-27.64m0 0c16.7,-6.21 22.61,-17.44 26.77,-24.75",
    },

    k: {
      el: 3,
      path: "M51.82 69.78c-6.75,9.47 -28.81,33.11 -33.96,11.65m-7.3 0.59c12.65,0.53 25.71,-7.59 30.43,-14.95 4.1,-6.38 -2.12,-12.9 -9.77,-6.25 -4.02,3.49 -8.29,8.96 -10.95,12.84m-18.14 25.97c9.68,-25.23 31.95,-66.62 41.1,-78.16 5.5,-6.93 12.53,-2.39 9.79,4.82 -2.53,6.64 -13.39,26.25 -28.9,28.01",
    },

    l: {
      step: -10,
      el: 1,
      path: "M28.92 76.96c-6.07,9.25 -12.56,15.62 -17.11,18.96 -5.87,4.3 -10.42,1.67 -9.57,-3.87 2.6,-17.03 21.09,-50.87 31.65,-64.18 5.5,-6.93 12.53,-2.39 9.79,4.82 -2.53,6.64 -13.39,26.25 -28.9,28.01",
    },

    m: {
      el: 3,
      path: "M10.83 57.5l-8.7 36.11m3.51 -14.59c6.41,-6.04 15.62,-17.38 20.65,-21.75 5.85,-5.08 10.97,-1.42 9.24,4.75l-6.43 22.86m3.07 -10.92l10.35 -9.56c3.47,-3.21 9.16,-1.81 8.94,3.28 -0.17,4.09 -2.74,9.62 -3.3,12.38 -1.04,5.12 3.71,7.38 7.94,4.34 3.91,-2.8 8.48,-8.48 11.61,-14.63",
    },

    n: {
      el: 2,
      path: "M10.83 57.5l-8.7 36.11m3.51 -14.59c6.41,-6.04 13.83,-12.76 18.86,-17.13 5.85,-5.08 10.73,-0.35 9.08,5.49 -1.88,6.65 -6.31,11.85 -7.31,17.6 -0.73,4.18 2.83,7.93 8.76,3.57 4.2,-3.08 8.7,-8.45 16.96,-18.76",
    },

    o: {
      el: 2,
      path: "M43.62 67.35c-6.91,11.7 -14.01,14.59 -21.92,13.15m0 0c-5.28,-0.96 -12.15,-3.77 -15.05,-9.54 -3.74,-7.44 2.19,-16.93 11.06,-15.52 10.24,1.62 11.36,12.81 7.65,19.64 -3.03,5.59 -8.73,11.65 -13.74,14.03 -7.48,3.55 -14.02,-0.61 -5.4,-17.32",
    },

    p: {
      el: 3,
      path: "M28.18 55.46c-8.14,21.08 -18.07,42.99 -26.05,70.69m58.72 -58.8c-10.46,14.76 -29.52,22.35 -36.67,24.99m1.71 -28.63c4.4,-2.29 7.72,-4.21 10.48,-5.09 4.7,-1.5 7.83,1.64 6.45,6.3 -1.88,6.34 -6.2,16.08 -9.97,23.38",
    },

    q: {
      el: 2,
      path: "M28.12 63.44c-4.56,7.18 -10.01,15.86 -13.57,20.45 -5.2,6.7 -13.53,3.02 -10.52,-5.62 1.86,-5.33 8.99,-14.18 13.83,-18.16 6.2,-5.09 14.85,-7.05 22.26,-3.89m0 0c-12.51,18.07 -23.94,42.31 -37.36,76.67 -3.18,8.14 6.89,12.05 9.99,2.69 10.72,-32.39 19.79,-44.06 37.34,-68.22",
    },

    r: {
      el: 3,
      path: "M38.49 67.35c-5.74,9.4 -13.73,21.35 -22.05,28.51 -5.63,4.84 -12.87,1.99 -10.69,-5.99 2.63,-9.62 8.17,-18.09 14.16,-29.14m0 0c-4.55,-0.42 -7.18,-0.83 -9.53,-1.51 -4.48,-1.3 -5.15,-6.28 -1.93,-9.5 2.29,-2.29 3.66,-3.7 7.03,-6.53m-7.15 15.47l-6.2 8.69",
    },

    s: {
      stepBack: 20,
      el: 2,
      path: "M37.47 54.47c-15.94,7.28 -16.68,11.44 -10.88,20.22 2.69,4.07 6.34,9.2 8.48,12.66 1.79,2.9 1.82,6.63 -1.77,9.78 -8.22,7.19 -15.91,9.63 -22.8,10.49 -9.44,1.18 -10.78,-5.51 -4.53,-11.36 6.54,-6.12 15.38,-11.12 24.38,-16.03m0 0c5.79,-3.16 13.72,-7.28 22.19,-12.88",
    },

    t: {
      el: 3,
      path: "M43.11 17.18c-14.83,26.58 -29.55,52.32 -36,72.93 -3.37,10.77 4.95,14.34 12.14,6.51 7.75,-8.43 17.95,-21.6 23.17,-29.27m-40.29 -14.03c7.78,-1.94 16.11,-3.13 23.15,-3.8m0 0c13.87,-1.31 24.03,-0.72 24.03,-0.72",
    },

    u: {
      el: 2,
      path: "M15.58 54.71c-5.35,7.38 -12.28,18.26 -13.33,25.6 -1.07,7.53 5.29,10.2 10.93,4.25 6.08,-6.41 15.52,-20.95 20.91,-28.35m16.64 11.44c-6.51,10.73 -9.4,15.25 -13.92,21.05 -3.76,4.82 -9.74,3.2 -9.14,-2.6 0.81,-7.82 1.31,-14.18 2.64,-24.53",
    },

    v: {
      el: 1,
      path: "M10.3 52.15l-8.17 39.78m25.01 -63.02c29.38,-9.12 -4.64,53.17 -25.01,63.02",
    },

    w: {
      el: 2,
      path: "M11.47 54.59l-9.33 38.78m3.17 -13.19l20.03 -18.06m0 0c-0.03,6.93 -0.31,12.24 0.37,17 1.16,8.03 7.76,9.25 13.15,2.2 16.02,-20.97 23.07,-52.83 4.88,-45.42",
    },

    x: {
      el: 3,

      path: "M41.74 44.62l-39.6 56.92m11.22 -46.6l8.29 18.57m0 0l3.51 7.86c2.01,4.51 7.42,4.85 10.9,0.61l12.02 -14.62",
    },

    y: {
      stepBack: 20,
      el: 3,
      path: "M28.26 59.45c-5.39,6.7 -10.64,13.86 -12.45,18.36 -2.6,6.47 2.48,11.37 10.58,6.01 6.03,-3.99 14.68,-12.42 23.55,-23.39m7.62 29.5c-3.44,0.23 -8.47,0.55 -13.47,1.51m0 0c-12.04,2.33 -28.28,5.59 -37.71,15.2 -8.05,8.2 -4.25,16.72 7.74,14.09 9.27,-2.03 18.78,-7.69 26.39,-20.05 4.84,-7.86 6.95,-26.47 7.53,-37.94",
    },

    z: {
      el: 3,
      path: "M2.13 66.9c12.58,-8 27.98,-9.7 38.97,-9m0 0c-13.12,15.8 -29.91,22.68 -38.7,37.22m0 0c13.11,-3.34 26.22,-5.6 39.33,-5.93",
    },
    1: {
      el: 2,
      path: "M2.13 99.33l32.52 -78.3m-31.62 27.4l31.62 -27.4",
    },
    2: {
      el: 2,
      path: "M31.35 49.04c14.76,-25.3 26.2,-31.92 34.93,-26.2 8.73,5.72 1.2,25.9 -17.77,39.15 -18.97,13.25 -31.02,27.4 -31.02,27.4m-15.36 6.93c17.17,-12.05 37.94,-15.06 48.79,-6.93",
    },
    3: {
      el: 2,
      path: "M30.18 30.07c12.65,-14.15 29.51,-2.71 17.47,8.43 -12.05,11.14 -19.57,13.55 -19.57,13.55m-25.9 27.1c-1.2,23.79 26.2,24.39 39.45,0.6 13.25,-23.79 -7.72,-30.64 -7.72,-30.64",
    },
    4: {
      el: 2,
      path: "M19.17 97.82c0,0 27.1,-60.53 32.22,-71.37 5.12,-10.84 -4.52,-11.14 -11.44,-3.01 -6.93,8.13 -30.42,32.52 -35.23,37.64 -4.82,5.12 -2.41,9.03 3.31,8.13 5.72,-0.9 37.34,-3.91 37.34,-3.91",
    },
    5: {
      el: 2,
      path: "M57.56 24.04c-12.05,0 -32.52,3.01 -32.52,3.01l-12.05 32.22m-9.94 14.15c-6.93,29.21 27.4,31.92 39.15,-0.6 11.74,-32.52 -8.6,-31.04 -25.83,-22.6",
    },
    6: {
      el: 1,
      path: "M37.15 16.21c-30.72,26.8 -36.74,51.8 -34.63,70.47 2.11,18.67 18.67,12.95 28.01,-0.3 9.34,-13.25 12.65,-50.29 -15.66,-30.42",
    },
    7: {
      el: 1,
      path: "M2.13 93.64c19.27,-43.55 26.8,-46.56 35.54,-60.11 8.73,-13.55 0.6,-18.67 -31.62,-2.11",
    },
    8: {
      el: 3,
      path: "M64.74 18.77c-36.74,24.09 -59.63,51.19 -62.34,64.75 -2.71,13.55 15.96,17.77 26.5,-0.6 10.54,-18.37 -4.22,-25.6 -6.02,-40.35 -1.81,-14.76 19.27,-38.55 33.43,-6.32",
    },
    9: {
      el: 1,
      path: "M17.74 99.48c7.23,-17.77 19.27,-46.38 22.28,-53 3.01,-6.63 -4.52,-10.84 -8.73,-3.31 -4.22,7.53 -6.02,15.36 -15.81,19.27 -9.79,3.91 -16.41,-2.41 -11.9,-15.51 4.52,-13.1 17.32,-24.24 27.1,-28.16 9.79,-3.91 18.07,0 13.7,15.66",
    },
    0: {
      el: 1,
      path: "M34.59 21.28c11.04,0 15.47,16.74 9.91,37.39 -5.56,20.65 -19.02,37.39 -30.06,37.39 -11.04,0 -15.47,-16.74 -9.91,-37.39 5.56,-20.65 19.02,-37.39 30.06,-37.39z",
    },
    ".": {
      el: 1,
      path: "M9.08,88.13L2.13,102.36",
    },
    ",": {
      el: 1,
      path: "M16.08 88.13c0.43,9.7 -5.72,19.42 -13.95,28.57",
    },
    "/": {
      el: 1,
      path: "M58.98,21.84L2.13,97.83",
    },
    _: {
      el: 1,
      path: "M2.13,104.28L37.24,104.28",
    },
    "-": {
      step: 7,
      stepBack: -7,
      el: 1,
      path: "M2.13,76.42L23.97,76.42",
    },
    ")": {
      el: 1,
      path: "M2.13 108.33c39.53,-24.47 39.53,-65.12 32,-88.46",
    },
    "(": {
      el: 1,
      path: "M38.01 19.87c-39.53,24.47 -39.53,65.12 -32,88.46",
    },
    "+": {
      el: 3,
      path: "M32.73 36.9l-18.93 38.77m-11.67 -19.39l21.13 0m0 0l21.13 0",
    },
    "=": {
      el: 2,
      path: "M4.77 65.51l21.83 0m-24.47 14.59l21.83 0",
    },
    "#": {
      el: 8,
      path: "M42.22 20.71c-4.51,8.93 -8.22,17.1 -11.28,24.63m0 0c-3.8,9.32 -6.71,18.01 -8.76,25.34m0 0c-3.62,12.95 -4.8,22.59 -5.17,30.21m48.24 -80.18c-4.4,8.72 -8.12,16.9 -11.14,24.28m0 0c-3.78,9.22 -6.6,17.57 -8.67,24.86m0 0c-3.78,13.31 -5.03,23.26 -5.41,31.04m-31.48 -49.88c24.28,-10.16 54.39,-6.21 65.5,-2.26m-71.9 27.29c24.28,-10.16 54.39,-6.21 65.5,-2.26",
    },
    "&": {
      el: 3,
      path: "M48.53 97.83c0,0 -3.33,-6.77 -7.13,-16.31m0 0c-3.85,-9.68 -8.17,-22.23 -10.13,-33.87m0 0c-1.48,-8.8 -0.37,-24.43 7.61,-32.91 15.2,-16.13 31.46,-3.73 18.89,14.39 -11.91,17.16 -46.25,20.7 -53.96,45.03 -7.34,23.18 10.71,32.69 29.87,14.94 11.76,-10.9 22.24,-27.17 24,-30.95",
    },
  },
};

export default dream_beach;
