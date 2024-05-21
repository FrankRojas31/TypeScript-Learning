
interface audioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const AudioPlayer: audioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Kiss",
    details: {
        author: "Emma",
        year: 2024
    }
}
 
const { song:anotherSong} = AudioPlayer;
const { author: Author } = AudioPlayer.details;

// console.log("Song", anotherSong);
//console.log("Author", Author )


const [ , , Trunks = "NotFound" ]: string[] = ["Goku", "Vegetta", "Trunks"];


console.log(Trunks);

export {}