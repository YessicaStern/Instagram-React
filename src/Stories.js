function SubStories(props){
    return(
            <div class="bigBox">
             <div class="storiesBox">   
                 <img src="./img/stories_background.jpg" class="border"/>
                 <img src={props.image} class="imageStories"/>
             </div>
             <p class="storiesUser" >{props.nickName}</p>
            </div>
    )
}


function Stories(){
    const stories=[
        {image:"https://media.glassdoor.com/sqll/5837209/driven-brazil-squareLogo-1631636568127.png", nickName: "driven"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy2DBzkDf8NhopJgA5HiLRLq9R6iEuHjLZQ&usqp=CAU", nickName: "sinceriando"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigv8Gm4T5QvzmJjcjtu7nSX_f0TDHvHes4A&usqp=CAU", nickName: "gatoogato" },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aAy8hlpbC4ziil6wOJBLd7f3bKCtlO4JnQ&usqp=CAU", nickName: "jerry" },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xvlrFOye4kxNGRDyJPLOJt0_2lAG4eFXtg&usqp=CAU" ,nickName: "memesfun"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCewta5Oagrx5d7P1Saxcs5lvKThbJe6RBvQ&usqp=CAU", nickName: "k-ratos" },
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgDdqYlGv8JEnurJi4EajtmpR7nR5G4Clkw&usqp=CAU", nickName: "faustao-sa"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBMwxsa11UmV7w7WQXIJlSOJc14gxQVcANQ&usqp=CAU", nickName: "ratomemes"}
    ]
    return(
        <div class="bigBoxStories"> 
        <div class="stories">{stories.map((itens)=>(
           <SubStories nickName={itens.nickName} image={itens.image} />))}                
            <ion-icon name="chevron-forward-circle" onclick={()=>{const ultimaMensagem =document.querySelector(".mensagem:last-child");
   ultimaMensagem.scrollIntoView();}} class="arrow"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chevron Forward Circle</title><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z"/></svg></ion-icon>
           </div>
        </div>
    );
}

export default Stories;