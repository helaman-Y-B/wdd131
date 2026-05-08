import HeroImg from '../../componants/mainPageComp/heroImg';
import Demo from '../../componants/mainPageComp/demo';
import '../styles/home-style.css'
import '../styles/home-style-large.css'


function MainPage() {
    return (
        <>
            <main>
                <h1>Welcome to Remember Again</h1>
                <h2>Because your best ideas shouldn’t disappear just because life got busy.</h2>
                <HeroImg />
                <div id="quick">
                    <h3>What's on your mind right now?</h3>
                    <p>Remember Again is here to help you capture those fleeting thoughts, brilliant ideas, and important tasks
                        before they slip away. Whether it's a sudden inspiration, a to-do list item, or a random thought, our
                        platform provides a simple and intuitive way to jot it down and keep it safe for later.</p>
                    <a href="remember.html">Remember It!</a>
                </div>
                <Demo />
            </main>
        </>
        
    )
}

export default MainPage;