export default function filterByCategory(data, category) {
  return data.filter((item) => {
    const titleParts = item.title.split(".");
    return titleParts.length >= 2 && titleParts[1].startsWith(category);
  });
}
