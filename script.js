const START_DATE = new Date("2021-12-14T00:00:00+08:00");
const DAY_PER_TILE = 5;
const NICKNAMES = ["GY", "CYC"];

const milestones = [
  {
    "date": "2021-12-14",
    "title": "故事开始",
    "text": "我们故事开始的那一天",
    "theme": "开始"
  },
  {
    "date": "2021-12-21",
    "title": "CYC的第一个礼物",
    "text": "CYC第一次送礼物",
    "theme": "彩蛋",
    "originalImage": "assets/photos/dd220bcdbb7d669874de41c62312ac19.jpg",
    "image": "assets/photos-web/dd220bcdbb7d669874de41c62312ac19.jpg"
  },
  {
    "date": "2022-01-01",
    "title": "第一次跨年",
    "text": "第一次跨年",
    "theme": "彩蛋",
    "originalImage": "assets/photos/dcef6c00d5d539aff5b863cdbfc1553a.jpg",
    "image": "assets/photos-web/dcef6c00d5d539aff5b863cdbfc1553a.jpg"
  },
  {
    "date": "2022-05-25",
    "title": "GY的生日",
    "text": "都是CYC的错，没有给宝贝过",
    "theme": "彩蛋"
  },
  {
    "date": "2022-06-17",
    "title": "拍毕业照",
    "text": "两个都没有毕业的人弥补本科毕业照",
    "theme": "彩蛋",
    "originalImage": "assets/photos/b98a106aef72aad4e0ef9297d11f87c6.jpg",
    "image": "assets/photos-web/b98a106aef72aad4e0ef9297d11f87c6.jpg"
  },
  {
    "date": "2022-10-11",
    "title": "CYC的生日",
    "text": "宝贝给我过生日，宝贝太好了，感动到哭",
    "theme": "彩蛋",
    "originalImage": "assets/photos/c3a77d5328a1f58d37017e066c481a9d.jpg",
    "image": "assets/photos-web/c3a77d5328a1f58d37017e066c481a9d.jpg"
  },
  {
    "date": "2022-12-14",
    "title": "一周年",
    "text": "一周年，谢谢宝贝的陪伴！",
    "theme": "周年",
    "originalImage": "assets/photos/1e0aa5e78d2c18efc09b7a5df6fd4028.jpg",
    "image": "assets/photos-web/1e0aa5e78d2c18efc09b7a5df6fd4028.jpg"
  },
  {
    "date": "2023-01-01",
    "title": "隔离中",
    "text": "疫情放开，各自在家",
    "theme": "彩蛋"
  },
  {
    "date": "2023-02-05",
    "title": "看烟花",
    "text": "钱塘江看烟花，全是人！",
    "theme": "彩蛋",
    "originalImage": "assets/photos/dffb88bca8c6782e35b471025b680468.jpg",
    "image": "assets/photos-web/dffb88bca8c6782e35b471025b680468.jpg"
  },
  {
    "date": "2023-05-25",
    "title": "GY的生日",
    "text": "本来要去迪士尼给宝贝过生日，但是我却阳了555",
    "theme": "彩蛋",
    "originalImage": "assets/photos/203e5a46bfb2d378816e0aff1c186d8c.jpg",
    "image": "assets/photos-web/203e5a46bfb2d378816e0aff1c186d8c.jpg"
  },
  {
    "date": "2023-08-20",
    "title": "第一次长途旅行",
    "text": "我们到了厦门和香港旅行！",
    "theme": "旅行",
    "originalImage": "assets/photos/134054045121918a6985c9bd13e9b589.jpg",
    "image": "assets/photos-web/134054045121918a6985c9bd13e9b589.jpg"
  },
  {
    "date": "2023-10-11",
    "title": "CYC的生日",
    "text": "有宝贝陪伴真好！",
    "theme": "彩蛋",
    "originalImage": "assets/photos/11a32a4161bf8f8a4ca13394ff71244a.jpg",
    "image": "assets/photos-web/11a32a4161bf8f8a4ca13394ff71244a.jpg"
  },
  {
    "date": "2023-11-14",
    "title": "第一次一起看演唱会",
    "text": "五月天！",
    "theme": "彩蛋",
    "originalImage": "assets/photos/d57ac65421c2d462e93e0a1b83749f52.jpg",
    "image": "assets/photos-web/d57ac65421c2d462e93e0a1b83749f52.jpg"
  },
  {
    "date": "2023-12-14",
    "title": "两周年",
    "text": "两周年快乐，跑到安吉看星星没看到。宇宙中我们恰好相爱",
    "theme": "彩蛋",
    "originalImage": "assets/photos/75ee8ff9623fd0c38924e38516c8f033.jpg",
    "image": "assets/photos-web/75ee8ff9623fd0c38924e38516c8f033.jpg"
  },
  {
    "date": "2024-01-01",
    "title": "紫金港跨年",
    "text": "终于又有紫金港跨年晚会！",
    "theme": "彩蛋",
    "originalImage": "assets/photos/ddfa37e5e3f4ba02a29442f1eb0bd440.jpg",
    "image": "assets/photos-web/ddfa37e5e3f4ba02a29442f1eb0bd440.jpg"
  },
  {
    "date": "2024-04-21",
    "title": "周杰伦演唱会！",
    "text": "周杰伦！周杰伦！答辩完看周杰伦",
    "theme": "彩蛋",
    "originalImage": "assets/photos/1d909bf0cddc240134e4d79c3eb4d375.jpg",
    "image": "assets/photos-web/1d909bf0cddc240134e4d79c3eb4d375.jpg"
  },
  {
    "date": "2024-05-04",
    "title": "第一次出国旅游-曼谷",
    "text": "虽然腰突，但是坚强的游玩泰国曼谷",
    "theme": "旅行",
    "originalImage": "assets/photos/bd18ce1facab5d81e979771b32b33b0e.jpg",
    "image": "assets/photos-web/bd18ce1facab5d81e979771b32b33b0e.jpg"
  },
  {
    "date": "2024-05-25",
    "title": "GY的生日",
    "text": "宝贝生日快乐！超漂亮的蛋糕",
    "theme": "彩蛋",
    "originalImage": "assets/photos/c93881e93d535e54bb0fae5594c25533.jpg",
    "image": "assets/photos-web/c93881e93d535e54bb0fae5594c25533.jpg"
  },
  {
    "date": "2024-08-11",
    "title": "秦皇岛",
    "text": "第一次见叔叔阿姨姐姐",
    "theme": "旅行",
    "originalImage": "assets/photos/cf90ac40234ef6f764adc6f4770e2396.jpg",
    "image": "assets/photos-web/cf90ac40234ef6f764adc6f4770e2396.jpg"
  },
  {
    "date": "2024-10-01",
    "title": "宝贝来慈溪",
    "text": "慈溪宁波游玩",
    "theme": "彩蛋"
  },
  {
    "date": "2024-11-22",
    "title": "内蒙古之旅",
    "text": "一起去内蒙古参加婚礼",
    "theme": "旅行",
    "originalImage": "assets/photos/ef58c74f780a626d89bf71cf6fbf89d6.jpg",
    "image": "assets/photos-web/ef58c74f780a626d89bf71cf6fbf89d6.jpg"
  },
  {
    "date": "2024-12-14",
    "title": "三周年",
    "text": "杭州吃漂亮饭过周年",
    "theme": "周年",
    "originalImage": "assets/photos/45226873d4ff28408351f28d267aec78.jpg",
    "image": "assets/photos-web/45226873d4ff28408351f28d267aec78.jpg"
  },
  {
    "date": "2025-01-01",
    "title": "慈溪跨年",
    "text": "这一天，先留给照片和回忆。",
    "theme": "彩蛋"
  },
  {
    "date": "2025-03-08",
    "title": "诸暨珍珠之行",
    "text": "去诸暨挑珍珠买珍珠",
    "theme": "旅行"
  },
  {
    "date": "2025-04-20",
    "title": "黄山之行",
    "text": "这一天，先留给照片和回忆。",
    "theme": "旅行",
    "originalImage": "assets/photos/9716fcf7b9e2b745de80b225124076bc.jpg",
    "image": "assets/photos-web/9716fcf7b9e2b745de80b225124076bc.jpg"
  },
  {
    "date": "2025-05-02",
    "title": "汕头之行",
    "text": "城市不行，吃的还不错，最棒的是租车环游南澳岛",
    "theme": "旅行",
    "originalImage": "assets/photos/b3ecfeab4a6290b442bb51fe903788cc.jpg",
    "image": "assets/photos-web/b3ecfeab4a6290b442bb51fe903788cc.jpg"
  },
  {
    "date": "2025-05-08",
    "title": "GY的生日",
    "text": "荣小馆还不错",
    "theme": "彩蛋",
    "originalImage": "assets/photos/a792e1155391858a4dd533f9823cbecd.jpg",
    "image": "assets/photos-web/a792e1155391858a4dd533f9823cbecd.jpg"
  },
  {
    "date": "2025-06-01",
    "title": "云南昆明丽江之行",
    "text": "吃菌菇，看高原，爬雪山",
    "theme": "旅行",
    "originalImage": "assets/photos/381ce5948974c7ea3461961ed20afa41.jpg",
    "image": "assets/photos-web/381ce5948974c7ea3461961ed20afa41.jpg"
  },
  {
    "date": "2025-06-29",
    "title": "慈溪听林宥嘉",
    "text": "这一天，先留给照片和回忆。",
    "theme": "彩蛋",
    "originalImage": "assets/photos/f902a0ff33ca4c25f0b35078b16fe259.jpg",
    "image": "assets/photos-web/f902a0ff33ca4c25f0b35078b16fe259.jpg"
  },
  {
    "date": "2025-07-21",
    "title": "一起出发新加坡",
    "text": "开始了新的新加坡生活",
    "theme": "旅行"
  },
  {
    "date": "2025-10-05",
    "title": "宝贝来新加坡",
    "text": "宝贝来看我，还给我过生日",
    "theme": "彩蛋",
    "originalImage": "assets/photos/98b8e30242b369ae85cafee39d0d94e2.jpg",
    "image": "assets/photos-web/98b8e30242b369ae85cafee39d0d94e2.jpg"
  },
  {
    "date": "2025-11-30",
    "title": "好吃的爷爷寿宴",
    "text": "太好吃了",
    "theme": "彩蛋",
    "originalImage": "assets/photos/43095ce412d8331acc68ac5f10930a92.jpg",
    "image": "assets/photos-web/43095ce412d8331acc68ac5f10930a92.jpg"
  },
  {
    "date": "2025-12-14",
    "title": "四周年",
    "text": "相聚上海，四周年啦",
    "theme": "周年",
    "originalImage": "assets/photos/11e44c0a3a5d1cf2b4f2ddc138232ef7.jpg",
    "image": "assets/photos-web/11e44c0a3a5d1cf2b4f2ddc138232ef7.jpg"
  },
  {
    "date": "2025-12-25",
    "title": "迪士尼！",
    "text": "终于一起去了迪士尼！",
    "theme": "彩蛋",
    "originalImage": "assets/photos/6c8503498fc82c1b0aee07006b723f0c.jpg",
    "image": "assets/photos-web/6c8503498fc82c1b0aee07006b723f0c.jpg"
  },
  {
    "date": "2026-01-01",
    "title": "又到秦皇岛",
    "text": "这一天，先留给照片和回忆。",
    "theme": "彩蛋"
  },
  {
    "date": "2026-02-22",
    "title": "民丹岛惊艳",
    "text": "新加坡旁边的小岛，竟然这么好！",
    "theme": "旅行",
    "originalImage": "assets/photos/f5a3c068896f53d20f488316545e5ea6.jpg",
    "image": "assets/photos-web/f5a3c068896f53d20f488316545e5ea6.jpg"
  },
  {
    "date": "2026-05-16",
    "title": "无锡之行",
    "text": "和宝贝一起感受无锡是个好地方",
    "theme": "旅行",
    "originalImage": "assets/photos/209f912b88744e2b435851457b83c6b1.jpg",
    "image": "assets/photos-web/209f912b88744e2b435851457b83c6b1.jpg"
  }
]
.map((item) => ({
  ...item,
  dateObject: new Date(item.date + "T00:00:00+08:00"),
}));

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const daysTogetherEl = document.querySelector("#daysTogether");
const stepsEl = document.querySelector("#steps");
const currentDateEl = document.querySelector("#currentDate");
const bondScoreEl = document.querySelector("#bondScore");
const livesLeftEl = document.querySelector("#livesLeft");
const maxLivesEl = document.querySelector("#maxLives");
const nextMemoryEl = document.querySelector("#nextMemory");
const chargeFillEl = document.querySelector("#chargeFill");
const hintEl = document.querySelector("#hint");
const jumpButton = document.querySelector("#jumpButton");
const resetButton = document.querySelector("#resetButton");
const startScreen = document.querySelector("#startScreen");
const startButton = document.querySelector("#startButton");
const memoryDialog = document.querySelector("#memoryDialog");
const memoryTag = document.querySelector("#memoryTag");
const memoryTitle = document.querySelector("#memoryTitle");
const memoryText = document.querySelector("#memoryText");
const memoryPhotoWrap = document.querySelector("#memoryPhotoWrap");
const memoryPhoto = document.querySelector("#memoryPhoto");
const memoryPhotoCaption = document.querySelector("#memoryPhotoCaption");
const closeMemory = document.querySelector("#closeMemory");
const gameOverDialog = document.querySelector("#gameOverDialog");
const gameOverText = document.querySelector("#gameOverText");
const restartFromOver = document.querySelector("#restartFromOver");

