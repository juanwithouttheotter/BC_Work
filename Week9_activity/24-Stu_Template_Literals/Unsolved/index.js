const music = {
  song: "We Intertwined",
  album: "Like Vines",
  artist: "The Hush Sound"
  // code here
};

// write code between the <div> tags to output the data from the music object above
const songSnippet = `
  <div class="song">
    <div>"${music.song}" by <u>${music.artist}</u> from their album ${music.album}</div> 

  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
