const toggleBtn = document.getElementById("toggleTheme");
const html = document.documentElement;
const moodButtons = document.querySelectorAll(".mood");
const recSection = document.getElementById("recommendations");
const songsDiv = document.getElementById("songs");

// Theme toggle logic
toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Mood to song list mapping (with clickable links)
const moodSongs = {
  happy: [
    { title: "Happy – Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Love You Zindagi – Dear Zindagi", url: "https://youtu.be/bw7bVpI5VcM?si=tih3MCdQSBOysnW1" },
    { title: "Best Day of My Life – American Authors", url: "https://www.youtube.com/watch?v=Y66j_BUCBMY" },
    { title: "Ude Dil Befikre – Befikre", url: "https://youtu.be/ymDzNv_-hzI?si=SCZRSv6j7-kDfrEG"}
  ],
  sad: [
    { title: "Someone Like You – Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "Let Her Go – Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
    { title: "Channa Mereya – Ae Dil Hai Mushkil", url: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
    { title: "Jo Bheji Thi Duaa ", url: "https://youtu.be/j3BiIJKBlYE?si=3xSHPN_I_Is-dEkI" },
    { title: "Main Roya – Yasser Desai", url: "https://youtu.be/7Z5E-PcWb18?si=uCZrEImpIYFtcFts" },
    { title: "Tu Hai Kahan – AUR", url: "https://youtu.be/AX6OrbgS8lI?si=XgKvrPe1-ohCzGt1" },
  ],
  energetic: [
    { title: "Believer – Imagine Dragons", url: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
    { title: "Malhari – Bajirao Mastani", url: "https://youtu.be/sRlA7JWTj04?si=MAcH118WhUF44ERX" },
    { title: "Zinda – Bhaag Milkha Bhaag", url: "https://youtu.be/Ax0G_P2dSBw?si=gVYToLcHm-GCvqSo" },
    { title: "Kar Har Maidan Fateh – Sanju", url: "https://youtu.be/9iIX4PBplAY?si=JmRkA2gzZaFj2ULz"}
  ],
  calm: [
    { title: "Weightless – Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
    { title: "River Flows In You – Yiruma", url: "https://www.youtube.com/watch?v=7maJOI3QMu0" },
    { title: "Raabta – Agent Vinod", url: "https://youtu.be/Sqbeoe5UEOM?si=KTGoamQ2EHs9Ws5T" },
    { title: "Majhe Majhe Tobo Dekha Pai", url: "https://youtu.be/XOuc-oVSOnw?si=Q_qxjG6wiwiObjZN" }
  ]
};

// Display songs as hyperlinks when mood button is clicked
moodButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    displaySongs(moodSongs[mood]);
  });
});

// Create clickable song links
function displaySongs(songs) {
  songsDiv.innerHTML = "";
  songs.forEach((song) => {
    const link = document.createElement("a");
    link.href = song.url;
    link.textContent = song.title;
    link.target = "_blank";
    link.className = "song-link";
    songsDiv.appendChild(link);
    songsDiv.appendChild(document.createElement("br"));
  });
  recSection.style.display = "block";
}
