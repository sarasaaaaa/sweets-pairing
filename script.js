const DESSERTS = [
    {
        name: "크루아상",
        descriptiveName: "고소한 크루아상",
        origin: "서양식",
        texture: "바삭한",
        ingredient: "곡물",
        pairingId: 2,
        emoji: "🥐",
        photo: "디저트 사진/크루아상.png",
        description: "크로아상은 겹겹이 쌓인 페이스트리에서 고소한 버터 향이 진하게 풍기는데, 깔끔한 아메리카노가 버터의 기름진 맛을 씻어주어 리듬감 있게 먹을 수 있어."
    },
    {
        name: "스콘",
        descriptiveName: "담백한 스콘",
        origin: "서양식",
        texture: "바삭한",
        ingredient: "곡물",
        pairingId: 2,
        emoji: "🥯",
        photo: "디저트 사진/스콘.png",
        description: "스콘은 목이 멜 정도로 뻑뻑하고 담백하면서 고소한 식감을 지녔는데, 아메리카노를 한 입 마시면 입안이 촉촉해지며 식감의 변화를 극대화해줘."
    },
    {
        name: "사블레",
        descriptiveName: "바삭한 사블레",
        origin: "서양식",
        texture: "바삭한",
        ingredient: "곡물",
        pairingId: 2,
        emoji: "🍪",
        photo: "디저트 사진/사브레.png",
        description: "사블레는 모래처럼 서걱거리며 바스러지는 달콤하고 가벼운 과자인데, 바삭한 사블레를 씹은 후 시원한 아메리카노를 들이켜면 먹는 맛이 풍부해져."
    },
    {
        name: "까눌레",
        descriptiveName: "겉바속촉 까눌레",
        origin: "서양식",
        texture: "바삭한",
        ingredient: "곡물",
        pairingId: 2,
        emoji: "🍩",
        photo: "디저트 사진/까눌레.png",
        description: "까눌레는 탄 듯한 겉면의 단단한 캐러멜과 촉촉한 커스터드 크림이 매력적인데, 대비되는 식감 사이로 스며드는 아메리카노가 캐러멜 향을 더욱 돋보이게 해줘."
    },
    {
        name: "깨강정",
        descriptiveName: "고소한 깨강정",
        origin: "동양식",
        texture: "바삭한",
        ingredient: "견과류",
        pairingId: 2,
        emoji: "🌾",
        photo: "디저트 사진/깨강정.png",
        description: "깨강정은 볶은 깨의 고소함이 엿의 단맛과 어우러져 바삭하게 씹히는데, 아메리카노와 번갈아 먹으면 고소한 곡물 향이 입안 가득 오래 유지돼."
    },
    {
        name: "탕후루",
        descriptiveName: "달콤새콤 탕후루",
        origin: "동양식",
        texture: "바삭한",
        ingredient: "과일",
        pairingId: 1,
        emoji: "🍓",
        photo: "디저트 사진/탕후루.png",
        description: "탕후루는 과일 겉면의 얇은 설탕 코팅이 단단하고 매우 달콤한데, 자극적인 단맛을 진한 에스프레소가 깨끗이 씻어내 주어 신선한 균형을 이뤄."
    },
    {
        name: "티라미수",
        descriptiveName: "부드러운 티라미수",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "크림",
        pairingId: 4,
        emoji: "🍰",
        photo: "디저트 사진/티라미수.png",
        description: "티라미수는 마스카포네 치즈 크림과 에스프레소를 머금은 시트가 겹겹이 쌓여있는데, 디저트 자체에 커피가 스며있어 커피의 풍미와 디저트의 달콤함이 한 몸처럼 어우러져."
    },
    {
        name: "아포가토",
        descriptiveName: "시원한 아포가토",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "크림",
        pairingId: 4,
        emoji: "🍨",
        photo: "디저트 사진/아포가토.png",
        description: "아포가토는 바닐라 아이스크림에 뜨거운 에스프레소를 부어 먹는데, 차가운 단맛과 뜨거운 커피의 향이 즉석에서 스며들어 완성도 높은 달콤쌉싸름함을 선사해."
    },
    {
        name: "카스테라",
        descriptiveName: "폭신한 카스테라",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "곡물",
        pairingId: 5,
        emoji: "🍞",
        photo: "디저트 사진/카스테라.png",
        description: "카스테라는 달걀 거품으로 부풀린 폭신하고 계란 풍미 가득한 부드러운 빵인데, 우유가 듬뿍 든 라떼를 곁들이면 빵이 촉촉하게 녹아내려 훨씬 포근한 맛을 선사해."
    },
    {
        name: "바스크 치즈케이크",
        descriptiveName: "꾸덕한 바스크 치즈케이크",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "크림",
        pairingId: 5,
        emoji: "🧀",
        photo: "디저트 사진/바스크치즈케이크.png",
        description: "바스크 치즈케이크는 높은 온도에서 구워 겉은 그을리고 속은 꾸덕한 치즈 맛을 내는데, 라떼의 부드러움이 케이크의 진한 텍스처를 한층 더 끌어올려 입안 가득 채워줘."
    },
    {
        name: "샤베트",
        descriptiveName: "상큼한 샤베트",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "과일",
        pairingId: 5,
        emoji: "🍧",
        photo: "디저트 사진/과일샤베트.png",
        description: "샤베트는 과즙을 얼려 만든 시원하고 아삭아삭하며 상큼한 얼음 과자인데, 부드러운 라떼나 밀크 쉐이크와 섞이면 크리미하고 상큼한 맛을 조화롭게 어우러지게 해줘."
    },
    {
        name: "에클레어",
        descriptiveName: "달콤한 에클레어",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "크림",
        pairingId: 5,
        emoji: "🥖",
        photo: "디저트 사진/에클레어.png",
        description: "에클레어는 길쭉한 슈 속에 달콤한 크림을 채우고 초콜릿을 입혀서 화려한 맛을 내는데, 부드러운 우유 음료가 강한 단맛을 감싸주어 훨씬 부드럽고 고급스럽게 넘어가."
    },
    {
        name: "퐁당 오 쇼콜라",
        descriptiveName: "진한 초콜릿 퐁당",
        origin: "서양식",
        texture: "쫀득한",
        ingredient: "크림",
        pairingId: 1,
        emoji: "🍫",
        photo: "디저트 사진/퐁당오쇼콜라.png",
        description: "초콜릿 퐁당은 진한 초코 크림이 쏟아져내리는데, 진한 맛을 쓴 커피가 잡아주어 밸런스가 잘 맞아."
    },
    {
        name: "약과",
        descriptiveName: "달콤한 약과",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "견과류",
        pairingId: 1,
        emoji: "🍯",
        photo: "디저트 사진/약과.png",
        description: "약과는 꿀과 조청을 머금어 깊은 단맛과 꾸덕한 식감을 내는데, 진한 단맛을 에스프레소의 쓴맛이 잡아주어 밸런스가 아주 잘 맞아."
    },
    {
        name: "개성주악",
        descriptiveName: "쫀득한 개성주악",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "견과류",
        pairingId: 1,
        emoji: "🍡",
        photo: "디저트 사진/개성주악.png",
        description: "개성주악은 즙청을 가득 품고 있어 겉은 바삭하고 속은 즙이 촉촉한 떡인데, 기름지면서도 진한 단맛을 진한 블랙 커피가 깔끔하게 잡아주어 잘 어울려."
    },
    {
        name: "화과자",
        descriptiveName: "이쁜 화과자",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "견과류",
        pairingId: 3,
        emoji: "🌸",
        photo: "디저트 사진/화과자.png",
        description: "화과자는 앙금을 빚어 만든 정교하고 우아한 풍미의 전통 디저트인데, 연한 드립 커피에 살짝 찍으면 앙금의 은은한 향을 방해하지 않고 부드럽게 녹아내려."
    },
    {
        name: "양갱",
        descriptiveName: "달콤한 양갱",
        origin: "동양식",
        texture: "부드러운",
        ingredient: "견과류",
        pairingId: 3,
        emoji: "🧱",
        photo: "디저트 사진/양갱.png",
        description: "양갱은 팥이나 밤을 부드럽게 굳혀 입안에서 미끄러지듯 단맛을 내는데, 연한 드립 커피와 함께하면 양갱 본연의 고유한 단맛을 가리지 않고 차분하게 즐기기 좋아."
    },
    {
        name: "모나카",
        descriptiveName: "바삭고소 모나카",
        origin: "동양식",
        texture: "바삭한",
        ingredient: "견과류",
        pairingId: 3,
        emoji: "🥯",
        photo: "디저트 사진/모나카.png",
        description: "모나카는 얇은 찹쌀 피 속에 달콤한 팥소가 듬뿍 들어간 동양 디저트인데, 피가 커피를 머금으며 사르르 녹아내려 팥 앙금과 조화로운 풍미를 자아내."
    },
    {
        name: "마들렌",
        descriptiveName: "촉촉한 마들렌",
        origin: "서양식",
        texture: "부드러운",
        ingredient: "곡물",
        pairingId: 3,
        emoji: "🧁",
        photo: "디저트 사진/마들렌.png",
        description: "마들렌은 부드러운 조개 모양에 상큼한 레몬 향과 고소한 버터 풍미를 가졌는데, 연한 드립 커피에 찍어 먹으면 빵 사이에 촉촉함이 더해져 깊은 여운을 남겨."
    },
    {
        name: "휘낭시에",
        descriptiveName: "고소한 휘낭시에",
        origin: "서양식",
        texture: "쫀득한",
        ingredient: "곡물",
        pairingId: 3,
        emoji: "🥮",
        photo: "디저트 사진/휘낭시에.png",
        description: "휘낭시에는 구운 버터와 아몬드 가루 덕분에 고소하고 버터 맛이 매우 짙은데, 드립 커피가 버터 향을 부드럽게 감싸 안아 본연의 풍미를 방해하지 않고 살려줘."
    },
    {
        name: "터키시 딜라이트",
        descriptiveName: "달콤한 터키시 딜라이트",
        origin: "서양식",
        texture: "쫀득한",
        ingredient: "견과류",
        pairingId: 2,
        emoji: "🍬",
        photo: "디저트 사진/터키쉬딜라이트.png",
        description: "터키시 딜라이트는 전분과 설탕으로 만든 젤리 같은 쫀득함과 꽃 향을 내는데, 깔끔한 아메리카노가 단맛을 씻어주어 한입씩 먹을 때마다 질리지 않고 즐길 수 있어."
    },
    {
        name: "과일 찹쌀떡",
        descriptiveName: "상큼한 과일 찹쌀떡",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "과일",
        pairingId: 5,
        emoji: "🍓",
        photo: "디저트 사진/과일찹쌀떡.png",
        description: "과일 찹쌀떡은 쫀득한 찹쌀떡 안에 상큼한 생과일과 달콤한 팥소가 들어있는데, 라떼를 같이 마시면 부드러운 우유 향이 과일의 신맛을 감싸 안아 한결 편안해져."
    },
    {
        name: "인절미",
        descriptiveName: "고소한 인절미",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "곡물",
        pairingId: 5,
        emoji: "🍡",
        photo: "디저트 사진/인절미.png",
        description: "인절미는 쫀득한 찹쌀 떡에 고소한 콩고물을 듬뿍 묻혀 씹을수록 구수한 전통 떡인데, 부드럽고 든든한 라떼가 콩고물과 어우러지며 인절미의 구수한 질감을 극대화해줘."
    },
    {
        name: "찹쌀 도넛",
        descriptiveName: "쫄깃한 찹쌀 도넛",
        origin: "동양식",
        texture: "쫀득한",
        ingredient: "곡물",
        pairingId: 5,
        emoji: "🍩",
        photo: "디저트 사진/찹쌀도넛.png",
        description: "찹쌀 도넛은 겉은 튀겨져 바삭하고 속은 쫄깃하며 달콤한 팥 앙금을 품었는데, 라떼의 우유 거품과 부드러움이 튀긴 기름 맛을 포근하게 안아주어 질감을 극대화해."
    },
    {
        name: "과일맛 마카롱",
        descriptiveName: "상큼한 과일맛 마카롱",
        origin: "서양식",
        texture: "쫀득한",
        ingredient: "과일",
        pairingId: 3,
        emoji: "🧁",
        photo: "디저트 사진/과일맛마카롱.png",
        description: "과일맛 마카롱은 바삭하고 쫀득한 꼬끄 사이에 상큼한 과일 필링이 가득 차있는데, 연한 드립 커피와 함께하면 마카롱의 과일 풍미가 커피 향과 향긋하게 어우러져 잘 어울려."
    }
];

