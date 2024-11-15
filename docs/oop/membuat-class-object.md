# 📘 Menggunakan Class & Object

## 1. Pengenalan Class dan Object

Dalam pemrograman berorientasi objek (OOP), **class** adalah blueprint atau cetak biru yang digunakan untuk membuat **object**. Class mendefinisikan **atribut** (data) dan **method** (fungsi) yang dapat dimiliki oleh object.

---

## 2. Membuat Class Sederhana

### ✨ Contoh Membuat Class

Di Python, kita dapat membuat class menggunakan kata kunci `class`. Berikut contoh membuat class sederhana bernama `Mahasiswa`:

```python
class Mahasiswa:
    def __init__(self, nama, umur):
        self.nama = nama    # Atribut nama
        self.umur = umur    # Atribut umur

    def perkenalan(self):
        print(f"Halo, nama saya {self.nama} dan saya berumur {self.umur} tahun.")
```

Pada contoh di atas:

- Method `__init__` disebut **constructor** yang digunakan untuk inisialisasi atribut.
- Atribut `nama` dan `umur` digunakan untuk menyimpan data dari object yang dibuat.

---

## 3. Membuat Object dari Sebuah Class

### 🚀 Membuat Object dari Class

Setelah kita membuat class, kita bisa membuat object dari class tersebut. Berikut cara membuat object dan menggunakan method `perkenalan()`:

```python
# Membuat object dari class Mahasiswa
mhs1 = Mahasiswa("Nona", 21)
mhs2 = Mahasiswa("Adi", 22)

# Memanggil method perkenalan
mhs1.perkenalan()
mhs2.perkenalan()
```

**Output:**

```
Halo, nama saya Nona dan saya berumur 21 tahun.
Halo, nama saya Adi dan saya berumur 22 tahun.
```

Pada contoh di atas:

- `mhs1` dan `mhs2` adalah object dari class `Mahasiswa`.
- Method `perkenalan()` dipanggil untuk masing-masing object.

---

## 4. Mengubah dan Mengakses Atribut Objek

Atribut dari object bisa diubah dan diakses seperti berikut:

```python
mhs1.umur = 23  # Mengubah umur
print(mhs1.umur)  # Akses atribut
```

---

## 5. Manfaat Penggunaan Class dan Object

- **Organisasi kode** menjadi lebih terstruktur.
- **Penggunaan kembali** (reusability) kode lebih mudah.
- **Pemeliharaan** kode yang lebih mudah untuk aplikasi yang kompleks.

---

## 📚 Referensi Tambahan

- [Python OOP Documentation](https://docs.python.org/3/tutorial/classes.html)
- [Real Python Guide to OOP](https://realpython.com/)
