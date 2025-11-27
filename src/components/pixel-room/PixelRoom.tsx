'use client'

import React, { useState, useCallback, useRef } from 'react'
import { RoomItem, Position } from '@/types'
import {
  PixelAvatar,
  PixelDesk,
  PixelChair,
  PixelTrophyShelf,
  PixelComputer,
  PixelPlant,
  PixelBookshelf,
  PixelCertificate,
  PixelGoldenDesk
} from './PixelSprites'

interface PixelRoomProps {
  items: RoomItem[]
  onItemMove?: (itemId: string, newPosition: Position) => void
  onItemSelect?: (itemId: string | null) => void
  selectedItemId?: string | null
  editMode?: boolean
  className?: string
}

// Sprite component map
const getSpriteComponent = (spriteId: string): React.FC<{ className?: string }> => {
  const spriteMap: Record<string, React.FC<{ className?: string }>> = {
    'desk': PixelDesk,
    'chair': PixelChair,
    'trophy_shelf': PixelTrophyShelf,
    'computer': PixelComputer,
    'plant': PixelPlant,
    'bookshelf': PixelBookshelf,
    'certificate': PixelCertificate,
    'golden_desk': PixelGoldenDesk,
  }
  return spriteMap[spriteId] || PixelDesk
}

export const PixelRoom: React.FC<PixelRoomProps> = ({
  items,
  onItemMove,
  onItemSelect,
  selectedItemId,
  editMode = false,
  className = ''
}) => {
  const roomRef = useRef<HTMLDivElement>(null)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  // Convert screen coordinates to room position (percentage)
  const screenToRoomPosition = useCallback((clientX: number, clientY: number): Position => {
    if (!roomRef.current) return { x: 0, y: 0 }
    const rect = roomRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    }
  }, [])

  // Handle drag start
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent, itemId: string) => {
    if (!editMode) return
    e.preventDefault()

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    const item = items.find(i => i.id === itemId)
    if (!item || !roomRef.current) return

    const rect = roomRef.current.getBoundingClientRect()
    const itemScreenX = (item.position.x / 100) * rect.width + rect.left
    const itemScreenY = (item.position.y / 100) * rect.height + rect.top

    setDragOffset({
      x: clientX - itemScreenX,
      y: clientY - itemScreenY
    })
    setDraggedItem(itemId)
    onItemSelect?.(itemId)
  }, [editMode, items, onItemSelect])

  // Handle drag move
  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!draggedItem || !editMode) return

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

    const newPos = screenToRoomPosition(clientX - dragOffset.x, clientY - dragOffset.y)
    onItemMove?.(draggedItem, newPos)
  }, [draggedItem, editMode, dragOffset, screenToRoomPosition, onItemMove])

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setDraggedItem(null)
    setDragOffset({ x: 0, y: 0 })
  }, [])

  // Handle item click
  const handleItemClick = useCallback((itemId: string) => {
    if (editMode) {
      onItemSelect?.(selectedItemId === itemId ? null : itemId)
    }
  }, [editMode, selectedItemId, onItemSelect])

  // Sort items by Y position for proper layering (items lower on screen appear in front)
  const sortedItems = [...items].sort((a, b) => a.position.y - b.position.y)

  return (
    <div
      ref={roomRef}
      className={`relative w-full h-80 overflow-hidden rounded-lg shoulder-view ${className}`}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Room Background - Shoulder View with 3D perspective */}
      <div className="absolute inset-0">
        {/* Back wall */}
        <div
          className="absolute top-0 left-0 right-0 h-[60%]"
          style={{
            background: 'linear-gradient(180deg, #C7D2FE 0%, #E0E7FF 100%)',
            borderBottom: '4px solid #A5B4FC'
          }}
        />

        {/* Wall decorations - subtle pattern */}
        <div
          className="absolute top-0 left-0 right-0 h-[60%] opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                rgba(0,0,0,0.05) 20px,
                rgba(0,0,0,0.05) 21px
              )
            `
          }}
        />

        {/* Floor - Isometric wood pattern */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{
            background: 'linear-gradient(180deg, #D4A574 0%, #C4956A 50%, #B4855A 100%)',
            transform: 'perspective(500px) rotateX(30deg)',
            transformOrigin: 'bottom center'
          }}
        />

        {/* Floor grid lines for depth effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] pixel-floor opacity-30"
          style={{
            transform: 'perspective(500px) rotateX(30deg)',
            transformOrigin: 'bottom center'
          }}
        />

        {/* Shadow under floor */}
        <div
          className="absolute bottom-0 left-0 right-0 h-4"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)'
          }}
        />

        {/* Window on back wall */}
        <div className="absolute top-[10%] left-[10%] w-20 h-24">
          {/* Window frame */}
          <div className="absolute inset-0 bg-white border-4 border-gray-300 rounded">
            {/* Window panes */}
            <div className="absolute inset-2 bg-gradient-to-b from-sky-200 to-sky-300">
              {/* Window cross */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2" />
            </div>
          </div>
          {/* Window sill */}
          <div className="absolute -bottom-1 -left-1 -right-1 h-2 bg-gray-200 rounded-b" />
        </div>

        {/* Clock on wall */}
        <div className="absolute top-[15%] right-[15%] w-10 h-10 bg-white rounded-full border-2 border-gray-400">
          <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-gray-800 transform -translate-y-1/2 origin-left rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-800 transform -translate-y-1/2 origin-left -rotate-12" />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Room Items */}
      {sortedItems.map(item => {
        const SpriteComponent = getSpriteComponent(item.sprite)
        const isSelected = selectedItemId === item.id
        const isDragging = draggedItem === item.id

        return (
          <div
            key={item.id}
            className={`
              absolute pixel-item cursor-pointer transition-all duration-150
              ${!item.owned ? 'opacity-40 grayscale' : ''}
              ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2 rounded' : ''}
              ${isDragging ? 'dragging scale-105' : ''}
              ${editMode ? 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-1' : ''}
            `}
            style={{
              left: `${item.position.x}%`,
              top: `${item.position.y}%`,
              transform: 'translate(-50%, -100%)',
              zIndex: item.zIndex + Math.round(item.position.y)
            }}
            onMouseDown={(e) => handleDragStart(e, item.id)}
            onTouchStart={(e) => handleDragStart(e, item.id)}
            onClick={() => handleItemClick(item.id)}
          >
            <SpriteComponent />
            {/* Item label on hover */}
            {editMode && (
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                  {item.nameKo}
                </span>
              </div>
            )}
            {/* Lock icon for unowned items */}
            {!item.owned && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <span className="text-lg">🔒</span>
              </div>
            )}
          </div>
        )
      })}

      {/* Avatar - Always centered at bottom */}
      <div
        className="absolute left-1/2 bottom-[20%] transform -translate-x-1/2"
        style={{ zIndex: 100 }}
      >
        <PixelAvatar className="animate-float" />
      </div>

      {/* Edit Mode Indicator */}
      {editMode && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
          편집 모드
        </div>
      )}

      {/* Grid overlay in edit mode */}
      {editMode && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '10% 10%'
          }}
        />
      )}
    </div>
  )
}

export default PixelRoom
