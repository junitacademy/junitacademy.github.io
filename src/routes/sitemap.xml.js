import axios from "axios";
import { debug } from "svelte/internal";

let baseUrl = 'https://junitacademy.github.io';

/**
 * @TODO get actual modified time using fs.stat
 */
let dt = new Date().toJSON();

let pages = [
  {
    loc: `${baseUrl}/`,
    lastmod: dt,
  },
  {
    loc: `${baseUrl}/about`,
    lastmod : dt,
  }
]

/** Return items from all spurces like youtube, anchorfm etc.*/
async function getAll() {

  /** Base url of the website */
  

  /** Defines types of Items */
  let types = [
    {
      source: "youtube",
      prefix: "/youtube/video"
    },
    {
      source: "anchorfm",
      prefix: "/anchorfm/episode"
    }
  ]

  /** All request at once */
  let allReq = await axios.all(
    types.map(type => axios.get(`${baseUrl}/api/${type.source}`))
  );

  /** Concat all arrays with [] empty array using spread syntax */
  let items = pages.concat(...allReq.map((req, r) => {
    return req.data.map(item => {
      return {
        loc: `${baseUrl}${types[r].prefix}/${item.slug}/${item.id}`,
        lastmod: item.updated
      };
    });
  }));

  /** Sort items - lastest at top */
  items = items.sort((a,b)=>(a.lastmod > b.lastmod ? -1 : 1));

  /** Retun xml in sitemap format */
  return `<?xml version='1.0' encoding='UTF-8'?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
    items.map(({loc, lastmod})=>`<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`).join('')
  }</urlset>`;

}

/** Return file content */
export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/rss+xml',
  });

  res.end(await getAll());
}
