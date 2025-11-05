// /data/blogsData.js
export async function getBlogsData() {
  try {
    const response = await fetch("https://pratiknborkar.com/fetch-rss.php");
    const data = await response.json();
    if (Array.isArray(data)) return data;
    console.error("Invalid data format:", data);
    return [];
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}
