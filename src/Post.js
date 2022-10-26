import { Link } from "react-router-dom";
import React from "react";
import "./post.css"

const Post =({img})=>{
    return(
        <div className="post">
            <img className="postImg"  src={img}/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                       Music
                    </span>
                    <span className="postCat">
                            Life
                    </span>
                    </div>
                    <span className="postTitle">
                    <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
                    </span>
                     <hr />
                     <span className="postDate">
                             1 hour ago
                     </span>
                     <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
               

            </div>
        </div>
    )
}
export default Post;