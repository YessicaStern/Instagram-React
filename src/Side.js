function SideTemplate(props){
    return(
        <div class="boxbot2">
                        <div class="bot21">
                         <img src={props.image}/>
                         <div class="bot22">
                         <h1>{props.nickName}</h1>
                         <h2>{props.follow}</h2>
                         </div>
                        </div>
                        <div class="bot23">
                         <h3>Seguir</h3>
                        </div>
                  </div>
    )
}

function User(props){
    return (
        <div class="boxtop2">
            <img src={props.image}/>
            <div class="textotop">
            <h4>{props.nickName}</h4> <h2>{props.namee}</h2>
            </div>
        </div>
    );
}

function Side(){
    const suggestions=[
        {image:"https://i.pinimg.com/564x/ec/78/f1/ec78f19f19347ffcf86c2f57177ecc30.jpg", nickName:"op.fas", follow:"Segue voce"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuA0YLAG51cceqarg8JR59VvQpnxV8bVhzw&usqp=CAU", nickName:"deadmemes", follow:"Segue voce"},
        {image:"https://i.pinimg.com/236x/cc/16/5c/cc165c0c66069e2d79ee8ff07e80b21e.jpg ", nickName:"artesaqui", follow:"Novo no Instagram"},
        {image:"https://i.pinimg.com/236x/78/8c/dc/788cdc25454f5b7003394a06abd8e6d3.jpg", nickName:"rhcpthebest", follow:"Novo no Instagram" },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRST8z2MS3YtHoYqHMOUFp9ekVng1Ou1FEGA&usqp=CAU", nickName:"gatomia", follow:"Segue voce" }]
    const item=[{image:"https://i.pinimg.com/236x/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg",nickName:"pikachucurioso",namee:"Chuchu" }]
        return(
            <div class="sidebar">
            {item.map((itens)=>(<User image={itens.image} nickName={itens.nickName} namee={itens.namee}/>))}
                <div class="boxmid2">
                  <div class="textomid">
                      <h1>Sugestões para você </h1>
                      <h3>Ver tudo</h3>
                  </div>
               </div>
               {suggestions.map((itens)=>(<SideTemplate image={itens.image} nickName={itens.nickName} follow={itens.follow} />))}
            
             
             <h5>obre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h5>

                  
             <h6>© 2021 INSTAGRAM DO FACEBOOK </h6>
             </div>


    )
}

export default Side;