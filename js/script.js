// Ini file javascript

// Cek apakah nama sudah tersimpan di localStorage
window.onload = function () {
    const savedName = localStorage.getItem('userName');
    if (!savedName) {
        document.getElementById("nameModal").style.display = "flex";
    } else {
        updateUserName(savedName);
    }
};

// Fungsi untuk menyimpan nama dan langsung mengubah teks di halaman
function saveName() {
    const userName = document.getElementById("userName").value.trim();
    if (userName !== "") {
        localStorage.setItem('userName', userName);
        document.getElementById("nameModal").style.display = "none";
        updateUserName(userName);
    } else {
        alert("Nama tidak boleh kosong!");
    }
}

// Fungsi untuk memperbarui teks h1 dengan nama pengguna
function updateUserName(name) {
    document.querySelector("#home h1").innerHTML = `Hi ${name}, Welcome to my Portfolio`;
}



let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);

// Function massage
function validateForm(event) {
    event.preventDefault(); // Mencegah form refresh halaman
    
    document.getElementById("result-name").textContent = document.getElementById("name-input").value;
    document.getElementById("result-ttl").textContent = document.getElementById("ttl").value;
    document.getElementById("result-jk").textContent = document.querySelector('input[name="jk"]:checked').value;
    document.getElementById("result-pesan").textContent = document.getElementById("pesan").value;
    
    document.getElementById("messageForm").reset();
}

