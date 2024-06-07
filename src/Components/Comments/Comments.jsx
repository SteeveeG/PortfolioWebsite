import React, { Component } from "react";
import CommentsCss from './Comments.module.css'
import "../../Pages/Home.css"


class Comments extends Component {
     state = {}
     render() {
            const {comment , fontfam , commentdivName} = this.props;
          return (
               <div className={commentdivName}>
                    <p className={CommentsCss.Comment} style={{fontFamily: fontfam}}>{comment}</p>
               </div>
          );
     }
}

export default Comments;


