import axios from "axios";

export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/rss+xml',
  });

  let items = await (
    await axios.get(`https://junitacademy.github.io/api/youtube`)
  ).data;

  let xml = `<?xml version='1.0' encoding='UTF-8'?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
    items.map(item=>{
      return `<url><loc>https://junitacademy.github.io/youtube/video/${item.slug}/${item.id}</loc><lastmod>${item.updated}</lastmod></url>`;
    }).join('')
  }</urlset>`;

  res.end(xml);
}
