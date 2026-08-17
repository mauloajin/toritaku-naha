const STORE = {
  name: "焼き鳥とお酒 鳥拓 那覇 居酒屋",
  shortName: "焼き鳥とお酒 鳥拓",
  reading: "やきとりとおさけ とりたく",
  romanized: "Yakitori to Osake Toritaku",
  address: "〒902-0067 沖縄県那覇市安里１丁目３−３ 家ビル 2F",
  phone: "098-943-7349",
  hours: "17:00〜翌1:00（料理L.O. 翌0:00／ドリンクL.O. 翌0:30）",
  closed: "不定休",
  map: "https://www.google.com/maps/place/%E7%84%BC%E3%81%8D%E9%B3%A5%E3%81%A8%E3%81%8A%E9%85%92+%E9%B3%A5%E6%8B%93+%E9%82%A3%E8%A6%87+%E5%B1%85%E9%85%92%E5%B1%8B/@26.21877,127.6941584,17z/data=!4m6!3m5!1s0x34e569fdc14e6ef1:0x15db81b8fedb74a4!8m2!3d26.21877!4d127.6941584!16s%2Fg%2F11h94cbpfv",
  official: "https://yakitoritoosake-toritaku.owst.jp/",
  booking: "https://www.hotpepper.jp/strJ004469980/yoyaku/",
  instagram: "https://www.instagram.com/asato.toritaku/",
  facebook: "https://www.facebook.com/toritaku.yakitori/",
  tabelog: "https://tabelog.com/okinawa/A4701/A470101/47027066/",
  hotpepper: "https://www.hotpepper.jp/strJ004469980/",
};

const menuItems = [
  { num: "01", ja: "鳥拓特製 塩つくね", en: "Signature salt tsukune", price: "350円", note: "根菜と軟骨の食感を生かした、塩仕立てのつくね。" },
  { num: "02", ja: "博多ゴマサバ", en: "Hakata-style sesame mackerel", price: "1,200円", note: "鯖の刺身に甘く濃厚な特製ごまだれを合わせた博多名物。" },
  { num: "03", ja: "焼き鳥 串五本コース", en: "Five-skewer selection", price: "1,350円", note: "焼き上がりを一串ずつ味わえる焼き鳥の五本構成。" },
  { num: "04", ja: "刺身盛り合わせ", en: "Assorted sashimi", price: "1,300円", note: "焼き鳥と一緒に楽しめる、魚料理の一品。" },
  { num: "05", ja: "日本酒 各種", en: "Selection of sake", price: "660円〜", note: "全国から選んだ日本酒を10種類以上。季節酒も取りそろえます。" },
  { num: "06", ja: "博多豚バラ", en: "Hakata pork belly skewer", price: "250円", note: "博多の焼き鳥文化を感じる豚バラ串。" },
];

const faq = [
  { q: "焼き鳥とお酒 鳥拓はどこにありますか？", a: "〒902-0067 沖縄県那覇市安里１丁目３−３ 家ビル 2Fです。ゆいレール牧志駅から徒歩5分です。" },
  { q: "営業時間と定休日を教えてください。", a: "営業時間は毎日17:00〜翌1:00です。料理のラストオーダーは翌0:00、ドリンクは翌0:30です。定休日は不定休のため、来店前に最新情報をご確認ください。" },
  { q: "予約できますか？", a: "はい。ホットペッパーグルメからネット予約、または098-943-7349への電話で問い合わせできます。" },
  { q: "どのような料理を楽しめますか？", a: "焼き鳥を中心に、鳥拓特製の塩つくね、博多ゴマサバ、刺身などを提供する居酒屋です。日本酒や焼酎も取りそろえています。" },
  { q: "個室やカウンター席はありますか？", a: "カウンター席、座敷、7〜13名で利用できる個室があります。総席数は37席です。" },
  { q: "店内は禁煙ですか？", a: "全席禁煙で、喫煙専用室はありません。" },
  { q: "駐車場はありますか？", a: "店舗専用の駐車場はありません。牧志駅から徒歩での来店が便利です。" },
  { q: "What kind of restaurant is Toritaku in Naha?", a: "Toritaku is a yakitori and izakaya restaurant in Asato, Naha. It serves grilled chicken skewers, Hakata-style sesame mackerel, seafood, sake and shochu." },
  { q: "How can I get to Toritaku?", a: "The restaurant is a five-minute walk from Makishi Station on the Yui Rail. It is on the second floor at 1-3-3 Asato, Naha, Okinawa 902-0067." },
];

