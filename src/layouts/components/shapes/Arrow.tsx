import React from 'react'

const Arrow = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={`inline w-4 h-3 ${className}`}
      width="37"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12L36 12M36 12C32.0571 12.7273 24.1714 16.1455 24.1714 24M36 12C32.0571 11.2727 24.1714 7.85455 24.1714 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"></path>
    </svg>
  )
}

export default Arrow
