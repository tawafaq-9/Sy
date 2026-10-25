/* ==========================================================
   تَوافق - ملف البرمجة والمنطق الأساسي (script.js - النسخة النهائية المحدثة)
   ========================================================== */

var defaultQuestionsBank = [
    {
        id: 1,
        question: "ما هو النشاط المفضل للأوقات المشتركة؟",
        options: ["مشاهدة أفلام ومسلسلات 🎬", "ألعاب وتحديات 🎮", "سهر ومشاوير 🌙", "أكل وطبخ 🍕"],
        iconKeys: ["movie", "gamepad", "moon", "pizza"]
    },
    {
        id: 2,
        question: "إذا صار سوء فهم، كيف يتصرف غالباً؟",
        options: ["يحاور بهدوء 💬", "ينسحب ويهدأ أولاً 🧘", "يزعل بسرعة 😅", "يغير الموضوع دغري 🔀"],
        iconKeys: ["chat", "meditation", "face", "shuffle"]
    },
    {
        id: 3,
        question: "ما هي الميزة الأبرز في شخصيته؟",
        options: ["الوفاء والصدق 🤝", "خفة الدم والضحك 😂", "الذكاء والحكمة 🧠", "الهدوء والطيبة 🌸"],
        iconKeys: ["handshake", "laugh", "brain", "flower"]
    },
    {
        id: 4,
        question: "كيف يعبر عن اهتمامه وتوافق ودّه؟",
        options: ["بالأفعال والوقفة 🛡️", "بالكلام الطيب 💌", "بالهدايا والمفاجآت 🎁", "بالمساعدة اليومية 🛠️"],
        iconKeys: ["shield", "envelope", "gift", "tools"]
    },
    {
        id: 5,
        question: "ما هو المشروب الأساسي اليومي؟",
        options: ["قهوة سادة / تركية ☕", "شاي 🍵", "عصائر ومشروبات باردة 🥤", "متة 🧉"],
        iconKeys: ["coffee", "tea", "cup", "mate"]
    },
    {
        id: 6,
        question: "طريقته المفضلة للترويق واستعادة الطاقة؟",
        options: ["النوم والاسترخاء 😴", "الاستماع للموسيقى 🎧", "الخروج للطبيعة 🌿", "الأكل والحلويات 🎂"],
        iconKeys: ["sleep", "headphones", "nature", "cake"]
    },
    {
        id: 7,
        question: "صفة لا يتحملها في الأشخاص؟",
        options: ["الكذب والنفاق 🤥", "البخل 💰", "التصنع والتكبر 👑", "النكد والشكوى 🤦"],
        iconKeys: ["lie", "money", "crown", "annoyed"]
    },
    {
        id: 8,
        question: "كيف يخطط للرحلات والمشاريع؟",
        options: ["يخطط بكل التفاصيل 📋", "عفوية وارتجال 🎲", "حسب المزاج والجو ⛅", "يترك التخطيط لغيره 🙋"],
        iconKeys: ["plan", "dice", "weather", "relax"]
    },
    {
        id: 9,
        question: "ما نوع الهدية الأقرب لقلبه؟",
        options: ["شيء يحتاجه فعلياً 📦", "هدية معنوية تذكارية 💖", "ساعة أو اكسسوار ⌚", "عزومة على وجبة ممتازة 🍔"],
        iconKeys: ["box", "heart", "watch", "burger"]
    },
    {
        id: 10,
        question: "ردة فعله في المواقف المفاجئة؟",
        options: ["سرعة تصرف وبديهة ⚡", "تفكير وتريث 🔍", "توتر ومحاولة سيطرة 🌀", "مرونة وضحك 😃"],
        iconKeys: ["flash", "search", "stress", "smile"]
    },
    {
        id: 11,
        question: "كيف يقضي سهراته غالباً؟",
        options: ["قعدة بيتية هادئة 🛋️", "طلعة مع الشلة والأصدقاء 🚗", "تصفح وموبايل وسوشيال ميديا 📱", "ألعاب إلكترونية وبلايستيشن 🎮"],
        iconKeys: ["sofa", "car", "phone", "controller"]
    },
    {
        id: 12,
        question: "ما هي طريقته في اتخاذ القرارات المهمة؟",
        options: ["دراسة كل التفاصيل بعقلانية 🧠", "حسب الإحساس والحدس ❤️", "استشارة المقربين أولاً 👥", "على البركة وبدون تردد 🎲"],
        iconKeys: ["mind", "emotion", "group", "luck"]
    },
    {
        id: 13,
        question: "ما هو الفصل الأفضل بالنسبة له؟",
        options: ["الشتاء والمطر 🌧️", "الصيف والبحر 🏖️", "الربيع والطبيعة 🌷", "الخريف والجو الرايق 🍂"],
        iconKeys: ["rain", "beach", "spring", "autumn"]
    },
    {
        id: 14,
        question: "كيف يتعامل مع ضغط الشغل أو الدراسة؟",
        options: ["يتحمل بصبر لآخر لحظة 🦾", "يفصل ويعمل استراحة دغري ☕", "يتوتر ويبتسم بصعوبة 😅", "ينظم وقته بدقة متناهية 📅"],
        iconKeys: ["strength", "break", "smile", "calendar"]
    },
    {
        id: 15,
        question: "أكثر مكان يحب يروح له بالسفر أو التنزه؟",
        options: ["الطبيعة والجبال 🌲", "المدينة الصاخبة والأسواق 🏙️", "البحر والساحل 🌊", "البيت والراحة الاستثنائية 🛏️"],
        iconKeys: ["forest", "city", "ocean", "bed"]
    },
    {
        id: 16,
        question: "شو أكتر أكلة بحبها عالغداء؟",
        options: ["مشاوي ولحوم 🥩", "أكلات منسف أو طبخ عربي 🍲", "وجبات سريعة وبيرجر 🍔", "معجنات ومأكولات خفيفة 🥧"],
        iconKeys: ["meat", "soup", "fastfood", "pie"]
    },
    {
        id: 17,
        question: "شو ردة فعله لما حدا يتأخر عليه بموعد؟",
        options: ["يعذر الطرف الآخر ويتفهم 🤝", "يزعل ويعصب بصمت 🔕", "يبادلها بتأخير مماثل بالحملة القادمة ⏱️", "يطول باله للآخر بس بيعاتب بلطف 💬"],
        iconKeys: ["forgive", "quiet", "timer", "talk"]
    },
    {
        id: 18,
        question: "كيف يقضي يوم العطلة والراحة؟",
        options: ["نوم طويل وتعويض ساعات السهر 🛌", "ترتيب البيت وتعديل الغرض 🧹", "طلعة ومشوار طويل 🚗", "قعدة قهوة مع كتاب أو مسلسل 📖"],
        iconKeys: ["sleep", "clean", "trip", "book"]
    },
    {
        id: 19,
        question: "ما هي لغة الحب أو التعبير الأقرب له؟",
        options: ["الكلمات الطيبة والمديح 💌", "الأفعال والخدمات المساندة 🛠️", "الوقت النوعي والمشاركة ⏳", "اللمسات والهدايا الرمزية 🎁"],
        iconKeys: ["letter", "service", "time", "present"]
    },
    {
        id: 20,
        question: "شو طابعه الغالب أول ما يصحى من النوم؟",
        options: ["رايق وببتسم للكل ☀️", "صامت وما بحب حدا يحكيه لحد ما يشرب قهوتو ☕", "دايخ وبده ربع ساعة ليعي تماماً 🥴", "نشيط وببلش يومه بسرعة ⚡"],
        iconKeys: ["sun", "coffee", "dizzy", "energy"]
    }
];

