const lyricsForm = document.getElementById("lyricsForm");
const songNameInput = document.getElementById("songNameInput");
const artistNameInput = document.getElementById("artistNameInput");
const lyricsResult = document.getElementById("lyricsResult");

const API_KEY = "75627636ad89daf753a7bb0168a255c1";

lyricsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const songName = songNameInput.value.trim();
  const artistName = artistNameInput.value.trim();

  try {
    const lyrics = await getLyrics(songName, artistName);
    displayLyrics(lyrics);
  } catch (error) {
    console.error("Error fetching lyrics:", error.message);
    displayError("Lyrics not found. Please check the song and artist names.");
  }
});

async function getLyrics(songName, artistName) {
  const apiUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${API_KEY}&q_track=${encodeURIComponent(songName)}&q_artist=${encodeURIComponent(artistName)}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.message.body && data.message.body.lyrics) {
    return data.message.body.lyrics.lyrics_body;
  } else {
    throw new Error("Lyrics not found");
  }
}

function displayLyrics(lyrics) {
  lyricsResult.innerHTML = `<pre>${lyrics}</pre>`;
}

function displayError(message) {
  lyricsResult.innerHTML = `<p class="error">${message}</p>`;
}
