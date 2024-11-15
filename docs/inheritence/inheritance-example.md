---
title: Contoh Implementasi Inheritance
---

# 👨‍💼 Studi Kasus: Inheritance dengan Class Pegawai dan Manager

## Studi Kasus: Struktur Kepegawaian

Kita akan membuat sebuah sistem sederhana untuk mengelola data pegawai. Dalam sistem ini:

- **Class `Pegawai`** akan menjadi class induk yang menyimpan data umum pegawai seperti nama dan gaji.
- **Class `Manager`** akan menjadi class turunan dari `Pegawai` dengan tambahan informasi departemen.

### Kode Implementasi

```python
class Pegawai:
    def __init__(self, nama, gaji):
        self.nama = nama
        self.gaji = gaji

    def tampilkan_info(self):
        print(f"Nama: {self.nama}, Gaji: {self.gaji}")

class Manager(Pegawai):  # Manager adalah class turunan dari Pegawai
    def __init__(self, nama, gaji, departemen):
        super().__init__(nama, gaji)  # Memanggil constructor dari class induk
        self.departemen = departemen

    def tampilkan_info(self):
        # Override untuk menambahkan informasi departemen
        super().tampilkan_info()
        print(f"Departemen: {self.departemen}")
```

### Cara Menggunakan Class `Pegawai` dan `Manager`

```python
# Membuat objek dari class Pegawai
pegawai1 = Pegawai("Budi", 5000000)
pegawai1.tampilkan_info()

print("---")

# Membuat objek dari class Manager
manager1 = Manager("Ani", 10000000, "Pemasaran")
manager1.tampilkan_info()
```

### Penjelasan Kode

1. **Class `Pegawai`**: Class induk yang menyimpan atribut `nama` dan `gaji`, serta metode `tampilkan_info()`.
2. **Class `Manager`**: Class turunan yang menambahkan atribut `departemen` dan meng-override metode `tampilkan_info()` untuk menampilkan informasi departemen.

**Output yang Diharapkan:**

```
Nama: Budi, Gaji: 5000000
---
Nama: Ani, Gaji: 10000000
Departemen: Pemasaran
```

### Kesimpulan

Dengan inheritance, kita dapat membuat class `Manager` yang mewarisi sifat-sifat dari class `Pegawai` dan menambahkan atribut atau metode baru. Ini memungkinkan kita untuk membuat struktur kode yang lebih terorganisir dan modular.

---
