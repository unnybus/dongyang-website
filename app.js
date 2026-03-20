// =============================================
// DONGYANG DEVELOPMENT - Property Sales SPA
// =============================================

// --- State ---
let currentLocation = 'sjlabella';
let currentSubLocation = 0;
let lightboxImages = [];
let lightboxIndex = 0;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initLightbox();
    renderLocation(currentLocation);
});

// --- Navigation ---
function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const loc = tab.dataset.location;
            if (loc === currentLocation) return;
            switchLocation(loc);
        });
    });

    document.getElementById('logoLink').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });
}

// --- Location Switching ---
function switchLocation(loc) {
    currentLocation = loc;
    currentSubLocation = 0;

    document.querySelectorAll('.nav-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.location === loc);
    });

    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('mobileMenuBtn').classList.remove('active');

    renderLocation(loc);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLocation(loc) {
    const brand = LOCATIONS[loc];
    if (!brand) return;
    const sub = brand.subLocations[currentSubLocation] || brand.subLocations[0];

    // Hero
    document.querySelectorAll('.hero-img').forEach(img => {
        img.src = sub.heroImg;
        if (sub.heroImg.includes('hero-sungsan')) {
            img.style.objectPosition = 'center bottom';
        } else {
            img.style.objectPosition = '';
        }
        img.classList.add('active');
    });
    document.getElementById('heroBadge').textContent = brand.badge;
    document.getElementById('heroTitle').textContent = brand.name;
    document.getElementById('heroSubtitle').textContent = brand.subtitle;

    // Features (from first sub-location)
    renderFeatures(sub.features);

    // Properties (from ALL sub-locations)
    renderProperties(brand, loc);

    // Gallery removed from main page - now in property detail modal

    // Location
    document.getElementById('addressText').textContent = sub.address;
    document.getElementById('mapCardTitle').textContent = sub.name;
    document.getElementById('mapCardAddr').textContent = sub.address;
    renderAmenities(sub.amenities);

    // Map - Kakao Maps JS API
    initKakaoMap(sub.mapCoord.lat, sub.mapCoord.lng, sub.name);

    // Sub-location tabs
    renderSubLocationTabs(brand, loc);

    // Contact form
    const locationSelect = document.getElementById('interestLocation');
    if (locationSelect) {
        for (let opt of locationSelect.options) {
            if (opt.value === brand.name) { opt.selected = true; break; }
        }
    }

    setTimeout(initAnimations, 100);
}

// --- Sub-Location Tabs ---
function renderSubLocationTabs(brand, loc) {
    let tabContainer = document.getElementById('subLocationTabs');
    if (!tabContainer) {
        const hero = document.getElementById('heroSection');
        tabContainer = document.createElement('div');
        tabContainer.id = 'subLocationTabs';
        tabContainer.className = 'sub-location-tabs';
        hero.parentNode.insertBefore(tabContainer, hero.nextSibling);
    }

    if (brand.subLocations.length <= 1) {
        tabContainer.style.display = 'none';
        return;
    }

    tabContainer.style.display = '';
    tabContainer.innerHTML = brand.subLocations.map((s, i) => `
        <button class="sub-tab ${i === currentSubLocation ? 'active' : ''}" onclick="switchSubLocation('${loc}', ${i})">
            📍 ${s.name}
        </button>
    `).join('');
}

function switchSubLocation(loc, idx) {
    currentSubLocation = idx;
    renderLocation(loc);
}

// --- Render Functions ---
function renderFeatures(features) {
    const grid = document.getElementById('featuresGrid');
    grid.innerHTML = features.map(f => `
        <div class="feature-card anim-in">
            <span class="feature-icon">${f.icon}</span>
            <div class="feature-title">${f.title}</div>
            <div class="feature-desc">${f.desc.replace(/\n/g, '<br>')}</div>
        </div>
    `).join('');
}

