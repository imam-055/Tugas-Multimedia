  
/* ================= DATA ================= */
const data = {
  uwoi: {
    title: "Uwoi Wera Meruruno",
    desc: "Air Terjun Uwoi Wera Meruruno merupakan salah satu destinasi wisata alam unggulan yang terletak di Desa Ledu-Ledu, Kecamatan Wasuponda, Kabupaten Luwu Timur dan dikenal dengan alirannya yang bertingkat, debit air yang deras, serta suara gemuruh yang khas. Dikelilingi oleh bebatuan alami dan pepohonan hijau yang masih asri, kawasan ini menawarkan suasana sejuk dan menenangkan, sehingga cocok untuk wisata alam, fotografi, dan bersantai sambil menikmati keindahan alam khas Luwu Timur.",
    images: [
      "assets/img/matabuntu.jpg",
      "assets/img/matabuntu1.jpg",
      "assets/img/matabuntu2.jpg",
      "assets/img/meruruno1.jpg",
      "assets/img/matabuntu4.jpg"
    ],
    video: "assets/video/Meruruno.mp4"
  },
  pantai: {
    title: "Pantai Ide",
    desc: "Pantai Ide merupakan destinasi wisata bahari yang berada di Desa Ide, Kecamatan Malili, Kabupaten Luwu Timur. Pantai ini menawarkan hamparan pasir yang luas, pemandangan laut yang indah, serta suasana pesisir yang tenang dan nyaman. Lingkungan pantai yang masih alami membuat Pantai Ide cocok sebagai tempat rekreasi keluarga, bersantai, maupun menikmati angin laut yang sejuk. Selain itu, keindahan panorama matahari terbenam di Pantai Ide menjadi daya tarik tersendiri bagi wisatawan yang berkunjung.",
    images: [
      "assets/img/pantai ide.jpg",
      "assets/img/pantai ide1.jpg",
      "assets/img/pantai ide2.jpg",
      "assets/img/pantai ide3.jpg",
      "assets/img/pantai ide4.jpg"
    ],
    video: "assets/video/Pantai Ide.mp4"
  },
  pantailemo: {
    title: "Pantai Lemo",
    desc: "Pantai Lemo terletak di Desa Lemo, Kecamatan Burau, Kabupaten Luwu Timur dan merupakan salah satu destinasi wisata alam yang memiliki pesona pesisir yang menawan. Pantai ini dikenal dengan pasirnya yang bersih, ombak yang relatif tenang, serta suasana pantai yang masih asri. Keindahan alam yang dimiliki Pantai Lemo menjadikannya tempat yang cocok untuk bersantai, menikmati pemandangan laut, serta menghabiskan waktu bersama keluarga. Dengan suasana yang tenang dan alami, Pantai Lemo menjadi pilihan wisata yang menarik bagi pengunjung lokal maupun luar daerah.",
    images: [
      "assets/img/pantai-Lemo.jpg",
      "assets/img/pantai Lemo1.jpg",
      "assets/img/pantai Lemo2.jpg",
      "assets/img/pantai Lemo3.jpg",
      "assets/img/pantai Lemo4.jpg"
    ],
    video: "assets/video/Pantai Lemo.mp4"
  },
  kali: {
    title: "Kali Dingin",
    desc: "Kali Dingin merupakan destinasi wisata alam yang terletak di Desa Laro, Kecamatan Malili, Kabupaten Luwu Timur. Tempat wisata ini dikenal dengan aliran sungainya yang jernih dan bersuhu dingin, berasal dari mata air pegunungan di sekitarnya. Suasana alam yang sejuk, pepohonan rindang, serta air yang segar menjadikan Kali Dingin sebagai lokasi favorit untuk bersantai, bermain air, dan melepas penat. Keindahan alam yang masih alami membuat Kali Dingin banyak dikunjungi oleh wisatawan lokal sebagai tempat rekreasi keluarga maupun wisata alam yang menenangkan.",
    images: [
      "assets/img/kali dingin.png",
      "assets/img/Kali Dingin1.jpg",
      "assets/img/Kali Dingin2.jpg",
      "assets/img/Kali-Dingin3.jpg",
      "assets/img/Kali Dingin4.jpg"
    ],
    video: "assets/video/kali Dingin.mp4"
  },
  bulu: {
    title: "Pulau Bulu Poloe",
    desc: "Pulau Bulu Poloe merupakan destinasi wisata bahari yang terletak di Desa Bulu Poloe, Kecamatan Wotu, Kabupaten Luwu Timur. Pulau ini menawarkan keindahan laut yang jernih, panorama alam pesisir yang menawan, serta suasana yang tenang dan masih alami. Keindahan alamnya menjadikan Pulau Bulu Poloe cocok untuk bersantai, menikmati pemandangan laut, berfoto, serta melakukan aktivitas wisata bahari ringan. Dengan lingkungan yang asri dan suasana yang damai, pulau ini menjadi salah satu destinasi menarik bagi wisatawan yang ingin menikmati keindahan alam laut Luwu Timur.",
    images: [
      "assets/img/Bulu poloe.jpg",
      "assets/img/Bulu poloe1.jpg",
      "assets/img/Bulu Poloe 2.jpg",
      "assets/img/Bulu Poloe 3.jpg",
      "assets/img/bulu Poloe 4.jpg"
    ],
    video: "assets/video/pulau bulu poloe.mp4"
  },
  danau: {
    title: "Danau Towuti",
    desc: "Danau Towuti merupakan salah satu destinasi wisata unggulan di Desa Towuti, Kecamatan Towuti, Kabupaten Luwu Timur. Danau ini dikenal sebagai danau terbesar kedua di Indonesia dengan air yang jernih, pemandangan pegunungan di sekitarnya, dan suasana yang tenang. Keindahan alam serta ketenangan lingkungannya menjadikan Danau Towuti cocok untuk bersantai, berperahu, memancing, berfoto, dan menikmati wisata alam bersama keluarga atau teman. Destinasi ini juga menarik bagi wisatawan yang ingin merasakan keindahan alam Luwu Timur secara alami dan autentik.",
    images: [
      "assets/img/Danau-Towuti.png",
      "assets/img/Danau Towuti2.jpg",
      "assets/img/Danau Towuti1.png",
      "assets/img/Danau-Towuti3.jpg",
      "assets/img/Danau-Towuti4.jpg"
    ],
    video: "assets/video/Danau towuti.mp4"
  }
};