const state = {
  tiles: [],
  player: null,
  cameraX: 0,
  cameraY: 0,
  step: 0,
  charge: 0,
  charging: false,
  jumping: false,
  lastTime: 0,
  visitedMilestones: new Set(),
  message: "",
  bondScore: 0,
  livesLeft: 3,
  maxLives: 3,
  started: false,
};

function daysBetween(a, b) {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.max(0, Math.round((b - a) / msPerDay));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function milestoneStep(item) {
  return Math.max(0, Math.round(daysBetween(START_DATE, item.dateObject) / DAY_PER_TILE));
}

function milestoneForStep(step) {
  return milestones.find((item) => milestoneStep(item) === step);
}

function maxLivesForStep(step) {
  const currentDays = step * DAY_PER_TILE;
  return 3 + Math.floor(currentDays / 365);
}

function createTile(step, previousTile) {
  const milestone = milestoneForStep(step);
  const gap = step === 0 ? 0 : 120 + Math.random() * 90;
  const direction = Math.random() > 0.48 ? 1 : -1;
  const angle = step === 0 ? 0 : -0.66 + Math.random() * 0.22;
  const width = milestone ? 118 : 90 + Math.random() * 22;
  const height = milestone ? 34 : 30;
  const x = previousTile ? previousTile.x + Math.cos(angle) * gap * direction : 0;
  const y = previousTile ? previousTile.y + Math.sin(angle) * gap : 0;

  return {
    step,
    x,
    y,
    width,
    height,
    milestone,
    direction,
    hue: ["#ffd2df", "#d9f3ea", "#ffe0bd", "#d8eaff"][step % 4],
    sideHue: ["#f6a8ba", "#9cd9c8", "#f7bd81", "#a8c9f4"][step % 4],
  };
}

function resetGame() {
  state.tiles = [];
  state.step = 0;
  state.cameraX = 0;
  state.cameraY = 0;
  state.charge = 0;
  state.charging = false;
  state.jumping = false;
  state.visitedMilestones = new Set();
  state.message = "";
  state.bondScore = 0;
  state.maxLives = maxLivesForStep(0);
  state.livesLeft = state.maxLives;

  for (let i = 0; i < 8; i += 1) {
    state.tiles.push(createTile(i, state.tiles[i - 1]));
  }

  state.player = {
    x: state.tiles[0].x,
    y: state.tiles[0].y - 28,
    radius: 19,
    vx: 0,
    vy: 0,
    startX: 0,
    startY: 0,
    targetX: 0,
    targetY: 0,
    progress: 0,
  };

  updateHud();
  showMilestone(milestones[0], true);
}

function updateHud() {
  const currentDays = state.step * DAY_PER_TILE;
  const currentDate = addDays(START_DATE, currentDays);
  daysTogetherEl.textContent = currentDays;
  stepsEl.textContent = state.step;
  bondScoreEl.textContent = state.bondScore;
  currentDateEl.textContent = formatDate(currentDate);

  const nextMaxLives = maxLivesForStep(state.step);
  if (nextMaxLives > state.maxLives) {
    const gainedLives = nextMaxLives - state.maxLives;
    state.livesLeft += gainedLives;
    state.maxLives = nextMaxLives;
    state.message = `又走过一年，机会 +${gainedLives}`;
  } else {
    state.maxLives = nextMaxLives;
  }
  livesLeftEl.textContent = state.livesLeft;
  maxLivesEl.textContent = state.maxLives;

  const next = milestones
    .map((item) => ({ ...item, step: milestoneStep(item) }))
    .find((item) => item.step > state.step);

  if (next) {
    const tilesAway = next.step - state.step;
    nextMemoryEl.textContent = `下一段回忆：${next.title}，还差 ${tilesAway} 格`;
  } else {
    nextMemoryEl.textContent = "后面的回忆等你来补上";
  }
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * ratio);
  canvas.height = Math.floor(rect.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function worldToScreen(x, y) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: rect.width / 2 + (x - state.cameraX),
    y: rect.height * 0.62 + (y - state.cameraY),
  };
}

