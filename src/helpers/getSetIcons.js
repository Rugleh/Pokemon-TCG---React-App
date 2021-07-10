export const getSetIcons = async () => {
  const url = `https://api.pokemontcg.io/v2/sets`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const setIcons = data.map((img) => {
    return {
      id: img.id,
      name: img.name,
      url: img.images?.symbol,
    };
  });

  return setIcons;
};
