function Top(){
    const icone=["./img/paper-plane-outline.svg","./img/compass-outline.svg","./img/heart-outline.svg","./img/person-outline.svg"];

    return ( <div class="top">
        <div class="subtop">
                <div class="logo">
                     <div class="logo1">
                     <img src="./img/logo-instagram.svg" class="logoSquare"/>
                     </div>
                     <div class="linetop"></div>
                     <img src="./img/logo.png"/>
                </div>
                
                <div class="search">
                <input type="text" placeholder="Pesquisar"/>
                </div>
                    
            
                <div class="direct">{icone.map((icones)=>(<img src={icones} class="icones"/>))}
                </div>
        </div> 
    </div>
    );
}
export default Top;