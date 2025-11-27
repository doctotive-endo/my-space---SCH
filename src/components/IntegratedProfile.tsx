'use client'

import React, { useState, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PixelRoom } from '@/components/pixel-room'
import { RoomItem, Position, Badge, BadgeCategory, UserProfile, UserStats } from '@/types'
import {
  Award,
  Star,
  Users,
  Trophy,
  Book,
  Heart,
  Gift,
  Settings,
  Edit3,
  Save,
  X,
  ChevronRight
} from 'lucide-react'

// Initial room items data
const initialRoomItems: RoomItem[] = [
  {
    id: 'desk-1',
    name: 'desk',
    nameKo: '책상',
    category: 'furniture',
    position: { x: 25, y: 75 },
    width: 2,
    height: 1,
    zIndex: 10,
    owned: true,
    requiredBadge: null,
    sprite: 'desk'
  },
  {
    id: 'chair-1',
    name: 'chair',
    nameKo: '의자',
    category: 'furniture',
    position: { x: 30, y: 78 },
    width: 1,
    height: 1,
    zIndex: 11,
    owned: true,
    requiredBadge: null,
    sprite: 'chair'
  },
  {
    id: 'computer-1',
    name: 'computer',
    nameKo: '컴퓨터',
    category: 'electronics',
    position: { x: 25, y: 70 },
    width: 1,
    height: 1,
    zIndex: 12,
    owned: true,
    requiredBadge: null,
    sprite: 'computer'
  },
  {
    id: 'trophy-shelf-1',
    name: 'trophy_shelf',
    nameKo: '트로피 선반',
    category: 'trophy',
    position: { x: 75, y: 55 },
    width: 2,
    height: 2,
    zIndex: 5,
    owned: true,
    requiredBadge: 'research',
    sprite: 'trophy_shelf'
  },
  {
    id: 'bookshelf-1',
    name: 'bookshelf',
    nameKo: '책장',
    category: 'furniture',
    position: { x: 85, y: 58 },
    width: 2,
    height: 2,
    zIndex: 4,
    owned: true,
    requiredBadge: null,
    sprite: 'bookshelf'
  },
  {
    id: 'plant-1',
    name: 'plant',
    nameKo: '화분',
    category: 'plant',
    position: { x: 15, y: 65 },
    width: 1,
    height: 1,
    zIndex: 8,
    owned: true,
    requiredBadge: null,
    sprite: 'plant'
  },
  {
    id: 'certificate-1',
    name: 'certificate',
    nameKo: '인증서 액자',
    category: 'decoration',
    position: { x: 40, y: 45 },
    width: 1,
    height: 1,
    zIndex: 3,
    owned: true,
    requiredBadge: 'diabetes',
    sprite: 'certificate'
  },
  {
    id: 'golden-desk-1',
    name: 'golden_desk',
    nameKo: '황금 책상',
    category: 'special',
    position: { x: 60, y: 80 },
    width: 2,
    height: 1,
    zIndex: 10,
    owned: false,
    requiredBadge: 'quality',
    sprite: 'golden_desk',
    description: 'QI 전문가 뱃지 획득 시 해금'
  }
]

