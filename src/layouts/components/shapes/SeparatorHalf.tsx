import React from 'react'

const SeparatorHalf = ({ color = "var(--color-primary)", className }: { color?: string, className?: string }) => {
  return (
    <svg width="326" height="10" viewBox="0 0 326 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} opacity-70`}>
      <path d="M9.1123 4.06445C5.40406 2.5641 8.61719 -1.37747 8.61719 0.494141C8.61764 2.29082 11.2626 3.93929 12.6592 4.57715C12.6851 4.57704 12.7112 4.57715 12.7373 4.57715C12.724 4.58304 12.7108 4.58961 12.6973 4.5957C12.7107 4.60178 12.7241 4.60838 12.7373 4.61426C12.7112 4.61426 12.6851 4.61339 12.6592 4.61328C11.2626 5.2511 8.61732 6.90036 8.61719 8.69727C8.61719 10.5929 5.31985 6.52199 9.25781 5.06738L3.66211 5.95117L0 4.57812L3.66211 3.2041L9.1123 4.06445Z" fill={color} />
      <rect x="8.7373" y="4.34558" width="317.263" height="0.5" fill={color} />
    </svg>
  )
}

export default SeparatorHalf


