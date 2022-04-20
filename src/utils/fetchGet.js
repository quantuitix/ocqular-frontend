const fetchGet = async (path = "") => {
  const res = await fetch(path);

  return res.json();
};
export { fetchGet };
