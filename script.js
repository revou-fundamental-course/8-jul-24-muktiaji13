function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; 
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }
    // Untuk Menghitung Hasil BMI
    var bmiValue = weight / (height * height);
    // Untuk Mengisi Kategori
    var bmiCategory = '';
    // Pesan
    var bmiMessage = '';
    // Jangkauan Nilai BMI
    var bmiRange = '';
    // Catatan
    var bmiNote = 'BMI tidak sempurna sebagai alat untuk menilai kesehatan tubuh dan risiko penyakit seseorang. Anda bisa berkonsultasi lebih lanjut dengan dokter mengenai kondisi kesehatan Anda dengan melakukan pemeriksaan yang lebih mendalam.';

    // Hasil Kategori, Pesan, dan Jangkauan Nilai Dari Penggunaan If Else ke Value 
    if (bmiValue < 18.5) {
        bmiCategory = 'Berat Badan Kurang';
        bmiMessage = 'Kamu memiliki berat badan kurang';
        bmiRange = 'Hasil BMI kurang dari 18.5';
    } else if (bmiValue < 24.9) {
        bmiCategory = 'Berat Badan Normal';
        bmiMessage = 'Kamu memiliki berat badan normal';
        bmiRange = 'Hasil BMI diantara 18.5 dan 24.9';
    } else if (bmiValue < 29.9) {
        bmiCategory = 'Berat Badan Lebih';
        bmiMessage = 'Kamu memiliki berat badan berlebih';
        bmiRange = 'Hasil BMI diantara 25 dan 29.9';
    } else {
        bmiCategory = 'Obesitas';
        bmiMessage = 'Kamu memiliki obesitas';
        bmiRange = 'Hasil BMI 30 atau lebih';
    }
    // Untuk Menampilkan Nilai ke Hasil
    document.getElementById('resultHeader').innerText = bmiCategory;
    document.getElementById('bmiValue').innerText = bmiValue.toFixed(1);
    document.getElementById('bmiMessage').innerText = bmiMessage;
    document.getElementById('bmiRange').innerText = bmiRange;
    document.getElementById('bmiNote').innerText = bmiNote;
    document.getElementById('result').style.display = 'block';
}
// Fungsi Reset
function resetForm() {
    // Untuk Mereset Nilai Umur, Tinggi, dan Berat
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    
    // Untuk Membatalkan Pemilihan Gender
    var genderButtons = document.querySelectorAll('input[name="gender"]');
    genderButtons.forEach(function(button) {
        button.checked = false;
    });
}