let currentSlide = 0;
let slides;

/* ================= CARD APPEAR ================= */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  });
},{threshold:0.2});

cards.forEach(card=>observer.observe(card));

/* ================= OPEN DETAIL (ANIMATED) ================= */
function openDetail(key){
  const list = document.getElementById("list");
  const detail = document.getElementById("detail");

  list.classList.add("hide");

  setTimeout(()=>{
    list.style.display="none";
    detail.style.display="block";
    detail.classList.add("show");
  },400);

  document.getElementById("title").innerText = data[key].title;
  document.getElementById("desc").innerText = data[key].desc;

  // Ambil elemen detail
const detailTitle = document.getElementById("title");
const detailDesc = document.getElementById("desc");

// Reset kelas show supaya animasi bisa dijalankan ulang
detailTitle.classList.remove("show");
detailDesc.classList.remove("show");

// Jalankan animasi dengan delay sedikit agar smooth
setTimeout(()=>{
  detailTitle.classList.add("show");
  detailDesc.classList.add("show");
}, 100); // 100ms delay agar transisi terlihat


  document.getElementById("img1").src = data[key].images[0];
  document.getElementById("img2").src = data[key].images[1];
  document.getElementById("img3").src = data[key].images[2];
  document.getElementById("img4").src = data[key].images[3];
  document.getElementById("img5").src = data[key].images[4];

  const video = document.getElementById("vid");
video.src = data[key].video;
video.muted = true;     // wajib agar autoplay tidak diblokir
video.autoplay = true;
video.playsInline = true; // penting untuk mobile
video.load();

video.play().catch(()=>{}); // fallback browser


  slides = document.querySelectorAll(".slide");
  currentSlide = 0;
  showSlide();
}

/* ================= SLIDER ================= */
function showSlide(){
  slides.forEach((s,i)=>{
    s.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide(){
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

/* ================= BACK (ANIMATED) ================= */
function back(){
  const list = document.getElementById("list");
  const detail = document.getElementById("detail");

  detail.classList.remove("show");

  setTimeout(()=>{
    detail.style.display="none";
    list.style.display="block";
    list.classList.remove("hide");
  },400);

  document.getElementById("vid").pause();
}

// ================= ANIMASI H1 LIST =================
const listTitle = document.querySelector('#list h1');

const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      listTitle.classList.add('active');
    } else {
      listTitle.classList.remove('active');
    }
  });
}, { threshold: 0.3 });

titleObserver.observe(listTitle);

