---
title: Contoh Implementasi Enkapsulasi - Class BankAccount
---

# 💰 Studi Kasus: Implementasi Enkapsulasi dengan `BankAccount`

## Studi Kasus: Sistem Bank Sederhana

Mari kita membuat sebuah class `BankAccount` yang menerapkan konsep **enkapsulasi** untuk mengelola saldo akun bank.

### Kode Implementasi

```python
class BankAccount:
    def __init__(self, pemilik, saldo_awal):
        self.pemilik = pemilik
        self.__saldo = saldo_awal  # Atribut private

    def cek_saldo(self):
        # Mengembalikan saldo saat ini
        return self.__saldo

    def deposit(self, jumlah):
        # Menambah saldo jika jumlah lebih dari 0
        if jumlah > 0:
            self.__saldo += jumlah
            print(f"Deposit sebesar {jumlah} berhasil.")
        else:
            print("Jumlah deposit harus lebih dari 0.")

    def tarik(self, jumlah):
        # Mengurangi saldo jika mencukupi
        if jumlah > self.__saldo:
            print("Saldo tidak mencukupi.")
        else:
            self.__saldo -= jumlah
            print(f"Penarikan sebesar {jumlah} berhasil.")
```

### Cara Menggunakan Class `BankAccount`

```python
akun = BankAccount("Nona", 1000000)
print(f"Saldo awal: {akun.cek_saldo()}")
akun.deposit(500000)
akun.tarik(300000)
print(f"Saldo akhir: {akun.cek_saldo()}")
```

### Penjelasan Kode

1. **Atribut `__saldo`** disembunyikan agar tidak bisa diakses langsung dari luar.
2. Metode seperti **`cek_saldo()`**, **`deposit()`**, dan **`tarik()`** digunakan untuk mengontrol akses ke saldo dengan aman.
3. Pengguna tidak bisa mengakses saldo secara langsung:
   ```python
   print(akun.__saldo)  # Akan menghasilkan error
   ```

**Output yang Diharapkan:**

```
Saldo awal: 1000000
Deposit sebesar 500000 berhasil.
Penarikan sebesar 300000 berhasil.
Saldo akhir: 1200000
```

---

## Kesimpulan

Dengan menggunakan enkapsulasi, kita dapat memastikan data sensitif seperti saldo bank hanya dapat diakses melalui metode yang sah. Ini meningkatkan keamanan dan stabilitas aplikasi.

---
