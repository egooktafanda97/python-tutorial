---
title: Method Pada Class
---

# 📘 Method (Fungsi) di dalam Class

## 1. Apa itu Method?

**Method** adalah fungsi yang didefinisikan di dalam sebuah class dan digunakan untuk menentukan perilaku dari objek.

### Contoh Method pada Class

```python
class Mahasiswa:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur

    def perkenalan(self):
        print(f"Halo, nama saya {self.nama} dan saya berumur {self.umur} tahun.")

# Membuat objek dan memanggil method
mhs1 = Mahasiswa("Adi", 22)
mhs1.perkenalan()
```

**Output:**

```
Halo, nama saya Adi dan saya berumur 22 tahun.
```

## 2. Method dengan Parameter

Method juga bisa menerima parameter tambahan:

```python
class Kalkulator:
    def tambah(self, a, b):
        return a + b

calc = Kalkulator()
print(calc.tambah(5, 3))  # Output: 8
```

---