var quizState = {
    creatorName: "",
    gender: "male",
    age: 28,
    relation: "friend",
    count: 10,
    theme: "youth",
    isPrivate: false,
    questions: [],
    creatorAnswers: {}, 
    takerName: "",
    takerAnswers: {},   
    currentPlayIndex: 0
};

document.addEventListener("DOMContentLoaded", () => {
    initUIEvents();
    checkURLParameters();
});

function initUIEvents() {
    // التقاط الكروت (الجنس، العلاقة، عدد الأسئلة) بشكل مرن يدعم الـ HTML الحالي
    document.querySelectorAll('.select-card, .option-card').forEach(card => {
        card.addEventListener('click', function() {
            const group = this.getAttribute('data-group') || checkCardGroup(this);
            if (!group) return;

            document.querySelectorAll(`[data-group="${group}"], .select-card`).forEach(c => {
                if(c.getAttribute('data-group') === group) c.classList.remove('active');
            });
            this.classList.add('active');

            const val = this.getAttribute('data-value');
            if (group === 'gender') quizState.gender = val;
            if (group === 'relation') quizState.relation = val;
            if (group === 'count') quizState.count = parseInt(val);

            autoUpdateTheme();
        });
    });

    const toQuestionsBtn = document.getElementById('to-questions-btn');
    if (toQuestionsBtn) {
        toQuestionsBtn.addEventListener('click', goToQuestionsBuilder);
    }

    const generateBtn = document.getElementById('generate-quiz-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateQuizDashboard);
    }

    const copyBtn = document.getElementById('copy-link-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyShareLink);
    }

    const startPlayBtn = document.getElementById('start-test-play-btn');
    if (startPlayBtn) {
        startPlayBtn.addEventListener('click', startQuizPlay);
    }

    const nextPlayBtn = document.getElementById('next-play-q-btn');
    if (nextPlayBtn) {
        nextPlayBtn.addEventListener('click', handleNextPlayQuestion);
    }
}

