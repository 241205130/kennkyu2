const cafeterias = [
  {
    titleImage: "images/meijosyokudo.jpg",
    subImage: "images/kita.png",
    hours: "月〜金 / 10:00〜16:00",
    location: "共通講義棟北 B1",
    menu: ["日替わり丼", "定食メニュー"],
    comment: "ランチタイムには学生でいっぱいになる、最も長い歴史をもつ学食。日替わり丼や、栄養バランスのよい定食メニューなど、豊富なメニューも魅力です。",
    link: "form.html",
    data: [10, 20, 30, 70, 60, 40, 20, 10]
  },
  {
    titleImage: "images/ka-sa.jpg",
    subImage: "images/tawa-.png",
    hours: "月〜金 / 11:20〜14:00\n施設開放 14:00〜17:00",
    location: "タワー75 1F",
    menu: ["ラーメン", "カレー", "日替わり定食"],
    comment: "すべてのメニューに成分表示があり、健康的な食事を選ぶことができるのがポイント。タワー75にあるので、さまざまな学部の学生たちが利用しています。",
    link: "form.html",
    data: [20, 40, 70, 70, 60, 40, 20, 10]
  },
  {
    titleImage: "images/ori-bu.jpg",
    subImage: "images/tawa-.png",
    hours: "月〜金 / 11:20〜15:00",
    location: "タワー75 1F",
    menu: ["パン", "サンドイッチ", "ドーナツ"],
    comment: "落ち着いた雰囲気から、教職員も休憩に利用することが多いカフェ。ランチタイムをゆっくりと過ごしたい学生にも人気があります。",
    link: "form.html",
    data: [30, 60, 80, 80, 70, 50, 30, 20]
  },
  {
    titleImage: "images/guranmirano.jpg",
    subImage: "images/rokugou.png",
    hours: "月〜金 / 11:00〜14:00",
    location: "6号館 1F",
    menu: ["日替わり丼", "パスタ"],
    comment: "グラン亭では日替わり丼や季節のメニューで、丼の魅力がさまざまに楽しめ，ミラノではパスタがおすすめであり，週替りで30種類以上のメニューが楽しめます。",
    link: "form.html",
    data: [10, 30, 50, 60, 40, 20, 10, 5]
  },
  {
    titleImage: "images/sugakiya.jpg",
    subImage: "images/rokugou.png",
    hours: "月〜金 / 11:00〜14:00",
    location: "6号館1F",
    menu: ["ラーメン", "ソフトクリーム"],
    comment: "名古屋のソウルフードといえばこのラーメン。名城大学の店舗ではリーズナブルな特別価格で食べられるので、学生のお財布にもとってもやさしい。",
    link: "form.html",
    data: [15, 35, 60, 70, 50, 30, 20, 10]
  },
  {
    titleImage: "images/bookcafe.jpg",
    subImage: "images/kouyu.png",
    hours: "月〜金 / 8:30〜19:00\n土 / 9:00〜14:00",
    location: "校友会館 2F",
    menu: ["パン", "コーヒー", "サンドイッチ"],
    comment: "たくさんの本に囲まれながら、素材にこだわった焼きたてパンを食べられます。授業前のモーニング、授業の合間に時間が空いたとき、授業後にゆっくりと本が読みたいときなど、様々なシーンで利用できます。",
    link: "form.html",
    data: [10, 20, 40, 60, 80, 70, 60, 40]
  },
  {
    titleImage: "images/sorairo.jpg",
    subImage: "images/tawa-.png",
    hours: "月〜金 / 11:00〜14:00",
    location: "タワー75 15F",
    menu: ["パスタ", "サラダ", "ケーキ"],
    comment: "シックなテイストで落ち着いた雰囲気の店内は、ランチタイムに最適。カフェタイムには季節のデザートをはじめフレンチトーストやクロックムッシュなどが食べられます。名古屋市内を一望しながら食事を楽しむことができます。",
    link: "form.html",
    data: [5, 10, 15, 20, 15, 10, 5, 5]
  }
];

const container = document.querySelector('.container');
const template = document.getElementById('cafeteriaTemplate');

function getColor(percent) {
  if (percent <= 20) return "rgba(75, 192, 192, 0.7)";
  if (percent <= 40) return "rgba(174, 226, 196, 0.7)";
  if (percent <= 60) return "rgba(255, 206, 86, 0.7)";
  if (percent <= 80) return "rgba(255, 159, 64, 0.7)";
  return "rgba(255, 99, 132, 0.7)";
}

function convertPercentToMinutes(percent) {
  if (percent <= 20) return 0;
  if (percent <= 40) return 5;
  if (percent <= 60) return 10;
  if (percent <= 80) return 15;
  return 20;
}

const timeLabels = Array.from({length: 8}, (_, i) => `${i + 9}時`);

cafeterias.forEach((cafeteria, index) => {
  const clone = template.cloneNode(true);
  clone.style.display = "block";
  clone.querySelector(".image-placeholder").src = cafeteria.image;
  clone.querySelector(".open-hours").textContent = cafeteria.hours;
  clone.querySelector(".location").textContent = cafeteria.location;
  clone.querySelector(".cafeteria-title-image").src = cafeteria.titleImage;
  clone.querySelector(".cafeteria-subimage").src = cafeteria.subImage;

  const ul = clone.querySelector(".menu-list");
  cafeteria.menu.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  clone.querySelector(".comment").textContent = cafeteria.comment;

  clone.querySelector(".comment").textContent = cafeteria.comment;

const linkElement = clone.querySelector(".detail-link");
if (cafeteria.link) {
  linkElement.href = cafeteria.link;
  linkElement.style.display = "inline"; 
} else {
  linkElement.style.display = "none"; 
}


  const chartCtx = clone.querySelector(".cafeteria-chart").getContext("2d");
  new Chart(chartCtx, {
    type: 'bar',
    data: {
      labels: timeLabels,
      datasets: [{
        label: '混雑度（％）',
        data: cafeteria.data,
        backgroundColor: cafeteria.data.map(getColor)
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: value => value + '%'
          },
          title: {
            display: true,
            text: '混雑度（％）'
          }
        },
        x: {
          title: {
            display: true,
            text: '時間'
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.parsed.y}%（約${convertPercentToMinutes(ctx.parsed.y)}分）`
          }
        }
      }
    }
  });

  container.appendChild(clone);
});
