import styles from "./BlogPost.module.scss";
import getImg from '../../../../utils/getImg';
import YoutubeEmbed from '../../../../components/YoutubeEmbed/YoutubeEmbed';

const BlogPost = ({ data, slug }) => {
  const { latestPosts } = data;
  const currentPage = slug.split('-')[1];
  const {latestPostsImageCover, latestPostsTitle, latestPostsDate, latestPostsText} = latestPosts[currentPage];

  const video = latestPosts[currentPage].latestPostsVideo ? <YoutubeEmbed embedId={latestPosts[currentPage].latestPostsVideo.replace('https://youtu.be/', '')} title="Youtube" /> : '';

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.postPreview}
        style={{
          backgroundImage: `url(${getImg(latestPostsImageCover)})`,
        }}
      />
      <div className="container">
        <div className={styles.inner_container}>          
          <h1 className={styles.postTitle}>{latestPostsTitle}</h1>
          <p className={styles.postDescription}>{latestPostsDate}</p>
          <div className={styles.postDescription}>{latestPostsText}</div>          
        </div>
        <div className={styles.videoContainer}>
          {video}
        </div>
      </div>
    </div>
    );
  };
  
  export default BlogPost;