/*  */

const mainContentArea = document.querySelector("#main");
const userInfoArea = document.querySelector("#userInfo");
const { myAccount, newsfeed } = newsfeedContent;

function handleLike(el) {
  if (el.classList.contains("on")) {
    el.classList.remove("on");
  } else {
    el.classList.add("on");
  }
}

userInfoArea.innerHTML = `
<a href="/${myAccount.username}">
<img src="${myAccount.profileImg}" alt="${myAccount.firstName} ${myAccount.lastName}" />
</a>
<div>
<a href="/${myAccount.username}" class="user-name">${myAccount.firstName} ${myAccount.lastName}</a>
<a href="/${myAccount.username}" class="job-filter">${myAccount.username}</a>  
</div>`;

mainContentArea.innerHTML = ``;
newsfeed.length > 0 &&
  newsfeed.map((article, index) => {
    mainContentArea.innerHTML += `<article data-key="${index} class="generated_class_${index}">
    <div class="avatar">
      <a href="/${article.author.username}"><img src="${
      article.author.profileImg
    }" alt="${article.author.username}"/></a>
    </div>
    <div class="post">
      <div class="top_header">
        <div class="post-user-info">
          <p>${article.author.firstName} ${article.author.lastName}</p>
          <span>${article.author.postDate}</span>
          <i class="fa fa-circle"></i>
          <span> status </span>
        </div>
        <div class="menu">
          <i class="fa fa-ellipsis-v"> </i>
          <div class="dropdown">
            <ul>
              <li><a href="#">Save</a></li>
              <li><a href="#">Remove from feed</a></li>
              <li><a href="#">Report</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="post-content">
        <!-- content -->
        ${
          article.content.images.length > 0
            ? article.content.images
                .map(
                  (image, index) =>
                    `<img src="${image}" data-key="${index}" alt="climate" />`
                )
                .join("")
            : ""
        }
        ${
          article.content.videos.length > 0
            ? article.content.videos
                .map(
                  (video, index) => `
              <video autoplay controls loop muted data-key="${index}">
          <source
            src="${video}" type="video/mp4"/>
          HTML5 video not supported
        </video>
              `
                )
                .join("")
            : ""
        }
        ${article.content.text !== "" ? `<p>${article.content.text}</p>` : ""}
        
      </div>
      <div class="interactibles">
        <div class="buttons">
          <a href="#/" class="" onclick="handleLike(this)"><i class="fa fa-eye"></i> <span>Seen ${
            article.metadata.likes > 0 ? article.metadata.likes : ""
          }</span></a> 
          <a href="#/" class="" onclick="handleLike(this)><i class="fa fa-walkie-talkie"></i>
            <span>Talk ${
              article.metadata.comments.length > 0
                ? article.metadata.comments.length
                : ""
            }</span>
          </a>
          <a href="#/" class="" onclick="handleLike(this)><i class="fa fa-seedling"></i><span>Share${
            article.metadata.shares > 0 ? "s" : ""
          }
          ${article.metadata.shares > 0 ? article.metadata.shares : ""}
          </span></a>
        </div>
        <div class="comments">
          <div class="new-comment">
            <a href="#"
              ><img src="https://source.unsplash.com/80x80"
            /></a>
            <textarea placeholder="Leave a comment"></textarea>
          </div>
          ${
            article.metadata.comments.length > 0
              ? article.metadata.comments.map(
                  (comment, i) => `<div class="all-comments" data-key="${i}">
            <a href="#"
              ><img src="${comment.author.profileImg}"
              alt="${comment.author.firstName} ${comment.author.lastName}"
            /></a>
            <div class="comment-content">
              <p>${comment.author.firstName} ${comment.author.lastName}</p>
              <p>
                ${comment.content}
              </p>
            </div>
          </div>`
                )
              : ""
          }



          



        </div>

      </div>
    </div>
    </article>`;
  });
