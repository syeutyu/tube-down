import { ConvertMediaService, MediaType } from "./ffmpeg";
import { YoutubeCrawler } from "./youtube";

export async function download(videoId: string, options?: { type: MediaType }) {
  const naming = YoutubeCrawler.downloadYoutubeVideo(videoId);
  if (options && options.type) {
    const result = await new ConvertMediaService(naming).convert(options.type);
    console.log(result);
  }

  console.log("end");
}
