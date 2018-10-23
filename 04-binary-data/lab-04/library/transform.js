const transformGreyscale = bmp => {
  for (let i = 122; i < 1146; i += 4) {
    let avg = (bmp.buffer[i] + bmp.buffer[i + 1] + bmp.buffer[i + 2]) / 3;
    bmp.buffer[i] = avg;
    bmp.buffer[i + 1] = avg;
    bmp.buffer[i + 2] = avg;
  }
};

const colorChange = bmp => {
  for (let i = 122; i < 1146; i += 4) {
    bmp.buffer[i] += 50;
    bmp.buffer[i + 1] += 50;
    bmp.buffer[i + 2] += 50;
  }
};

const overWrite = bmp => {
  bmp.buffer = Buffer.from('this has been hacked');
};

module.exports = {
  transformGreyscale: transformGreyscale,
  colorChange: colorChange,
  overWrite: overWrite
};
