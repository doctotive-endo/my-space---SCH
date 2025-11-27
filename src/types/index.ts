// Position types for the XY coordinate system
export interface Position {
  x: number // 0-100 percentage
  y: number // 0-100 percentage
}

// Room item types
export type ItemCategory = 'furniture' | 'decoration' | 'trophy' | 'plant' | 'electronics' | 'special'

export interface RoomItem {
  id: string
  name: string
  nameKo: string
  category: ItemCategory
  position: Position
  width: number  // Grid units
  height: number // Grid units
  zIndex: number
  owned: boolean
  requiredBadge: string | null
  sprite: string // CSS class or SVG reference
  description?: string
}

// Badge and Achievement types
export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface BadgeReward {
  type: 'furniture' | 'decoration' | 'wallpaper' | 'special' | 'avatar'
  itemId: string
  itemName: string
}

export interface Badge {
  id: string
  name: string
  icon: string
  description: string
  category: string
  earned: boolean
  earnedDate?: string
  rarity: BadgeRarity
  reward: BadgeReward
  progress?: number // 0-100 for progressive badges
  requirement?: string
}

export interface BadgeCategory {
  id: string
  name: string
  nameKo: string
  items: Badge[]
}

// User Profile types
export interface UserStats {
  education: number
  praiseCards: number
  certifications: number
  totalBadges: number
  roomLevel: number
}

export interface UserProfile {
  id: string
  name: string
  role: string
  department: string
  years: number
  avatar: string
  level: number
  experience: number
  experienceToNextLevel: number
  stats: UserStats
}

// Room configuration
export interface RoomConfig {
  wallpaper: string
  floor: string
  lighting: 'day' | 'evening' | 'night'
  theme: string
}

// Store item for shop
export interface StoreItem extends Omit<RoomItem, 'position' | 'owned'> {
  price: number
  currency: 'coins' | 'badges' | 'points'
  unlockRequirement?: string
}

// Room state
export interface RoomState {
  items: RoomItem[]
  config: RoomConfig
  selectedItemId: string | null
  isDragging: boolean
  editMode: boolean
}

// Achievement stats
export interface AchievementStats {
  badges: BadgeCategory[]
  stats: UserStats
}
