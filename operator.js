/*  OPERATOR 
operator dalam javascript adalah sebuah simbol yang digunakan untuk 
melakukan operasi

# operator - operator pada javascript 
1. aritmatika       => operator binary
2. penugasan        => operator binary
3. perbandingan     => operator binary
4. logika           => operator binary
5. string           => operator binary
6. kondisional      => opeartor ternary
7. typeof           => operator unary


# operator binary
sebuah operator yang membutuhkan 2 operand
- contoh : 
-- [operand1] [operator] [operand2]     => 1 + 1

# Operator unary
sebuah operator yang membutuhkan 1 operand
- contoh: 
-- [operator] [operand]
-- [operand] [operator]

# Operator ternary
sebuah operator yang membutuhkan 3 operand


# Operator aritmatika / matematika
+   -> 
-
*
/   -> 10/5 = 2
% = modulus / sisa bagi     -> 10 % 5 = 0

* berlaku operator precedence (Urutan operasi matematika)
KuKaBaTaKu
Kurung Kali Bagi Tambah Kurang
() * / + - 

- contoh: 
-- 1+2*3-4 = 3
-- (1+2) * 3 - 4 = 5 

# Operator Penugasan / assignment 
=                                       -> x = 10
+=      -> x += y   -> x = x + y        -> x += 5
-=      -> x -= y   -> x = x - y        -> x -= 2
*=      -> x *= y   -> x = x * y        -> x *= 3
/=      -> x /= y   -> x = x / y        -> x /= 2
%=      -> x *= y   -> x = x % y        -> x %= 2

# Operator Perbandingan / comparison
untuk membandingkan 2 buah operand
==      -> sama dengan
!=      -> tidak sama dengan
===     -> strict sama dengan (cek tipe data)
!==     -> strict tidak sama dengan (cek tipe data)
>       -> lebih besar dari
<       -> lebih kecil dari
>=      -> lebih besar sama dengan
<=      -> lebih kecil sama dengan

akan menghasilkan nilai boolean 
- true jika benar
- false jika salah

- contoh:
-- 10 == 10 = true
-- 10 != 10 = false
-- 10 != 15 = true
-- 10 == "10" = true
-- 10 === "10" = false

# Operator Logika / logical 
&&  ->  AND 
||  ->  OR
!   ->  NOT

# Operator String
+ ( dalam javascript tanda + memiliki 2 fungsi. jika operand nya 
    berupa anga akan menjadi operator aritmatika, tapi jika operand nya
    berupa string maka akan menjadi operator penggabung string )
- contoh: 
-- "apple" + "pen" = "applepen"
-- "apple" + " " + "pen" = "apple pen"
-- 10 + "10" = "1010"
-- "10" + 10 = "1010"
-- 10 + 10 + "10" = "2010"
-- "10" + 10 + 10 = "101010"

jika angka dengan angka hasilnya angka
jika salah satunya string maka tanda + berubah menjadi operator string

# Operator typeof
operator ini digunakan untuk mengetahui tipe data apa dari nilai 
yang dimasukan

typeof(operand)

- contoh: 
-- typeof(10) = "number"
-- typeof("10") = "string"
-- typeof(true) = "boolean"

# Operator Kondisional
untuk melakukan pengecekan pada sebuah kondisi dan menentukan nilai
yang dihasilkan ketika nilai yg dihasilkan true atau false

(kondisi) ? benar : salah

- contoh: 
-- (x % 2 == 0) ? "genap" : "ganjil"



*/

