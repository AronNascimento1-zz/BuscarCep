export const searchCep = async (cep) => {
    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  