function checkCardGroup(element) {
    // تحديد المجموعة في حال لم يتم وضع data-group بالـ HTML مباشرة
    const text = element.innerText;
    if (text.includes("ذكر") || text.includes("أنثى")) return "gender";
    if (text.includes("أخ") || text.includes("صديق") || text.includes("حبيب") || text.includes("زوج")) return "relation";
    if (text.includes("10") || text.includes("15") || text.includes("20")) return "count";
    return null;
}

function autoUpdateTheme() {
    quizState.theme = (quizState.gender === 'female') ? 'cute' : 'youth';
    document.body.className = `theme-${quizState.theme}`;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
}

function getProIconClass(key) {
    const iconsMap = {
        "movie": "fa-film", "gamepad": "fa-gamepad", "moon": "fa-moon", "pizza": "fa-pizza-slice",
        "chat": "fa-comments", "meditation": "fa-spa", "face": "fa-face-smile", "shuffle": "fa-shuffle",
        "handshake": "fa-handshake", "laugh": "fa-face-laugh", "brain": "fa-brain", "flower": "fa-seedling",
        "shield": "fa-shield-halved", "envelope": "fa-envelope-open-text", "gift": "fa-gift", "tools": "fa-screwdriver-wrench",
        "coffee": "fa-mug-hot", "tea": "fa-mug-saucer", "cup": "fa-glass-water", "mate": "fa-leaf",
        "sleep": "fa-bed", "headphones": "fa-headphones", "nature": "fa-tree", "cake": "fa-cake-candles",
        "lie": "fa-face-rolling-eyes", "money": "fa-wallet", "crown": "fa-crown", "annoyed": "fa-face-angry",
        "plan": "fa-clipboard-list", "dice": "fa-dice", "weather": "fa-cloud-sun", "relax": "fa-couch",
        "box": "fa-box-open", "heart": "fa-heart", "watch": "fa-clock", "burger": "fa-burger",
        "flash": "fa-bolt", "search": "fa-magnifying-glass", "stress": "fa-triangle-exclamation", "smile": "fa-face-smile-beam"
    };
    return iconsMap[key] || "fa-star";
}

function goToQuestionsBuilder() {
    const nameInput = document.getElementById('creator-name');
    if (nameInput && !nameInput.value.trim()) {
        alert("يرجى كتابة اسمك أولاً بمربع الاسم!");
        return;
    }

    quizState.creatorName = nameInput.value.trim();
    quizState.age = parseInt(document.getElementById('creator-age').value) || 28;

    let selectedCount = quizState.count || 10;
    let shuffled = [...defaultQuestionsBank].sort(() => 0.5 - Math.random());
    quizState.questions = JSON.parse(JSON.stringify(shuffled.slice(0, selectedCount)));

    renderQuestionsForCreator();
    showScreen('screen-questions-builder');
}

