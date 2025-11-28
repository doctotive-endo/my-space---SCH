import React, { useState, useCallback, useRef } from 'react';
import { Award, Star, Trophy, Book, Heart, Gift, Edit3, Save, ChevronRight } from 'lucide-react';

const PixelAvatar = ({ className = '' }) => (
  <div className={`relative ${className}`} style={{ width: '48px', height: '64px' }}>
    <div className="absolute" style={{ top: '0px', left: '12px', width: '24px', height: '16px', backgroundColor: '#3D2314', borderRadius: '8px 8px 0 0' }} />
    <div className="absolute" style={{ top: '12px', left: '14px', width: '20px', height: '16px', backgroundColor: '#FFE4C4' }} />
    <div className="absolute" style={{ top: '18px', left: '18px', width: '4px', height: '4px', backgroundColor: '#000' }} />
    <div className="absolute" style={{ top: '18px', left: '26px', width: '4px', height: '4px', backgroundColor: '#000' }} />
    <div className="absolute" style={{ top: '28px', left: '10px', width: '28px', height: '24px', backgroundColor: '#FFFFFF', border: '2px solid #E5E7EB' }} />
    <div className="absolute" style={{ top: '28px', left: '18px', width: '12px', height: '4px', backgroundColor: '#3B82F6' }} />
    <div className="absolute" style={{ top: '52px', left: '14px', width: '8px', height: '12px', backgroundColor: '#1E3A8A' }} />
    <div className="absolute" style={{ top: '52px', left: '26px', width: '8px', height: '12px', backgroundColor: '#1E3A8A' }} />
  </div>
);

const PixelDesk = ({ variant = 'normal' }) => {
  const colors = variant === 'golden' ? { top: '#FFD700', front: '#DAA520', side: '#B8860B' } : { top: '#CD853F', front: '#8B4513', side: '#654321' };
  return (
    <div className="relative" style={{ width: '64px', height: '48px' }}>
      <div className="absolute" style={{ top: '0px', left: '0px', width: '64px', height: '8px', backgroundColor: colors.top, transform: 'skewX(-10deg)' }} />
      <div className="absolute" style={{ top: '8px', left: '2px', width: '60px', height: '24px', backgroundColor: colors.front }} />
      <div className="absolute" style={{ top: '4px', left: '58px', width: '8px', height: '28px', backgroundColor: colors.side, transform: 'skewY(-20deg)' }} />
      <div className="absolute" style={{ top: '32px', left: '6px', width: '8px', height: '16px', backgroundColor: colors.side }} />
      <div className="absolute" style={{ top: '32px', left: '50px', width: '8px', height: '16px', backgroundColor: colors.side }} />
    </div>
  );
};

const PixelChair = () => (
  <div className="relative" style={{ width: '32px', height: '48px' }}>
    <div className="absolute" style={{ top: '0px', left: '4px', width: '24px', height: '20px', backgroundColor: '#4338CA', borderRadius: '4px 4px 0 0' }} />
    <div className="absolute" style={{ top: '20px', left: '0px', width: '32px', height: '8px', backgroundColor: '#4338CA' }} />
    <div className="absolute" style={{ top: '28px', left: '4px', width: '4px', height: '20px', backgroundColor: '#1F2937' }} />
    <div className="absolute" style={{ top: '28px', left: '24px', width: '4px', height: '20px', backgroundColor: '#1F2937' }} />
    <div className="absolute rounded-full" style={{ top: '44px', left: '2px', width: '8px', height: '8px', backgroundColor: '#374151' }} />
    <div className="absolute rounded-full" style={{ top: '44px', left: '22px', width: '8px', height: '8px', backgroundColor: '#374151' }} />
  </div>
);

const PixelTrophyShelf = () => (
  <div className="relative" style={{ width: '80px', height: '64px' }}>
    <div className="absolute" style={{ top: '0px', left: '0px', width: '80px', height: '64px', backgroundColor: '#8B4513' }} />
    <div className="absolute" style={{ top: '16px', left: '0px', width: '80px', height: '4px', backgroundColor: '#654321' }} />
    <div className="absolute" style={{ top: '36px', left: '0px', width: '80px', height: '4px', backgroundColor: '#654321' }} />
    <div className="absolute" style={{ top: '56px', left: '0px', width: '80px', height: '4px', backgroundColor: '#654321' }} />
    <div className="absolute" style={{ top: '4px', left: '12px', width: '12px', height: '12px', backgroundColor: '#FFD700' }} />
    <div className="absolute" style={{ top: '24px', left: '32px', width: '12px', height: '12px', backgroundColor: '#C0C0C0' }} />
    <div className="absolute" style={{ top: '44px', left: '56px', width: '12px', height: '12px', backgroundColor: '#CD7F32' }} />
  </div>
);