function renderProperties(brand, locationKey) {
    const grid = document.getElementById('propertiesGrid');
    const allProperties = brand.subLocations.flatMap((sub, subIdx) =>
        sub.properties.map((p, pIdx) => ({ ...p, subIdx, pIdx, subName: sub.name, subHeroImg: sub.heroImg }))
    );

    document.getElementById('propertyDesc').textContent =
        `${brand.name} — 현재 ${allProperties.length}개 매물 계약 가능`;

    let currentSub = '';
    grid.innerHTML = allProperties.map(p => {
        const typeClass = p.type === 'medical' ? 'medical' : (p.type === 'officetel' ? 'officetel' : 'commercial');
        const typeLabel = p.type === 'medical' ? '병의원 임대 희망' : (p.type === 'officetel' ? '오피스텔' : '상가');
        const unitIcon = p.type === 'medical' ? '🏥' : (p.type === 'officetel' ? '🏠' : '🏪');
        const floorDisplay = p.unit.replace(/[^0-9BF층]/g, '') || p.unit;
        const statusBadge = p.status === 'vacant'
            ? '<span class="badge badge--vacant">공실</span>'
            : (p.status === 'occupied' ? '<span class="badge badge--occupied">운영중</span>' : '');

        let subHeader = '';
        if (brand.subLocations.length > 1 && p.subName !== currentSub) {
            currentSub = p.subName;
            subHeader = `<div class="property-sub-header">📍 ${p.subName}</div>`;
        }

        const dealLabel = p.dealType === 'both' ? '분양·임대' : (p.dealType === 'lease' ? '임대' : '분양');
        const useLabel = p.status === 'vacant' ? '선호업종' : '현재업종';

        return `
            ${subHeader}
            <div class="property-card anim-in" onclick="openPropertyDetail('${locationKey}', ${p.subIdx}, ${p.pIdx})" style="cursor:pointer">
                <div class="property-card-visual" style="background: linear-gradient(to bottom, rgba(15,25,35,0.1), rgba(15,25,35,0.7)), url('${p.subHeroImg}') center/cover no-repeat;">
                    <span class="floor-number" style="color: rgba(255,255,255,0.6);">${floorDisplay}</span>
                    <div class="property-badges">
                        ${statusBadge}
                        <span class="badge badge--${typeClass}">${typeLabel}</span>
                        ${(p.tags || []).map(t => `<span class="badge badge--tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="property-card-body">
                    <div class="property-unit">${p.unit}</div>
                    <div class="property-building">${p.building}</div>
                    <div class="property-details">
                        <div class="property-detail">
                            <span class="property-detail-icon">📐</span>
                            <span>${(() => { const m = p.area.match(/([\d.]+)/); return m ? '전용 ' + Math.round(parseFloat(m[1]) / 3.3058) + '평' : p.area; })()}</span>
                        </div>
                        <div class="property-detail">
                            <span class="property-detail-icon">${unitIcon}</span>
                            <span>${p.use}</span>
                        </div>
                    </div>
                    <div class="property-deal-badges">
                        <span class="badge badge--deal">${dealLabel}</span>
                    </div>
                    <div class="property-card-cta">상세보기 →</div>
                </div>
            </div>
        `;
    }).join('');
}

function filterPdmGallery(category) {
    const items = document.querySelectorAll('.pdm-gallery-item');
    const tabs = document.querySelectorAll('.pdm-gallery-tab');
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.category === category));
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function renderAmenities(amenities) {
    const container = document.getElementById('locationAmenities');
    container.innerHTML = amenities.map(a => `
        <div class="amenity-item anim-in">
            <span class="amenity-icon">${a.icon}</span>
            <div class="amenity-info">
                <div class="amenity-name">${a.name}</div>
                <div class="amenity-detail">${a.detail}</div>
            </div>
        </div>
    `).join('');
}

// --- Scroll Effects ---
// --- Kakao Map ---
let kakaoMapInstance = null;

function initKakaoMap(lat, lng, title) {
    const container = document.getElementById('kakaoMap');
    if (!container) return;

    const position = new kakao.maps.LatLng(lat, lng);

    if (kakaoMapInstance) {
        // Re-center existing map
        kakaoMapInstance.setCenter(position);
        // Clear old markers/overlays
        kakaoMapInstance = null;
    }

    const options = {
        center: position,
        level: 3
    };

    kakaoMapInstance = new kakao.maps.Map(container, options);

    // Marker
    const marker = new kakao.maps.Marker({
        position: position,
        map: kakaoMapInstance
    });

    // Custom overlay with property name
    const overlayContent = `
        <div style="
            padding: 8px 16px;
            background: #1a1a2e;
            color: #fff;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            white-space: nowrap;
            transform: translateY(-8px);
        ">${title}</div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
        content: overlayContent,
        position: position,
        yAnchor: 2.2,
        map: kakaoMapInstance
    });

    // Add map controls
    kakaoMapInstance.addControl(
        new kakao.maps.ZoomControl(),
        kakao.maps.ControlPosition.RIGHT
    );
}

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
}

