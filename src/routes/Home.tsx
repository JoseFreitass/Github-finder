import type { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";    

import { useState } from "react";

const Home = () => {

    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const loadUser = async (username: string) => {
        setError(false);
        setUser(null);
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);

        const data = await res.json();

        if(res.status === 404) {
            setTimeout(() => {
                setError(true);
                setLoading(false);
            }, 3000);
            return;
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
    };

        setTimeout(() => {
            setUser(userData);
            setLoading(false);
        }, 3000);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {loading && <Loader />}
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    );
};

export default Home;
