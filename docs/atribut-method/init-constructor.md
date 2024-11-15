---
title: Method __init__
---

## 📘 Method `__init__` (Constructor) untuk Inisialisasi Atribut

## 1. Apa itu Method `__init__`?

Method `__init__` adalah **constructor** yang secara otomatis dipanggil ketika objek dibuat. Method ini digunakan untuk **menginisialisasi atribut** pada saat objek diciptakan.

### Contoh Penggunaan `__init__`

```python
class Mobil:
    def __init__(self, merk, warna):
        self.merk = merk
        self.warna = warna

    def nyalakan_mesin(self):
        print(f"Mesin {self.merk} berwarna {self.warna} dinyalakan.")

# Membuat objek mobil
mobil1 = Mobil("Toyota", "Merah")
mobil1.nyalakan_mesin()
```

**Output:**

```
Mesin Toyota berwarna Merah dinyalakan.
```

## 2. Contoh Praktik dengan Atribut dan Method

Tambahkan atribut dan method sesuai kebutuhan:

```python
class Buku:
    def __init__(self, judul, penulis):
        self.judul = judul
        self.penulis = penulis

    def deskripsi(self):
        print(f"Buku '{self.judul}' ditulis oleh {self.penulis}.")

buku1 = Buku("Belajar Python", "Nona")
buku1.deskripsi()
```

**Output:**

```
Buku 'Belajar Python' ditulis oleh Nona.
```

---
