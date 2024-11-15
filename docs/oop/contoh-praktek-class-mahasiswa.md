# 🎓 Contoh Praktek

Sekarang, mari kita terapkan konsep yang sudah dipelajari dengan membuat class `Mahasiswa` yang lebih kompleks.

---

## 1. Membuat Class Mahasiswa

Berikut adalah contoh pembuatan class `Mahasiswa` dengan atribut tambahan dan method yang lebih interaktif:

```python
class Mahasiswa:
    def __init__(self, nama, umur, jurusan):
        self.nama = nama
        self.umur = umur
        self.jurusan = jurusan

    def perkenalan(self):
        print(f"Halo, nama saya {self.nama}, umur saya {self.umur} tahun, dan saya dari jurusan {self.jurusan}.")

    def ubah_jurusan(self, jurusan_baru):
        self.jurusan = jurusan_baru
        print(f"Jurusan telah diubah menjadi {self.jurusan}.")
```

Pada contoh ini, kita menambahkan:

- Atribut **jurusan**.
- Method **ubah_jurusan()** untuk mengganti jurusan mahasiswa.

---

## 2. Praktek Membuat dan Menggunakan Object

### 🎉 Langkah-langkah:

1. Buat object dari class `Mahasiswa`.
2. Gunakan method `perkenalan()` dan `ubah_jurusan()`.

```python
# Membuat object mahasiswa
mhs1 = Mahasiswa("Nona", 21, "Teknik Informatika")
mhs1.perkenalan()

# Mengubah jurusan
mhs1.ubah_jurusan("Sistem Informasi")
mhs1.perkenalan()
```

**Output:**

```
Halo, nama saya Nona, umur saya 21 tahun, dan saya dari jurusan Teknik Informatika.
Jurusan telah diubah menjadi Sistem Informasi.
Halo, nama saya Nona, umur saya 21 tahun, dan saya dari jurusan Sistem Informasi.
```

---

## 3. Latihan Mandiri

Sekarang, cobalah membuat class baru yang bernama `Dosen` dengan atribut `nama`, `mata_kuliah`, dan `pengalaman`. Buat method `mengajar()` yang mencetak informasi mata kuliah yang diajarkan.

---

## 4. Kesimpulan

Dengan memahami dan mempraktikkan penggunaan **class** dan **object**, Anda dapat membuat program yang lebih modular, terstruktur, dan mudah dipelihara. Selamat belajar dan bereksperimen!

---

## 📚 Referensi Tambahan

- [Belajar Python OOP](https://docs.python.org/3/tutorial/classes.html)
- [Python Real World Examples](https://realpython.com/)
