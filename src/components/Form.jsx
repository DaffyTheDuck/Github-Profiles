import React, {useState} from 'react';
import './Form.scss'

export default function Form(props) {

    const [profile, setProfile] = useState("")

    // prevent default reload
    const preventReload = (event) => {
        event.preventDefault();
    }

    // Search input handler
    const inputHandler = (event) => {
        setProfile(event.target.value);
    }

    // Submit Handler
    // const submitHandler = () => {
    //     console.log(profile);
    //     setProfile("");
    // }

    return (
        <div className="main-body">
            <form className="user-form" id="form" onSubmit={preventReload}>
                <input onChange={inputHandler} value={profile} placeholder="Search For A Profile"/>
                {/* <button onClick={submitHandler}>SEARCH</button> */}
            </form>

            <main id="main">
                <div className="card">
                    <div>
                        <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" className="avatar"/>
                    </div>
                    <div className="user-info">
                        <h2>John Doe</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolor ad odit dicta sapiente, repudiandae quasi atque 
                            aliquid beatae quibusdam.
                        </p>
                        <ul>
                            <li>69K <strong>Followers</strong></li>
                            <li>69 <strong>Following</strong></li>
                            <li>1K <strong>Repos</strong></li>
                        </ul>
                        <div id="repos">
                            <a href="/#" className="repos">Repo 1</a>
                            <a href="/#" className="repos">Repo 2</a>
                            <a href="/#" className="repos">Repo 3</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
