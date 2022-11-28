import "../css/PreviewLayout.scss";
import ButtonWithDescription from "./ButtonWithDescription";
import Button from "./Button.jsx";

export default function PreviewLayout (props) {
    return (
        <>
            
            <div className = "PreviewLayout">
                <h1>Buttons</h1>
                <div>
                    <div>
                        <span>{"<Button />"}</span>
                        <Button>Default</Button>
                    </div>
                    <div>
                        <span>{":hover, :focus"}</span>
                        <Button className = "hover">Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button varian='outline' />"}</span>
                        <Button variant="outline">Default</Button>
                    </div>
                    <div>
                        <span>{":hover, :focus"}</span>
                        <Button variant='outline' className = "hover">Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button variant='text' />"}</span>
                        <Button variant = "text">Default</Button>
                    </div>
                    <div>
                        <span>{":hover, :focus"}</span>
                        <Button variant = "text" className = "hover">Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button disableShadow />"}</span>
                        <Button disableShadow>Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button disabled />"}</span>
                        <Button disabled>Default</Button>
                    </div>
                    <div>
                        <span>{"<Button disableShadow />"}</span>
                        <Button disabled className = "hover">Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button startIcon = 'face' />"}</span>
                        <Button startIcon = "face">Default</Button>
                    </div>
                    <div>
                        <span>{"<Button endIcon = 'face' />"}</span>
                        <Button endIcon="face">Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button size = 'sm' />"}</span>
                        <Button size = "sm">Default</Button>
                    </div>
                    <div>
                        <span>{"<Button size='md' />"}</span>
                        <Button size='md'>Default</Button>
                    </div>
                    <div>
                        <span>{"<Button size='lg' />"}</span>
                        <Button size='lg'>Default</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{"<Button color='default' />"}</span>
                        <Button color='default'>Default</Button>
                    </div>
                    <div>
                        <span>{"<Button color='primary' />"}</span>
                        <Button color='primary'>Primary</Button>
                    </div>
                    <div>
                        <span>{"<Button color='secondary' />"}</span>
                        <Button color='secondary'>Secondary</Button>
                    </div>
                    <div>
                        <span>{"<Button color='danger' />"}</span>
                        <Button color='danger'>Danger</Button>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{":hover, :focus"}</span>
                        <Button className = "hover" color='default'>Default</Button>
                    </div>
                    <div>
                        <Button className = "hover" color='primary'>Primary</Button>
                    </div>
                    <div>
                        <Button className = "hover" color='secondary'>Secondary</Button>
                    </div>
                    <div>
                        <Button className = "hover" color='danger'>Danger</Button>
                    </div>
                </div>
                <section>
                    Hey there {"✋"}. My name is Maksim, i'm a beginner front end developer from Russia.<br/>
                    I made these buttons, using css classes.
                    Buttons automatically grow to fit content, even if you specify size = 'sm'.<br/>
                    You can use any Google material icons in 'startIcon' and 'endIcon' and even specify different icons for both of them at the same time.<br/>
                    Checkout this project on github: <a href = "git@github.com:maksimphono/styled_buttons.git">git@github.com:maksimphono/styled_buttons.git</a> (all last code located in the branch 'feature').
                    Will be glad, if you rate my work {"😊"}
                </section>
                
            </div>
            <footer>
                My name : Maksim Phono<br/>
                Project on Github: <a href = "git@github.com:maksimphono/styled_buttons.git">git@github.com:maksimphono/styled_buttons.git</a>
            </footer>
        </>
    );
}