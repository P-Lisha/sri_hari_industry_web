import fitz  # PyMuPDF
import os

downloads = os.path.join(os.path.expanduser("~"), "Downloads")
out_root = os.path.join(downloads, "extracted_images")
os.makedirs(out_root, exist_ok=True)

pdfs = ["brochure.pdf", "SHI PRESENTATION.pdf"]

summary = []
for pdf_name in pdfs:
    pdf_path = os.path.join(downloads, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"SKIP (not found): {pdf_name}")
        continue

    base = os.path.splitext(pdf_name)[0].replace(" ", "_")
    out_dir = os.path.join(out_root, base)
    os.makedirs(out_dir, exist_ok=True)

    doc = fitz.open(pdf_path)
    seen = set()
    count = 0
    for page_index in range(len(doc)):
        for img in doc.get_page_images(page_index):
            xref = img[0]
            if xref in seen:
                continue
            seen.add(xref)
            try:
                pix = fitz.Pixmap(doc, xref)
                if pix.n - pix.alpha > 3:  # CMYK -> RGB
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                count += 1
                out_path = os.path.join(out_dir, f"p{page_index+1}_img{count}.png")
                pix.save(out_path)
                pix = None
            except Exception as e:
                print(f"  error xref {xref}: {e}")
    doc.close()
    summary.append((pdf_name, count, out_dir))
    print(f"{pdf_name}: {count} images -> {out_dir}")

print("\n=== DONE ===")
for name, c, d in summary:
    print(f"{name}: {c} images")
print(f"\nAll saved under: {out_root}")