// Badge data
const badgeCategories: BadgeCategory[] = [
  {
    id: 'specialist',
    name: 'Specialist',
    nameKo: '전문가',
    items: [
      {
        id: 'specialist',
        name: '내과전담간호사',
        icon: '🏥',
        description: '내과 전담 간호사 자격 취득',
        category: 'specialist',
        earned: true,
        earnedDate: '2023-12',
        rarity: 'epic',
        reward: { type: 'furniture', itemId: 'premium-desk', itemName: '고급 책상' }
      },
      {
        id: 'diabetes',
        name: '당뇨교육 인증',
        icon: '💉',
        description: '당뇨 환자 교육 프로그램 이수',
        category: 'specialist',
        earned: true,
        earnedDate: '2024-01',
        rarity: 'rare',
        reward: { type: 'decoration', itemId: 'certificate', itemName: '인증서 액자' }
      },
      {
        id: 'diabetes-expert',
        name: '당뇨교육 전문가',
        icon: '📊',
        description: '당뇨 교육 전문가 인증 획득',
        category: 'specialist',
        earned: false,
        rarity: 'legendary',
        reward: { type: 'special', itemId: 'expert-coat', itemName: '전문가 가운' },
        progress: 65,
        requirement: '당뇨 교육 100회 달성'
      }
    ]
  },
  {
    id: 'hospital-activity',
    name: 'Hospital Activity',
    nameKo: '병원활동',
    items: [
      {
        id: 'infection',
        name: '감염관리 교육',
        icon: '🧼',
        description: '감염관리 교육 이수 완료',
        category: 'hospital-activity',
        earned: true,
        earnedDate: '2024-02',
        rarity: 'common',
        reward: { type: 'wallpaper', itemId: 'premium-wallpaper', itemName: '프리미엄 벽지' }
      },
      {
        id: 'handwash',
        name: '손씻기 교육',
        icon: '💧',
        description: '손씻기 교육 프로그램 완료',
        category: 'hospital-activity',
        earned: true,
        earnedDate: '2024-03',
        rarity: 'rare',
        reward: { type: 'special', itemId: 'gold-badge', itemName: '골드 뱃지' }
      },
      {
        id: 'praise',
        name: '칭찬카드 10회',
        icon: '❤️',
        description: '동료로부터 칭찬카드 10회 수령',
        category: 'hospital-activity',
        earned: true,
        earnedDate: '2024-03',
        rarity: 'rare',
        reward: { type: 'decoration', itemId: 'heart-frame', itemName: '하트 프레임' }
      },
      {
        id: 'quality',
        name: 'QI 전문가',
        icon: '⭐',
        description: 'Quality Improvement 프로젝트 리더',
        category: 'hospital-activity',
        earned: false,
        rarity: 'legendary',
        reward: { type: 'furniture', itemId: 'golden-desk', itemName: '황금 책상' },
        progress: 40,
        requirement: 'QI 프로젝트 3건 완료'
      }
    ]
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    nameKo: '팀워크',
    items: [
      {
        id: 'mentor',
        name: '멘토링 달인',
        icon: '👨‍🏫',
        description: '신규 간호사 멘토링 5회 완료',
        category: 'teamwork',
        earned: true,
        earnedDate: '2024-02',
        rarity: 'epic',
        reward: { type: 'decoration', itemId: 'mentor-plaque', itemName: '멘토 명패' }
      },
      {
        id: 'team-player',
        name: '팀 플레이어',
        icon: '🤝',
        description: '팀 프로젝트 참여 10회',
        category: 'teamwork',
        earned: true,
        earnedDate: '2024-01',
        rarity: 'common',
        reward: { type: 'decoration', itemId: 'team-trophy', itemName: '팀 트로피' }
      }
    ]
  }
]

// Rarity color mapping
const rarityColors: Record<string, { bg: string; text: string; border: string }> = {
  common: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
  rare: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
  epic: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
  legendary: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' }
}

const IntegratedProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'room' | 'badges'>('room')
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [roomItems, setRoomItems] = useState<RoomItem[]>(initialRoomItems)

  // User profile data
  const [profile] = useState<UserProfile>({
    id: 'user-1',
    name: '김간호',
    role: '외래 담당 간호사',
    department: '내과',
    years: 5,
    avatar: '👩‍⚕️',
    level: 12,
    experience: 2400,
    experienceToNextLevel: 3000,
    stats: {
      education: 24,
      praiseCards: 10,
      certifications: 3,
      totalBadges: 8,
      roomLevel: 5
    }
  })

  // Handle item movement in edit mode
  const handleItemMove = useCallback((itemId: string, newPosition: Position) => {
    setRoomItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, position: newPosition }
          : item
      )
    )
  }, [])

  // Handle item selection
  const handleItemSelect = useCallback((itemId: string | null) => {
    setSelectedItemId(itemId)
  }, [])

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode)
    if (editMode) {
      setSelectedItemId(null)
    }
  }

  // Calculate progress percentage
  const expPercentage = (profile.experience / profile.experienceToNextLevel) * 100

  // Count earned badges
  const earnedBadgeCount = badgeCategories.reduce(
    (acc, cat) => acc + cat.items.filter(b => b.earned).length,
    0
  )
  const totalBadgeCount = badgeCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  )

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{profile.avatar}</div>
              <div>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm opacity-80">
                  {profile.department} {profile.role} · {profile.years}년차
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-xs">
                    뱃지 {earnedBadgeCount}/{totalBadgeCount}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-bold">Level {profile.level}</span>
              </div>
              <div className="w-32 mt-2">
                <div className="text-xs text-right mb-1 opacity-80">
                  {profile.experience} / {profile.experienceToNextLevel} XP
                </div>
                <div className="h-2 bg-blue-400/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-300 rounded-full transition-all duration-500"
                    style={{ width: `${expPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('room')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'room'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Gift className="w-4 h-4" />
            나의 공간
          </button>
          <button
            onClick={() => setActiveTab('badges')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'badges'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Award className="w-4 h-4" />
            뱃지 & 업적
          </button>
        </div>

        {/* Room View */}
        {activeTab === 'room' && (
          <div className="p-4">
            {/* Pixel Room */}
            <PixelRoom
              items={roomItems}
              onItemMove={handleItemMove}
              onItemSelect={handleItemSelect}
              selectedItemId={selectedItemId}
              editMode={editMode}
              className="border-4 border-gray-200 shadow-inner"
            />

            {/* Room Controls */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-6"
                onClick={toggleEditMode}
              >
                {editMode ? (
                  <>
                    <Save className="w-5 h-5" />
                    저장하기
                  </>
                ) : (
                  <>
                    <Edit3 className="w-5 h-5" />
                    방 꾸미기
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-6"
              >
                <Gift className="w-5 h-5" />
                아이템 상점
              </Button>
            </div>

            {/* Selected Item Info */}
            {editMode && selectedItemId && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-blue-800">
                      {roomItems.find(i => i.id === selectedItemId)?.nameKo}
                    </h4>
                    <p className="text-sm text-blue-600">
                      드래그하여 위치를 이동하세요
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedItemId(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Room Stats */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">나의 공간 정보</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {roomItems.filter(i => i.owned).length}
                  </div>
                  <div className="text-xs text-gray-500">보유 아이템</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">
                    {roomItems.filter(i => !i.owned).length}
                  </div>
                  <div className="text-xs text-gray-500">잠긴 아이템</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">
                    Lv.{profile.stats.roomLevel}
                  </div>
                  <div className="text-xs text-gray-500">공간 레벨</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Badges View */}
        {activeTab === 'badges' && (
          <div className="p-4">
            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Book className="w-6 h-6 mx-auto text-blue-500 mb-2" />
                <div className="text-xl font-bold text-blue-600">
                  {profile.stats.education}
                </div>
                <div className="text-xs text-blue-600">교육 참석</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <Heart className="w-6 h-6 mx-auto text-pink-500 mb-2" />
                <div className="text-xl font-bold text-pink-600">
                  {profile.stats.praiseCards}
                </div>
                <div className="text-xs text-pink-600">칭찬카드</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Award className="w-6 h-6 mx-auto text-purple-500 mb-2" />
                <div className="text-xl font-bold text-purple-600">
                  {profile.stats.certifications}
                </div>
                <div className="text-xs text-purple-600">인증/자격</div>
              </div>
            </div>

            {/* Badge Categories */}
            {badgeCategories.map((category) => (
              <div key={category.id} className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {category.nameKo} 뱃지
                  <span className="text-sm text-gray-400 font-normal">
                    ({category.items.filter(b => b.earned).length}/{category.items.length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((badge) => {
                    const colors = rarityColors[badge.rarity]
                    return (
                      <div
                        key={badge.id}
                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${
                          badge.earned
                            ? `${colors.bg} ${colors.border}`
                            : 'bg-gray-50 border-gray-200 opacity-60'
                        }`}
                        onClick={() => setSelectedBadge(badge)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`text-3xl ${!badge.earned && 'grayscale'}`}>
                            {badge.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`font-medium ${colors.text}`}>
                                {badge.name}
                              </span>
                              {badge.rarity === 'legendary' && (
                                <span className="text-xs bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded">
                                  전설
                                </span>
                              )}
                              {badge.rarity === 'epic' && (
                                <span className="text-xs bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded">
                                  영웅
                                </span>
                              )}
                            </div>
                            {badge.earned ? (
                              <div className="text-xs text-gray-500 mt-1">
                                {badge.earnedDate} 획득
                              </div>
                            ) : badge.progress !== undefined ? (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>진행률</span>
                                  <span>{badge.progress}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-blue-500 rounded-full transition-all"
                                    style={{ width: `${badge.progress}%` }}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="text-xs text-gray-400 mt-1">
                                미획득
                              </div>
                            )}
                            <div className="flex items-center gap-1 mt-2 text-xs">
                              <Gift className="w-3 h-3 text-indigo-500" />
                              <span className="text-indigo-600">
                                보상: {badge.reward.itemName}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Badge Detail Modal */}
        {selectedBadge && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedBadge(null)}
          >
            <div
              className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4">
                <div className={`text-6xl mb-3 ${!selectedBadge.earned && 'grayscale'}`}>
                  {selectedBadge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {selectedBadge.name}
                </h3>
                <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                  rarityColors[selectedBadge.rarity].bg
                } ${rarityColors[selectedBadge.rarity].text}`}>
                  {selectedBadge.rarity === 'legendary' && '전설'}
                  {selectedBadge.rarity === 'epic' && '영웅'}
                  {selectedBadge.rarity === 'rare' && '희귀'}
                  {selectedBadge.rarity === 'common' && '일반'}
                </div>
              </div>

              <p className="text-gray-600 text-center mb-4">
                {selectedBadge.description}
              </p>

              {selectedBadge.earned ? (
                <div className="bg-green-50 p-3 rounded-lg text-center mb-4">
                  <span className="text-green-600 font-medium">
                    ✓ {selectedBadge.earnedDate} 획득 완료
                  </span>
                </div>
              ) : selectedBadge.requirement && (
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="text-sm text-gray-600 mb-2">
                    달성 조건: {selectedBadge.requirement}
                  </div>
                  {selectedBadge.progress !== undefined && (
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${selectedBadge.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">보상: {selectedBadge.reward.itemName}</span>
                </div>
                <p className="text-sm text-indigo-600 mt-1">
                  이 뱃지를 획득하면 나의 공간에 배치할 수 있습니다.
                </p>
              </div>

              <Button
                className="w-full"
                onClick={() => setSelectedBadge(null)}
              >
                닫기
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

export default IntegratedProfile
