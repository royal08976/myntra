const fetchCategories = async () => {
  const response = await fetch(
    " http://localhost:5000/api/categories"
  );
  const data = await response.json();
  return data.data;
}