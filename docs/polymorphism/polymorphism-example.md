---
title: Contoh Implementasi Polymorphism
---

# 💼 Studi Kasus: Polymorphism dengan Class Pegawai, Manajer, dan Staf

## Studi Kasus: Sistem Kepegawaian

Dalam sistem kepegawaian ini, kita akan menerapkan **polimorfisme** untuk menggambarkan berbagai pekerjaan yang dilakukan oleh pegawai. Semua pegawai memiliki metode `pekerjaan()`, tetapi tugas mereka berbeda tergantung pada peran masing-masing.

### Kode Implementasi

```python
class Pegawai:
    def __init__(self, nama):
        self.nama = nama

    def pekerjaan(self):
        print(f"{self.nama} melakukan pekerjaan umum sebagai pegawai")

class Manajer(Pegawai):
    def pekerjaan(self):
        print(f"{self.nama} mengelola tim dan proyek")

class Staf(Pegawai):
    def pekerjaan(self):
        print(f"{self.nama} mengerjakan tugas harian")

# Fungsi yang menerapkan polimorfisme
def deskripsi_pekerjaan(pegawai):
    pegawai.pekerjaan()
```

### Cara Menggunakan Class `Pegawai`, `Manajer`, dan `Staf`

```python
# Membuat objek dari berbagai class
pegawai1 = Pegawai("Budi")
manajer1 = Manajer("Ani")
staf1 = Staf("Doni")

# Polimorfisme melalui fungsi deskripsi_pekerjaan
deskripsi_pekerjaan(pegawai1)  # Output: Budi melakukan pekerjaan umum sebagai pegawai
deskripsi_pekerjaan(manajer1)  # Output: Ani mengelola tim dan proyek
deskripsi_pekerjaan(staf1)     # Output: Doni mengerjakan tugas harian
```

### Penjelasan Kode

1. **Class `Pegawai`** adalah class induk dengan metode `pekerjaan()` yang memberikan gambaran umum pekerjaan pegawai.
2. **Class `Manajer`** dan **`Staf`** meng-override metode `pekerjaan()` dengan tugas khusus mereka.
3. Fungsi `deskripsi_pekerjaan()` menunjukkan polimorfisme dengan memanggil metode `pekerjaan()` pada setiap objek `pegawai`, `manajer`, dan `staf`, meskipun mereka berasal dari class yang berbeda.

**Output yang Diharapkan:**

```
Budi melakukan pekerjaan umum sebagai pegawai
Ani mengelola tim dan proyek
Doni mengerjakan tugas harian
```

### Kesimpulan

Polymorphism memungkinkan kita untuk menggunakan metode dengan nama yang sama pada objek-objek yang berbeda, tetapi dengan perilaku yang spesifik pada setiap class. Dengan contoh ini, kita bisa melihat bagaimana `pekerjaan()` menampilkan deskripsi yang berbeda tergantung pada peran pegawai.

---
