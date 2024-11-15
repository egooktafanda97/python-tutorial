---
title: Polymorphism (Polimorfisme)
---

# 🌀 Polymorphism (Polimorfisme) dalam Python

## Apa itu Polymorphism?

**Polymorphism** atau **Polimorfisme** adalah konsep dalam **Object-Oriented Programming (OOP)** yang memungkinkan objek-objek dari class yang berbeda untuk diakses melalui interface yang sama, dengan masing-masing objek merespons sesuai dengan implementasinya sendiri. Dengan kata lain, polimorfisme memungkinkan metode yang memiliki nama yang sama berperilaku berbeda pada class yang berbeda.

Polimorfisme dalam OOP dapat dicapai melalui **method overriding** dan **method overloading** (meskipun Python tidak mendukung overloading secara eksplisit).

### Mengapa Polimorfisme Penting?

Polimorfisme membantu kita dalam:

1. **Mengurangi Duplikasi Kode**: Menggunakan satu metode yang bisa diadaptasi oleh class turunan.
2. **Kemudahan Pemeliharaan**: Setiap class turunan bisa mengimplementasikan metode dengan cara yang unik tanpa mengubah interface umum.
3. **Fleksibilitas**: Memungkinkan kita menggunakan satu interface untuk berbagai objek, yang meningkatkan fleksibilitas kode.

---

## Contoh Polymorphism

Polimorfisme bisa diwujudkan dengan memiliki metode dengan nama yang sama pada class yang berbeda, tetapi dengan implementasi yang berbeda.

Contoh:

```python
class Kendaraan:
    def bergerak(self):
        print("Kendaraan bergerak")

class Mobil(Kendaraan):
    def bergerak(self):
        print("Mobil bergerak dengan roda")

class Pesawat(Kendaraan):
    def bergerak(self):
        print("Pesawat terbang di udara")

# Polimorfisme melalui metode 'bergerak'
def gerakan_kendaraan(kendaraan):
    kendaraan.bergerak()

# Membuat objek
mobil = Mobil()
pesawat = Pesawat()

gerakan_kendaraan(mobil)     # Output: Mobil bergerak dengan roda
gerakan_kendaraan(pesawat)   # Output: Pesawat terbang di udara
```

Pada contoh ini, meskipun `mobil` dan `pesawat` berasal dari class yang berbeda, kita bisa memanggil metode `bergerak()` dengan nama yang sama, dan masing-masing objek akan merespons sesuai implementasinya.

---

## Method Overriding dalam Polymorphism

**Method overriding** adalah salah satu bentuk polimorfisme di mana metode pada class turunan menimpa (override) metode yang sama di class induk. Dengan overriding, class turunan bisa memberikan implementasi spesifik untuk metode yang diwarisinya.

### Contoh Method Overriding

```python
class Pegawai:
    def pekerjaan(self):
        print("Pekerjaan umum pegawai")

class Manajer(Pegawai):
    def pekerjaan(self):
        print("Mengelola tim dan proyek")

class Staf(Pegawai):
    def pekerjaan(self):
        print("Mengerjakan tugas harian")

# Polimorfisme melalui method overriding
def deskripsi_pekerjaan(pegawai):
    pegawai.pekerjaan()

manajer = Manajer()
staf = Staf()

deskripsi_pekerjaan(manajer)  # Output: Mengelola tim dan proyek
deskripsi_pekerjaan(staf)     # Output: Mengerjakan tugas harian
```

Di sini, `pekerjaan()` di class `Manajer` dan `Staf` menimpa metode `pekerjaan()` di class `Pegawai`. Masing-masing class memiliki implementasi yang berbeda untuk metode tersebut.

---

## Kesimpulan

Polymorphism adalah konsep yang memungkinkan metode dengan nama yang sama berperilaku berbeda tergantung pada class yang mengimplementasikannya. Dengan **method overriding**, kita dapat membuat kode yang lebih fleksibel dan mudah diperluas, serta mengurangi duplikasi kode.

---
