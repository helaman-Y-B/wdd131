function Demo() {
    return (
        <>
            <div id="demo">
                <h3>Here's a preview of how it works:</h3>
                <div>
                    <ul>
                        <li className="task" id="past">
                            Buy new cloths
                            <div>
                                <p>Expiration: Past due by 21 days</p>
                                <button>Delete</button>
                                <input type="checkbox" name="preview" className="check"/>
                            </div>
                        </li>
                        <li className="task" id="today">
                            Excises: Run 5km
                            <div>
                                <p>Expiration: Today</p>
                                <button>Delete</button>
                                <input type="checkbox" name="preview" className="check"/>
                            </div>
                        </li>
                        <li className="task" id="due">
                            Create a new website
                            <div>
                                <p>Expiration: 2026-12-31</p>
                                <button>Delete</button>
                                <input type="checkbox" name="preview" className="check"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Demo;