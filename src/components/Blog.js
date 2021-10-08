import React from "react";
import '../css/Blog.css';


function Blog(){
    return(
        <div>
             <div class="main">
        <div class="card">
            <div class="post">
                <img class="post-image" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                
                    <div class="post-content">
                        <p class="post-header"> <a href="#">Lorem Ipsum</a> </p>
                        <p class="post-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
                        </p>
                        <div class="author">
                        <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
                        <div class="author-content">
                            <p class="author-name">Özgür Kurucan</p>
                            <p class="date">Jun 20, 2020</p>
                        </div>
                    </div>
            </div>
        
        </div>
    </div>



  <div class="card">
    <div class="post">
      <img  style={{float:"right",marginRight:"15px"}} class="post-image" src="https://images.unsplash.com/photo-1574103188526-4faaa363a358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
      
      <div class="post-content">
        <p class="post-header"> <a href="#">Lorem Ipsum</a> </p>
        <p class="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
        </p>
        <div class="author">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
          <div class="author-content">
            <p class="author-name">Özgür Kurucan</p>
            <p class="date">Jun 20, 2020</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>





  <div class="card">
    <div class="post">
      <img class="post-image" src="https://images.unsplash.com/photo-1558435186-d31d126391fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
      
      <div class="post-content">
        <p class="post-header"> <a href="#"> Lorem Ipsum</a> </p>
        <p class="post-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam!
        </p>
        <div class="author">
          <img src="https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80" alt="" class="author-image" />
          <div class="author-content">
            <p class="author-name">Özgür Kurucan</p>
            <p class="date">Jun 20, 2020</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

        </div> 
    );
}

export default Blog;