// ================= PAIRING INFO =================
const PAIRINGS = {
    1: {
        headerPrefix: "진하고 강렬한 맛을 원하는 너에게",
        actionText: "에스프레소를 홀짝대기",
        reason: "진한 단맛을 쓴맛이 잡아주어 밸런스가 아주 잘 맞아.",
        coffeeEmoji: "☕"
    },
    2: {
        headerPrefix: "씹는 즐거움과 리듬감을 느끼고 싶은 너에게",
        actionText: "아메리카노와 번갈아 먹기",
        reason: "씹는 즐거움과 입안의 식감 변화로 먹는 리듬감을 충분히 즐길 수 있어.",
        coffeeEmoji: "🥤"
    },
    3: {
        headerPrefix: "은은하고 깊은 풍미를 음미하고 싶은 너에게",
        actionText: "연한 드립 커피에 찍어먹기",
        reason: "재료 본연의 깊은 풍미를 방해하지 않고 은은하게 음미하며 먹을 수 있어.",
        coffeeEmoji: "☕"
    },
    4: {
        headerPrefix: "완벽한 조화와 풍부한 맛을 느끼고 싶은 너에게",
        actionText: "커피가 들어간 스위츠를 먹기",
        reason: "커피의 은은한 향이 디저트 고유의 향을 방해하지 않고 오히려 조화롭게 살려줘.",
        coffeeEmoji: "🍨"
    },
    5: {
        headerPrefix: "부드럽고 포근한 위로가 필요한 너에게",
        actionText: "라떼나 부드러운 음료와 같이 먹기",
        reason: "우유의 부드러움이 디저트의 질감을 극대화하여 훨씬 편안하고 포근한 느낌을 줘.",
        coffeeEmoji: "🥛"
    }
};

