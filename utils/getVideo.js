const getVideo = (videoLink) => {
  const videoKey = videoLink.asset._ref
    .replace(/file-/, '')
    .replace(/-mp4/, '.mp4');
  const imgSrc = `https://cdn.sanity.io/files/62zsqe1r/production/${videoKey}`;
  return imgSrc;
}

export default getVideo;