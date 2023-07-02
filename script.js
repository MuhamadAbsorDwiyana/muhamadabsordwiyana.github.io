fetch('data_mahasiswa.json')
  .then(response => response.json())
  .then(data => {
    let mahasiswa = data.mahasiswa;
    let tableBody = document.getElementById('mahasiswa-body');

    // Fungsi untuk menampilkan data mahasiswa dalam tabel
    function tampilkanMahasiswa() {
      tableBody.innerHTML = ''; // Menghapus konten tabel sebelum menambahkan data baru

      mahasiswa.forEach(mhs => {
        let row = document.createElement('tr');
        let namaCell = document.createElement('td');
        let kelasCell = document.createElement('td');
        let ipkCell = document.createElement('td');

        namaCell.textContent = mhs.nama;
        kelasCell.textContent = mhs.kelas;
        ipkCell.textContent = mhs.ipk;

        row.appendChild(namaCell);
        row.appendChild(kelasCell);
        row.appendChild(ipkCell);

        tableBody.appendChild(row);
      });
    }

    // Mengonversi data JSON ke dalam format string sebelum menampilkan
    data = JSON.stringify(data);
    data = JSON.parse(data);

    mahasiswa = data.mahasiswa;
    tampilkanMahasiswa();
  })
  .catch(error => console.error(error));