// ================= APP STATE =================
let selections = {
    origin: null,
    texture: null,
    ingredient: null
};

// ================= DOM ELEMENTS =================
const screens = {
    intro: document.getElementById('screen-intro'),
    question: document.getElementById('screen-question'),
    loading: document.getElementById('screen-loading'),
    result: document.getElementById('screen-result'),
    fail: document.getElementById('screen-fail')
};

const btnStart = document.getElementById('btn-start');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnRestartSuccess = document.getElementById('btn-restart-success');
const btnRestartFail = document.getElementById('btn-restart-fail');

// Options selection setup
const optionContainers = document.querySelectorAll('.options-container');

// ================= HELPER FUNCTIONS =================
function showScreen(screenKey) {
    Object.keys(screens).forEach(key => {
        screens[key].classList.remove('active');
    });
    screens[screenKey].classList.add('active');
}

// Korean particle helper (eulleul: 을/를, wagwa: 와/과, ro: 로/으로)
function getParticle(word, type) {
    const lastChar = word.charCodeAt(word.length - 1);
    if (lastChar >= 0xAC00 && lastChar <= 0xD7A3) {
        const batchim = (lastChar - 0xAC00) % 28;
        if (type === 'eulleul') {
            return batchim > 0 ? '을' : '를';
        } else if (type === 'wagwa') {
            return batchim > 0 ? '과' : '와';
        } else if (type === 'ro') {
            return (batchim > 0 && batchim !== 8) ? '으로' : '로';
        }
    }
    if (type === 'eulleul') return '를';
    if (type === 'wagwa') return '와';
    if (type === 'ro') return '로';
}

