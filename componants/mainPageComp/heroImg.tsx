function HeroImg() {
    return (
        <>

            <div id="hero">
                <picture>
                    <source media="(min-width: 1200px)" srcSet="/homeImg/agenda1200.webp"/>
                    <source media="(min-width: 1000px)" srcSet="/homeImg/agenda1000.webp"/>
                    <source media="(min-width: 768px)" srcSet="/homeImg/agenda800.webp"/>
                    <source media="(min-width: 500px)" srcSet="/homeImg/calendar500.webp"/>
                    <source media="(min-width: 300px)" srcSet="/homeImg/calendar300.webp"/>
                    <img src="/homeImg/calendar.webp" alt="Calendar image"/>
                </picture>
            </div>
        
        </>
    )
}

export default HeroImg;