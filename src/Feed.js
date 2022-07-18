import React from "react";

function FeedTemplate(props){
    let icon=["chatbubble-outline","paper-plane-outline"];
    const [heart, setHeart] = React.useState("heart-outline"); 
    const [color, setColor] = React.useState("md hydrated icons2"); 
    
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
                     <img src={props.image} onDoubleClick={()=> {if (heart==="heart-outline") {setHeart("heart");setColor("md hydrated red");console.log(heart)}else{setHeart("heart-outline");setColor("md hydrated icons2");console.log(heart)}}} />
                    </div>


                     <div class="boxbot">
                         <div class="bot1">
                         <div class="bot11">
                            <ion-icon name={heart} class={color} onClick={()=> {if (heart==="heart-outline") {setHeart("heart");setColor("md hydrated red");console.log(heart)}else{setHeart("heart-outline");setColor("md hydrated icons2");console.log(heart)}}} />
                            {icon.map((icons)=>(<ion-icon name={icons} class="icons2"></ion-icon>))}
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
    {perfile: "https://static.tudointeressante.com.br/uploads/2014/04/animais-fofos-2.jpg", nickName:"fofurinhas", image: "https://static.tudointeressante.com.br/uploads/2014/04/animais-fofos-2.jpg", imageLike: "https://pbs.twimg.com/profile_images/1223685068633321473/F-JOoiqx_400x400.jpg", nickLike:"fofurass", likes: "859.025" },
    {perfile: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/1d27329a808515547f5ee3b474ae1c28.jpg", nickName:"astronomia", image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/1d27329a808515547f5ee3b474ae1c28.jpg", imageLike: "https://fisica.ufpr.br/assets/images/mbr-1-872x872.jpg", nickLike:"fisica.ufs", likes: "1.583" },
    {perfile: "https://st.depositphotos.com/1009931/2064/i/450/depositphotos_20641011-stock-photo-baby.jpg", nickName:"babys.s2", image: "https://st.depositphotos.com/1009931/2064/i/450/depositphotos_20641011-stock-photo-baby.jpg", imageLike: "https://yt3.ggpht.com/Z8RXs2KXHWP82hiss_BmY_8B5N2zUNOfBEdwMifBY6NTqQvHYEnHGLIXYpmGR8lsoqJsQfApVQ=s88-c-k-c0x00ffffff-no-rj", nickLike:"music", likes: "1.267" }]

    return(
        <div class="feed">{publication.map((itens)=>(
            <FeedTemplate perfile={itens.perfile} nickName={itens.nickName} image={itens.image} imageLike={itens.imageLike} nickLike={itens.nickLike} likes={itens.likes} />))} 
        </div>
    )

}

export default Feed;