const PixelComputer = () => (
  <div className="relative" style={{ width: '48px', height: '40px' }}>
    <div className="absolute" style={{ top: '0px', left: '4px', width: '40px', height: '28px', backgroundColor: '#1F2937', borderRadius: '2px' }} />
    <div className="absolute" style={{ top: '2px', left: '6px', width: '36px', height: '22px', backgroundColor: '#60A5FA' }} />
    <div className="absolute" style={{ top: '28px', left: '18px', width: '12px', height: '8px', backgroundColor: '#374151' }} />
    <div className="absolute" style={{ top: '36px', left: '12px', width: '24px', height: '4px', backgroundColor: '#374151' }} />
  </div>
);

const PixelPlant = () => (
  <div className="relative" style={{ width: '32px', height: '48px' }}>
    <div className="absolute" style={{ top: '0px', left: '8px', width: '16px', height: '12px', backgroundColor: '#22C55E', borderRadius: '50%' }} />
    <div className="absolute" style={{ top: '4px', left: '0px', width: '12px', height: '10px', backgroundColor: '#16A34A', borderRadius: '50%' }} />
    <div className="absolute" style={{ top: '4px', left: '20px', width: '12px', height: '10px', backgroundColor: '#16A34A', borderRadius: '50%' }} />
    <div className="absolute" style={{ top: '8px', left: '10px', width: '12px', height: '14px', backgroundColor: '#15803D', borderRadius: '50%' }} />
    <div className="absolute" style={{ top: '18px', left: '14px', width: '4px', height: '12px', backgroundColor: '#166534' }} />
    <div className="absolute" style={{ top: '28px', left: '6px', width: '20px', height: '20px', backgroundColor: '#B45309', borderRadius: '0 0 4px 4px' }} />
    <div className="absolute" style={{ top: '28px', left: '4px', width: '24px', height: '4px', backgroundColor: '#92400E' }} />
  </div>
);

const PixelBookshelf = () => (
  <div className="relative" style={{ width: '64px', height: '80px' }}>
    <div className="absolute" style={{ top: '0px', left: '0px', width: '64px', height: '80px', backgroundColor: '#92400E', borderRadius: '2px' }} />
    <div className="absolute" style={{ top: '4px', left: '4px', width: '56px', height: '72px', backgroundColor: '#B45309' }} />
    <div className="absolute" style={{ top: '4px', left: '4px', width: '56px', height: '4px', backgroundColor: '#78350F' }} />
    <div className="absolute" style={{ top: '28px', left: '4px', width: '56px', height: '4px', backgroundColor: '#78350F' }} />
    <div className="absolute" style={{ top: '52px', left: '4px', width: '56px', height: '4px', backgroundColor: '#78350F' }} />
    <div className="absolute" style={{ top: '8px', left: '8px', width: '8px', height: '16px', backgroundColor: '#EF4444' }} />
    <div className="absolute" style={{ top: '10px', left: '18px', width: '6px', height: '14px', backgroundColor: '#3B82F6' }} />
    <div className="absolute" style={{ top: '8px', left: '26px', width: '10px', height: '16px', backgroundColor: '#22C55E' }} />
    <div className="absolute" style={{ top: '32px', left: '10px', width: '10px', height: '16px', backgroundColor: '#EC4899' }} />
    <div className="absolute" style={{ top: '34px', left: '22px', width: '8px', height: '14px', backgroundColor: '#14B8A6' }} />
    <div className="absolute" style={{ top: '56px', left: '8px', width: '12px', height: '16px', backgroundColor: '#84CC16' }} />
    <div className="absolute" style={{ top: '58px', left: '22px', width: '8px', height: '14px', backgroundColor: '#F43F5E' }} />
  </div>
);

