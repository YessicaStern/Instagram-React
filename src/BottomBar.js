function BottomBar(){
    const icon=["home-sharp","search-outline","add-circle-outline","heart-outline","person-outline"];
    return(
        <div class="bottomBar">
        <div class="iconsBottom">
        {icon.map((icons)=> (<ion-icon name={icons} class="icons3"></ion-icon>))}
        </div>
        </div>
    );
}

export default BottomBar;