import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({
  apiKey: 'a50335df7c974be0a4587f4b8a7afb65',
});

const FILE_URL = '../file.mp3';

// Request parameters 
const data = {
  audio_url: FILE_URL
}

const run = async () => {
  const transcript = await client.transcripts.create(data);
  console.log(transcript.text);
};

run();
