// =============================================
// DONGYANG DEVELOPMENT - Property Sales SPA
// =============================================

// --- Brand Data (with sub-locations) ---
const LOCATIONS = {
    sjlabella: {
        name: 'SJ라벨라',
        badge: '병의원·상가',
        subtitle: '프리미엄 복합 의료상가',
        subLocations: [
            {
                id: 'sj-sungsan', name: '성산 SJ라벨라', address: '서울시 마포구 성산동 591-3',
                mapCoord: { lat: 37.5649778, lng: 126.9025543 }, heroImg: 'images/hero-sungsan.png',
                features: [
                    { icon: '🏥', title: '검증된 신규개원 메디컬빌딩', desc: '정형외과,치과,내과,이비인후과\n피부과, 약국등 운영중\n한의원 산부인과 안과 개원 안내' },
                    { icon: '🚇', title: '초역세권입지', desc: '마포구청역 1번출구 바로앞\n대중교통 편의성 최상' },
                    { icon: '☕', title: '1층 스타벅스 입점', desc: '스타벅스 입점으로 건물가치 상승\n항아리상권 풍부한 배후수요' },
                    { icon: '🏗️', title: '시행사 직영', desc: '시행사 직영 임대 및 건물관리\n개원시 지원금 및 렌트프리 협의가능' },
                ],
                amenities: [
                    { icon: '🚇', name: '지하철', detail: '6호선·월드컵경기장역 인근' },
                    { icon: '⚽', name: '월드컵경기장', detail: '서울월드컵경기장 도보권' },
                    { icon: '🏪', name: '상권', detail: '성산시장, 대형마트 인접' },
                    { icon: '🌳', name: '공원', detail: '월드컵공원, 하늘공원 인근' },
                ],
                properties: [
                    { unit: '2층', building: '성산 SJ라벨라', area: '전용 59.50㎡', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', tags: ['프렌차이즈'], description: 'SJ라벨라 2층. 복합 의료타운 시너지. 더블 역세권 접근성.', specs: [{ label: '호실', value: '2층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '59.50㎡ (약 18평)' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{src: `images/properties/sjlabella-sungsan/2F/img2.png`, label: '평면도', category: 'floorplan'}] },
                    { unit: '6층', building: '성산 SJ라벨라', area: '전용 62.81㎡', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 6층. 62.81㎡. 진찰실·처치실·검사실 구성 가능.', specs: [{ label: '호실', value: '6층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '62.81㎡ (약 19평)' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{src: `images/properties/sjlabella-sungsan/6F/img2.png`, label: '평면도', category: 'floorplan'}] },
                    { unit: '7층', building: '성산 SJ라벨라', area: '전용 62.81㎡', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 7층. 프라이버시 보장 독립층.', specs: [{ label: '호실', value: '7층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '62.81㎡ (약 19평)' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{src: `images/properties/sjlabella-sungsan/7F/img2.png`, label: '평면도', category: 'floorplan'}] },
                    { unit: '8층', building: '성산 SJ라벨라', area: '전용 62.81㎡', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 8층. 탁 트인 조망. 정밀장비 전용 설비.', specs: [{ label: '호실', value: '8층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '62.81㎡ (약 19평)' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{src: `images/properties/sjlabella-sungsan/8F/img2.png`, label: '평면도', category: 'floorplan'}] },
                    { unit: '9층', building: '성산 SJ라벨라', area: '전용 62.81㎡', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 최고층. 프리미엄 입지. 파노라마 전망.', specs: [{ label: '호실', value: '9층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '62.81㎡ (약 19평)' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{src: `images/properties/sjlabella-sungsan/9F/img2.png`, label: '평면도', category: 'floorplan'}] },
                ],
                gallery: [{ src: 'images/hero-sungsan.png', label: '성산 SJ라벨라 외관', category: 'exterior' }]
            },
            {
                id: 'sj-hwagok', name: '화곡 SJ라벨라', address: '서울시 강서구 화곡로 350',
                mapCoord: { lat: 37.5549477, lng: 126.8523571 }, heroImg: 'images/hero-hwagok.png',
                features: [
                    { icon: '📍', title: '핵심 상권', desc: '강서구청 사거리 중심상권\n유동인구 최대밀집지역' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '중간 마진 없는 합리적 가격\n동양산업개발 직접 시공' },
                    { icon: '💰', title: '높은 임대수익', desc: '안정적 임대수익 보장\n권리금 상승 잠재력' },
                    { icon: '💎', title: '수익율 보장상가', desc: '임대인 운영중 상가로 분양시\n분양가 조정 가능' },
                ],
                amenities: [
                    { icon: '🚇', name: '화곡역', detail: '5호선 도보 7분' },
                    { icon: '🏪', name: '상업시설', detail: '화곡중앙시장, 롯데마트' },
                    { icon: '🏫', name: '학교', detail: '화곡초, 화곡중 인접' },
                    { icon: '🏥', name: '의료시설', detail: '주변 병의원 다수' },
                ],
                properties: [
                    { unit: 'B301호', building: '화곡 SJ라벨라', area: '전용 45.00㎡', type: 'commercial', status: 'occupied', use: '더 센트레(줌바)', dealType: 'sale', description: '화곡 SJ라벨라 지하3층 상가. 더 센트레 줌바 운영 중.', specs: [{ label: '호실', value: 'B301호' }, { label: '위치', value: '화곡 SJ라벨라' }, { label: '전용면적', value: '45.00㎡' }, { label: '현재업종', value: '더 센트레(줌바)' }], price: '문의', gallery: [1,2,3,4].map(i => ({src: `images/properties/sjlabella-hwagok/B301/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B201호', building: '화곡 SJ라벨라', area: '전용 50.00㎡', type: 'commercial', status: 'occupied', use: '피트니스', dealType: 'sale', description: '화곡 SJ라벨라 지하2층. 피트니스 센터 운영 중.', specs: [{ label: '호실', value: 'B201호' }, { label: '전용면적', value: '50.00㎡' }, { label: '현재업종', value: '피트니스' }], price: '문의', gallery: [1,2,3].map(i => ({src: `images/properties/sjlabella-hwagok/B201/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B101호', building: '화곡 SJ라벨라', area: '전용 40.00㎡', type: 'commercial', status: 'occupied', use: '라벨라부동산', dealType: 'sale', description: '화곡 SJ라벨라 지하1층. 라벨라부동산 운영 중.', specs: [{ label: '호실', value: 'B101호' }, { label: '전용면적', value: '40.00㎡' }, { label: '현재업종', value: '라벨라부동산' }], price: '문의', gallery: [1,2,3,4].map(i => ({src: `images/properties/sjlabella-hwagok/B101/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: '202호', building: '화곡 SJ라벨라', area: '전용 35.00㎡', type: 'commercial', status: 'occupied', use: '사무실', dealType: 'sale', description: '화곡 SJ라벨라 2층. 사무실 사용 중.', specs: [{ label: '호실', value: '202호' }, { label: '전용면적', value: '35.00㎡' }, { label: '현재업종', value: '사무실' }], price: '문의', gallery: [{src: `images/properties/sjlabella-hwagok/202/img1.png`, label: '내부 인테리어', category: 'interior'}] },
                    { unit: '203·204·205호', building: '화곡 SJ라벨라', area: '전용 95.00㎡', type: 'commercial', status: 'occupied', use: 'SJ골프', dealType: 'both', description: '화곡 SJ라벨라 2층 통합 호실. SJ골프 운영 중.', specs: [{ label: '호실', value: '203·204·205호' }, { label: '전용면적', value: '95.00㎡ (통합)' }, { label: '현재업종', value: 'SJ골프' }], price: '문의', gallery: [1,2].map(i => ({src: `images/properties/sjlabella-hwagok/203-205/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                ],
                gallery: [{ src: 'images/hero-hwagok.png', label: '화곡 SJ라벨라 외관', category: 'exterior' }]
            }
        ]
    },
    dh647: {
        name: 'DH647 더마곡테라스',
        badge: '복합상가',
        subtitle: '마곡 프리미엄 복합 상업시설',
        subLocations: [
            {
                id: 'dh647-main', name: 'DH647 더마곡테라스', address: '서울시 강서구 내발산동 647',
                mapCoord: { lat: 37.5579212, lng: 126.8405402 }, heroImg: 'images/hero-dh647.png',
                features: [
                    { icon: '☕', title: '프리미엄 테넌트', desc: '수협 스타벅스 노모어피자 등\n안정적 임대수익 보장' },
                    { icon: '🏥', title: '대형평수 피부과', desc: '라엘의원 등 의료업종\n복합 시너지 효과' },
                    { icon: '🌆', title: '마곡 핵심입지', desc: '마곡지구 개발 수혜\n미래 가치 상승' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '중간 마진 없는 가격\n동양산업개발 시공' },
                ],
                amenities: [
                    { icon: '🚇', name: '마곡역', detail: '9호선·공항철도 인근' },
                    { icon: '🏢', name: 'LG사이언스파크', detail: '마곡 R&D 클러스터' },
                    { icon: '🛫', name: '김포공항', detail: '공항 접근성 우수' },
                    { icon: '🌳', name: '서울식물원', detail: '도보권 인접' },
                ],
                properties: [
                    { unit: '지하1층', building: 'DH647 더마곡테라스', area: '전용 271.05㎡ (약 82평)', type: 'commercial', status: 'occupied', use: '휴메이크 헬스장', dealType: 'sale', description: 'DH647 지하1층. 휴메이크 헬스장 운영 중.', specs: [{ label: '호실', value: '지하1층' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '휴메이크 헬스장' }, { label: '전용면적', value: '271.05㎡ (81.99평)' }, { label: '계약면적', value: '1411.97㎡ (427.12평)' }], price: '문의', gallery: [1,2,3,4].map(i => ({src: `images/properties/dh647/B1/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: '101호', building: 'DH647 더마곡테라스', area: '전용 225.45㎡ (약 68평)', type: 'commercial', status: 'occupied', use: '스타벅스', dealType: 'sale', description: 'DH647 1층. 스타벅스 입점. 장기임대.', specs: [{ label: '호실', value: '101호' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '스타벅스' }, { label: '전용면적', value: '225.45㎡ (68.20평)' }, { label: '계약면적', value: '363.75㎡ (110.03평)' }], price: '문의', gallery: [1,2].map(i => ({src: `images/properties/dh647/101/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: '102호', building: 'DH647 더마곡테라스', area: '전용 52.50㎡ (약 16평)', type: 'commercial', status: 'occupied', use: '노모어피자', dealType: 'sale', description: 'DH647 1층. 노모어피자 발산점 운영 중.', specs: [{ label: '호실', value: '102호' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '노모어피자 발산점' }, { label: '전용면적', value: '52.50㎡ (15.88평)' }, { label: '계약면적', value: '84.71㎡ (25.62평)' }], price: '문의', gallery: [1,2,3].map(i => ({src: `images/properties/dh647/102/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: '201·202·203호', building: 'DH647 더마곡테라스', area: '전용 534.72㎡ (약 162평)', type: 'medical', status: 'occupied', use: '라엘의원', dealType: 'sale', description: 'DH647 2층 통합. 나원즈(라엘의원) 운영 중.', specs: [{ label: '호실', value: '201·202·203호' }, { label: '건물', value: 'DH647 더마곡테라스 2층' }, { label: '현재업종', value: '나원즈(라엘의원)' }, { label: '전용면적', value: '534.72㎡ (161.75평)' }, { label: '계약면적', value: '862.74㎡ (260.97평)' }], price: '문의', gallery: [1,2,3,4,5].map(i => ({src: `images/properties/dh647/201-203/img${i}.png`, label: '내부 인테리어', category: 'interior'})) },
                ],
                gallery: [{ src: 'images/hero-dh647.png', label: 'DH647 더마곡테라스 외관', category: 'exterior' }]
            }
        ]
    },
    dongyang: {
        name: '동양하우징',
        badge: '상가',
        subtitle: '강서구 핵심 상가 분양',
        subLocations: [
            {
                id: 'dy-hwagok', name: '화곡 동양하우징', address: '서울시 강서구 화곡동 899-4',
                mapCoord: { lat: 37.5300206, lng: 126.8468022 }, heroImg: 'images/hero-eunchon_1.jpg',
                features: [
                    { icon: '📍', title: '핵심 상권', desc: '화곡역 인근 중심상권\n유동인구 최대 밀집' },
                    { icon: '🚗', title: '편리한 접근성', desc: '대로변 높은 가시성\n넉넉한 주차공간' },
                    { icon: '💰', title: '높은 임대수익', desc: '안정적 임대수익 보장\n권리금 상승 잠재력' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '합리적 가격\n동양산업개발 시공' },
                ],
                amenities: [
                    { icon: '🚇', name: '화곡역', detail: '5호선 도보 7분' },
                    { icon: '🏪', name: '상업시설', detail: '화곡중앙시장, 롯데마트' },
                    { icon: '🏫', name: '학교', detail: '화곡초, 화곡중 인접' },
                    { icon: '🏥', name: '의료시설', detail: '주변 병의원 다수' },
                ],
                properties: [
                    { unit: 'B101호', building: '화곡 동양하우징', area: '전용 45.21㎡', type: 'commercial', status: '', use: '일반상가', dealType: 'both', description: '화곡 동양하우징 지하1층. 중심상권. 분양·임대 가능.', specs: [{ label: '호실', value: 'B101호' }, { label: '위치', value: '지하 1층' }, { label: '전용면적', value: '45.21㎡ (약 13.7평)' }], price: '문의', gallery: [{src: 'images/properties/dongyang-eunchon/1dong/B101/img1.jpg', label: '내부 인테리어', category: 'interior'}] },
                    { unit: 'B201호', building: '화곡 동양하우징', area: '전용 52.89㎡', type: 'commercial', status: '', use: '일반상가', dealType: 'both', description: '화곡 동양하우징 2층. 넉넉한 면적. 분양·임대 가능.', specs: [{ label: '호실', value: 'B201호' }, { label: '위치', value: '2층' }, { label: '전용면적', value: '52.89㎡ (약 16평)' }], price: '문의', gallery: [] },
                ],
                gallery: [{ src: 'images/hero-eunchon_1.jpg', label: '화곡 동양하우징 외관', category: 'exterior' }]
            },
            {
                id: 'dy-eunchon', name: '등촌 동양하우징', address: '서울시 강서구 등촌로 65',
                mapCoord: { lat: 37.5357338, lng: 126.8631741 }, heroImg: 'images/hero-eunchon_2.png',
                features: [
                    { icon: '🚇', title: '역세권 입지', desc: '지하철 도보 5분\n접근성 최상' },
                    { icon: '🏥', title: '병의원 특화설계', desc: '의료시설 인허가 용이\n전용 주차·환기' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '합리적 가격\n동양산업개발 시공' },
                    { icon: '👥', title: '풍부한 배후수요', desc: '등촌동 주거밀집\n유동인구 핵심 상권' },
                ],
                amenities: [
                    { icon: '🚇', name: '지하철역', detail: '도보 5분 이내' },
                    { icon: '🏫', name: '학교', detail: '등촌초, 등원중 인접' },
                    { icon: '🏪', name: '대형마트', detail: '이마트·홈플러스 도보권' },
                    { icon: '🏥', name: '종합병원', detail: '이화여대목동병원 인근' },
                ],
                properties: [
                    { unit: '101·201호', building: '등촌 동양하우징 2동', area: '면적 문의', type: 'medical', status: 'occupied', use: '병의원/스터디카페', dealType: 'both', description: '등촌 2동. 병의원·지니24스터디카페 운영. 분양·임대 가능.', specs: [{ label: '호실', value: '101·201호' }, { label: '동', value: '2동' }, { label: '현재업종', value: '병의원/지니24' }], price: '문의', gallery: ['4.55.51','4.55.57','4.56.04'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/101-201/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B109호', building: '등촌 동양하우징 2동', area: '면적 문의', type: 'commercial', status: 'occupied', use: '벤처디', dealType: 'sale', description: '등촌 2동 지하. 벤처디 운영.', specs: [{ label: '호실', value: 'B109호' }, { label: '동', value: '2동' }, { label: '현재업종', value: '벤처디(엔씨에)' }], price: '문의', gallery: ['4.57.06','4.57.11','4.57.17'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/B109/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B106·B107·B202호', building: '등촌 동양하우징 1동', area: '전용 29.75~39.67㎡', type: 'medical', status: '', use: '병의원 / 공실', dealType: 'both', description: '등촌 1동. 병의원 특화. 공실 즉시 입주. 분양·임대 가능.', specs: [{ label: '호실', value: 'B106·B107·B202호' }, { label: '동', value: '1동' }, { label: '전용면적', value: '29.75~39.67㎡' }], price: '문의', gallery: ['5.02.06','5.02.12','5.02.19'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/B106_202/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B108호', building: '등촌 동양하우징 1동', area: '면적 문의', type: 'commercial', status: 'occupied', use: '혼Gym', dealType: 'sale', description: '등촌 1동. 혼Gym 운영.', specs: [{ label: '호실', value: 'B108호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '혼Gym' }], price: '문의', gallery: ['5.00.49','5.00.55','5.01.02'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/B108/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B201호', building: '등촌 동양하우징 1동', area: '면적 문의', type: 'commercial', status: 'occupied', use: '훈Gym', dealType: 'sale', description: '등촌 1동. 훈Gym 운영.', specs: [{ label: '호실', value: 'B201호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '훈Gym' }], price: '문의', gallery: ['5.00.49','5.00.55','5.01.02'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/B201/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                    { unit: 'B301호', building: '등촌 동양하우징 1동', area: '면적 문의', type: 'commercial', status: 'occupied', use: '훈Gym', dealType: 'sale', description: '등촌 1동. 훈Gym 운영.', specs: [{ label: '호실', value: 'B301호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '훈Gym' }], price: '문의', gallery: ['5.00.49','5.00.55','5.01.02'].map(t=>({src: `images/properties/dongyang-eunchon/2dong/B301/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior'})) },
                ],
                gallery: [{ src: 'images/hero-eunchon_2.png', label: '등촌 동양하우징 외관', category: 'exterior' }]
            }
        ]
    }
};

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
