---
title: Enkapsulasi (Encapsulation) - Dasar dan Akses Modifier
---

# 🔒 Enkapsulasi (Encapsulation) pada Python

## Apa itu Enkapsulasi?

**Enkapsulasi** adalah konsep fundamental dalam **Object-Oriented Programming (OOP)** yang bertujuan untuk melindungi data dari akses yang tidak diinginkan. Enkapsulasi memungkinkan kita menyembunyikan detail implementasi dari pengguna luar dan memberikan kontrol lebih terhadap cara data diakses atau dimodifikasi.

### Mengapa Enkapsulasi Penting?

- **Keamanan Data**: Melindungi data sensitif dari modifikasi yang tidak disengaja.
- **Modularitas**: Memisahkan bagian internal dari class agar lebih mudah dipelihara.
- **Kontrol Akses**: Memungkinkan kita menentukan data mana yang bisa diakses dari luar class.

## Akses Modifier dalam Python

### Public (Akses Terbuka)

Atribut dan metode yang bersifat **public** dapat diakses dari mana saja, baik dari dalam maupun luar class.

```python
class ContohPublic:
    def __init__(self, data):
        self.data = data

obj = ContohPublic("Data Public")
print(obj.data)  # Output: Data Public
```

### Private (Akses Terbatas)

Atribut yang diawali dengan **dua underscore** (`__`) adalah private dan hanya dapat diakses dari dalam class itu sendiri.

```python
class ContohPrivate:
    def __init__(self):
        self.__data = "Data Private"

    def get_data(self):
        return self.__data

obj = ContohPrivate()
print(obj.get_data())  # Output: Data Private
```

### Protected (Akses Terbatas pada Subclass)

Atribut yang diawali dengan **satu underscore** (`_`) bersifat protected dan dapat diakses oleh class dan subclass.

```python
class ContohProtected:
    def __init__(self):
        self._data = "Data Protected"

class Subclass(ContohProtected):
    def tampilkan_data(self):
        print(self._data)

obj = Subclass()
obj.tampilkan_data()  # Output: Data Protected
```

---
