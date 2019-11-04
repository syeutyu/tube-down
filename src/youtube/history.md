# History
 youtube downalod를 하던중 url_encoded_fmt_stream_map을 이용해서 해당 유튜브에서 제공하는 google video url을 통해서 파싱을 하려고했는데
 해당하는 video의 url을 추출하는데 까지는 성공했다
 그런데 해당하는 video에 get 요청을 하니깐 성공을 하는경우  
 403 forbidden이 뜨는 경우가 있었는데 이를 해결해보려고 [stack over flow](https://stackoverflow.com/questions/21496126/android-youtube-download-url-403-forbidden)에서 찾아보니깐
 클라이언트에서 sig값을 맞춰서 403을 풀어야 한다고 한다

 그래서 client의 js값을 일일이 찾아본결과 다음과 같이 string을 convert하는 코드를 찾아서 sig값을 맞춰 보았지만...
 결과는 실패 했기에 일단은 ytdl-core을 이용해서 download하고 그 다음 방안을 찾아보려고 한다
