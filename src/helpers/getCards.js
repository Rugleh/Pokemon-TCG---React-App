export const getCards = async (set, energyType) => {
  const url = `https://api.pokemontcg.io/v2/cards?q=set.id:${set}%20types:${energyType}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const cards = data.map((img) => {
    return {
      id: img.id,
      name: img.name,
      url: img.images?.small,
    };
  });

  return cards;
};
