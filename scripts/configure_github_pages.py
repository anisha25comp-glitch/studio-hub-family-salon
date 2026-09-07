from pathlib import Path

root = Path(__file__).resolve().parents[1]
vite = root / "vite.config.ts"
text = vite.read_text()
needle = "export default defineConfig({\n  plugins,\n"
replacement = "export default defineConfig({\n  plugins,\n  base: process.env.GITHUB_ACTIONS ? \"/studio-hub-family-salon/\" : \"/\",\n"
if needle not in text:
    raise SystemExit("Vite config marker not found")
vite.write_text(text.replace(needle, replacement, 1))

home = root / "client/src/pages/Home.tsx"
text = home.read_text()
marker = 'const qrImage = "/manus-storage/studio-hub-instagram-qr_808e3b80.png";\n'
if marker not in text:
    raise SystemExit("Home logo marker not found")
text = text.replace(marker, marker + 'const logoImage = `${import.meta.env.BASE_URL}studio-hub-logo.jpg`;\n', 1)
text = text.replace('src="/studio-hub-logo.jpg"', 'src={logoImage}')
home.write_text(text)
