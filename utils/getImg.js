const getImg = (imgLink) => {
  const imgKey = imgLink.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '.jpg')
    .replace(/-png/, '.png')
    .replace(/-svg/, '.svg');
  const imgSrc = `https://cdn.sanity.io/images/62zsqe1r/production/${imgKey}`;
  return imgSrc;
}

export default getImg;