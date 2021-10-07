{
  // pick과는 다르게 원하는 것을 배는것
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    };
  }

  type VideoMetadata = Omit<Video, 'url' | 'data'| '없는것도 되지롱'>

  function getVideoMetadata(id: string): VideoMetadata{
    return {
      id: id,
      title: 'title',
    };
  }
}