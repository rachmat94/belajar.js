/* ANGKA
# angka tanpa desimal
- contoh: 10, 1500, 123456
- akurat sampai 15 digit

# angka dengan desimal
- menggunakan tanda titik bukan koma
- contoh: 3.14, 0.5, 100.00 
- penghitungan bilangan pecahan karena hasilnya tidak akurat

# eksponen
- contoh: 
-- 123e5 = 12300000
-- 123e-5 = 0.00123

# bilangan negatif
- contoh: -52

# jangan pernah mengawali angka pada javascript dengan 0 
    karena hasilnya tidak sesuai dengan yang kita harapkan
- contoh:
-- 022 = 18 -> akan dianggap sebagai bilangan oktal bukan bilangan desimal

# angka yang diawali dengan 0x akan dianggap bilangan hexadesimal
- contoh: 0xFF = 255 

# angka spesial
1. Infinity             | 2/0 = Infinity
2. -Infinity            | -2/0 = -Infinity
3. NaN (Not a Number)   | 0/0 = NaN     | 100/"apel" = NaN

# angka yang berada di dalam tanda kutip akan dianggap sebagai angka
- contoh: 100/"100" = 10

# Tipe data String
TIpe data string dalam javascript digunakan untuk merepresentasikan 
data tekstual / plain teks

gunakan tanda kutip dua " atau kutip satu ' jika ingin membuat string
- contoh:
-- "Javascript"
-- 'Javascript'
-- "Hari ini adalah hari Jum'at"
-- 'Kami sedang mengadakan kegiatan "Gerakan Pungut Sampah"'

- escape character: berfungsi untuk menampilkan sebuah karakter
    yang diinterpretasikan berbeda dalam sebuah bahasa pemrograman
    gunakan tanda \ -> \" , \'
- contoh:
-- '"Gerakan Pungut sampah" dilaksanakan pada hari Jum\'at'
-- "\"Gerakan pungut sampah\" dilaksanakan pada hari jum'at"

* escape character pada javascript:
\0      -> karakter NULL
\'      -> '
\"      -> "
\\      -> \
\n      -> new line / baris baru
\t      -> tab
\b      -> backspace
\uXXXX  -> unicode                  -> \u00A9 = simbol copyright

* concatenation / konkatenasi (+)
* untuk menghitung panjang dari sebuah string gunakan fungsi (.length)
- contoh:
-- "Javascript".length = 10





*/
