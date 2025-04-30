import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const url = 'http://www.mee.gov.cn/ywdt/xwfb/';

async function fetchChinaNews() {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);

  const list = [];
  $('.main_list a').each((i, el) => {
    const title_cn = $(el).text().trim();
    const link = $(el).attr('href');
    if (title_cn && link && link.includes('t20')) {
      list.push({
        country_en: 'China',
        country_cn: '中国',
        country_code: 'cn',
        agency_name: '生态环境部',
        date: '2024-04-01',
        title: 'Environmental policy news from MEE China',
        title_cn,
        summary: '',
        summary_cn: '',
        source_url: link.startsWith('http') ? link : `http://www.mee.gov.cn${link}`
      });
    }
  });

  return list.slice(0, 10);
}

async function run() {
  const news = await fetchChinaNews();
  fs.writeFileSync('./data/news.json', JSON.stringify(news, null, 2), 'utf-8');
  console.log('✅ news.json 已更新，共', news.length, '条。');
}

run();