const fetchItem = async (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        Error(`You must provide an url\n${error}`);
    }
};

if (typeof module !== 'undefined') {
    module.exports = {
        fetchItem,
    };
}