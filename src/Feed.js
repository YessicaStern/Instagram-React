function FeedTemplate(props){
    let icon=["heart-outline","chatbubble-outline","paper-plane-outline"];
    return(
                 <div class="box">
                     <div class="boxtop">
                         <div class="top1">
                            <img src={props.perfile} />
                         <h1>{props.nickName}</h1>
                        </div>
                        <ion-icon name="ellipsis-horizontal" class="point" ></ion-icon>
                     </div>
               
                
                     <div class="boxmid">
                     <img src={props.image}/>
                    </div>


                     <div class="boxbot">
                         <div class="bot1">
                         <div class="bot11">{icon.map((icons)=>(<ion-icon name={icons} class="icons2"></ion-icon>))}
                         </div>

                         <div class="save">
                         <ion-icon name="bookmark-outline" class="save"></ion-icon>
                         </div>
                         </div>
                          
                         <div class="bot2">
                         <img src={props.imageLike}/>    
                         <p>Curtido por <strong>{props.nickLike}</strong> e <strong>outras {props.likes} pessoas</strong></p>
                        </div> 
                    </div>
                 </div>
    )
}

function Feed(){
    const publication=[ {perfile: "https://i.pinimg.com/564x/a2/c7/67/a2c767f7d9539396235637c6a7e110fc.jpg", nickName:"soad.faclube", image: "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg", imageLike: "https://i.pinimg.com/564x/17/36/02/173602fd3fe5775b99b16bc881139e7b.jpg", nickLike:"songs.pfct", likes: "42.583" },
    {perfile: "https://i.pinimg.com/564x/a2/c7/67/a2c767f7d9539396235637c6a7e110fc.jpg", nickName:"soad.faclube", image: "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg", imageLike: "https://i.pinimg.com/564x/17/36/02/173602fd3fe5775b99b16bc881139e7b.jpg", nickLike:"songs.pfct", likes: "42.583" },
    {perfile: "https://i.pinimg.com/564x/a2/c7/67/a2c767f7d9539396235637c6a7e110fc.jpg", nickName:"soad.faclube", image: "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg", imageLike: "https://i.pinimg.com/564x/17/36/02/173602fd3fe5775b99b16bc881139e7b.jpg", nickLike:"songs.pfct", likes: "42.583" },
    {perfile: "https://i.pinimg.com/564x/a2/c7/67/a2c767f7d9539396235637c6a7e110fc.jpg", nickName:"soad.faclube", image: "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg", imageLike: "https://i.pinimg.com/564x/17/36/02/173602fd3fe5775b99b16bc881139e7b.jpg", nickLike:"songs.pfct", likes: "42.583" }]

    return(
        <div class="feed">{publication.map((itens)=>(
            <FeedTemplate perfile={itens.perfile} nickName={itens.nickName} image={itens.image} imageLike={itens.imageLike} nickLike={itens.nickLike} likes={itens.likes} />))} 
        </div>
    )

}

export default Feed;