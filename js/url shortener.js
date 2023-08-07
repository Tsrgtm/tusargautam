const response = {
  message: {
    header: {
      status_code: 200,
      execute_time: 0.095530033111572,
    },
    body: {
      lyrics: {
        lyrics_id: 22968037,
        explicit: 0,
        lyrics_body: "These are the lyrics of the song.",
        script_tracking_url: "",
        pixel_tracking_url: "",
        lyrics_copyright: "",
        updated_time: "2020-07-28T09:46:43Z",
      },
    },
  },
};

// Function to extract lyrics from the response
function getLyricsFromResponse(response) {
  // Check if the response contains lyrics data
  if (
    response &&
    response.message &&
    response.message.body &&
    response.message.body.lyrics
  ) {
    // Extract the lyrics from the response
    const lyrics = response.message.body.lyrics.lyrics_body;
    return lyrics.trim(); // Trim whitespace from the lyrics
  } else {
    // Return an error message or handle the absence of lyrics data
    return "Lyrics not found.";
  }
}

// Example usage
const lyrics = getLyricsFromResponse(response);
console.log(lyrics); // Output: "These are the lyrics of the song."
