import * as fs from "fs";
import ytdl from "ytdl-core";

export class YoutubeCrawler {
  public static downloadYoutubeVideo(videoId: string) {
    const videoName = `${Date.now()}.mp4`;

    const video = ytdl(`https://www.youtube.com/watch?v=${videoId}`);
    video.pipe(fs.createWriteStream(videoName));

    return videoName;
  }

  // private static getUrlEncodedFmtStreaMap(response: string) {
  //   const metadata = response.split("&").reduce((p, c) => {
  //     const [ k, v ] = c.split("=");

  //     p[k] = ((t) => {
  //       let temp: string;

  //       do {
  //         temp = t;
  //         t = decodeURIComponent(t);
  //       } while (temp !== t);

  //       return temp;
  //     })(v);

  //     return p;
  //   }, {} as { [key: string]: string });

  //   let result: string;
  //   do {
  //     result = metadata.url_encoded_fmt_stream_map;

  //     metadata.url_encoded_fmt_stream_map = decodeURIComponent(metadata.url_encoded_fmt_stream_map);
  //   } while (result !== metadata.url_encoded_fmt_stream_map);

  //   return result.split("url=").map((c) => {
  //     if (c.indexOf("type=video/mp4") !== -1 ) {
  //       return c.split(`"`)[0];
  //     }
  //   }).filter((r) => !!r).map((c) => c!);
  // }
}