function updateNextButtonState() {
    const isReady = selections.origin && selections.texture && selections.ingredient;
    btnNext.disabled = !isReady;
}

function resetSelections() {
    selections = {
        origin: null,
        texture: null,
        ingredient: null
    };
    
    // Clear selected styles
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    updateNextButtonState();
}

function findMatchingDessert() {
    const matches = DESSERTS.filter(dessert => {
        return dessert.origin === selections.origin &&
               dessert.texture === selections.texture &&
               dessert.ingredient === selections.ingredient;
    });

    if (matches.length === 0) return null;
    
    // Randomly pick one if multiple match
    const randomIndex = Math.floor(Math.random() * matches.length);
    return matches[randomIndex];
}

// Character illustration image file mapping based on pairing ID
const ILLUSTRATION_IMAGES = {
    1: "결론_홀짝이며.png",
    2: "결론_한입씩.png",
    3: "결론_찍어서.png",
    4: "결론_섞어서.png",
    5: "결론_한입씩.png" // "라떼와 같이 먹기는 번갈아 먹기와 같은 결론_한입씩 이미지로 넣어줘."
};

function displayResult(dessert) {
    const pairing = PAIRINGS[dessert.pairingId];
    
    // Update selected hashtags
    const tagsContainer = document.getElementById('result-tags');
    tagsContainer.innerHTML = `
        <span class="tag-capsule">#${dessert.origin}</span>
        <span class="tag-capsule">#${dessert.texture}</span>
        <span class="tag-capsule">#${dessert.ingredient}</span>
    `;
    
    // Update Emojis
    document.getElementById('result-emoji').textContent = dessert.emoji;
    document.getElementById('result-coffee-emoji').textContent = pairing.coffeeEmoji;
    
    // Set Character illustration image
    const charImg = document.getElementById('result-character-img');
    charImg.src = ILLUSTRATION_IMAGES[dessert.pairingId];
    charImg.alt = pairing.actionText;
    // pairingId 3(찍어먹기)은 150px, 나머지는 140px
    charImg.classList.toggle('large', dessert.pairingId === 3);
    
    // Build Action Text
    const actionTextElement = document.getElementById('result-action-text');
    if (dessert.pairingId === 4) {
        // 부드러운 티라미수로 커피가 들어간 스위츠를 먹기
        const particle = getParticle(dessert.descriptiveName, 'ro');
        actionTextElement.innerHTML = `<strong>${dessert.descriptiveName}</strong>${particle}<br>${pairing.actionText}`;
    } else if (pairing.actionText.includes('먹')) {
        // "먹"이 들어간 페어링이면 "먹으며"를 제외하여 중복 방지 (예: 고소한 크루아상을 아메리카노와 번갈아 먹기)
        const particle = getParticle(dessert.descriptiveName, 'eulleul');
        actionTextElement.innerHTML = `<strong>${dessert.descriptiveName}</strong>${particle}<br>${pairing.actionText}`;
    } else {
        // "먹"이 없으면 "먹으며"를 붙여 연결 (예: 달콤한 약과를 먹으며 에스프레소를 홀짝대기)
        const particle = getParticle(dessert.descriptiveName, 'eulleul');
        actionTextElement.innerHTML = `<strong>${dessert.descriptiveName}</strong>${particle} 먹으며<br>${pairing.actionText}`;
    }
    
    // Set dessert photo
    const dessertImg = document.getElementById('result-dessert-img');
    if (dessertImg) {
        dessertImg.src = dessert.photo || '';
        dessertImg.alt = dessert.name;
    }
    
    // Update Reason (The detailed explanation)
    document.getElementById('result-reason-text').textContent = dessert.description;
}

