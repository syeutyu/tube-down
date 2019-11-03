import Axios from "axios";
import * as fs from "fs";
import * as http from "https";

(async (videoId: string) => {
  const { status, data } = await Axios.get(`https://www.youtube.com/get_video_info?video_id=${videoId};ytplayer.config={(.*?)};`);
  if (status !== 200) {
    throw new Error("Youtube video api status code is not 200");
  }
  const response = data as string;

  const test = response.split("&").reduce((p, c) => {
    const [k, v] = c.split("=");
    p[k] = ((t) => {
      let te: string;
      do {
        te = t;

        t = decodeURIComponent(t);
      } while (te !== t);

      return te;
    })(v);

    return p;
  }, {} as { [key: string]: string });

  fs.writeFileSync("a4.json", JSON.stringify(test));

  let result: string;
  do {
    result = test.url_encoded_fmt_stream_map;

    test.url_encoded_fmt_stream_map = decodeURIComponent(test.url_encoded_fmt_stream_map);
  } while (result !== test.url_encoded_fmt_stream_map);
  fs.writeFileSync("a3.txt", JSON.stringify(result));

  const url = result.split("url=")[1];
  fs.writeFileSync("a1.txt", JSON.stringify(result.split("url=")));

  // return new Promise((resolve, reject) => {
  //   http.get(url, (r) => {
  //     r.pipe(video);
  //     video.on("close", () => {
  //       video.close();
  //       resolve();
  //     });
  //   });
  // });

  console.log(url);
  fs.writeFileSync("b1.txt", url.split(";")[0]);

  // const re = await Axios.get(url.split(";")[0], { responseType: "arraybuffer"});

  // console.log(re.data);
  // fs.writeFileSync("a.mp4", re.data)
})("ncldjPFjoAE").then(console.log, console.log);
// 8UVNT4wvIGY s있음
// z21nwkWqmEU 기본으로 sig제공
// yN7wrzXtIWM o