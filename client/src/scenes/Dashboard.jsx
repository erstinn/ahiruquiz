import React from 'react';
import Navbar from "./Navbar.jsx";
import {EditButton} from "../styles/Buttons.styled.js";
import {SelectionCard} from "../styles/Cards.styled.js";
import {Container} from "../styles/Container.styled.js";

// TODO
//  [] may not put sort here maybe idc abt it
//  [] pagination + taking note of screen sizes REACT MAYBE
//  []i fking want pagination that shifts cute box when u go to x page
//  []
//  []



const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div>
                <Container>
                    <SelectionCard> 知ってるひらがなmeow
                        <EditButton name=""><span> EDIT </span></EditButton>
                        {/*<EditButton name=""><span> DELETE </span></EditButton>*/}
                    </SelectionCard>
                    <SelectionCard> 場所
                        <EditButton><span> 編集 </span></EditButton>
                    </SelectionCard>
                    <SelectionCard>  漢字
                        {/*<EditButton><span>EDIT</span></EditButton>*/}
                    </SelectionCard>
                    <SelectionCard>  漢字
                        {/*<EditButton><span>EDIT</span></EditButton>*/}
                    </SelectionCard>
                    <SelectionCard>  漢字
                        {/*<EditButton><span>EDIT</span></EditButton>*/}
                    </SelectionCard>
                    <SelectionCard>  漢字
                        {/*<EditButton><span>EDIT</span></EditButton>*/}
                    </SelectionCard>
                {/*    <SelectionCard>*/}
                {/*        知ってるひらがな*/}
                {/*        <EditButton><span> 編集 </span></EditButton>*/}
                {/*        <StyledTag><span>EZ</span></StyledTag>*/}
                {/*    </SelectionCard>*/}
                </Container>
            </div>
        </>
    )
}

export default Dashboard;

// ===ahiru comments===
// only use dynamic routing for dashboard if need user-specific data, personalized dashboards, and security (access control)
    // privacy concerns: sharing dashboard links = showing user's id in the url -> need enc./security measure for that
    // for simplicity; i used dynamic -> enc if wna :)