const jpKeywords = [
  "焼き鳥とお酒 鳥拓 那覇 居酒屋", "焼き鳥とお酒 鳥拓", "鳥拓 那覇", "鳥拓 安里", "鳥拓 牧志", "とりたく 那覇", "とりたく 居酒屋", "やきとりとおさけ とりたく",
  "那覇 焼き鳥", "那覇市 焼き鳥", "安里 焼き鳥", "牧志 焼き鳥", "牧志駅 焼き鳥", "国際通り 焼き鳥", "沖縄 焼き鳥", "那覇 焼き鳥 居酒屋",
  "那覇 居酒屋", "安里 居酒屋", "牧志 居酒屋", "牧志駅 居酒屋", "国際通り 居酒屋", "沖縄 居酒屋", "那覇 和食", "那覇 夜ごはん",
  "牧志駅 徒歩5分 居酒屋", "牧志駅 近く 焼き鳥", "牧志駅 近く 居酒屋", "安里駅 近く 焼き鳥", "安里 夕食", "牧志 夕食", "那覇 ディナー", "国際通り ディナー",
  "鳥拓 住所", "鳥拓 電話番号", "鳥拓 営業時間", "鳥拓 定休日", "鳥拓 予約", "鳥拓 ネット予約", "鳥拓 アクセス", "鳥拓 地図",
  "那覇 焼き鳥 予約", "牧志 居酒屋 予約", "安里 居酒屋 予約", "那覇 居酒屋 営業時間", "牧志駅 居酒屋 営業中", "那覇 深夜 居酒屋", "那覇 夜1時 居酒屋", "安里 夜ごはん",
  "鳥拓 塩つくね", "那覇 塩つくね", "鳥拓 博多ゴマサバ", "那覇 ゴマサバ", "牧志 ゴマサバ", "博多ゴマサバ 沖縄", "焼き鳥 串五本", "焼き鳥 串七本",
  "那覇 つくね", "牧志 つくね", "那覇 鶏料理", "牧志 鶏料理", "那覇 豚バラ串", "牧志 豚バラ串", "那覇 刺身 居酒屋", "牧志 魚料理",
  "那覇 日本酒", "牧志 日本酒", "安里 日本酒", "那覇 焼酎", "牧志 焼酎", "那覇 地酒 居酒屋", "牧志 日本酒 居酒屋", "焼き鳥 日本酒 那覇",
  "焼き鳥 焼酎 那覇", "ゴマサバ 日本酒 那覇", "鳥拓 日本酒", "鳥拓 焼酎", "季節の日本酒 那覇", "福岡の酒 那覇", "日本酒 10種類以上", "PayPay 居酒屋 那覇",
  "那覇 個室 居酒屋", "牧志 個室 居酒屋", "安里 個室 居酒屋", "鳥拓 個室", "鳥拓 カウンター", "鳥拓 座敷", "那覇 カウンター 焼き鳥", "牧志 座敷 居酒屋",
  "那覇 全席禁煙 居酒屋", "牧志 禁煙 居酒屋", "鳥拓 全席禁煙", "鳥拓 子供連れ", "那覇 子供連れ 居酒屋", "牧志 子供連れ 居酒屋", "鳥拓 37席", "鳥拓 2階",
  "那覇 飲み放題 焼き鳥", "牧志 飲み放題 居酒屋", "鳥拓 飲み放題", "鳥拓 コース", "博多料理 那覇", "福岡グルメ 那覇", "那覇 博多料理 居酒屋", "牧志 海鮮 居酒屋",
  "沖縄県那覇市安里1丁目3-3", "那覇市安里 家ビル", "安里1丁目 居酒屋", "牧志駅から徒歩5分", "ゆいレール 牧志 居酒屋", "那覇 モノレール 焼き鳥", "国際通り 近く 居酒屋", "安里 家ビル 2F",
  "焼き鳥 予約 那覇 安里", "居酒屋 予約 那覇 牧志", "日本酒 居酒屋 那覇 安里", "ゴマサバ 居酒屋 牧志", "塩つくね 焼き鳥 牧志", "カウンター席 焼き鳥 那覇", "個室 7名 13名 那覇", "座敷 居酒屋 安里"
];

