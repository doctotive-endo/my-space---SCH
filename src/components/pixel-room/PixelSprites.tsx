'use client'

import React from 'react'

// Pixel Avatar - Shoulder view nurse character
export const PixelAvatar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '48px', height: '64px' }}>
      {/* Hair */}
      <div className="absolute" style={{
        top: '0px',
        left: '12px',
        width: '24px',
        height: '16px',
        backgroundColor: '#3D2314',
        borderRadius: '8px 8px 0 0'
      }} />
      {/* Face */}
      <div className="absolute" style={{
        top: '12px',
        left: '14px',
        width: '20px',
        height: '16px',
        backgroundColor: '#FFE4C4'
      }} />
      {/* Eyes */}
      <div className="absolute" style={{
        top: '18px',
        left: '18px',
        width: '4px',
        height: '4px',
        backgroundColor: '#000'
      }} />
      <div className="absolute" style={{
        top: '18px',
        left: '26px',
        width: '4px',
        height: '4px',
        backgroundColor: '#000'
      }} />
      {/* Body - White nurse uniform */}
      <div className="absolute" style={{
        top: '28px',
        left: '10px',
        width: '28px',
        height: '24px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #E5E7EB'
      }} />
      {/* Blue collar detail */}
      <div className="absolute" style={{
        top: '28px',
        left: '18px',
        width: '12px',
        height: '4px',
        backgroundColor: '#3B82F6'
      }} />
      {/* Legs */}
      <div className="absolute" style={{
        top: '52px',
        left: '14px',
        width: '8px',
        height: '12px',
        backgroundColor: '#1E3A8A'
      }} />
      <div className="absolute" style={{
        top: '52px',
        left: '26px',
        width: '8px',
        height: '12px',
        backgroundColor: '#1E3A8A'
      }} />
    </div>
  )
}

// Pixel Desk - 3D isometric style
export const PixelDesk: React.FC<{ className?: string; variant?: 'normal' | 'golden' }> = ({
  className = '',
  variant = 'normal'
}) => {
  const colors = variant === 'golden'
    ? { top: '#FFD700', front: '#DAA520', side: '#B8860B' }
    : { top: '#CD853F', front: '#8B4513', side: '#654321' }

  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '64px', height: '48px' }}>
      {/* Table top */}
      <div className="absolute" style={{
        top: '0px',
        left: '0px',
        width: '64px',
        height: '8px',
        backgroundColor: colors.top,
        transform: 'skewX(-10deg)'
      }} />
      {/* Front panel */}
      <div className="absolute" style={{
        top: '8px',
        left: '2px',
        width: '60px',
        height: '24px',
        backgroundColor: colors.front
      }} />
      {/* Side panel */}
      <div className="absolute" style={{
        top: '4px',
        left: '58px',
        width: '8px',
        height: '28px',
        backgroundColor: colors.side,
        transform: 'skewY(-20deg)'
      }} />
      {/* Legs */}
      <div className="absolute" style={{
        top: '32px',
        left: '6px',
        width: '8px',
        height: '16px',
        backgroundColor: colors.side
      }} />
      <div className="absolute" style={{
        top: '32px',
        left: '50px',
        width: '8px',
        height: '16px',
        backgroundColor: colors.side
      }} />
    </div>
  )
}

// Pixel Chair
export const PixelChair: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '32px', height: '48px' }}>
      {/* Backrest */}
      <div className="absolute" style={{
        top: '0px',
        left: '4px',
        width: '24px',
        height: '20px',
        backgroundColor: '#4338CA',
        borderRadius: '4px 4px 0 0'
      }} />
      {/* Seat */}
      <div className="absolute" style={{
        top: '20px',
        left: '0px',
        width: '32px',
        height: '8px',
        backgroundColor: '#4338CA'
      }} />
      {/* Legs */}
      <div className="absolute" style={{
        top: '28px',
        left: '4px',
        width: '4px',
        height: '20px',
        backgroundColor: '#1F2937'
      }} />
      <div className="absolute" style={{
        top: '28px',
        left: '24px',
        width: '4px',
        height: '20px',
        backgroundColor: '#1F2937'
      }} />
      {/* Wheels */}
      <div className="absolute rounded-full" style={{
        top: '44px',
        left: '2px',
        width: '8px',
        height: '8px',
        backgroundColor: '#374151'
      }} />
      <div className="absolute rounded-full" style={{
        top: '44px',
        left: '22px',
        width: '8px',
        height: '8px',
        backgroundColor: '#374151'
      }} />
    </div>
  )
}

