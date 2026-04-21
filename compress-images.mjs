import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const images = [
  { src: 'public/photoGarage.png', width: 1920 },
  { src: 'public/photoGarage-hiver2.png', width: 1920 },
  { src: 'public/photoGarage-hiver3.png', width: 1920 },
  { src: 'public/partners/carxpert.jpg', width: 1200 },
  { src: 'public/cars/voiturePret.JPG', width: 1200 },
  { src: 'public/team/Quentin Weiss.JPG', width: 800 },
  { src: 'public/team/Anthony L.JPG', width: 800 },
];

for (const img of images) {
  const ext = path.extname(img.src).toLowerCase();
  try {
    const buffer = await sharp(img.src)
      .resize(img.width, null, { withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer();
    
    // Write to same path but with jpg extension if it was png
    const outPath = img.src.replace(/\.(png|PNG)$/, '.jpg');
    await sharp(buffer).toFile(outPath);
    
    const originalSize = (await sharp(img.src).metadata()).size;
    const newSize = buffer.length;
    console.log(`✅ ${img.src} → ${outPath}: ${(newSize / 1024).toFixed(0)} KB (was ${ext})`);
  } catch (e) {
    console.error(`❌ ${img.src}: ${e.message}`);
  }
}
