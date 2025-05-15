const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Soal 1
let nama = "";
let peran = "";

console.log("\nSoal 1:");

readline.question("Masukkan nama: ", (inputNama) => {
    nama = inputNama;

    readline.question("Masukkan peran: ", (inputPeran) => {
        peran = inputPeran;

        if (nama === "") {
            console.log("nama wajib diisi");
        } else if (peran === "") {
            console.log("Pilih Peranmu untuk memulai game");
        } else {
            let peranLower = peran.toLowerCase();
            if (peranLower === "ksatria") {
                console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
            } else if (peranLower === "tabib") {
                console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
            } else if (peranLower === "penyihir") {
                console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            } else {
                console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
            }
        }

        // Soal 2
        console.log("\nSoal 2:");

        readline.question("Masukkan tanggal (1-31): ", (inputTanggal) => {
            let tanggal = parseInt(inputTanggal);

            readline.question("Masukkan bulan (1-12): ", (inputBulan) => {
                let bulan = parseInt(inputBulan);

                readline.question("Masukkan tahun (contoh: 2001): ", (inputTahun) => {
                    let tahun = parseInt(inputTahun);

                    let namaBulan;

                    switch (bulan) {
                        case 1:
                            namaBulan = "Januari";
                            break;
                        case 2:
                            namaBulan = "Februari";
                            break;
                        case 3:
                            namaBulan = "Maret";
                            break;
                        case 4:
                            namaBulan = "April";
                            break;
                        case 5:
                            namaBulan = "Mei";
                            break;
                        case 6:
                            namaBulan = "Juni";
                            break;
                        case 7:
                            namaBulan = "Juli";
                            break;
                        case 8:
                            namaBulan = "Agustus";
                            break;
                        case 9:
                            namaBulan = "September";
                            break;
                        case 10:
                            namaBulan = "Oktober";
                            break;
                        case 11:
                            namaBulan = "November";
                            break;
                        case 12:
                            namaBulan = "Desember";
                            break;
                        default:
                            console.log("Bulan tidak valid");
                            namaBulan = "";
                    }

                    if (namaBulan && tanggal >= 1 && tanggal <= 31 && tahun > 0) {
                        console.log(`${tanggal} ${namaBulan} ${tahun}\n`);
                    } else {
                        console.log("Tanggal, bulan, atau tahun tidak valid\n");
                    }

                    readline.close();
                });
            });
        });
    });
});