// Pixel Trophy Shelf
export const PixelTrophyShelf: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '80px', height: '64px' }}>
      {/* Back board */}
      <div className="absolute" style={{
        top: '0px',
        left: '0px',
        width: '80px',
        height: '64px',
        backgroundColor: '#8B4513'
      }} />
      {/* Shelves */}
      <div className="absolute" style={{
        top: '16px',
        left: '0px',
        width: '80px',
        height: '4px',
        backgroundColor: '#654321'
      }} />
      <div className="absolute" style={{
        top: '36px',
        left: '0px',
        width: '80px',
        height: '4px',
        backgroundColor: '#654321'
      }} />
      <div className="absolute" style={{
        top: '56px',
        left: '0px',
        width: '80px',
        height: '4px',
        backgroundColor: '#654321'
      }} />
      {/* Trophies */}
      <div className="absolute" style={{
        top: '4px',
        left: '12px',
        width: '12px',
        height: '12px',
        backgroundColor: '#FFD700'
      }}>
        <div className="absolute" style={{
          top: '-4px',
          left: '2px',
          width: '8px',
          height: '4px',
          backgroundColor: '#FFD700',
          borderRadius: '4px 4px 0 0'
        }} />
      </div>
      <div className="absolute" style={{
        top: '24px',
        left: '32px',
        width: '12px',
        height: '12px',
        backgroundColor: '#C0C0C0'
      }} />
      <div className="absolute" style={{
        top: '44px',
        left: '56px',
        width: '12px',
        height: '12px',
        backgroundColor: '#CD7F32'
      }} />
    </div>
  )
}

// Pixel Computer
export const PixelComputer: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '48px', height: '40px' }}>
      {/* Monitor */}
      <div className="absolute" style={{
        top: '0px',
        left: '4px',
        width: '40px',
        height: '28px',
        backgroundColor: '#1F2937',
        borderRadius: '2px'
      }} />
      {/* Screen */}
      <div className="absolute" style={{
        top: '2px',
        left: '6px',
        width: '36px',
        height: '22px',
        backgroundColor: '#60A5FA'
      }} />
      {/* Stand */}
      <div className="absolute" style={{
        top: '28px',
        left: '18px',
        width: '12px',
        height: '8px',
        backgroundColor: '#374151'
      }} />
      {/* Base */}
      <div className="absolute" style={{
        top: '36px',
        left: '12px',
        width: '24px',
        height: '4px',
        backgroundColor: '#374151'
      }} />
    </div>
  )
}

// Pixel Plant
export const PixelPlant: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '32px', height: '48px' }}>
      {/* Leaves */}
      <div className="absolute" style={{
        top: '0px',
        left: '8px',
        width: '16px',
        height: '12px',
        backgroundColor: '#22C55E',
        borderRadius: '50%'
      }} />
      <div className="absolute" style={{
        top: '4px',
        left: '0px',
        width: '12px',
        height: '10px',
        backgroundColor: '#16A34A',
        borderRadius: '50%'
      }} />
      <div className="absolute" style={{
        top: '4px',
        left: '20px',
        width: '12px',
        height: '10px',
        backgroundColor: '#16A34A',
        borderRadius: '50%'
      }} />
      <div className="absolute" style={{
        top: '8px',
        left: '10px',
        width: '12px',
        height: '14px',
        backgroundColor: '#15803D',
        borderRadius: '50%'
      }} />
      {/* Stem */}
      <div className="absolute" style={{
        top: '18px',
        left: '14px',
        width: '4px',
        height: '12px',
        backgroundColor: '#166534'
      }} />
      {/* Pot */}
      <div className="absolute" style={{
        top: '28px',
        left: '6px',
        width: '20px',
        height: '20px',
        backgroundColor: '#B45309',
        borderRadius: '0 0 4px 4px'
      }} />
      {/* Pot rim */}
      <div className="absolute" style={{
        top: '28px',
        left: '4px',
        width: '24px',
        height: '4px',
        backgroundColor: '#92400E'
      }} />
    </div>
  )
}