function drawPlatform(x, y, width, height, topColor, sideColor, isMilestone) {
  const top = { x, y: y - height };
  const right = { x: x + width / 2, y };
  const bottom = { x, y: y + height };
  const left = { x: x - width / 2, y };

  ctx.save();
  ctx.shadowColor = isMilestone ? "rgba(255, 83, 120, 0.34)" : "rgba(86, 70, 112, 0.18)";
  ctx.shadowBlur = isMilestone ? 22 : 14;
  ctx.shadowOffsetY = 12;
  ctx.beginPath();
  ctx.ellipse(x, y + height + 32, width * 0.42, 13, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(70, 58, 84, 0.13)";
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(left.x, left.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.lineTo(right.x, right.y);
  ctx.lineTo(right.x, right.y + 24);
  ctx.lineTo(bottom.x, bottom.y + 50);
  ctx.lineTo(left.x, left.y + 24);
  ctx.closePath();
  ctx.fillStyle = sideColor;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.quadraticCurveTo((top.x + right.x) / 2 + 8, (top.y + right.y) / 2 - 8, right.x, right.y);
  ctx.quadraticCurveTo((right.x + bottom.x) / 2 + 8, (right.y + bottom.y) / 2 + 8, bottom.x, bottom.y);
  ctx.quadraticCurveTo((bottom.x + left.x) / 2 - 8, (bottom.y + left.y) / 2 + 8, left.x, left.y);
  ctx.quadraticCurveTo((left.x + top.x) / 2 - 8, (left.y + top.y) / 2 - 8, top.x, top.y);
  ctx.closePath();
  ctx.fillStyle = topColor;
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.86)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(x, y, width * 0.18, height * 0.46, 0, 0, Math.PI * 2);
  ctx.fillStyle = isMilestone ? "rgba(255, 83, 120, 0.16)" : "rgba(255, 255, 255, 0.38)";
  ctx.fill();
  ctx.strokeStyle = isMilestone ? "rgba(255, 83, 120, 0.5)" : "rgba(255, 255, 255, 0.72)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawBackground(width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#fff6fb");
  gradient.addColorStop(0.55, "#fff9ed");
  gradient.addColorStop(1, "#e8f7ff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255, 120, 148, 0.18)";
  for (let i = 0; i < 24; i += 1) {
    const x = (i * 173 + state.cameraX * 0.08) % (width + 80) - 40;
    const y = (i * 97 + 80 + state.cameraY * 0.04) % (height - 90);
    ctx.beginPath();
    ctx.arc(x, y, 3 + (i % 4), 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawTile(tile) {
  const screen = worldToScreen(tile.x, tile.y);
  drawPlatform(screen.x, screen.y, tile.width, tile.height, tile.hue, tile.sideHue, Boolean(tile.milestone));

  ctx.fillStyle = tile.milestone ? "#ff5378" : "rgba(52, 48, 63, 0.42)";
  ctx.font = tile.milestone ? "700 14px Microsoft YaHei" : "700 12px Microsoft YaHei";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (tile.milestone) {
    ctx.fillStyle = "#ff7894";
    ctx.beginPath();
    ctx.roundRect(screen.x - 42, screen.y - 38, 84, 20, 7);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "800 12px Microsoft YaHei";
    ctx.fillText("回忆日", screen.x, screen.y - 28);

    ctx.save();
    ctx.shadowColor = "rgba(255, 83, 120, 0.45)";
    ctx.shadowBlur = 18;
    ctx.fillStyle = "#ff5378";
    ctx.fillText("♥", screen.x, screen.y - 10);
    ctx.restore();
    ctx.fillStyle = "#7c4155";
    ctx.fillText(tile.milestone.title, screen.x, screen.y + 10);
  } else {
    ctx.fillText(`${tile.step * DAY_PER_TILE}天`, screen.x, screen.y + 2);
  }
}

function drawPlayer() {
  const p = state.player;
  const screen = worldToScreen(p.x, p.y);
  const squish = state.charging ? Math.min(0.24, state.charge * 0.18) : 0;

  ctx.save();
  ctx.translate(screen.x, screen.y);
  ctx.scale(1 + squish, 1 - squish);
  ctx.fillStyle = "#ff7894";
  ctx.beginPath();
  ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(-7, -3, 3, 0, Math.PI * 2);
  ctx.arc(7, -3, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 3, 8, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = "rgba(52, 48, 63, 0.13)";
  ctx.beginPath();
  ctx.ellipse(screen.x, screen.y + 28, 24, 8, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawLabels(width) {
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "rgba(52, 48, 63, 0.64)";
  ctx.font = "700 15px Microsoft YaHei";
  ctx.fillText(`${NICKNAMES[0]} 和 ${NICKNAMES[1]}：一格就是 5 天`, 18, 18);

  if (state.message) {
    ctx.textAlign = "center";
    ctx.fillStyle = "#ff5378";
    ctx.font = "800 18px Microsoft YaHei";
    ctx.fillText(state.message, width / 2, 26);
  }
}

function draw() {
  const rect = canvas.getBoundingClientRect();
  drawBackground(rect.width, rect.height);
  state.tiles.forEach(drawTile);
  drawPlayer();
  drawLabels(rect.width);
}

function startCharge() {
  if (!state.started || state.livesLeft <= 0 || state.jumping || state.charging) return;
  state.charging = true;
  state.charge = 0;
  hintEl.textContent = "蓄力中，松开就跳";
}

function releaseJump() {
  if (!state.charging || state.jumping) return;
  state.charging = false;
  state.jumping = true;

  const p = state.player;
  p.startX = p.x;
  p.startY = p.y;
  const direction = state.tiles[state.step + 1] || state.tiles[state.step];
  const targetDistance = 95 + state.charge * 210;
  const angle = Math.atan2(direction.y - state.tiles[state.step].y, direction.x - state.tiles[state.step].x);
  p.targetX = p.x + Math.cos(angle) * targetDistance;
  p.targetY = p.y + Math.sin(angle) * targetDistance - 28;
  p.progress = 0;
  hintEl.textContent = "看准啦";
}

function finishJump() {
  const p = state.player;
  let landingDistance = Infinity;
  const landed = state.tiles.find((tile) => {
    const dx = Math.abs(p.x - tile.x);
    const dy = Math.abs((p.y + 28) - tile.y);
    const hitRadiusX = tile.width * 0.44;
    const hitRadiusY = 29;
    const hit = dx < hitRadiusX && dy < hitRadiusY;
    if (hit) {
      landingDistance = Math.hypot(dx / hitRadiusX, dy / hitRadiusY);
    }
    return hit;
  });

  state.jumping = false;
  state.charge = 0;
  chargeFillEl.style.transform = "scaleX(0)";

  if (!landed || landed.step <= state.step) {
    state.livesLeft = Math.max(0, state.livesLeft - 1);
    p.x = state.tiles[state.step].x;
    p.y = state.tiles[state.step].y - 28;
    updateHud();

    if (state.livesLeft <= 0) {
      state.message = "机会用完啦";
      hintEl.textContent = "点再跳一次重新开始";
      showGameOver();
    } else {
      state.message = `没关系，还有 ${state.livesLeft} 次机会`;
      hintEl.textContent = "调整一下力度，再来一次";
    }

    setTimeout(() => {
      state.message = "";
    }, 1100);
    return;
  }

  state.step = landed.step;
  p.x = landed.x;
  p.y = landed.y - 28;

  let reward = 1;
  let rewardText = "稳稳落下，默契 +1";
  if (landingDistance < 0.15) {
    reward = 3;
    rewardText = "正中心！默契 +3";
  } else if (landingDistance < 0.32) {
    reward = 2;
    rewardText = "很稳很甜，默契 +2";
  } else if (landingDistance > 0.72) {
    reward = 0;
    rewardText = "擦边通过，也算一起走过";
  }

  state.bondScore += reward;
  state.message = rewardText;
  ensureTiles();
  updateHud();

  if (landed.milestone && !state.visitedMilestones.has(landed.milestone.date)) {
    state.visitedMilestones.add(landed.milestone.date);
    showMilestone(landed.milestone);
  }

  setTimeout(() => {
    state.message = "";
  }, 900);
}

function ensureTiles() {
  while (state.tiles.length < state.step + 8) {
    const nextStep = state.tiles.length;
    state.tiles.push(createTile(nextStep, state.tiles[state.tiles.length - 1]));
  }
}

function showMilestone(item, quiet = false) {
  if (!item || quiet) return;
  memoryTag.textContent = `${formatDate(item.dateObject)} · ${item.theme}`;
  memoryTitle.textContent = item.title;
  memoryText.textContent = item.text;

  memoryPhotoWrap.classList.toggle("has-image", Boolean(item.image));
  memoryPhotoWrap.classList.toggle("is-empty", !item.image);
  memoryPhoto.alt = item.image ? `${item.title}的照片` : "";
  if (item.image) {
    memoryPhoto.src = item.image;
  } else {
    memoryPhoto.removeAttribute("src");
  }
  memoryPhotoCaption.textContent = item.image
    ? item.title
    : item.imageNote || "这一天，照片还在路上。";

  memoryDialog.showModal();
}

function showGameOver() {
  const days = state.step * DAY_PER_TILE;
  gameOverText.textContent = `这次跳到了第 ${state.step} 格，一起走过 ${days} 天，默契值 ${state.bondScore}。`;
  gameOverDialog.showModal();
}

function update(delta) {
  if (state.charging) {
    state.charge = Math.min(1, state.charge + delta / 900);
    chargeFillEl.style.transform = `scaleX(${state.charge})`;
  }

  if (state.jumping) {
    const p = state.player;
    p.progress = Math.min(1, p.progress + delta / 620);
    const t = p.progress;
    const ease = 1 - (1 - t) * (1 - t);
    const arc = Math.sin(t * Math.PI) * 120;
    p.x = p.startX + (p.targetX - p.startX) * ease;
    p.y = p.startY + (p.targetY - p.startY) * ease - arc;

    if (p.progress >= 1) {
      finishJump();
    }
  }

  const targetTile = state.tiles[state.step];
  state.cameraX += (targetTile.x - state.cameraX) * 0.08;
  state.cameraY += (targetTile.y - state.cameraY) * 0.08;
}

function loop(time) {
  const delta = Math.min(48, time - state.lastTime || 16);
  state.lastTime = time;
  update(delta);
  draw();
  requestAnimationFrame(loop);
}

function bindPressTarget(target) {
  target.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    startCharge();
  });
  target.addEventListener("pointerup", (event) => {
    event.preventDefault();
    releaseJump();
  });
  target.addEventListener("pointercancel", releaseJump);
  target.addEventListener("pointerleave", () => {
    if (state.charging) releaseJump();
  });
}

bindPressTarget(jumpButton);
bindPressTarget(canvas);

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    startCharge();
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    releaseJump();
  }
});

resetButton.addEventListener("click", () => {
  if (gameOverDialog.open) {
    gameOverDialog.close();
  }
  resetGame();
});
restartFromOver.addEventListener("click", () => {
  gameOverDialog.close();
  resetGame();
  hintEl.textContent = "按住画面或空格蓄力，松开起跳";
});
startButton.addEventListener("click", () => {
  state.started = true;
  document.body.classList.remove("is-starting");
  startScreen.classList.add("is-hidden");
  hintEl.textContent = "按住画面或空格蓄力，松开起跳";
});
closeMemory.addEventListener("click", () => memoryDialog.close());
window.addEventListener("resize", () => {
  resizeCanvas();
  draw();
});

resizeCanvas();
document.body.classList.add("is-starting");
resetGame();
requestAnimationFrame(loop);
