import Top from "./Top";
import Top2 from "./Top2";
import Stories from "./Stories";
import Feed from "./Feed"
import Side from "./Side"
import BottomBar from "./BottomBar";

function Contents(){
    return (<div>
        <Top/>
        <Top2/>
        <div class="corpo">
            <div class="colunm1">
                <Stories/>
                <Feed/>
            </div>
            <div class="colunm2">
                <Side/>
            </div>            
        </div>
        <BottomBar/>
        </div>

        )
}

export default Contents;