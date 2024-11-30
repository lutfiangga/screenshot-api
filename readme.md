# Screenshot API
API sederhana untuk mengambil tangkapan layar (screenshot) dari sebuah halaman web dan mengembalikannya dalam format base64.

## 🚀 Fitur
- Ambil screenshot halaman web dengan cepat.
- Hasil dalam format base64 yang dapat digunakan langsung di frontend.

---

## 🛠️ Cara Menggunakan

### Endpoint Utama
**`GET /url={link_website}`**

#### 📥 Request
- **URL**: `http://localhost:3000/url={link_website}`
- **Method**: `GET`
- **Parameter**:
  - `url` *(required)*: URL halaman web yang ingin diambil tangkapan layarnya. URL harus valid dan di-encode menggunakan `encodeURIComponent`.

#### 📤 Response
- **200 OK**:
  - `data`: Base64 dari screenshot dalam format PNG.
- **400 Bad Request**:
  - Jika parameter `url` tidak valid atau kosong.
- **500 Internal Server Error**:
  - Jika terjadi kesalahan pada server saat mengambil screenshot.

---

## 🔧 Contoh Penggunaan

### Permintaan (Request)
**HTTP GET:**
```bash
curl "http://localhost:3000/url=website_yang_di_screenshot"
```

### Response
- **200 OK:**
```json
{
  "data": "iVBORw0KGgoAAAANSUhEUgAAAoAAA..."
}
```
- **Implementasi:**
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAA..." alt="Screenshot" />
```

---

## 🌟 Instalasi dan Menjalankan API

- **Clone Repository**
```bash
git clone https://github.com/lutfiangga/screenshot-api.git
cd screenshot-api
```
- **Install Depedencies:**
```bash
npm install
```
- **Jalankan Server:**
```bash
nodemon index
```
API akan berjalan pada `http://localhost:3000`
- **Akses API**
Setelah server berjalan, Anda dapat mengakses API menggunakan GET dengan parameter url yang di-encode.
```bash
curl "http://localhost:3000/url=https%3A%2F%2Fgoogle.com"
```

---

## 💡 Catatan

- **Pastikan server dapat mengakses internet untuk mengambil screenshot dari halaman web.**
- **URL yang dimasukkan harus di-encode dengan benar untuk menghindari error.**