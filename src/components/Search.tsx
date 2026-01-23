type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {

    const [username, setUsername] = useState("");

    return (
        <div>
            <h2>Busque por um usuário: </h2>
            <p>Conheça seus melhores repositórios</p>

            <div>
                <input type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => loadUser(username)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