// ================= EVENT LISTENERS =================

// Start Button
btnStart.addEventListener('click', () => {
    resetSelections();
    showScreen('question');
});

// Option Selection Buttons
optionContainers.forEach(container => {
    const category = container.getAttribute('data-category');
    const buttons = container.querySelectorAll('.option-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Unselect all other buttons in this group
            buttons.forEach(btn => btn.classList.remove('selected'));
            
            // Toggle selection
            button.classList.add('selected');
            selections[category] = button.getAttribute('data-value');
            
            updateNextButtonState();
        });
    });
});

// Previous Navigation Button
btnPrev.addEventListener('click', () => {
    showScreen('intro');
});

// Next Navigation Button
btnNext.addEventListener('click', () => {
    const matchedDessert = findMatchingDessert();

    // Show loading screen first
    showScreen('loading');
    
    // Transition after 1.5s delay
    setTimeout(() => {
        if (matchedDessert) {
            displayResult(matchedDessert);
            showScreen('result');
        } else {
            showScreen('fail');
        }
    }, 1500);
});

// Restart Buttons
btnRestartSuccess.addEventListener('click', () => {
    resetSelections();
    showScreen('intro');
});

btnRestartFail.addEventListener('click', () => {
    resetSelections();
    showScreen('intro');
});

// Initial Setup
resetSelections();