// --- Scroll Animations ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.anim-in').forEach(el => {
        observer.observe(el);
    });
}

// --- Lightbox ---
function initLightbox() {
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('lightbox').classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    lightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = lightboxImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
}

// --- Google Sheets Integration ---
// ★ Google Apps Script 배포 후 받은 URL을 여기에 붙여넣으세요!
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBgkQ1hIF5jWNvODV4o55MtUcCklkJbH8Cj_0Gr5maDETE_UDkAKa9MTpJ_o7ZtTIxaQ/exec';

// --- Contact Form ---
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('interestLocation').value;
    const type = document.getElementById('interestType').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone) {
        alert('이름과 연락처를 입력해주세요.');
        return;
    }

    // 전화번호 형식 검증 (숫자, 하이픈, 공백만 허용 / 010-1234-5678 등)
    const phoneClean = phone.replace(/[\s-]/g, '');
    const phoneRegex = /^0\d{9,10}$/;
    if (!phoneRegex.test(phoneClean)) {
        alert('올바른 전화번호 형식으로 입력해주세요.\n예: 010-1234-5678');
        document.getElementById('phone').focus();
        return;
    }

    // 버튼 로딩 상태
    const submitBtn = e.target.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '전송 중...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    // Google Sheets 전송 (hidden iframe POST 방식 - CORS 우회)
    if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        try {
            let iframe = document.getElementById('hidden-submit-frame');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'hidden-submit-frame';
                iframe.name = 'hidden-submit-frame';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = GOOGLE_SCRIPT_URL;
            form.target = 'hidden-submit-frame';
            form.style.display = 'none';

            const formData = { name, phone, location, type, message };
            Object.keys(formData).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = formData[key];
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();
            form.remove();
            console.log('✅ Google Sheets 전송 완료');
        } catch (err) {
            console.error('❌ Google Sheets 전송 실패:', err);
        }
    } else {
        console.warn('⚠️ Google Apps Script URL이 설정되지 않았습니다. google-apps-script.js 파일을 참고하세요.');
    }

    // 성공 토스트 표시
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);

        e.target.reset();
    }, 800);
}

