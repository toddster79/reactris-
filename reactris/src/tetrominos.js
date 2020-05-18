export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
         shape: [
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0]
                ],
         color: '52, 92, 52',       
    },
    J: {
      shape: [
               [0, 'J', 0],
               [0, 'J', 0],
               ['J', 'J', 0]
             ],
      color: '124, 252, 148',       
    },
    L: {
      shape: [
               [0, 'L', 0],
               [0, 'L', 0],
               [0, 'L', 'L']
             ],
      color: '108, 148, 108',       
    },
    O: {
      shape: [
               ['O', 'O'],
               ['O', 'O'],
             ],
      color: '9, 77, 4',       
    },
    S: {
      shape: [
               [0, 'S', 'S'],
               ['S', 'S', 0],
               [0, 0, 0]
             ],
      color: '14, 118, 5',       
    },
    T: {
      shape: [
               [0, 0, 0],
               ['T', 'T', 'T'],
               [0, 'T', 0]
             ],
      color: '189, 250, 197',       
    },
    Z: {
      shape: [
               ['Z', 'Z', 0],
               [0, 'Z', 'Z'],
               [0, 0, 0]
             ],
      color: '46, 215, 37',       
    },
  }
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  }