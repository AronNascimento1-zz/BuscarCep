import { useState } from "react";
import { searchCep } from "../../services/cepApi";
import "./styles.css";

export const InputSearch = () => {
  const [search, setSearch] = useState();
  const [cep, setCep] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearchHandler(search);
   
  };
  const handleClear = () => {
    onSearchHandler("");
  };

  const onSearchHandler = async (cep) => {
    const result = await searchCep(cep);
    setCep(result);
  };

  return (
    <div className="input-container">
      <div className="input-and-button">
        <input
          placeholder="Digite o CEP"
          type="text"
          onChange={onChangeHandler}
        />
        <div className="buttons">
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear}>Resetar</button>
        </div>
      </div>

      <div className="content-container">
        <ul>
          <li>Rua: {cep?.logradouro}</li>
          <li>Bairro: {cep?.bairro}</li>
          <li>Localidade: {cep?.localidade}</li>
          <li>UF: {cep?.uf}</li>
        </ul>
      </div>
    </div>
  );
};