const PixelCertificate = () => (
  <div className="relative" style={{ width: '40px', height: '32px' }}>
    <div className="absolute" style={{ top: '0px', left: '0px', width: '40px', height: '32px', backgroundColor: '#78350F', borderRadius: '2px' }} />
    <div className="absolute" style={{ top: '2px', left: '2px', width: '36px', height: '28px', backgroundColor: '#D4A574' }} />
    <div className="absolute" style={{ top: '4px', left: '4px', width: '32px', height: '24px', backgroundColor: '#FEF3C7' }} />
    <div className="absolute" style={{ top: '8px', left: '8px', width: '24px', height: '2px', backgroundColor: '#1F2937' }} />
    <div className="absolute" style={{ top: '14px', left: '10px', width: '20px', height: '2px', backgroundColor: '#6B7280' }} />
    <div className="absolute" style={{ top: '20px', left: '12px', width: '16px', height: '2px', backgroundColor: '#6B7280' }} />
  </div>
);

const initialRoomItems = [
  { id: 'desk-1', nameKo: '책상', position: { x: 25, y: 75 }, zIndex: 10, owned: true, sprite: 'desk' },
  { id: 'chair-1', nameKo: '의자', position: { x: 30, y: 78 }, zIndex: 11, owned: true, sprite: 'chair' },
  { id: 'computer-1', nameKo: '컴퓨터', position: { x: 25, y: 70 }, zIndex: 12, owned: true, sprite: 'computer' },
  { id: 'trophy-shelf-1', nameKo: '트로피 선반', position: { x: 75, y: 55 }, zIndex: 5, owned: true, sprite: 'trophy_shelf' },
  { id: 'bookshelf-1', nameKo: '책장', position: { x: 85, y: 58 }, zIndex: 4, owned: true, sprite: 'bookshelf' },
  { id: 'plant-1', nameKo: '화분', position: { x: 15, y: 65 }, zIndex: 8, owned: true, sprite: 'plant' },
  { id: 'certificate-1', nameKo: '인증서 액자', position: { x: 40, y: 45 }, zIndex: 3, owned: true, sprite: 'certificate' },
  { id: 'golden-desk-1', nameKo: '황금 책상', position: { x: 60, y: 80 }, zIndex: 10, owned: false, sprite: 'golden_desk' }
];

const badgeCategories = [
  {
    id: 'specialist', nameKo: '전문가',
    items: [
      { id: 'specialist', name: '내과전담간호사', icon: '🏥', earned: true, earnedDate: '2023-12', rarity: 'epic', reward: '고급 책상' },
      { id: 'diabetes', name: '당뇨교육 인증', icon: '💉', earned: true, earnedDate: '2024-01', rarity: 'rare', reward: '인증서 액자' },
      { id: 'diabetes-expert', name: '당뇨교육 전문가', icon: '📊', earned: false, rarity: 'legendary', reward: '전문가 가운', progress: 65 }
    ]
  },
  {
    id: 'hospital-activity', nameKo: '병원활동',
    items: [
      { id: 'infection', name: '감염관리 교육', icon: '🧼', earned: true, earnedDate: '2024-02', rarity: 'common', reward: '프리미엄 벽지' },
      { id: 'handwash', name: '손씻기 교육', icon: '💧', earned: true, earnedDate: '2024-03', rarity: 'rare', reward: '골드 뱃지' },
      { id: 'praise', name: '칭찬카드 10회', icon: '❤️', earned: true, earnedDate: '2024-03', rarity: 'rare', reward: '하트 프레임' },
      { id: 'quality', name: 'QI 전문가', icon: '⭐', earned: false, rarity: 'legendary', reward: '황금 책상', progress: 40 }
    ]
  }
];

const rarityColors = {
  common: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
  rare: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
  epic: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
  legendary: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' }
};

const getSpriteComponent = (sprite) => {
  const map = {
    'desk': () => <PixelDesk />,
    'chair': () => <PixelChair />,
    'trophy_shelf': () => <PixelTrophyShelf />,
    'computer': () => <PixelComputer />,
    'plant': () => <PixelPlant />,
    'bookshelf': () => <PixelBookshelf />,
    'certificate': () => <PixelCertificate />,
    'golden_desk': () => <PixelDesk variant="golden" />
  };
  return map[sprite] || map['desk'];
};

