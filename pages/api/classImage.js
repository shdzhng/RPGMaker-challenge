// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  console.log(req);
  const filePath = path.resolve('.', 'assets/wizard.png');
  const imageBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/jpg');
  res.send(imageBuffer);
}
