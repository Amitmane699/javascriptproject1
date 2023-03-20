//alert("Hello");
fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    //console.log(data[29] );
    document.getElementById("profileimage").setAttribute("src",data[29].avatar_url)
    document.getElementById("user").innerText = data[29].login
    document.getElementById("visit").setAttribute("href",data[29].html_url)
    document.getElementById("follower").setAttribute("href", data[29].followers_url);
    document.getElementById("following").setAttribute("href",data[29].following_url    );
    
    //==========
    document.getElementById("profileimage1").setAttribute("src",data[3].avatar_url)
    document.getElementById("user1").innerText = data[3].login
    document.getElementById("visit1").setAttribute("href",data[3].html_url)
    document.getElementById("follower1").setAttribute("href", data[3].followers_url);
    document.getElementById("following1").setAttribute("href",data[3].following_url    );
    
    //========================
    document.getElementById("profileimage2").setAttribute("src",data[4].avatar_url)
    document.getElementById("user2").innerText = data[4].login
    document.getElementById("visit2").setAttribute("href",data[4].html_url)
    document.getElementById("follower2").setAttribute("href", data[4].followers_url);
    document.getElementById("following2").setAttribute("href",data[4].following_url    );

    //========================================
    document.getElementById("profileimage3").setAttribute("src",data[5].avatar_url)
    document.getElementById("user3").innerText = data[5].login
    document.getElementById("visit3").setAttribute("href",data[5].html_url)
    document.getElementById("follower3").setAttribute("href", data[5].followers_url);
    document.getElementById("following3").setAttribute("href",data[5].following_url    );

    //===================================================
    document.getElementById("profileimage4").setAttribute("src",data[7].avatar_url)
    document.getElementById("user4").innerText = data[7].login
    document.getElementById("visit4").setAttribute("href",data[7].html_url)
    document.getElementById("follower4").setAttribute("href", data[7].followers_url);
    document.getElementById("following4").setAttribute("href",data[7].following_url    );

    //========================
    document.getElementById("profileimage5").setAttribute("src",data[8].avatar_url)
    document.getElementById("user5").innerText = data[8].login
    document.getElementById("visit5").setAttribute("href",data[8].html_url)
    document.getElementById("follower5").setAttribute("href", data[8].followers_url);
    document.getElementById("following5").setAttribute("href",data[8].following_url    );

    //==========================
    document.getElementById("profileimage6").setAttribute("src",data[6].avatar_url)
    document.getElementById("user6").innerText = data[6].login
    document.getElementById("visit6").setAttribute("href",data[6].html_url)
    document.getElementById("follower6").setAttribute("href", data[6].followers_url);
    document.getElementById("following6").setAttribute("href",data[6].following_url    );
    //==================================
    document.getElementById("profileimage9").setAttribute("src",data[9].avatar_url)
    document.getElementById("user9").innerText = data[9].login
    document.getElementById("visit9").setAttribute("href",data[9].html_url)
    document.getElementById("follower9").setAttribute("href", data[9].followers_url);
    document.getElementById("following9").setAttribute("href",data[9].following_url    );

    document.getElementById("profileimage10").setAttribute("src",data[10].avatar_url)
    document.getElementById("user10").innerText = data[10].login
    document.getElementById("visit10").setAttribute("href",data[10].html_url)
    document.getElementById("follower10").setAttribute("href", data[10].followers_url);
    document.getElementById("following10").setAttribute("href",data[10].following_url    );

    document.getElementById("profileimage11").setAttribute("src",data[11].avatar_url)
    document.getElementById("user11").innerText = data[11].login
    document.getElementById("visit11").setAttribute("href",data[11].html_url)
    document.getElementById("follower11").setAttribute("href", data[11].followers_url);
    document.getElementById("following11").setAttribute("href",data[11].following_url    );

});

