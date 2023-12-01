import { useState } from 'react'

function Tabs(props) {
    const {tabMessages} = props

    const [tabs, setTabs] = useState(0)

    return (
        <div>
            {
                tabMessages.map((tab, i) => 
                    <button key={i} onClick={() => setTabs(i)}>Tab {i+1}</button>
                )
            }
            <div>
                <p>{tabMessages[tabs]}</p>
            </div>
        </div>
    )
}
export default Tabs