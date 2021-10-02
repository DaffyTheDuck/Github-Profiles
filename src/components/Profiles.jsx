import axios from 'axios';
import React, {useState} from 'react';
import './Profiles.scss'

export default function Form() {

    const [profile, setProfile] = useState("");

    const [_data, setData] = useState({
        avatar_url: "",
        alt_name: "",
        name: "",
        bio: "",
        followers: 0,
        following: 0,
        repos: 0,
    });

    const [showCard, setShowCard] = useState(false)

    const baseURL = "https://api.github.com/users/"

    // prevent default reload
    const preventReload = (event) => {
        event.preventDefault();
        getUser();
    }

    // Search input handler
    const inputHandler = (event) => {
        setProfile(event.target.value);
    }

    async function getUser() {
        try {
            const res = await axios.get(baseURL + profile).then((res) => {
                setData({
                    avatar_url: res.data.avatar_url,
                    alt_name: res.data.alt_name,
                    name: res.data.name,
                    bio: res.data.bio,
                    followers: res.data.followers,
                    following: res.data.following,
                    repos: res.data.public_repos
                })
            })
            setShowCard(true);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="main-body">
            <form className="user-form" id="form" onSubmit={preventReload}>
                <input onChange={inputHandler} value={profile} placeholder="Search For A Profile"/>
            </form>

            {showCard && <main id="main">
                <div className="card">
                    <div>
                        <img src={_data.avatar_url} alt={_data.name} className="avatar"/>
                    </div>
                    <div className="user-info">
                        <h2>{_data.name}</h2>
                        <p>{_data.bio}</p>
                        <ul>
                            <li>{_data.followers} <strong>Followers</strong></li>
                            <li>{_data.following} <strong>Following</strong></li>
                            <li>{_data.repos} <strong>Repos</strong></li>
                        </ul>
                        {/* <div id="repos">
                            <a href="/#" className="repos">Repo 1</a>
                            <a href="/#" className="repos">Repo 2</a>
                            <a href="/#" className="repos">Repo 3</a>
                        </div> */}
                    </div>
                </div>
            </main>}
        </div>
    )
}