// Pixel Bookshelf
export const PixelBookshelf: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '64px', height: '80px' }}>
      {/* Frame */}
      <div className="absolute" style={{
        top: '0px',
        left: '0px',
        width: '64px',
        height: '80px',
        backgroundColor: '#92400E',
        borderRadius: '2px'
      }} />
      {/* Inner background */}
      <div className="absolute" style={{
        top: '4px',
        left: '4px',
        width: '56px',
        height: '72px',
        backgroundColor: '#B45309'
      }} />
      {/* Shelves */}
      {[0, 24, 48].map((top, i) => (
        <div key={i} className="absolute" style={{
          top: `${top + 4}px`,
          left: '4px',
          width: '56px',
          height: '4px',
          backgroundColor: '#78350F'
        }} />
      ))}
      {/* Books row 1 */}
      <div className="absolute" style={{ top: '8px', left: '8px', width: '8px', height: '16px', backgroundColor: '#EF4444' }} />
      <div className="absolute" style={{ top: '10px', left: '18px', width: '6px', height: '14px', backgroundColor: '#3B82F6' }} />
      <div className="absolute" style={{ top: '8px', left: '26px', width: '10px', height: '16px', backgroundColor: '#22C55E' }} />
      <div className="absolute" style={{ top: '12px', left: '38px', width: '6px', height: '12px', backgroundColor: '#F59E0B' }} />
      <div className="absolute" style={{ top: '8px', left: '46px', width: '8px', height: '16px', backgroundColor: '#8B5CF6' }} />
      {/* Books row 2 */}
      <div className="absolute" style={{ top: '32px', left: '10px', width: '10px', height: '16px', backgroundColor: '#EC4899' }} />
      <div className="absolute" style={{ top: '34px', left: '22px', width: '8px', height: '14px', backgroundColor: '#14B8A6' }} />
      <div className="absolute" style={{ top: '32px', left: '32px', width: '6px', height: '16px', backgroundColor: '#F97316' }} />
      <div className="absolute" style={{ top: '36px', left: '40px', width: '12px', height: '12px', backgroundColor: '#6366F1' }} />
      {/* Books row 3 */}
      <div className="absolute" style={{ top: '56px', left: '8px', width: '12px', height: '16px', backgroundColor: '#84CC16' }} />
      <div className="absolute" style={{ top: '58px', left: '22px', width: '8px', height: '14px', backgroundColor: '#F43F5E' }} />
      <div className="absolute" style={{ top: '56px', left: '32px', width: '10px', height: '16px', backgroundColor: '#0EA5E9' }} />
      <div className="absolute" style={{ top: '60px', left: '44px', width: '8px', height: '12px', backgroundColor: '#A855F7' }} />
    </div>
  )
}

// Pixel Certificate Frame
export const PixelCertificate: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pixel-art ${className}`} style={{ width: '40px', height: '32px' }}>
      {/* Frame */}
      <div className="absolute" style={{
        top: '0px',
        left: '0px',
        width: '40px',
        height: '32px',
        backgroundColor: '#78350F',
        borderRadius: '2px'
      }} />
      {/* Inner frame */}
      <div className="absolute" style={{
        top: '2px',
        left: '2px',
        width: '36px',
        height: '28px',
        backgroundColor: '#D4A574'
      }} />
      {/* Paper */}
      <div className="absolute" style={{
        top: '4px',
        left: '4px',
        width: '32px',
        height: '24px',
        backgroundColor: '#FEF3C7'
      }} />
      {/* Text lines */}
      <div className="absolute" style={{
        top: '8px',
        left: '8px',
        width: '24px',
        height: '2px',
        backgroundColor: '#1F2937'
      }} />
      <div className="absolute" style={{
        top: '14px',
        left: '10px',
        width: '20px',
        height: '2px',
        backgroundColor: '#6B7280'
      }} />
      <div className="absolute" style={{
        top: '20px',
        left: '12px',
        width: '16px',
        height: '2px',
        backgroundColor: '#6B7280'
      }} />
    </div>
  )
}

// Sprite Map for dynamic rendering
export const SPRITE_COMPONENTS: Record<string, React.FC<{ className?: string }>> = {
  'avatar': PixelAvatar,
  'desk': PixelDesk,
  'chair': PixelChair,
  'trophy_shelf': PixelTrophyShelf,
  'computer': PixelComputer,
  'plant': PixelPlant,
  'bookshelf': PixelBookshelf,
  'certificate': PixelCertificate,
}

// Golden desk variant
export const PixelGoldenDesk: React.FC<{ className?: string }> = ({ className = '' }) => (
  <PixelDesk className={className} variant="golden" />
)