// --- Property Detail Modal ---
function openPropertyDetail(locationKey, subIdx, propIdx) {
    const brand = LOCATIONS[locationKey];
    if (!brand) return;
    const sub = brand.subLocations[subIdx];
    if (!sub) return;
    const property = sub.properties[propIdx];
    if (!property) return;

    renderPropertyDetail(property, brand, sub);

    const modal = document.getElementById('propertyDetailModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
}

function closePropertyDetail() {
    const modal = document.getElementById('propertyDetailModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderPropertyDetail(p, brand, sub) {
    const content = document.getElementById('pdmContent');
    const typeClass = p.type === 'medical' ? 'medical' : (p.type === 'officetel' ? 'officetel' : 'commercial');
    const typeLabel = p.type === 'medical' ? '병의원 임대 희망' : (p.type === 'officetel' ? '오피스텔' : '상가');
    const unitIcon = p.type === 'medical' ? '🏥' : (p.type === 'officetel' ? '🏠' : '🏪');
    const floorDisplay = p.unit.replace(/[^0-9BF층]/g, '') || p.unit;
    const statusBadge = p.status === 'vacant'
        ? '<span class="badge badge--vacant">공실</span>'
        : (p.status === 'occupied' ? '<span class="badge badge--occupied">운영중</span>' : '');

    const dealLabel = p.dealType === 'both' ? '분양·임대' : (p.dealType === 'lease' ? '임대' : '분양');
    const useLabel = p.status === 'vacant' ? '선호업종' : '현재업종';

    content.innerHTML = `
        <div class="pdm-hero">
            <div class="pdm-hero-badges">
                ${statusBadge}
                <span class="badge badge--${typeClass}">${typeLabel}</span>
                <span class="badge badge--deal">${dealLabel}</span>
            </div>
            
            <div class="pdm-hero-unit">${p.unit}</div>
            <div class="pdm-hero-building">${p.building}</div>
            <div class="pdm-floor-bg">${floorDisplay}</div>
        </div>

        <div class="pdm-body">
            <p class="pdm-description">${p.description || ''}</p>

            ${(p.gallery || sub.gallery) && (p.gallery || sub.gallery).length > 0 ? (() => {
                const combinedGallery = p.gallery ? p.gallery.concat(sub.gallery || []) : sub.gallery;
                return `
                <div class="pdm-section-title">갤러리</div>
                <div class="pdm-gallery-tabs">
                    <button class="pdm-gallery-tab active" data-category="all" onclick="filterPdmGallery('all')">전체</button>
                    <button class="pdm-gallery-tab" data-category="exterior" onclick="filterPdmGallery('exterior')">외부 전경</button>
                    <button class="pdm-gallery-tab" data-category="interior" onclick="filterPdmGallery('interior')">내부 인테리어</button>
                    <button class="pdm-gallery-tab" data-category="floor" onclick="filterPdmGallery('floor')">평면도</button>
                </div>
                <div class="pdm-gallery">
                    ${combinedGallery.map((img, idx) => `
                        <div class="pdm-gallery-item" data-category="${img.category || 'exterior'}" onclick="lightboxImages = [${combinedGallery.map(g => "'" + g.src + "'").join(',')}]; openLightbox(${idx});">
                            <img src="${img.src}" alt="${img.label}" loading="lazy">
                            <span class="pdm-gallery-label">${img.label}</span>
                        </div>
                    `).join('')}
                </div>
                `;
            })() : ''}

            <div class="pdm-specs">
                <div class="pdm-section-title">상세 정보</div>
                <table class="pdm-spec-table">
                    ${p.specs ? p.specs.map(s => `
                        <tr>
                            <td>${s.label}</td>
                            <td>${s.value}</td>
                        </tr>
                    `).join('') : ''}
                    <tr>
                        <td>${useLabel}</td>
                        <td><strong>${p.use}</strong></td>
                    </tr>
                    <tr class="pdm-deal-row">
                        <td>계약가능</td>
                        <td>
                            <span class="pdm-deal-check ${p.dealType === 'sale' || p.dealType === 'both' ? 'active' : ''}">✔ 분양</span>
                            <span class="pdm-deal-check ${p.dealType === 'lease' || p.dealType === 'both' ? 'active' : ''}">✔ 임대</span>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="pdm-cta">
                <a href="tel:010-8901-8461" class="pdm-cta-btn pdm-cta-btn--primary">
                    📞 전화 문의하기
                </a>
                <button class="pdm-cta-btn pdm-cta-btn--secondary" onclick="closePropertyDetail(); document.getElementById('contact').scrollIntoView({behavior:'smooth'})">
                    ✉️ 온라인 문의
                </button>
            </div>
        </div>
    `;
}

// Initialize property detail modal events
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pdmBack').addEventListener('click', closePropertyDetail);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('propertyDetailModal').classList.contains('active')) {
            closePropertyDetail();
        }
    });
});

/* =============================================
   POPUP
   ============================================= */
(function() {
    const overlay = document.getElementById('popupOverlay');
    if (!overlay) return;

    // 오늘 하루 안보기 체크
    const hideUntil = localStorage.getItem('popupHideUntil');
    if (hideUntil && new Date().getTime() < parseInt(hideUntil)) return;

    // 팝업 열기
    setTimeout(() => overlay.classList.add('active'), 500);

    let currentSlide = 0;
    const slides = overlay.querySelectorAll('.popup-slide');
    const dots = overlay.querySelectorAll('.popup-dot');

    function goToSlide(idx) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        currentSlide = idx;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    document.getElementById('popupPrev').addEventListener('click', () => {
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    });
    document.getElementById('popupNext').addEventListener('click', () => {
        goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.idx)));
    });

    function closePopup() {
        const check = document.getElementById('popupTodayCheck');
        if (check && check.checked) {
            const midnight = new Date();
            midnight.setHours(23, 59, 59, 999);
            localStorage.setItem('popupHideUntil', midnight.getTime().toString());
        }
        overlay.classList.remove('active');
    }

    document.getElementById('popupClose').addEventListener('click', closePopup);
    document.getElementById('popupCloseBtn').addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePopup();
    });
})();
