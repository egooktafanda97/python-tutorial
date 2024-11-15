# 📘 Konsep Dasar (OOP)

## Apa Itu OOP?

**Object-Oriented Programming (OOP)** adalah sebuah paradigma pemrograman yang menggunakan objek dan kelas sebagai dasar utama dalam pengembangan perangkat lunak. OOP sangat berguna untuk menciptakan kode yang lebih terstruktur, modular, dan dapat digunakan kembali.

---

## 1. Class dan Object

### a. Apa itu Class?

- **Class** adalah blueprint atau template yang digunakan untuk menciptakan objek.
- Di dalam class, kita mendefinisikan atribut (data) dan metode (fungsi) yang akan dimiliki oleh objek.

**Contoh Implementasi Class:**

```python
class Buku:
    def __init__(self, judul, penulis):
        self.judul = judul
        self.penulis = penulis

    def deskripsi(self):
        print(f"Buku '{self.judul}' ditulis oleh {self.penulis}.")

buku1 = Buku("Python untuk Pemula", "Nona")
buku1.deskripsi()
```

### b. Apa itu Object?

- **Object** adalah instance dari sebuah class.
- Objek dapat memiliki data unik namun menggunakan struktur yang sama yang didefinisikan dalam class.

---

## 2. Attribute (Atribut)

### a. Apa itu Atribut?

- **Atribut** adalah variabel yang menyimpan data atau informasi mengenai objek.
- Atribut didefinisikan di dalam class dan dapat diakses oleh setiap objek yang dibuat dari class tersebut.

**Contoh Atribut:**

```python
class Karyawan:
    def __init__(self, nama, jabatan, gaji):
        self.nama = nama
        self.jabatan = jabatan
        self.gaji = gaji

karyawan1 = Karyawan("Adi", "Manajer", 10000000)
print(karyawan1.nama)
```

### b. Enkapsulasi Atribut

- Atribut dapat dibuat **private** untuk membatasi akses dari luar class dengan menggunakan tanda `__` sebelum nama atribut.

**Contoh Enkapsulasi:**

```python
class AkunBank:
    def __init__(self, nama_pemilik, saldo_awal):
        self.nama_pemilik = nama_pemilik
        self.__saldo = saldo_awal

    def cek_saldo(self):
        return self.__saldo

akun = AkunBank("Nona", 5000000)
print(akun.cek_saldo())  # Output: 5000000
```

---

## 3. Method (Metode)

### a. Apa itu Method?

- **Method** adalah fungsi yang didefinisikan di dalam class dan dapat diakses oleh objek.
- Method digunakan untuk memberikan **perilaku** pada objek.

**Contoh Method:**

```python
class Mesin:
    def nyalakan(self):
        print("Mesin dinyalakan.")

mesin1 = Mesin()
mesin1.nyalakan()
```

### b. Method `__init__`

- Method `__init__` adalah constructor yang secara otomatis dipanggil ketika objek dibuat.
- Digunakan untuk menginisialisasi atribut objek.

**Contoh Penggunaan `__init__`:**

```python
class Pengguna:
    def __init__(self, username, email):
        self.username = username
        self.email = email

pengguna1 = Pengguna("NonaCantik", "nona@example.com")
print(pengguna1.username)
```

---

## 4. Kelebihan Object-Oriented Programming

### a. Modularitas

- OOP memungkinkan kode dibagi menjadi bagian-bagian kecil (modul) yang mudah dipelihara dan diperbarui.

### b. Reusability (Dapat Digunakan Kembali)

- Kelas yang telah dibuat dapat digunakan kembali di berbagai proyek tanpa perlu menulis ulang kode.

### c. Abstraksi Data

- Dengan OOP, kita dapat menyembunyikan detail implementasi dan hanya menampilkan informasi yang penting kepada pengguna.

### d. Maintainability (Pemeliharaan)

- Kode yang ditulis dengan OOP lebih mudah dipelihara, terutama untuk proyek besar.

---

## 5. Contoh Studi Kasus: Sistem Perpustakaan

Kita dapat menggunakan OOP untuk membangun sistem perpustakaan sederhana:

```python
class Buku:
    def __init__(self, judul, penulis, stok):
        self.judul = judul
        self.penulis = penulis
        self.stok = stok

    def pinjam_buku(self):
        if self.stok > 0:
            self.stok -= 1
            print(f"Buku '{self.judul}' berhasil dipinjam.")
        else:
            print("Maaf, stok habis.")

buku1 = Buku("Belajar Python", "Nona", 3)
buku1.pinjam_buku()
buku1.pinjam_buku()
buku1.pinjam_buku()
buku1.pinjam_buku()  # Stok habis
```

---

## 📚 Referensi Tambahan

- [Python Official Documentation](https://docs.python.org/3/tutorial/classes.html)
- [Real Python - OOP Guide](https://realpython.com/python3-object-oriented-programming/)
