import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.dailymail.co.uk/1s/2019/01/07/10/8218450-6564651-image-m-33_1546856935221.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">LOD</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ................................
          ...................................lorem Lorem
          ................................
          ...................................lorem Lorem
          ................................
          ...................................lorem Lorem
          ................................
          ...................................loremdlsadlasdlasldasldlsaldlasldlsdll
        </p>
      </div>
    </div>
  );
};

export default Post;