export default function MySpaceApp() {
  const [activeTab, setActiveTab] = useState('room');
  const [editMode, setEditMode] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [roomItems, setRoomItems] = useState(initialRoomItems);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const roomRef = useRef(null);
  const [draggedItem, setDraggedItem] = useState(null);

  const profile = {
    name: '김간호', role: '외래 담당 간호사', department: '내과',
    years: 5, avatar: '👩‍⚕️', level: 12, experience: 2400, experienceToNextLevel: 3000,
    stats: { education: 24, praiseCards: 10, certifications: 3 }
  };

  const handleItemMove = useCallback((itemId, newPosition) => {
    setRoomItems(prev => prev.map(item => item.id === itemId ? { ...item, position: newPosition } : item));
  }, []);

  const handleDragStart = (e, itemId) => {
    if (!editMode) return;
    e.preventDefault();
    setDraggedItem(itemId);
    setSelectedItemId(itemId);
  };

  const handleDragMove = (e) => {
    if (!draggedItem || !editMode || !roomRef.current) return;
    const rect = roomRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(40, Math.min(85, ((clientY - rect.top) / rect.height) * 100));
    handleItemMove(draggedItem, { x, y });
  };

  const handleDragEnd = () => setDraggedItem(null);

  const expPercentage = (profile.experience / profile.experienceToNextLevel) * 100;
  const earnedBadgeCount = badgeCategories.reduce((acc, cat) => acc + cat.items.filter(b => b.earned).length, 0);
  const totalBadgeCount = badgeCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">My Space</h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{profile.avatar}</div>
              <div>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm opacity-80">{profile.department} {profile.role} · {profile.years}년차</p>
                <div className="flex items-center gap-2 mt-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-xs">뱃지 {earnedBadgeCount}/{totalBadgeCount}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">Level {profile.level}</span>
              </div>
              <div className="w-32 mt-2">
                <div className="text-xs text-right mb-1 opacity-80">{profile.experience} / {profile.experienceToNextLevel} XP</div>
                <div className="h-2 bg-blue-400/50 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-300 rounded-full transition-all" style={{ width: `${expPercentage}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-b">
          <button onClick={() => setActiveTab('room')} className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'room' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500'}`}>
            <Gift className="w-4 h-4" /> 나의 공간
          </button>
          <button onClick={() => setActiveTab('badges')} className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'badges' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500'}`}>
            <Award className="w-4 h-4" /> 뱃지 & 업적
          </button>
        </div>

        {activeTab === 'room' && (
          <div className="p-4">
            <div ref={roomRef} className="relative w-full h-80 overflow-hidden rounded-lg border-4 border-gray-200" onMouseMove={handleDragMove} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd} onTouchMove={handleDragMove} onTouchEnd={handleDragEnd}>
              <div className="absolute top-0 left-0 right-0 h-3/5" style={{ background: 'linear-gradient(180deg, #C7D2FE 0%, #E0E7FF 100%)', borderBottom: '4px solid #A5B4FC' }} />
              <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: 'linear-gradient(180deg, #D4A574 0%, #C4956A 50%, #B4855A 100%)', transform: 'perspective(500px) rotateX(30deg)', transformOrigin: 'bottom center' }} />

              <div className="absolute top-[10%] left-[10%] w-20 h-24">
                <div className="absolute inset-0 bg-white border-4 border-gray-300 rounded">
                  <div className="absolute inset-2 bg-gradient-to-b from-sky-200 to-sky-300">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[15%] right-[15%] w-10 h-10 bg-white rounded-full border-2 border-gray-400">
                <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-gray-800 transform -translate-y-1/2 origin-left rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-800 transform -translate-y-1/2 origin-left -rotate-12" />
              </div>

              {[...roomItems].sort((a, b) => a.position.y - b.position.y).map(item => (
                <div key={item.id} className={`absolute cursor-pointer transition-all duration-150 ${!item.owned ? 'opacity-40 grayscale' : ''} ${selectedItemId === item.id ? 'ring-2 ring-blue-500 ring-offset-2 rounded' : ''} ${editMode ? 'hover:ring-2 hover:ring-blue-300' : ''}`} style={{ left: `${item.position.x}%`, top: `${item.position.y}%`, transform: 'translate(-50%, -100%)', zIndex: item.zIndex + Math.round(item.position.y) }} onMouseDown={(e) => handleDragStart(e, item.id)} onTouchStart={(e) => handleDragStart(e, item.id)} onClick={() => editMode && setSelectedItemId(selectedItemId === item.id ? null : item.id)}>
                  {getSpriteComponent(item.sprite)()}
                  {!item.owned && <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"><span className="text-lg">🔒</span></div>}
                </div>
              ))}

              <div className="absolute left-1/2 bottom-[20%] transform -translate-x-1/2" style={{ zIndex: 100, animation: 'bounce 3s infinite' }}>
                <PixelAvatar />
              </div>

              {editMode && <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">편집 모드</div>}
              {editMode && <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)', backgroundSize: '10% 10%' }} />}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button onClick={() => { setEditMode(!editMode); if (editMode) setSelectedItemId(null); }} className="flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50">
                {editMode ? <><Save className="w-5 h-5" /> 저장하기</> : <><Edit3 className="w-5 h-5" /> 방 꾸미기</>}
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-50">
                <Gift className="w-5 h-5" /> 아이템 상점
              </button>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">나의 공간 정보</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><div className="text-2xl font-bold text-indigo-600">{roomItems.filter(i => i.owned).length}</div><div className="text-xs text-gray-500">보유 아이템</div></div>
                <div><div className="text-2xl font-bold text-amber-600">{roomItems.filter(i => !i.owned).length}</div><div className="text-xs text-gray-500">잠긴 아이템</div></div>
                <div><div className="text-2xl font-bold text-emerald-600">Lv.5</div><div className="text-xs text-gray-500">공간 레벨</div></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Book className="w-6 h-6 mx-auto text-blue-500 mb-2" />
                <div className="text-xl font-bold text-blue-600">{profile.stats.education}</div>
                <div className="text-xs text-blue-600">교육 참석</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <Heart className="w-6 h-6 mx-auto text-pink-500 mb-2" />
                <div className="text-xl font-bold text-pink-600">{profile.stats.praiseCards}</div>
                <div className="text-xs text-pink-600">칭찬카드</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Award className="w-6 h-6 mx-auto text-purple-500 mb-2" />
                <div className="text-xl font-bold text-purple-600">{profile.stats.certifications}</div>
                <div className="text-xs text-purple-600">인증/자격</div>
              </div>
            </div>

            {badgeCategories.map((category) => (
              <div key={category.id} className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {category.nameKo} 뱃지
                  <span className="text-sm text-gray-400 font-normal">({category.items.filter(b => b.earned).length}/{category.items.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((badge) => {
                    const colors = rarityColors[badge.rarity];
                    return (
                      <div key={badge.id} className={`p-4 rounded-lg border-2 cursor-pointer hover:shadow-md transition-all ${badge.earned ? `${colors.bg} ${colors.border}` : 'bg-gray-50 border-gray-200 opacity-60'}`} onClick={() => setSelectedBadge(badge)}>
                        <div className="flex items-start gap-3">
                          <div className={`text-3xl ${!badge.earned && 'grayscale'}`}>{badge.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`font-medium ${colors.text}`}>{badge.name}</span>
                              {badge.rarity === 'legendary' && <span className="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded">전설</span>}
                              {badge.rarity === 'epic' && <span className="text-xs bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded">영웅</span>}
                            </div>
                            {badge.earned ? (
                              <div className="text-xs text-gray-500 mt-1">{badge.earnedDate} 획득</div>
                            ) : badge.progress !== undefined && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs text-gray-500 mb-1"><span>진행률</span><span>{badge.progress}%</span></div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${badge.progress}%` }} /></div>
                              </div>
                            )}
                            <div className="flex items-center gap-1 mt-2 text-xs">
                              <Gift className="w-3 h-3 text-indigo-500" />
                              <span className="text-indigo-600">보상: {badge.reward}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedBadge && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedBadge(null)}>
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="text-center mb-4">
                <div className={`text-6xl mb-3 ${!selectedBadge.earned && 'grayscale'}`}>{selectedBadge.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{selectedBadge.name}</h3>
                <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${rarityColors[selectedBadge.rarity].bg} ${rarityColors[selectedBadge.rarity].text}`}>
                  {selectedBadge.rarity === 'legendary' && '전설'}{selectedBadge.rarity === 'epic' && '영웅'}{selectedBadge.rarity === 'rare' && '희귀'}{selectedBadge.rarity === 'common' && '일반'}
                </div>
              </div>
              {selectedBadge.earned ? (
                <div className="bg-green-50 p-3 rounded-lg text-center mb-4"><span className="text-green-600 font-medium">✓ {selectedBadge.earnedDate} 획득 완료</span></div>
              ) : selectedBadge.progress !== undefined && (
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-gray-600 mb-2">진행률: {selectedBadge.progress}%</div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedBadge.progress}%` }} /></div>
                </div>
              )}
              <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-indigo-700"><Gift className="w-5 h-5" /><span className="font-medium">보상: {selectedBadge.reward}</span></div>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setSelectedBadge(null)}>닫기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