const enKeywords = [
  "Yakitori to Osake Toritaku", "Toritaku Naha", "Toritaku Asato", "Toritaku Makishi", "Tori Taku Naha", "Yakitori and sake Toritaku", "Toritaku izakaya", "Toritaku restaurant",
  "Naha yakitori", "Naha izakaya", "Asato yakitori", "Asato izakaya", "Makishi yakitori", "Makishi izakaya", "Okinawa yakitori", "Okinawa izakaya",
  "yakitori near Makishi Station", "izakaya near Makishi Station", "restaurant near Makishi Station", "Japanese restaurant near Makishi Station", "yakitori near Kokusai Street", "izakaya near Kokusai Street", "dinner near Kokusai Street", "local dining in Naha",
  "Naha Japanese restaurant", "Naha grilled chicken", "Naha chicken skewers", "Makishi grilled chicken", "Asato chicken skewers", "Japanese pub Naha", "Japanese pub Makishi", "Japanese dinner Naha",
  "Toritaku address", "Toritaku phone number", "Toritaku opening hours", "Toritaku business hours", "Toritaku closing day", "Toritaku reservation", "Toritaku online booking", "Toritaku directions",
  "Toritaku Google Maps", "how to get to Toritaku", "Makishi Station five minute walk", "restaurant at Asato 1-3-3", "restaurant in Asato Naha", "second floor restaurant Naha", "late night izakaya Naha", "Naha restaurant open until 1am",
  "signature salt tsukune", "salt tsukune Naha", "Hakata sesame mackerel", "goma saba Naha", "sesame mackerel Okinawa", "yakitori skewer selection", "five yakitori skewers", "seven yakitori skewers",
  "pork belly skewer Naha", "sashimi and yakitori", "seafood izakaya Naha", "fish and yakitori Naha", "Hakata food Naha", "Fukuoka food Okinawa", "Japanese small plates Naha", "grilled skewers Makishi",
  "sake restaurant Naha", "sake bar Makishi", "sake near Makishi Station", "shochu restaurant Naha", "yakitori and sake Naha", "yakitori and shochu Naha", "seasonal sake Naha", "Japanese sake selection Okinawa",
  "Toritaku sake", "Toritaku shochu", "sake with yakitori", "sake with sesame mackerel", "Japanese drinks Naha", "PayPay restaurant Naha", "credit card restaurant Naha", "Naha evening dining",
  "private room izakaya Naha", "private room restaurant Makishi", "Toritaku private room", "Toritaku counter seating", "Toritaku tatami seating", "counter seat yakitori Naha", "tatami izakaya Naha", "37 seat restaurant Naha",
  "non smoking izakaya Naha", "smoke free restaurant Makishi", "Toritaku non smoking", "family friendly izakaya Naha", "restaurant with children Naha", "counter dining Makishi", "group dining Naha", "private room for seven to thirteen",
  "all you can drink Naha", "yakitori course Naha", "Toritaku course", "Toritaku all you can drink", "Naha dinner reservation", "Makishi restaurant reservation", "Asato izakaya booking", "Okinawa restaurant reservation",
  "Naha dining guide", "Makishi food guide", "Asato restaurant guide", "where to eat yakitori in Naha", "where to drink sake in Naha", "Japanese local food Naha", "evening meal near Yui Rail", "Yui Rail restaurant",
  "Naha City Okinawa restaurant", "Asato Naha Okinawa dining", "Makishi Station dinner", "Kokusai Street evening dining", "Naha yakitori opening hours", "Makishi izakaya directions", "Toritaku menu", "Toritaku food and drinks",
  "yakitori restaurant reservation Naha", "Japanese izakaya booking Okinawa", "salt chicken meatball skewer", "Hakata style fish dish", "assorted sashimi Naha", "Japanese alcohol restaurant", "local dinner Asato", "Naha night restaurant"
];

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://toritaku-naha.vercel.app/#restaurant",
  name: STORE.name,
  alternateName: [STORE.shortName, STORE.reading, STORE.romanized],
  url: "https://toritaku-naha.vercel.app/",
  description: "那覇市安里、牧志駅から徒歩5分の焼き鳥居酒屋。焼き鳥、博多ゴマサバ、日本酒や焼酎を提供しています。",
  telephone: STORE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "安里１丁目３−３ 家ビル 2F",
    addressLocality: "那覇市",
    addressRegion: "沖縄県",
    postalCode: "902-0067",
    addressCountry: "JP",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.21877, longitude: 127.6941584 },
  hasMap: STORE.map,
  servesCuisine: ["焼き鳥", "居酒屋料理", "博多料理", "魚料理"],
  priceRange: "¥5,001–¥6,000",
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Credit Card, PayPay",
  acceptsReservations: STORE.booking,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "01:00",
    },
  ],
  sameAs: [STORE.official, STORE.instagram, STORE.facebook, STORE.tabelog, STORE.hotpepper],
  potentialAction: {
    "@type": "ReserveAction",
    target: { "@type": "EntryPoint", urlTemplate: STORE.booking, inLanguage: "ja" },
    result: { "@type": "FoodEstablishmentReservation" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${STORE.name} トップ`}>
          <span className="brand-mark">鳥</span>
          <span><b>鳥拓</b><small>YAKITORI &amp; SAKE</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#story">鳥拓について</a><a href="#menu">お品書き</a><a href="#info">店舗案内</a><a href="#english">English</a>
        </nav>
        <a className="header-book" href={STORE.booking} target="_blank" rel="noopener noreferrer">席を予約 <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">NAHA · ASATO · YAKITORI</p>
            <h1><span>焼き鳥とお酒</span><strong>鳥拓</strong><em>那覇 居酒屋</em></h1>
            <p className="hero-lead">火と向き合い、<br />一串ごとの旨みを引き出す。</p>
            <p className="hero-body">焼き鳥と魚、選りすぐりの日本酒。<br />牧志駅から歩いて5分、那覇・安里の夜に。</p>
            <div className="hero-actions">
              <a className="button button-primary" href={STORE.booking} target="_blank" rel="noopener noreferrer">ネット予約 <Arrow /></a>
              <a className="button button-ghost" href={`tel:${STORE.phone}`}>電話する <span>{STORE.phone}</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun"><span>炭</span><span>火</span></div>
            <div className="skewer skewer-a"><i /><i /><i /><i /></div>
            <div className="skewer skewer-b"><i /><i /><i /><i /></div>
            <div className="smoke smoke-a" /><div className="smoke smoke-b" />
            <p>一串一献</p>
          </div>
          <div className="hero-meta">
            <span>OPEN 17:00 — 01:00</span><span>MAKISHI STATION / 5 MIN.</span><span>RESERVATIONS AVAILABLE</span>
          </div>
        </section>

        <section className="intro section" id="story">
          <div className="section-label"><span>01</span><p>About Toritaku</p></div>
          <div className="intro-main">
            <p className="kicker">焼き鳥と、魚と、旨い酒。</p>
            <h2>那覇・安里で味わう<br /><i>博多仕立て</i>の夜。</h2>
          </div>
          <div className="intro-copy">
            <p>焼き鳥とお酒 鳥拓は、焼き鳥を軸に、博多ゴマサバなどの魚料理、全国から選んだ日本酒や焼酎を楽しめる居酒屋です。</p>
            <p>根菜と軟骨の食感を生かした塩つくね、博多の食文化を感じる豚バラ串。オープンキッチンを囲むカウンターのほか、座敷と個室も備えています。</p>
            <div className="facts"><div><b>5</b><span>牧志駅から<br />徒歩5分</span></div><div><b>37</b><span>カウンター・座敷・<br />個室を含む37席</span></div><div><b>10+</b><span>日本酒を<br />10種類以上</span></div></div>
          </div>
        </section>

        <section className="menu section" id="menu">
          <div className="section-head">
            <div className="section-label inverse"><span>02</span><p>Food &amp; Sake</p></div>
            <div><p className="kicker">おすすめのお品</p><h2>串と肴、<br />盃を重ねる。</h2></div>
            <p>表示価格は税込です。仕入れや季節により内容・価格が変わる場合があります。</p>
          </div>
          <div className="menu-list">
            {menuItems.map((item) => <article className="menu-item" key={item.num}><span>{item.num}</span><div><h3>{item.ja}</h3><p className="menu-en">{item.en}</p><p>{item.note}</p></div><b>{item.price}</b></article>)}
          </div>
          <div className="menu-links"><a href={`${STORE.official}foods`} target="_blank" rel="noopener noreferrer">料理メニューを見る <Arrow /></a><a href={`${STORE.official}drinks`} target="_blank" rel="noopener noreferrer">ドリンクを見る <Arrow /></a><a href={`${STORE.official}courses`} target="_blank" rel="noopener noreferrer">コースを見る <Arrow /></a></div>
        </section>

        <section className="feature-strip" aria-label="店舗の特徴">
          <p>YAKITORI</p><span>◆</span><p>GOMA SABA</p><span>◆</span><p>JAPANESE SAKE</p><span>◆</span><p>NAHA · ASATO</p>
        </section>

        <section className="info section" id="info">
          <div className="section-label"><span>03</span><p>Information</p></div>
          <div className="info-title"><p className="kicker">店舗案内</p><h2>今夜、鳥拓へ。</h2><p>営業時間や休業日は変更になる場合があります。予約・来店前に公式ページで最新情報をご確認ください。</p></div>
          <dl className="info-table">
            <div><dt>店名</dt><dd>{STORE.name}<small>{STORE.reading}<br />{STORE.romanized}</small></dd></div>
            <div><dt>住所</dt><dd>{STORE.address}<a href={STORE.map} target="_blank" rel="noopener noreferrer">Googleマップ <Arrow /></a></dd></div>
            <div><dt>電話</dt><dd><a href={`tel:${STORE.phone}`}>{STORE.phone}</a></dd></div>
            <div><dt>営業時間</dt><dd>{STORE.hours}</dd></div>
            <div><dt>定休日</dt><dd>{STORE.closed}</dd></div>
            <div><dt>アクセス</dt><dd>ゆいレール 牧志駅から徒歩5分</dd></div>
            <div><dt>席</dt><dd>37席／カウンター・座敷・個室（7〜13名）</dd></div>
            <div><dt>禁煙・駐車場</dt><dd>全席禁煙／店舗専用駐車場なし</dd></div>
            <div><dt>支払い</dt><dd>クレジットカード、PayPay対応</dd></div>
          </dl>
          <div className="access-card">
            <div><p>FROM MAKISHI STATION</p><b>5 MIN.<br />ON FOOT</b><span>ゆいレール牧志駅から徒歩5分</span></div>
            <a href={STORE.map} target="_blank" rel="noopener noreferrer">Googleマップで経路を見る <Arrow /></a>
          </div>
        </section>

        <section className="english section" id="english" lang="en">
          <div className="section-label inverse"><span>04</span><p>English Guide</p></div>
          <div className="english-title"><p className="kicker">Naha · Asato</p><h2>Yakitori,<br />fish &amp; fine sake.</h2></div>
          <div className="english-copy">
            <p><strong>{STORE.romanized}</strong> is a yakitori and izakaya restaurant in Asato, Naha. The menu centers on grilled chicken skewers and includes Hakata-style sesame mackerel, sashimi and other Japanese dishes. A selection of sake and shochu is available.</p>
            <p>The restaurant is a five-minute walk from Makishi Station on the Yui Rail. Reservations can be made online or by phone. The official restaurant page offers multilingual navigation, but an English food menu is not listed as available.</p>
          </div>
          <dl className="english-details">
            <div><dt>Address</dt><dd>2F, 1-3-3 Asato, Naha, Okinawa 902-0067, Japan</dd></div>
            <div><dt>Hours</dt><dd>Daily 5:00 PM–1:00 AM<br />Food L.O. midnight / Drinks L.O. 12:30 AM</dd></div>
            <div><dt>Closed</dt><dd>Irregular holidays</dd></div>
            <div><dt>Reservation</dt><dd><a href={STORE.booking} target="_blank" rel="noopener noreferrer">Online booking <Arrow /></a> or call <a href={`tel:${STORE.phone}`}>{STORE.phone}</a></dd></div>
          </dl>
        </section>

        <section className="faq section" id="faq">
          <div className="section-label"><span>05</span><p>Frequently Asked</p></div>
          <div className="faq-title"><p className="kicker">よくあるご質問</p><h2>ご来店の前に。</h2></div>
          <div className="faq-list">{faq.map((item, index) => <details key={item.q}><summary><span>Q{String(index + 1).padStart(2, "0")}</span>{item.q}<i>＋</i></summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className="links section">
          <div className="section-label"><span>06</span><p>Official Links</p></div>
          <div className="link-grid">
            <a href={STORE.official} target="_blank" rel="noopener noreferrer"><span>公式ページ</span><small>OFFICIAL SITE</small><Arrow /></a>
            <a href={STORE.booking} target="_blank" rel="noopener noreferrer"><span>ネット予約</span><small>RESERVATION</small><Arrow /></a>
            <a href={STORE.instagram} target="_blank" rel="noopener noreferrer"><span>Instagram</span><small>@ASATO.TORITAKU</small><Arrow /></a>
            <a href={STORE.tabelog} target="_blank" rel="noopener noreferrer"><span>食べログ</span><small>RESTAURANT DETAILS</small><Arrow /></a>
          </div>
        </section>

        <section className="search-terms section" aria-label="関連検索語">
          <details><summary>関連検索語・Search terms <span>＋</span></summary><div><h2>日本語の関連検索語</h2><p>{jpKeywords.join(" ・ ")}</p><h2 lang="en">English search terms</h2><p lang="en">{enKeywords.join(" · ")}</p></div></details>
        </section>

        <section className="cta">
          <p className="eyebrow">RESERVATION</p><h2>今夜の一串を、<br />鳥拓で。</h2><div><a className="button button-light" href={STORE.booking} target="_blank" rel="noopener noreferrer">ネットで席を予約 <Arrow /></a><a className="button button-line" href={`tel:${STORE.phone}`}>電話で問い合わせ</a></div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">鳥</span><div><b>{STORE.shortName}</b><small>{STORE.romanized}</small></div></div>
        <div className="footer-info"><p>{STORE.address}</p><p>TEL <a href={`tel:${STORE.phone}`}>{STORE.phone}</a></p><p>17:00〜翌1:00／不定休</p></div>
        <p className="copyright">© 2026 {STORE.romanized}</p>
      </footer>
    </>
  );
}