function renderQuestionsForCreator() {
    const container = document.getElementById('questions-list-container');
    if(!container) return;
    container.innerHTML = '';

    quizState.questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'input-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label class="input-label" style="margin-bottom: 0;">${index + 1}. ${q.question}</label>
            </div>
            <div class="cards-grid relation-grid" id="q-options-${q.id}">
                ${q.options.map((opt, optIdx) => `
                    <div class="select-card creator-opt ${quizState.creatorAnswers[q.id] === optIdx ? 'active' : ''}" data-qid="${q.id}" data-opt="${optIdx}" style="cursor:pointer; padding:12px; border:1px solid #ddd; border-radius:10px; margin-bottom:5px; text-align:center;">
                        <div class="card-title">${opt}</div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll('.creator-opt').forEach(optCard => {
        optCard.addEventListener('click', function() {
            const qid = parseInt(this.getAttribute('data-qid'));
            const optIdx = parseInt(this.getAttribute('data-opt'));

            document.querySelectorAll(`.creator-opt[data-qid="${qid}"]`).forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            quizState.creatorAnswers[qid] = optIdx;
        });
    });
}

function generateQuizDashboard() {
    if (quizState.questions.length === 0) {
        alert("يجب أن يحتوي الاختبار على أسئلة!");
        return;
    }

    const payload = btoa(encodeURIComponent(JSON.stringify({
        cName: quizState.creatorName,
        theme: quizState.theme,
        ans: quizState.creatorAnswers,
        qs: quizState.questions
    })));

    const shareUrl = `${window.location.origin}${window.location.pathname}?quiz=${payload}`;
    const linkInput = document.getElementById('shareable-link-input');
    if(linkInput) linkInput.value = shareUrl;

    showScreen('screen-dashboard');
}

function copyShareLink() {
    const input = document.getElementById('shareable-link-input');
    if(input) {
        input.select();
        document.execCommand('copy');
        alert("تم نسخ رابط الاختبار بنجاح!");
    }
}

function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizDataParam = urlParams.get('quiz');

    if (quizDataParam) {
        try {
            const decoded = JSON.parse(decodeURIComponent(atob(quizDataParam)));
            quizState.creatorName = decoded.cName;
            quizState.theme = decoded.theme;
            quizState.creatorAnswers = decoded.ans;
            quizState.questions = decoded.qs;

            document.body.className = `theme-${quizState.theme}`;
            const titleEl = document.getElementById('taker-quiz-title');
            if(titleEl) titleEl.innerText = `اختبار التوافق مع ${quizState.creatorName}`;
            
            showScreen('screen-taker-welcome');
        } catch (e) {
            showScreen('screen-setup');
        }
    } else {
        showScreen('screen-setup');
    }
}

function startQuizPlay() {
    const takerInput = document.getElementById('taker-name-input');
    if (takerInput && !takerInput.value.trim()) {
        alert("يرجى إدخال اسمك للبدء!");
        return;
    }

    quizState.takerName = takerInput ? takerInput.value.trim() : "صديق";
    quizState.currentPlayIndex = 0;
    quizState.takerAnswers = {};

    const totalEl = document.getElementById('total-q-num');
    if(totalEl) totalEl.innerText = quizState.questions.length;
    
    renderPlayQuestion();
    showScreen('screen-quiz-play');
}

function renderPlayQuestion() {
    const q = quizState.questions[quizState.currentPlayIndex];
    const currEl = document.getElementById('current-q-num');
    if(currEl) currEl.innerText = quizState.currentPlayIndex + 1;

    const container = document.getElementById('quiz-play-container');
    if(!container) return;

    container.innerHTML = `
        <div class="card-box text-center">
            <h3 class="main-title" style="margin-bottom: 15px;">${q.question}</h3>
            <div class="cards-grid relation-grid">
                ${q.options.map((opt, idx) => `
                    <div class="select-card taker-opt" data-opt="${idx}" style="cursor:pointer; padding:12px; border:1px solid #ddd; border-radius:10px; margin-bottom:8px;">
                        <div class="card-title">${opt}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const nextBtn = document.getElementById('next-play-q-btn');
    if(nextBtn) nextBtn.disabled = true;

    document.querySelectorAll('.taker-opt').forEach(optCard => {
        optCard.addEventListener('click', function() {
            const optIdx = parseInt(this.getAttribute('data-opt'));
            document.querySelectorAll('.taker-opt').forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            quizState.takerAnswers[q.id] = optIdx;
            if(nextBtn) nextBtn.disabled = false;
        });
    });
}

function handleNextPlayQuestion() {
    if (quizState.currentPlayIndex < quizState.questions.length - 1) {
        quizState.currentPlayIndex++;
        renderPlayQuestion();
    } else {
        calculateAndShowResult();
    }
}

function calculateAndShowResult() {
    let correctCount = 0;
    quizState.questions.forEach(q => {
        if (quizState.takerAnswers[q.id] === quizState.creatorAnswers[q.id]) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / quizState.questions.length) * 100);
    const scoreEl = document.getElementById('final-score-percent');
    if(scoreEl) scoreEl.innerText = percentage;

    showScreen('screen-result');
}
