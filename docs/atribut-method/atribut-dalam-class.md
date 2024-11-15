---
title: Atribut dalam Class
---

# 📘 Atribut (Variabel) di dalam Class

## 1. Apa itu Atribut?

**Atribut** adalah variabel yang didefinisikan di dalam sebuah class dan digunakan untuk menyimpan data atau informasi mengenai objek.

### Contoh Membuat Atribut pada Class

```python
class Mahasiswa:
    def __init__(self, nama, umur):
        self.nama = nama  # Atribut nama
        self.umur = umur  # Atribut umur

# Membuat objek Mahasiswa
mhs1 = Mahasiswa("Nona", 21)
print(mhs1.nama)  # Output: Nona
print(mhs1.umur)  # Output: 21
```

## 2. Jenis Atribut

- **Atribut Instance**: Atribut yang didefinisikan di dalam method `__init__` dan berlaku untuk setiap objek.
- **Atribut Class**: Atribut yang didefinisikan di luar method dan berlaku untuk semua objek dari class tersebut.

### Contoh Atribut Class

```python
class Mobil:
    roda = 4  # Atribut class

    def __init__(self, merk):
        self.merk = merk  # Atribut instance

mobil1 = Mobil("Toyota")
print(mobil1.roda)  # Output: 4
```

---
