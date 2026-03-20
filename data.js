// =============================================
// 매물 데이터 설정 파일 (Data Configuration)
// =============================================
// 💡 안내: 모든 매물의 정보, 특히 **평수(면적)**를 이 파일에서 쉽게 변경할 수 있습니다.
// 각 매물의 'area' (리스트 카드에 보이는 면적)와 'specs' 배열 안의 '전용면적', '계약면적'을 수정하세요.
// =============================================

const LOCATIONS = {
    sjlabella: {
        name: 'SJ라벨라',
        badge: '병의원·상가',
        subtitle: '프리미엄 복합 의료상가',
        subLocations: [
            {
                id: 'sj-sungsan', name: '성산 SJ라벨라', address: '서울시 마포구 성산동 591-3',
                mapCoord: { lat: 37.5649807, lng: 126.9025662 }, heroImg: 'images/hero-sungsan.png',
                features: [
                    { icon: '🏥', title: '검증된 신규개원 메디컬빌딩', desc: '정형외과,치과,내과,이비인후과\n피부과, 약국등 운영중\n한의원 산부인과 안과 개원 안내' },
                    { icon: '🚇', title: '초역세권입지', desc: '마포구청역 1번출구 바로앞\n대중교통 편의성 최상' },
                    { icon: '☕', title: '1층 스타벅스 운영중', desc: '스타벅스 입점으로 건물가치 상승\n항아리상권 풍부한 배후수요' },
                    { icon: '🏗️', title: '시행사 직영', desc: '시행사 직영 임대 및 건물관리\n개원시 지원금 및 렌트프리 협의가능' },
                ],
                amenities: [
                    { icon: '🚇', name: '마포구청역', detail: '6호선 도보 1분 초역세권' },
                    { icon: '🏛️', name: '관공서', detail: '마포구청 인근' },
                    { icon: '🏪', name: '상권', detail: '성산시장, 상암 상권 인접' },
                    { icon: '🌳', name: '공원', detail: '월드컵공원, 하늘공원 인근' },
                ],
                properties: [
                    { unit: '2층', building: '성산 SJ라벨라', area: '전용 82.81평', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', tags: ['프렌차이즈'], description: 'SJ라벨라 2층. 복합 의료타운 시너지. 더블 역세권 접근성.', specs: [{ label: '호실', value: '2층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '82.81평' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-sungsan/2F/img2.png`, label: '평면도', category: 'floorplan' }] },
                    { unit: '6층', building: '성산 SJ라벨라', area: '전용 82.81평', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 6층. 진찰실·처치실·검사실 구성 가능.', specs: [{ label: '호실', value: '6층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '82.81평' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-sungsan/6F/img2.png`, label: '평면도', category: 'floorplan' }] },
                    { unit: '7층', building: '성산 SJ라벨라', area: '전용 82.81평', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 7층. 프라이버시 보장 독립층.', specs: [{ label: '호실', value: '7층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '82.81평' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-sungsan/7F/img2.png`, label: '평면도', category: 'floorplan' }] },
                    { unit: '8층', building: '성산 SJ라벨라', area: '전용 82.81평', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 8층. 탁 트인 조망. 정밀장비 전용 설비.', specs: [{ label: '호실', value: '8층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '82.81평' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-sungsan/8F/img2.png`, label: '평면도', category: 'floorplan' }] },
                    { unit: '9층', building: '성산 SJ라벨라', area: '전용 82.81평', type: 'medical', status: '', use: '한의원, 안과, 산부인과등', dealType: 'lease', description: 'SJ라벨라 최고층. 프리미엄 입지. 파노라마 전망.', specs: [{ label: '호실', value: '9층' }, { label: '건물', value: '성산 SJ라벨라' }, { label: '전용면적', value: '82.81평' }, { label: '용도', value: '한의원, 안과, 산부인과등' }, { label: '입주가능일', value: '즉시 입주' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-sungsan/9F/img2.png`, label: '평면도', category: 'floorplan' }] },
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
                    { icon: '🚇', name: '화곡역', detail: '5호선 도보 6분' },
                    { icon: '🏛️', name: '강서구청', detail: '강서구청 사거리 중심상권' },
                    { icon: '🏪', name: '상업시설', detail: '화곡중앙시장, 은행밀집' },
                    { icon: '🏥', name: '의료시설', detail: '주변 병의원 다수' },
                ],
                properties: [
                    { unit: 'B301호', building: '화곡 SJ라벨라', area: '전용 85.47평', type: 'commercial', status: 'occupied', use: '더 센트레(줌바)', dealType: 'sale', description: '화곡 SJ라벨라 지하3층 상가. 더 센트레 줌바 운영 중.', specs: [{ label: '호실', value: 'B301호' }, { label: '위치', value: '화곡 SJ라벨라' }, { label: '전용면적', value: '85.47평' }, { label: '현재업종', value: '더 센트레(줌바)' }], price: '문의', gallery: [1, 2, 3, 4].map(i => ({ src: `images/properties/sjlabella-hwagok/B301/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B201호', building: '화곡 SJ라벨라', area: '전용 85.47평', type: 'commercial', status: 'occupied', use: '피트니스', dealType: 'sale', description: '화곡 SJ라벨라 지하2층. 피트니스 센터 운영 중.', specs: [{ label: '호실', value: 'B201호' }, { label: '전용면적', value: '85.47평' }, { label: '현재업종', value: '피트니스' }], price: '문의', gallery: [1, 2, 3].map(i => ({ src: `images/properties/sjlabella-hwagok/B201/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B101호', building: '화곡 SJ라벨라', area: '전용 19.18평', type: 'commercial', status: 'occupied', use: '라벨라부동산', dealType: 'sale', description: '화곡 SJ라벨라 지하1층. 라벨라부동산 운영 중.', specs: [{ label: '호실', value: 'B101호' }, { label: '전용면적', value: '19.18평' }, { label: '현재업종', value: '라벨라부동산' }], price: '문의', gallery: [1, 2, 3, 4].map(i => ({ src: `images/properties/sjlabella-hwagok/B101/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: '202호', building: '화곡 SJ라벨라', area: '전용 24.47평', type: 'commercial', status: 'occupied', use: '사무실', dealType: 'sale', description: '화곡 SJ라벨라 2층. 사무실 사용 중.', specs: [{ label: '호실', value: '202호' }, { label: '전용면적', value: '24.47평' }, { label: '현재업종', value: '사무실' }], price: '문의', gallery: [{ src: `images/properties/sjlabella-hwagok/202/img1.png`, label: '내부 인테리어', category: 'interior' }] },
                    { unit: '203·204·205호', building: '화곡 SJ라벨라', area: '전용 94.42평', type: 'commercial', status: 'occupied', use: 'SJ골프', dealType: 'both', description: '화곡 SJ라벨라 2층 통합 호실. SJ골프 운영 중.', specs: [{ label: '호실', value: '203·204·205호' }, { label: '전용면적', value: '94.42평 (통합)' }, { label: '현재업종', value: 'SJ골프' }], price: '문의', gallery: [1, 2].map(i => ({ src: `images/properties/sjlabella-hwagok/203-205/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
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
                    { icon: '🚇', name: '발산역', detail: '5호선 발산역 인근' },
                    { icon: '🏢', name: 'LG사이언스파크', detail: '마곡 R&D 클러스터' },
                    { icon: '🛒', name: 'NC백화점', detail: 'NC백화점 강서점 인접' },
                    { icon: '🌳', name: '서울식물원', detail: '도보권 인접' },
                ],
                properties: [
                    { unit: '지하1층', building: 'DH647 더마곡테라스', area: '전용 271.05평', type: 'commercial', status: 'occupied', use: '휴메이크 헬스장', dealType: 'sale', description: 'DH647 지하1층. 휴메이크 헬스장 운영 중.', specs: [{ label: '호실', value: '지하1층' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '휴메이크 헬스장' }, { label: '전용면적', value: '271.05평' }], price: '문의', gallery: [1, 2, 3, 4].map(i => ({ src: `images/properties/dh647/B1/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: '101호', building: 'DH647 더마곡테라스', area: '전용 68.20평', type: 'commercial', status: 'occupied', use: '스타벅스', dealType: 'sale', description: 'DH647 1층. 스타벅스 입점. 장기임대.', specs: [{ label: '호실', value: '101호' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '스타벅스' }, { label: '전용면적', value: '68.20평' }], price: '문의', gallery: [1, 2].map(i => ({ src: `images/properties/dh647/101/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: '102호', building: 'DH647 더마곡테라스', area: '전용 15.88평', type: 'commercial', status: 'occupied', use: '노모어피자', dealType: 'sale', description: 'DH647 1층. 노모어피자 발산점 운영 중.', specs: [{ label: '호실', value: '102호' }, { label: '건물', value: 'DH647 더마곡테라스' }, { label: '현재업종', value: '노모어피자 발산점' }, { label: '전용면적', value: '15.88평' }], price: '문의', gallery: [1, 2, 3].map(i => ({ src: `images/properties/dh647/102/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: '201·202·203호', building: 'DH647 더마곡테라스', area: '전용 161.75평', status: 'occupied', use: '라엘의원', dealType: 'sale', description: 'DH647 2층 통합. 나원즈(라엘의원) 운영 중.', specs: [{ label: '호실', value: '201·202·203호' }, { label: '건물', value: 'DH647 더마곡테라스 2층' }, { label: '현재업종', value: '나원즈(라엘의원)' }, { label: '전용면적', value: '161.75평' }], price: '문의', gallery: [1, 2, 3, 4, 5].map(i => ({ src: `images/properties/dh647/201-203/img${i}.png`, label: '내부 인테리어', category: 'interior' })) },
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
                    { icon: '🚇', title: '더블역세권', desc: '까치산역 2·5호선\n도보 2분 초역세권' },
                    { icon: '📍', title: '핵심 상권', desc: '까치산 사거리 중심상권\n유동인구 최대 밀집' },
                    { icon: '💰', title: '높은 임대수익', desc: '안정적 임대수익 보장\n권리금 상승 잠재력' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '합리적 가격\n동양산업개발 시공' },
                ],
                amenities: [
                    { icon: '🚇', name: '까치산역', detail: '2·5호선 도보 2분 더블역세권' },
                    { icon: '🏪', name: '상업시설', detail: '까치산시장, 편의시설 밀집' },
                    { icon: '🏫', name: '학교', detail: '화곡초, 화곡중 인접' },
                    { icon: '🏥', name: '의료시설', detail: '주변 병의원 다수' },
                ],
                properties: [
                    { unit: 'B101호', building: '화곡 동양하우징', area: '전용 25.34평', type: 'commercial', status: '', use: '일반상가', dealType: 'both', description: '화곡 동양하우징 지하1층. 중심상권. 분양·임대 가능.', specs: [{ label: '호실', value: 'B101호' }, { label: '위치', value: '지하 1층' }, { label: '전용면적', value: '25.34평' }], price: '문의', gallery: [{ src: 'images/properties/dongyang-eunchon/1dong/B101/img1.jpg', label: '내부 인테리어', category: 'interior' }] },
                    { unit: 'B201호', building: '화곡 동양하우징', area: '전용 10.30평', type: 'commercial', status: '', use: '일반상가', dealType: 'both', description: '화곡 동양하우징 2층. 넉넉한 면적. 분양·임대 가능.', specs: [{ label: '호실', value: 'B201호' }, { label: '위치', value: '2층' }, { label: '전용면적', value: '10.30평' }], price: '문의', gallery: [] },
                ],
                gallery: [{ src: 'images/hero-eunchon_1.jpg', label: '화곡 동양하우징 외관', category: 'exterior' }]
            },
            {
                id: 'dy-eunchon', name: '등촌 동양하우징', address: '서울시 강서구 등촌로 65',
                mapCoord: { lat: 37.5357338, lng: 126.8631741 }, heroImg: 'images/hero-eunchon_2.png',
                features: [
                    { icon: '🛣️', title: '대로변 입지', desc: '대로변 높은 가시성\n접근성 최상' },
                    { icon: '🏥', title: '병의원 임대중', desc: '시행사 직영\n지원금 및 렌트프리 가능' },
                    { icon: '🏗️', title: '시행사 직접분양', desc: '합리적 가격\n동양산업개발 시공' },
                    { icon: '👥', title: '풍부한 배후수요', desc: '등촌동 주거밀집\n유동인구 핵심 상권' },
                ],
                amenities: [
                    { icon: '🚌', name: '버스 교통', detail: '대로변 버스정류장 인접' },
                    { icon: '🏫', name: '학교', detail: '등촌초, 영일고 인접' },
                    { icon: '🏪', name: '상업시설', detail: '등촌시장, 이마트 도보권' },
                    { icon: '🏥', name: '종합병원', detail: '이화여대목동병원 인근' },
                ],
                properties: [
                    { unit: '101·201호', building: '등촌 동양하우징 2동', area: '전용 56.71평', type: 'medical', status: 'occupied', use: '병의원/스터디카페', dealType: 'both', description: '등촌 2동. 병의원·지니24스터디카페 운영. 분양·임대 가능.', specs: [{ label: '호실', value: '101·201호' }, { label: '동', value: '2동' }, { label: '현재업종', value: '병의원/지니24' }, { label: '전용면적', value: '56.71평' }], price: '문의', gallery: ['4.55.51', '4.55.57', '4.56.04'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/101-201/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B109호', building: '등촌 동양하우징 2동', area: '전용 18.34평', type: 'commercial', status: 'occupied', use: '벤처디', dealType: 'sale', description: '등촌 2동 지하. 벤처디 운영.', specs: [{ label: '호실', value: 'B109호' }, { label: '동', value: '2동' }, { label: '현재업종', value: '벤처디(엔씨에)' }, { label: '전용면적', value: '18.34평' }], price: '문의', gallery: ['4.57.06', '4.57.11', '4.57.17'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/B109/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B106·B107·B202호', building: '등촌 동양하우징 1동', area: '전용 72.67평', type: 'medical', status: '', use: '병의원 / 공실', dealType: 'both', description: '등촌 1동. 병의원 특화. 공실 즉시 입주. 분양·임대 가능.', specs: [{ label: '호실', value: 'B106·B107·B202호' }, { label: '동', value: '1동' }, { label: '전용면적', value: '72.67평' }], price: '문의', gallery: ['5.02.06', '5.02.12', '5.02.19'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/B106_202/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B108호', building: '등촌 동양하우징 1동', area: '전용 74.14평', type: 'commercial', status: 'occupied', use: '혼Gym', dealType: 'sale', description: '등촌 1동. 혼Gym 운영.', specs: [{ label: '호실', value: 'B108호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '혼Gym' }, { label: '전용면적', value: '74.14평' }], price: '문의', gallery: ['5.00.49', '5.00.55', '5.01.02'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/B108/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B201호', building: '등촌 동양하우징 1동', area: '전용 72.77평', type: 'commercial', status: 'occupied', use: '혼Gym', dealType: 'sale', description: '등촌 1동. 혼Gym 운영.', specs: [{ label: '호실', value: 'B201호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '훈Gym' }, { label: '전용면적', value: '72.77평' }], price: '문의', gallery: ['5.00.49', '5.00.55', '5.01.02'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/B201/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                    { unit: 'B301호', building: '등촌 동양하우징 1동', area: '전용 95.29평', type: 'commercial', status: 'occupied', use: '혼Gym', dealType: 'sale', description: '등촌 1동. 혼Gym 운영.', specs: [{ label: '호실', value: 'B301호' }, { label: '동', value: '1동' }, { label: '현재업종', value: '훈Gym' }, { label: '전용면적', value: '95.29평' }], price: '문의', gallery: ['5.00.49', '5.00.55', '5.01.02'].map(t => ({ src: `images/properties/dongyang-eunchon/2dong/B301/in 2026-03-19 오후 ${t}.png`, label: '내부 인테리어', category: 'interior' })) },
                ],
                gallery: [{ src: 'images/hero-eunchon_2.png', label: '등촌 동양하우징 외관', category: 'exterior' }]
            }
        ]
    }
};
