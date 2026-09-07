from PIL import Image
from pathlib import Path

source = Path('/home/ubuntu/upload/Untitleddesign.png')
out = Path('/home/ubuntu/webdev-static-assets')
out.mkdir(parents=True, exist_ok=True)
image = Image.open(source).convert('RGB')

# Coordinates are based on the supplied 1080 x 1920 collage. Crops preserve the original supplied pixels.
crops = {
    'studio-hub-authentic-logo.jpg': (10, 560, 390, 940),
    'studio-hub-before.jpg': (0, 0, 405, 535),
    'studio-hub-after.jpg': (410, 165, 805, 615),
    'studio-hub-salon-interior.jpg': (65, 1290, 465, 1920),
    'studio-hub-salon-station.jpg': (575, 1010, 960, 1498),
}
for filename, box in crops.items():
    image.crop(box).save(out / filename, quality=94, optimize=True)
print('Created:', ', '.join(crops))
