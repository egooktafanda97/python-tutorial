---
title: Inheritance (Pewarisan) - Dasar dan Konsep
---

# 🧬 Inheritance (Pewarisan) dalam Python

## Apa itu Inheritance?

**Inheritance** atau **pewarisan** adalah konsep dalam **Object-Oriented Programming (OOP)** yang memungkinkan sebuah **class** untuk mewarisi atribut dan metode dari class lain. Class yang mewarisi disebut **class turunan** (subclass), sedangkan class yang diwarisi disebut **class induk** (superclass).

Dengan inheritance, kita bisa membuat class baru dengan memanfaatkan kembali atribut dan metode dari class yang sudah ada, sehingga kode lebih **modular** dan **mudah dipelihara**.

---

## Keuntungan Inheritance

1. **Reusability**: Menghindari duplikasi kode dengan mewarisi kode yang ada.
2. **Organisasi**: Mengelompokkan logika yang terkait dalam class induk dan class turunan.
3. **Kemudahan Pemeliharaan**: Perubahan pada class induk akan langsung berdampak pada class turunan.

## Cara Membuat Class Turunan di Python

Untuk membuat class turunan, kita cukup mendefinisikan class baru dan menambahkan nama class induk di dalam tanda kurung.

### Contoh Sederhana

```python
class Kendaraan:
    def bergerak(self):
        print("Kendaraan bergerak")

class Mobil(Kendaraan):  # Mobil mewarisi dari Kendaraan
    def belok(self):
        print("Mobil membelok")

# Membuat objek dari class Mobil
mobil = Mobil()
mobil.bergerak()  # Output: Kendaraan bergerak
mobil.belok()  # Output: Mobil membelok
```

Pada contoh di atas, `Mobil` adalah class turunan dari `Kendaraan`. Class `Mobil` memiliki akses ke metode `bergerak()` dari class `Kendaraan`, sekaligus memiliki metode tambahan `belok()`.

---

## Polymorphism dalam Inheritance

Polymorphism memungkinkan metode pada class turunan untuk memiliki nama yang sama dengan metode di class induk, tetapi berperilaku berbeda. Ini dapat dicapai dengan **method overriding**.

### Contoh Polymorphism

```python
class Kendaraan:
    def bergerak(self):
        print("Kendaraan bergerak")

class SepedaMotor(Kendaraan):
    def bergerak(self):  # Overriding metode bergerak
        print("Sepeda motor melaju dengan cepat")

kendaraan1 = Kendaraan()
kendaraan2 = SepedaMotor()

kendaraan1.bergerak()  # Output: Kendaraan bergerak
kendaraan2.bergerak()  # Output: Sepeda motor melaju dengan cepat
```

Pada contoh ini, metode `bergerak()` di class `SepedaMotor` **meng-override** metode `bergerak()` dari class `Kendaraan`.

---

## Kesimpulan

Inheritance membantu kita membuat kode yang lebih modular dan mudah dipelihara dengan memanfaatkan kembali atribut dan metode yang sudah ada pada class induk. Polymorphism juga memungkinkan kita untuk mengubah perilaku metode pada class turunan.

---
