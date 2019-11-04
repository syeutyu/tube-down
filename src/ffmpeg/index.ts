import Ffmpeg from "fluent-ffmpeg";

export enum MediaType {
  MP3 = "mp3"
}

export class ConvertMediaService {
  private command: Ffmpeg.FfmpegCommand;

  constructor(path: string) {
    this.command = Ffmpeg(`./${path}`);
  }

  public convert(type: MediaType) {
    return new Promise((resolve, reject) => {
      try {
        this.command
          .toFormat(type)
          .output(`${Date.now()}.${type}`)
          .run();
      } catch (error) {
        reject(error);
      }
    });
  }
}
