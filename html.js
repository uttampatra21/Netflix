const body = document.querySelector(`body`);

const bodyElem = () =>{
    const data = document.createElement('div');
    data.classList.add('data');
    data.innerHTML = `
    <header>
        <div class="overlay"></div>
        <nav>
            <div class="logo">
                <img src="logo.png">
            </div>
            <div class="log-detl">
                <div class="language">
                    <select name="language" id="">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
                <div class="log-in-out">
                    <a href="#">Sign Out</a>
                </div>
            </div>
        </nav>
        <div class="home">
            <h2>Welcome back!</h2>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <a href="#">Finish Sign Up</a>
        </div>
    </header>

    <div class="tv">
        <div class="text">
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div class="player">
            <div class="tv">
                <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4">
                </video>
            </div>
        </div>
    </div>


    <div class="movies">
        <div class="form">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input id="search" type="text" placeholder="Search Letest Movies"> 
        </div>
        <div class="container">
        </div>
    </div>


   <div class="download">
    <div class="box-1">
        <box class="download-img">
            <div class="image-one">
                <img src="img-one.jpg" alt="">
            </div>
        </box>
    </div>
    <div class="box-2">
        <h1>Download your shows to watch offline.</h1>
        <p>Save your favourites easily and always have something to watch.</p>
    </div>
   </div>


   <div class="children">
    <div class="children-img">
        <img src="children.png">
    </div>
    <div class="about-children">
        <h1>Create profiles for children.</h1>
        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
    </div>
   </div>


   <footer>
    <div class="contact">
       <span>Questions? Call </span><a class="number" href="#">000-800-919-1694</a>
    </div>
    <div class="col-4">
        <div class="col-1">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
                <li class="language">
                    <select name="" id="">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </li>
                <li><a href="#">Netflix India</li>
            </ul>
        </div>
        <div class="col-1">
            <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
        </div>
        <div class="col-1">
            <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
        </div>
        <div class="col-1">
            <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li> 
            </ul>
        </div>
    </div>
   </footer>
    `
    body.appendChild(data);
}
bodyElem();