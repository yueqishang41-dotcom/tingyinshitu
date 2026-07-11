/**
 * 听音选图实验 - 核心逻辑
 * Auditory-Visual Matching Task
 */

// ============================================================
// SVG 图标库 - 每个单词对应一个内嵌 SVG 图标
// ============================================================
const SVG_ICONS = {
  // --- 水果 ---
  apple: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 C45 10 40 8 35 10 C30 12 28 16 30 20" fill="none" stroke="#5D4037" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="50" cy="22" rx="4" ry="6" fill="#4CAF50" transform="rotate(15,50,22)"/>
    <path d="M50 25 C25 25 15 45 18 62 C21 80 35 90 50 88 C65 90 79 80 82 62 C85 45 75 25 50 25Z" fill="#E53935"/>
    <ellipse cx="38" cy="50" rx="5" ry="8" fill="#EF5350" opacity="0.5"/>
  </svg>`,

  banana: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 75 C20 55 25 30 45 18 C55 12 65 12 72 15" fill="none" stroke="#F9A825" stroke-width="14" stroke-linecap="round"/>
    <path d="M25 75 C20 55 25 30 45 18 C55 12 65 12 72 15" fill="none" stroke="#FDD835" stroke-width="10" stroke-linecap="round"/>
    <path d="M72 15 C75 12 78 13 76 17" fill="#8D6E63"/>
    <path d="M25 75 C23 78 20 78 22 74" fill="#8D6E63"/>
  </svg>`,

  orange: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="32" fill="#FF9800"/>
    <circle cx="50" cy="55" r="32" fill="none" stroke="#E65100" stroke-width="1.5"/>
    <circle cx="50" cy="55" r="28" fill="none" stroke="#FFB74D" stroke-width="0.5" opacity="0.5"/>
    <path d="M50 23 C48 18 45 16 42 18" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="52" cy="22" rx="3" ry="5" fill="#66BB6A" transform="rotate(-10,52,22)"/>
    <circle cx="40" cy="48" r="2" fill="#FFB74D" opacity="0.4"/>
    <circle cx="58" cy="60" r="2" fill="#FFB74D" opacity="0.4"/>
    <circle cx="48" cy="68" r="1.5" fill="#FFB74D" opacity="0.4"/>
  </svg>`,

  // --- 动物 ---
  dog: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="22" ry="20" fill="#8D6E63"/>
    <circle cx="50" cy="40" r="18" fill="#A1887F"/>
    <ellipse cx="32" cy="30" rx="8" ry="14" fill="#8D6E63" transform="rotate(-15,32,30)"/>
    <ellipse cx="68" cy="30" rx="8" ry="14" fill="#8D6E63" transform="rotate(15,68,30)"/>
    <ellipse cx="34" cy="28" rx="5" ry="10" fill="#BCAAA4" transform="rotate(-15,34,28)"/>
    <ellipse cx="66" cy="28" rx="5" ry="10" fill="#BCAAA4" transform="rotate(15,66,28)"/>
    <circle cx="43" cy="38" r="3" fill="#3E2723"/>
    <circle cx="57" cy="38" r="3" fill="#3E2723"/>
    <circle cx="44" cy="37" r="1" fill="white"/>
    <circle cx="58" cy="37" r="1" fill="white"/>
    <ellipse cx="50" cy="46" rx="5" ry="3.5" fill="#3E2723"/>
    <path d="M47 49 Q50 53 53 49" fill="none" stroke="#3E2723" stroke-width="1.5"/>
    <ellipse cx="50" cy="72" rx="6" ry="5" fill="#A1887F"/>
  </svg>`,

  cat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="60" rx="20" ry="22" fill="#78909C"/>
    <circle cx="50" cy="38" r="16" fill="#90A4AE"/>
    <polygon points="35,28 30,12 42,24" fill="#78909C"/>
    <polygon points="65,28 70,12 58,24" fill="#78909C"/>
    <polygon points="37,26 33,16 41,23" fill="#B0BEC5"/>
    <polygon points="63,26 67,16 59,23" fill="#B0BEC5"/>
    <ellipse cx="43" cy="36" rx="3" ry="4" fill="#263238"/>
    <ellipse cx="57" cy="36" rx="3" ry="4" fill="#263238"/>
    <circle cx="44" cy="35" r="1.2" fill="white"/>
    <circle cx="58" cy="35" r="1.2" fill="white"/>
    <ellipse cx="50" cy="44" rx="2.5" ry="2" fill="#FF8A80"/>
    <line x1="30" y1="40" x2="20" y2="38" stroke="#546E7A" stroke-width="1"/>
    <line x1="30" y1="44" x2="20" y2="45" stroke="#546E7A" stroke-width="1"/>
    <line x1="70" y1="40" x2="80" y2="38" stroke="#546E7A" stroke-width="1"/>
    <line x1="70" y1="44" x2="80" y2="45" stroke="#546E7A" stroke-width="1"/>
    <path d="M50 46 Q52 50 50 52" fill="none" stroke="#546E7A" stroke-width="1"/>
    <path d="M55 72 Q70 65 78 60" fill="none" stroke="#78909C" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  bird: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="18" ry="15" fill="#42A5F5"/>
    <circle cx="50" cy="38" r="12" fill="#64B5F6"/>
    <circle cx="46" cy="36" r="2.5" fill="#1A237E"/>
    <circle cx="46" cy="35.5" r="0.8" fill="white"/>
    <polygon points="58,38 68,36 58,40" fill="#FF8F00"/>
    <path d="M35 55 L22 50 L25 55 L22 60 Z" fill="#1E88E5"/>
    <path d="M65 55 L78 50 L75 55 L78 60 Z" fill="#1E88E5"/>
    <path d="M45 68 L42 80 L48 78 L50 82 L52 78 L58 80 L55 68" fill="#FF8F00"/>
    <ellipse cx="50" cy="52" rx="8" ry="5" fill="#90CAF9" opacity="0.5"/>
  </svg>`,

  fish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="48" cy="50" rx="28" ry="18" fill="#FF7043"/>
    <polygon points="76,50 92,35 92,65" fill="#FF5722"/>
    <circle cx="32" cy="46" r="4" fill="white"/>
    <circle cx="33" cy="46" r="2.5" fill="#1A237E"/>
    <circle cx="33.5" cy="45.5" r="0.8" fill="white"/>
    <path d="M48 35 Q55 32 60 35" fill="none" stroke="#E64A19" stroke-width="1.5"/>
    <path d="M48 65 Q55 68 60 65" fill="none" stroke="#E64A19" stroke-width="1.5"/>
    <path d="M20 50 Q30 45 40 50 Q30 55 20 50" fill="#FF8A65" opacity="0.6"/>
    <line x1="55" y1="42" x2="65" y2="42" stroke="#E64A19" stroke-width="0.8" opacity="0.5"/>
    <line x1="55" y1="50" x2="65" y2="50" stroke="#E64A19" stroke-width="0.8" opacity="0.5"/>
    <line x1="55" y1="58" x2="65" y2="58" stroke="#E64A19" stroke-width="0.8" opacity="0.5"/>
  </svg>`,

  frog: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="62" rx="28" ry="20" fill="#4CAF50"/>
    <circle cx="50" cy="42" r="20" fill="#66BB6A"/>
    <circle cx="36" cy="32" r="10" fill="#66BB6A"/>
    <circle cx="64" cy="32" r="10" fill="#66BB6A"/>
    <circle cx="36" cy="32" r="7" fill="white"/>
    <circle cx="64" cy="32" r="7" fill="white"/>
    <circle cx="37" cy="32" r="4" fill="#1B5E20"/>
    <circle cx="65" cy="32" r="4" fill="#1B5E20"/>
    <circle cx="38" cy="31" r="1.2" fill="white"/>
    <circle cx="66" cy="31" r="1.2" fill="white"/>
    <path d="M38 50 Q50 56 62 50" fill="none" stroke="#2E7D32" stroke-width="2"/>
    <ellipse cx="50" cy="52" rx="6" ry="3" fill="#2E7D32"/>
  </svg>`,

  duck: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="55" cy="62" rx="22" ry="18" fill="#FFF176"/>
    <circle cx="40" cy="40" r="14" fill="#FFEE58"/>
    <circle cx="36" cy="38" r="2.5" fill="#1A237E"/>
    <circle cx="36.5" cy="37.5" r="0.8" fill="white"/>
    <polygon points="26,42 16,40 26,46" fill="#FF8F00"/>
    <path d="M35 55 L30 75 L38 72 L40 78 L42 72 L50 75 L45 55" fill="#FF8F00"/>
    <path d="M65 55 Q72 50 78 55" fill="none" stroke="#F9A825" stroke-width="3"/>
    <ellipse cx="55" cy="58" rx="10" ry="8" fill="#FFF9C4" opacity="0.5"/>
  </svg>`,

  // --- 交通工具 ---
  car: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="45" width="70" height="25" rx="5" fill="#E53935"/>
    <path d="M25 45 L32 28 L68 28 L75 45" fill="#C62828"/>
    <rect x="35" y="30" width="13" height="13" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <rect x="52" y="30" width="13" height="13" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <circle cx="28" cy="70" r="8" fill="#424242"/>
    <circle cx="28" cy="70" r="4" fill="#757575"/>
    <circle cx="72" cy="70" r="8" fill="#424242"/>
    <circle cx="72" cy="70" r="4" fill="#757575"/>
    <rect x="15" y="50" width="5" height="8" rx="1" fill="#FFEB3B"/>
    <rect x="80" y="50" width="5" height="8" rx="1" fill="#F44336"/>
  </svg>`,

  bus: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="22" width="76" height="50" rx="4" fill="#FFC107"/>
    <rect x="12" y="22" width="76" height="10" rx="4" fill="#FF8F00"/>
    <rect x="18" y="36" width="14" height="12" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <rect x="36" y="36" width="14" height="12" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <rect x="54" y="36" width="14" height="12" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <rect x="72" y="36" width="14" height="12" rx="2" fill="#B3E5FC" opacity="0.8"/>
    <circle cx="25" cy="76" r="7" fill="#424242"/>
    <circle cx="25" cy="76" r="3.5" fill="#757575"/>
    <circle cx="75" cy="76" r="7" fill="#424242"/>
    <circle cx="75" cy="76" r="3.5" fill="#757575"/>
    <rect x="12" y="55" width="76" height="2" fill="#FF8F00"/>
  </svg>`,

  bike: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="65" r="16" fill="none" stroke="#1565C0" stroke-width="3"/>
    <circle cx="72" cy="65" r="16" fill="none" stroke="#1565C0" stroke-width="3"/>
    <path d="M28 65 L45 35 L55 35 L72 65" fill="none" stroke="#1565C0" stroke-width="2.5"/>
    <path d="M45 35 L28 65" fill="none" stroke="#1565C0" stroke-width="2.5"/>
    <path d="M45 35 L55 35" fill="none" stroke="#1565C0" stroke-width="3"/>
    <line x1="50" y1="35" x2="55" y2="28" stroke="#424242" stroke-width="2.5"/>
    <circle cx="55" cy="26" r="3" fill="#424242"/>
    <line x1="50" y1="35" x2="48" y2="30" stroke="#424242" stroke-width="2"/>
    <line x1="50" y1="35" x2="52" y2="30" stroke="#424242" stroke-width="2"/>
    <circle cx="28" cy="65" r="3" fill="#1565C0"/>
    <circle cx="72" cy="65" r="3" fill="#1565C0"/>
  </svg>`,

  boat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 65 L20 80 L80 80 L90 65 Z" fill="#8D6E63"/>
    <path d="M10 65 L20 80 L80 80 L90 65 Z" fill="none" stroke="#5D4037" stroke-width="1.5"/>
    <rect x="45" y="25" width="4" height="42" fill="#795548"/>
    <path d="M49 28 L49 60 L80 60 Z" fill="#ECEFF1"/>
    <path d="M49 28 L49 60 L80 60 Z" fill="none" stroke="#B0BEC5" stroke-width="1"/>
    <path d="M45 30 L45 55 L20 55 Z" fill="#E0E0E0"/>
    <line x1="15" y1="82" x2="85" y2="82" stroke="#42A5F5" stroke-width="2" opacity="0.5"/>
    <path d="M10 85 Q30 88 50 85 Q70 82 90 85" fill="none" stroke="#42A5F5" stroke-width="1.5" opacity="0.3"/>
  </svg>`,

  ship: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 65 L15 80 L85 80 L92 65 Z" fill="#607D8B"/>
    <rect x="20" y="40" width="60" height="25" rx="2" fill="#78909C"/>
    <rect x="35" y="25" width="30" height="18" rx="2" fill="#90A4AE"/>
    <rect x="40" y="28" width="8" height="10" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="52" y="28" width="8" height="10" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="25" y="45" width="10" height="8" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="40" y="45" width="10" height="8" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="55" y="45" width="10" height="8" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="70" y="45" width="6" height="8" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <circle cx="50" cy="20" r="3" fill="#F44336"/>
    <line x1="50" y1="17" x2="50" y2="10" stroke="#424242" stroke-width="1.5"/>
    <path d="M8 85 Q30 88 50 85 Q70 82 92 85" fill="none" stroke="#42A5F5" stroke-width="1.5" opacity="0.3"/>
  </svg>`,

  plane: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L55 40 L85 50 L55 55 L58 80 L50 72 L42 80 L45 55 L15 50 L45 40 Z" fill="#B0BEC5"/>
    <path d="M50 15 L55 40 L85 50 L55 55 L58 80 L50 72 L42 80 L45 55 L15 50 L45 40 Z" fill="none" stroke="#78909C" stroke-width="1.5"/>
    <ellipse cx="50" cy="42" rx="5" ry="8" fill="#B3E5FC" opacity="0.6"/>
    <circle cx="50" cy="35" r="2" fill="#42A5F5"/>
  </svg>`,

  // --- 物品 ---
  book: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="18" width="55" height="65" rx="3" fill="#1565C0"/>
    <rect x="25" y="22" width="45" height="57" rx="2" fill="#E3F2FD"/>
    <rect x="20" y="18" width="8" height="65" rx="2" fill="#0D47A1"/>
    <line x1="35" y1="32" x2="62" y2="32" stroke="#90CAF9" stroke-width="2"/>
    <line x1="35" y1="40" x2="58" y2="40" stroke="#90CAF9" stroke-width="1.5"/>
    <line x1="35" y1="47" x2="60" y2="47" stroke="#90CAF9" stroke-width="1.5"/>
    <line x1="35" y1="54" x2="55" y2="54" stroke="#90CAF9" stroke-width="1.5"/>
    <line x1="35" y1="61" x2="58" y2="61" stroke="#90CAF9" stroke-width="1.5"/>
    <line x1="35" y1="68" x2="50" y2="68" stroke="#90CAF9" stroke-width="1.5"/>
  </svg>`,

  pen: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="42" y="15" width="16" height="55" rx="2" fill="#1565C0"/>
    <polygon points="42,70 58,70 50,85" fill="#FFD54F"/>
    <polygon points="46,80 54,80 50,90" fill="#424242"/>
    <rect x="42" y="15" width="16" height="8" rx="2" fill="#0D47A1"/>
    <rect x="46" y="23" width="8" height="3" fill="#FFD54F"/>
    <line x1="50" y1="75" x2="50" y2="82" stroke="#424242" stroke-width="0.5"/>
  </svg>`,

  bag: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="35" width="64" height="50" rx="5" fill="#8D6E63"/>
    <path d="M35 35 Q35 18 50 18 Q65 18 65 35" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/>
    <rect x="18" y="35" width="64" height="10" rx="3" fill="#6D4C41"/>
    <rect x="38" y="50" width="24" height="18" rx="3" fill="#A1887F"/>
    <circle cx="50" cy="59" r="3" fill="#FFD54F"/>
  </svg>`,

  cup: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 25 L30 80 Q50 85 70 80 L75 25 Z" fill="#ECEFF1"/>
    <path d="M25 25 L30 80 Q50 85 70 80 L75 25 Z" fill="none" stroke="#90A4AE" stroke-width="2"/>
    <ellipse cx="50" cy="25" rx="25" ry="6" fill="#F5F5F5" stroke="#90A4AE" stroke-width="1.5"/>
    <path d="M75 35 Q88 35 88 50 Q88 62 75 62" fill="none" stroke="#90A4AE" stroke-width="3"/>
    <path d="M35 20 Q38 10 42 15" fill="none" stroke="#B0BEC5" stroke-width="1.5" opacity="0.5"/>
    <path d="M50 18 Q53 8 57 13" fill="none" stroke="#B0BEC5" stroke-width="1.5" opacity="0.5"/>
    <path d="M65 20 Q68 10 72 15" fill="none" stroke="#B0BEC5" stroke-width="1.5" opacity="0.5"/>
  </svg>`,

  plate: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="38" ry="12" fill="#E0E0E0"/>
    <ellipse cx="50" cy="52" rx="38" ry="12" fill="#F5F5F5"/>
    <ellipse cx="50" cy="52" rx="28" ry="8" fill="#ECEFF1" stroke="#BDBDBD" stroke-width="1"/>
    <ellipse cx="50" cy="50" rx="18" ry="5" fill="#E0E0E0" opacity="0.5"/>
  </svg>`,

  bowl: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 40 Q15 75 50 78 Q85 75 85 40" fill="#FF8A65"/>
    <ellipse cx="50" cy="40" rx="35" ry="10" fill="#FFAB91"/>
    <ellipse cx="50" cy="40" rx="28" ry="7" fill="#FF7043" opacity="0.3"/>
    <path d="M15 40 Q15 75 50 78 Q85 75 85 40" fill="none" stroke="#E64A19" stroke-width="2"/>
  </svg>`,

  key: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="40" r="14" fill="none" stroke="#FFC107" stroke-width="5"/>
    <circle cx="30" cy="40" r="6" fill="none" stroke="#FFC107" stroke-width="3"/>
    <line x1="44" y1="40" x2="82" y2="40" stroke="#FFC107" stroke-width="5"/>
    <line x1="72" y1="40" x2="72" y2="52" stroke="#FFC107" stroke-width="4"/>
    <line x1="82" y1="40" x2="82" y2="50" stroke="#FFC107" stroke-width="4"/>
    <line x1="62" y1="40" x2="62" y2="48" stroke="#FFC107" stroke-width="3"/>
  </svg>`,

  lock: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="45" width="50" height="38" rx="5" fill="#FFC107"/>
    <path d="M35 45 L35 32 Q35 18 50 18 Q65 18 65 32 L65 45" fill="none" stroke="#795548" stroke-width="6" stroke-linecap="round"/>
    <circle cx="50" cy="62" r="6" fill="#F57F17"/>
    <rect x="48" y="62" width="4" height="10" rx="1" fill="#F57F17"/>
  </svg>`,

  door: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="10" width="60" height="80" rx="2" fill="#8D6E63"/>
    <rect x="25" y="15" width="50" height="70" rx="1" fill="#A1887F"/>
    <rect x="30" y="20" width="18" height="25" rx="1" fill="#B3E5FC" opacity="0.6"/>
    <rect x="52" y="20" width="18" height="25" rx="1" fill="#B3E5FC" opacity="0.6"/>
    <rect x="30" y="52" width="18" height="25" rx="1" fill="#B3E5FC" opacity="0.6"/>
    <rect x="52" y="52" width="18" height="25" rx="1" fill="#B3E5FC" opacity="0.6"/>
    <circle cx="68" cy="52" r="3" fill="#FFD54F"/>
  </svg>`,

  lamp: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,45 50,15 70,45" fill="#FFF176"/>
    <polygon points="30,45 50,15 70,45" fill="none" stroke="#F9A825" stroke-width="2"/>
    <rect x="47" y="45" width="6" height="30" fill="#795548"/>
    <ellipse cx="50" cy="78" rx="15" ry="5" fill="#5D4037"/>
    <line x1="50" y1="30" x2="50" y2="40" stroke="#FFD54F" stroke-width="2" opacity="0.6"/>
    <circle cx="50" cy="28" r="4" fill="#FFEE58" opacity="0.4"/>
  </svg>`,

  candle: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="35" width="20" height="50" rx="2" fill="#FFF9C4"/>
    <rect x="40" y="35" width="20" height="50" rx="2" fill="none" stroke="#F9A825" stroke-width="1"/>
    <line x1="50" y1="40" x2="50" y2="80" stroke="#F9A825" stroke-width="0.5" opacity="0.3"/>
    <line x1="50" y1="35" x2="50" y2="25" stroke="#424242" stroke-width="2"/>
    <ellipse cx="50" cy="22" rx="5" ry="8" fill="#FF9800" opacity="0.8"/>
    <ellipse cx="50" cy="20" rx="3" ry="5" fill="#FFEB3B"/>
    <ellipse cx="50" cy="18" rx="1.5" ry="3" fill="white" opacity="0.8"/>
  </svg>`,

  fire: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C40 30 20 40 25 60 C28 72 38 82 50 85 C62 82 72 72 75 60 C80 40 60 30 50 10Z" fill="#FF5722"/>
    <path d="M50 25 C43 40 32 48 35 62 C37 70 43 78 50 80 C57 78 63 70 65 62 C68 48 57 40 50 25Z" fill="#FF9800"/>
    <path d="M50 40 C46 50 40 55 42 65 C43 70 47 75 50 76 C53 75 57 70 58 65 C60 55 54 50 50 40Z" fill="#FFEB3B"/>
    <ellipse cx="50" cy="65" rx="4" ry="6" fill="white" opacity="0.6"/>
  </svg>`,

  // --- 自然 ---
  sun: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="18" fill="#FFC107"/>
    <circle cx="50" cy="50" r="14" fill="#FFD54F"/>
    <line x1="50" y1="8" x2="50" y2="22" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="78" x2="50" y2="92" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
    <line x1="8" y1="50" x2="22" y2="50" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
    <line x1="78" y1="50" x2="92" y2="50" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
    <line x1="20" y1="20" x2="30" y2="30" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="70" y1="70" x2="80" y2="80" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="80" y1="20" x2="70" y2="30" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="30" y1="70" x2="20" y2="80" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  moon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 15 C35 20 20 40 22 62 C24 84 42 95 62 90 C45 85 35 70 37 52 C39 34 50 20 60 15Z" fill="#FDD835"/>
    <circle cx="55" cy="35" r="2" fill="#F9A825" opacity="0.5"/>
    <circle cx="45" cy="55" r="1.5" fill="#F9A825" opacity="0.5"/>
    <circle cx="50" cy="75" r="2" fill="#F9A825" opacity="0.5"/>
  </svg>`,

  star: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 61,38 90,38 67,56 76,85 50,68 24,85 33,56 10,38 39,38" fill="#FFD54F"/>
    <polygon points="50,18 58,38 78,38 62,52 68,75 50,62 32,75 38,52 22,38 42,38" fill="#FFEB3B"/>
  </svg>`,

  tree: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="65" width="12" height="25" fill="#795548"/>
    <polygon points="50,10 20,45 80,45" fill="#4CAF50"/>
    <polygon points="50,25 25,55 75,55" fill="#66BB6A"/>
    <polygon points="50,38 30,65 70,65" fill="#81C784"/>
  </svg>`,

  flower: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="50" y1="55" x2="50" y2="90" stroke="#4CAF50" stroke-width="4"/>
    <path d="M50 75 Q35 70 30 75" fill="none" stroke="#4CAF50" stroke-width="2.5"/>
    <ellipse cx="50" cy="35" rx="8" ry="14" fill="#E91E63"/>
    <ellipse cx="50" cy="35" rx="8" ry="14" fill="#E91E63" transform="rotate(72,50,45)"/>
    <ellipse cx="50" cy="35" rx="8" ry="14" fill="#E91E63" transform="rotate(144,50,45)"/>
    <ellipse cx="50" cy="35" rx="8" ry="14" fill="#E91E63" transform="rotate(216,50,45)"/>
    <ellipse cx="50" cy="35" rx="8" ry="14" fill="#E91E63" transform="rotate(288,50,45)"/>
    <circle cx="50" cy="45" r="8" fill="#FFC107"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C20 30 15 65 50 90 C85 65 80 30 50 10Z" fill="#66BB6A"/>
    <path d="M50 10 C20 30 15 65 50 90 C85 65 80 30 50 10Z" fill="none" stroke="#43A047" stroke-width="1.5"/>
    <path d="M50 20 L50 80" fill="none" stroke="#2E7D32" stroke-width="2"/>
    <path d="M50 35 L35 28" fill="none" stroke="#2E7D32" stroke-width="1.2"/>
    <path d="M50 45 L65 38" fill="none" stroke="#2E7D32" stroke-width="1.2"/>
    <path d="M50 55 L32 50" fill="none" stroke="#2E7D32" stroke-width="1.2"/>
    <path d="M50 65 L68 58" fill="none" stroke="#2E7D32" stroke-width="1.2"/>
  </svg>`,

  cloud: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="50" r="18" fill="#ECEFF1"/>
    <circle cx="55" cy="42" r="22" fill="#F5F5F5"/>
    <circle cx="70" cy="52" r="16" fill="#ECEFF1"/>
    <circle cx="45" cy="55" r="15" fill="#ECEFF1"/>
    <rect x="25" y="50" width="55" height="18" rx="9" fill="#ECEFF1"/>
  </svg>`,

  rain: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="15" fill="#90A4AE"/>
    <circle cx="55" cy="28" r="18" fill="#B0BEC5"/>
    <circle cx="68" cy="38" r="13" fill="#90A4AE"/>
    <rect x="25" y="35" width="50" height="14" rx="7" fill="#90A4AE"/>
    <line x1="32" y1="55" x2="28" y2="68" stroke="#42A5F5" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="45" y1="55" x2="41" y2="68" stroke="#42A5F5" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="58" y1="55" x2="54" y2="68" stroke="#42A5F5" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="71" y1="55" x2="67" y2="68" stroke="#42A5F5" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  snow: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="30" r="14" fill="#B0BEC5"/>
    <circle cx="55" cy="24" r="17" fill="#CFD8DC"/>
    <circle cx="68" cy="33" r="12" fill="#B0BEC5"/>
    <rect x="27" y="30" width="46" height="12" rx="6" fill="#B0BEC5"/>
    <circle cx="30" cy="58" r="3" fill="#E3F2FD"/>
    <circle cx="50" cy="62" r="3" fill="#E3F2FD"/>
    <circle cx="70" cy="56" r="3" fill="#E3F2FD"/>
    <circle cx="40" cy="72" r="3" fill="#E3F2FD"/>
    <circle cx="60" cy="76" r="3" fill="#E3F2FD"/>
    <circle cx="25" cy="75" r="2.5" fill="#E3F2FD"/>
    <circle cx="75" cy="70" r="2.5" fill="#E3F2FD"/>
  </svg>`,

  wind: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 35 Q40 30 55 35 Q70 40 80 32" fill="none" stroke="#90A4AE" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 50 Q35 45 50 50 Q65 55 85 47" fill="none" stroke="#B0BEC5" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M20 65 Q45 60 60 65 Q75 70 90 62" fill="none" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M80 32 Q88 28 85 35" fill="none" stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M85 47 Q93 43 90 50" fill="none" stroke="#B0BEC5" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // --- 建筑 ---
  house: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,12 15,45 85,45" fill="#E53935"/>
    <rect x="22" y="45" width="56" height="42" fill="#FFECB3"/>
    <rect x="40" y="58" width="20" height="29" fill="#8D6E63"/>
    <circle cx="55" cy="73" r="2" fill="#FFD54F"/>
    <rect x="26" y="52" width="12" height="12" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="62" y="52" width="12" height="12" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <line x1="32" y1="52" x2="32" y2="64" stroke="#90A4AE" stroke-width="1"/>
    <line x1="26" y1="58" x2="38" y2="58" stroke="#90A4AE" stroke-width="1"/>
    <line x1="68" y1="52" x2="68" y2="64" stroke="#90A4AE" stroke-width="1"/>
    <line x1="62" y1="58" x2="74" y2="58" stroke="#90A4AE" stroke-width="1"/>
  </svg>`,

  school: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="35" width="70" height="52" fill="#FFCC80"/>
    <polygon points="50,10 10,35 90,35" fill="#E53935"/>
    <rect x="40" y="20" width="20" height="15" fill="#F5F5F5"/>
    <line x1="50" y1="20" x2="50" y2="35" stroke="#9E9E9E" stroke-width="1"/>
    <line x1="40" y1="27" x2="60" y2="27" stroke="#9E9E9E" stroke-width="1"/>
    <rect x="25" y="45" width="14" height="14" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="43" y="45" width="14" height="14" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="61" y="45" width="14" height="14" rx="1" fill="#B3E5FC" opacity="0.7"/>
    <rect x="40" y="68" width="20" height="19" fill="#8D6E63"/>
    <circle cx="55" cy="78" r="2" fill="#FFD54F"/>
  </svg>`,

  church: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="40" width="60" height="48" fill="#ECEFF1"/>
    <polygon points="50,10 15,40 85,40" fill="#B0BEC5"/>
    <rect x="44" y="5" width="12" height="15" fill="#B0BEC5"/>
    <line x1="50" y1="2" x2="50" y2="8" stroke="#FFD54F" stroke-width="2"/>
    <line x1="47" y1="5" x2="53" y2="5" stroke="#FFD54F" stroke-width="2"/>
    <rect x="38" y="55" width="24" height="33" fill="#795548"/>
    <path d="M38 55 Q50 48 62 55" fill="none" stroke="#5D4037" stroke-width="2"/>
    <circle cx="50" cy="30" r="6" fill="#B3E5FC" opacity="0.6"/>
  </svg>`,

  // --- 玩具 ---
  ball: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="32" fill="#E53935"/>
    <path d="M18 50 Q50 30 82 50" fill="none" stroke="white" stroke-width="3" opacity="0.6"/>
    <path d="M18 50 Q50 70 82 50" fill="none" stroke="white" stroke-width="3" opacity="0.6"/>
    <line x1="50" y1="18" x2="50" y2="82" stroke="white" stroke-width="3" opacity="0.6"/>
    <ellipse cx="38" cy="38" rx="8" ry="6" fill="white" opacity="0.2"/>
  </svg>`,

  doll: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="22" r="14" fill="#FFCC80"/>
    <path d="M36 22 Q30 10 40 8 Q50 5 60 8 Q70 10 64 22" fill="#8D6E63"/>
    <circle cx="45" cy="20" r="2" fill="#3E2723"/>
    <circle cx="55" cy="20" r="2" fill="#3E2723"/>
    <path d="M47 26 Q50 29 53 26" fill="none" stroke="#E57373" stroke-width="1.5"/>
    <path d="M38 36 L35 65 L50 68 L65 65 L62 36 Z" fill="#E91E63"/>
    <line x1="35" y1="45" x2="22" y2="55" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
    <line x1="65" y1="45" x2="78" y2="55" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="68" x2="38" y2="88" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
    <line x1="60" y1="68" x2="62" y2="88" stroke="#FFCC80" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  kite: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 70,40 50,55 30,40" fill="#42A5F5"/>
    <polygon points="50,10 70,40 50,55 30,40" fill="none" stroke="#1E88E5" stroke-width="1.5"/>
    <line x1="50" y1="10" x2="50" y2="55" stroke="#1565C0" stroke-width="1"/>
    <line x1="30" y1="40" x2="70" y2="40" stroke="#1565C0" stroke-width="1"/>
    <path d="M50 55 Q48 65 52 75 Q48 85 52 95" fill="none" stroke="#E91E63" stroke-width="2"/>
    <circle cx="48" cy="65" r="2" fill="#FF9800"/>
    <circle cx="52" cy="75" r="2" fill="#4CAF50"/>
    <circle cx="48" cy="85" r="2" fill="#E91E63"/>
  </svg>`,

  // --- 食物 ---
  cake: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="50" width="60" height="30" rx="4" fill="#FFCC80"/>
    <rect x="20" y="50" width="60" height="8" rx="2" fill="#FF8A65"/>
    <rect x="20" y="35" width="60" height="20" rx="4" fill="#FFAB91"/>
    <rect x="20" y="35" width="60" height="6" rx="2" fill="#F48FB1"/>
    <path d="M20 35 Q50 28 80 35" fill="#ECEFF1"/>
    <circle cx="35" cy="30" r="3" fill="#E91E63"/>
    <circle cx="50" cy="28" r="3" fill="#E91E63"/>
    <circle cx="65" cy="30" r="3" fill="#E91E63"/>
    <line x1="35" y1="27" x2="35" y2="22" stroke="#FF9800" stroke-width="1.5"/>
    <line x1="50" y1="25" x2="50" y2="20" stroke="#FF9800" stroke-width="1.5"/>
    <line x1="65" y1="27" x2="65" y2="22" stroke="#FF9800" stroke-width="1.5"/>
  </svg>`,

  bread: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="55" rx="32" ry="22" fill="#FFCC80"/>
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="#FFE0B2"/>
    <path d="M25 50 Q35 42 50 45 Q65 42 75 50" fill="none" stroke="#FFB74D" stroke-width="2"/>
    <path d="M30 55 Q40 50 50 52 Q60 50 70 55" fill="none" stroke="#FFB74D" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="40" cy="48" rx="3" ry="2" fill="#FFB74D" opacity="0.4"/>
    <ellipse cx="55" cy="46" rx="4" ry="2" fill="#FFB74D" opacity="0.4"/>
  </svg>`,

  cookie: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="#D7A86E"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#A1887F" stroke-width="2"/>
    <circle cx="38" cy="40" r="4" fill="#5D4037"/>
    <circle cx="55" cy="35" r="3.5" fill="#5D4037"/>
    <circle cx="62" cy="52" r="4" fill="#5D4037"/>
    <circle cx="42" cy="58" r="3.5" fill="#5D4037"/>
    <circle cx="55" cy="62" r="3" fill="#5D4037"/>
    <circle cx="35" cy="50" r="2.5" fill="#5D4037"/>
    <path d="M65 38 Q68 35 70 38" fill="none" stroke="#A1887F" stroke-width="1.5"/>
  </svg>`,

  egg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="52" rx="24" ry="32" fill="#FFF8E1"/>
    <ellipse cx="50" cy="52" rx="24" ry="32" fill="none" stroke="#FFD54F" stroke-width="1.5"/>
    <ellipse cx="44" cy="42" rx="8" ry="12" fill="white" opacity="0.3"/>
  </svg>`,

  milk: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="25" width="44" height="55" rx="3" fill="#E3F2FD"/>
    <rect x="28" y="25" width="44" height="55" rx="3" fill="none" stroke="#90CAF9" stroke-width="1.5"/>
    <polygon points="35,25 38,12 62,12 65,25" fill="#BBDEFB"/>
    <rect x="38" y="12" width="24" height="13" fill="none" stroke="#90CAF9" stroke-width="1"/>
    <rect x="35" y="35" width="30" height="20" rx="2" fill="#1565C0"/>
    <text x="50" y="49" text-anchor="middle" fill="white" font-size="10" font-family="Arial">MILK</text>
    <rect x="32" y="60" width="36" height="3" rx="1" fill="#BBDEFB" opacity="0.5"/>
  </svg>`,

  cheese: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="15,70 85,70 85,45 50,25 15,45" fill="#FFC107"/>
    <polygon points="15,45 50,25 85,45" fill="#FFD54F"/>
    <circle cx="35" cy="55" r="5" fill="#FFF9C4" opacity="0.7"/>
    <circle cx="55" cy="60" r="4" fill="#FFF9C4" opacity="0.7"/>
    <circle cx="70" cy="52" r="3.5" fill="#FFF9C4" opacity="0.7"/>
    <circle cx="45" cy="48" r="3" fill="#FFF9C4" opacity="0.7"/>
  </svg>`,

  // --- 服装 ---
  hat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="65" rx="38" ry="10" fill="#795548"/>
    <path d="M25 65 Q25 30 50 25 Q75 30 75 65" fill="#8D6E63"/>
    <rect x="25" y="55" width="50" height="8" rx="2" fill="#5D4037"/>
    <ellipse cx="50" cy="28" rx="3" ry="2" fill="#A1887F" opacity="0.5"/>
  </svg>`,

  shoe: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 55 Q15 40 30 38 L65 38 Q80 38 85 50 L88 60 Q88 70 75 72 L20 72 Q12 72 12 62 Z" fill="#5D4037"/>
    <path d="M30 38 L65 38 Q68 38 68 42 L28 42 Q28 38 30 38" fill="#795548"/>
    <ellipse cx="82" cy="62" rx="8" ry="10" fill="#4E342E"/>
    <line x1="15" y1="65" x2="85" y2="65" stroke="#3E2723" stroke-width="1.5"/>
    <path d="M35 42 L35 55" stroke="#795548" stroke-width="1.5"/>
    <path d="M50 42 L50 55" stroke="#795548" stroke-width="1.5"/>
    <path d="M65 42 L65 55" stroke="#795548" stroke-width="1.5"/>
  </svg>`,

  sock: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 15 L35 60 Q35 75 50 78 L70 78 Q82 78 82 68 Q82 58 70 55 L55 55 L55 15 Z" fill="#E91E63"/>
    <path d="M35 15 L55 15 L55 22 L35 22 Z" fill="#F48FB1"/>
    <line x1="35" y1="18" x2="55" y2="18" stroke="white" stroke-width="1.5" opacity="0.5"/>
    <line x1="35" y1="20" x2="55" y2="20" stroke="white" stroke-width="1.5" opacity="0.5"/>
    <path d="M50 78 Q35 78 35 65" fill="none" stroke="#C2185B" stroke-width="1.5"/>
  </svg>`,

  shirt: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20 L20 30 L20 45 L30 40 L30 85 L70 85 L70 40 L80 45 L80 30 L70 20 L60 25 Q50 30 40 25 Z" fill="#42A5F5"/>
    <path d="M40 25 Q50 30 60 25" fill="none" stroke="#1E88E5" stroke-width="2"/>
    <line x1="50" y1="25" x2="50" y2="45" stroke="#1E88E5" stroke-width="1.5"/>
    <circle cx="45" cy="35" r="1.5" fill="white"/>
    <circle cx="45" cy="42" r="1.5" fill="white"/>
  </svg>`,

  dress: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 20 L35 15 L30 20 L30 40 L20 85 L80 85 L70 40 L70 20 L65 15 L60 20 Q50 28 40 20Z" fill="#E91E63"/>
    <path d="M40 20 Q50 28 60 20" fill="none" stroke="#C2185B" stroke-width="1.5"/>
    <path d="M30 40 Q50 45 70 40" fill="none" stroke="#C2185B" stroke-width="1.5"/>
    <line x1="50" y1="28" x2="50" y2="45" stroke="#C2185B" stroke-width="1"/>
    <circle cx="47" cy="35" r="1.2" fill="white"/>
  </svg>`,

  coat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 18 L15 28 L15 50 L25 45 L25 88 L75 88 L75 45 L85 50 L85 28 L72 18 L62 22 Q50 28 38 22 Z" fill="#455A64"/>
    <path d="M38 22 Q50 28 62 22" fill="none" stroke="#37474F" stroke-width="2"/>
    <line x1="50" y1="22" x2="50" y2="88" stroke="#37474F" stroke-width="2"/>
    <circle cx="47" cy="35" r="2" fill="#FFD54F"/>
    <circle cx="47" cy="48" r="2" fill="#FFD54F"/>
    <circle cx="47" cy="61" r="2" fill="#FFD54F"/>
    <circle cx="47" cy="74" r="2" fill="#FFD54F"/>
    <rect x="25" y="55" width="25" height="33" rx="1" fill="#37474F" opacity="0.3"/>
    <rect x="50" y="55" width="25" height="33" rx="1" fill="#37474F" opacity="0.3"/>
  </svg>`,

  // --- 音乐 ---
  drum: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="35" rx="28" ry="10" fill="#E8D5B7"/>
    <rect x="22" y="35" width="56" height="35" rx="0" fill="#E53935"/>
    <ellipse cx="50" cy="70" rx="28" ry="10" fill="#C62828"/>
    <line x1="22" y1="35" x2="22" y2="70" stroke="#BDBDBD" stroke-width="2"/>
    <line x1="78" y1="35" x2="78" y2="70" stroke="#BDBDBD" stroke-width="2"/>
    <line x1="30" y1="20" x2="70" y2="20" stroke="#795548" stroke-width="3" stroke-linecap="round"/>
    <line x1="70" y1="20" x2="75" y2="15" stroke="#795548" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="30" y1="20" x2="25" y2="15" stroke="#795548" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  bell: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 60 Q30 25 50 20 Q70 25 70 60 L75 65 L25 65 Z" fill="#FFC107"/>
    <ellipse cx="50" cy="65" rx="28" ry="6" fill="#FFD54F"/>
    <circle cx="50" cy="75" r="5" fill="#FF8F00"/>
    <line x1="50" y1="12" x2="50" y2="20" stroke="#795548" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="10" r="4" fill="#795548"/>
    <ellipse cx="40" cy="45" rx="5" ry="8" fill="#FFD54F" opacity="0.4"/>
  </svg>`,

  horn: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 45 L20 55 L35 55 L35 50 L60 65 L85 75 L85 25 L60 35 L35 45 L35 45 Z" fill="#FFC107"/>
    <path d="M85 25 L85 75 Q95 65 95 50 Q95 35 85 25" fill="#FFB300"/>
    <circle cx="20" cy="50" r="8" fill="#795548"/>
    <circle cx="20" cy="50" r="5" fill="#5D4037"/>
    <ellipse cx="60" cy="50" rx="5" ry="15" fill="#FFD54F" opacity="0.3"/>
  </svg>`,

  // --- 身体 ---
  hand: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 80 L35 50 L30 30 Q30 25 33 25 Q36 25 36 30 L38 45 L38 25 Q38 20 41 20 Q44 20 44 25 L44 45 L44 22 Q44 17 47 17 Q50 17 50 22 L50 45 L50 25 Q50 20 53 20 Q56 20 56 25 L56 50 Q56 45 60 40 Q63 37 66 40 Q69 43 65 50 L55 65 L55 80 Z" fill="#FFCC80"/>
    <path d="M35 80 L35 50 L30 30 Q30 25 33 25 Q36 25 36 30 L38 45 L38 25 Q38 20 41 20 Q44 20 44 25 L44 45 L44 22 Q44 17 47 17 Q50 17 50 22 L50 45 L50 25 Q50 20 53 20 Q56 20 56 25 L56 50 Q56 45 60 40 Q63 37 66 40 Q69 43 65 50 L55 65 L55 80 Z" fill="none" stroke="#FFB74D" stroke-width="1.5"/>
  </svg>`,

  foot: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 70 Q20 55 22 40 Q25 25 35 22 Q42 20 45 25 Q48 20 52 22 Q56 20 58 25 Q62 22 65 28 Q72 35 70 50 Q68 60 65 70 Q60 82 50 85 Q35 88 25 70Z" fill="#FFCC80"/>
    <path d="M25 70 Q20 55 22 40 Q25 25 35 22 Q42 20 45 25 Q48 20 52 22 Q56 20 58 25 Q62 22 65 28 Q72 35 70 50 Q68 60 65 70 Q60 82 50 85 Q35 88 25 70Z" fill="none" stroke="#FFB74D" stroke-width="1.5"/>
    <ellipse cx="38" cy="28" rx="3" ry="4" fill="#FFB74D" opacity="0.3"/>
    <ellipse cx="50" cy="26" rx="3" ry="4" fill="#FFB74D" opacity="0.3"/>
    <ellipse cx="60" cy="30" rx="3" ry="4" fill="#FFB74D" opacity="0.3"/>
  </svg>`,

  eye: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 Q30 25 50 25 Q70 25 90 50 Q70 75 50 75 Q30 75 10 50Z" fill="white" stroke="#78909C" stroke-width="2"/>
    <circle cx="50" cy="50" r="16" fill="#42A5F5"/>
    <circle cx="50" cy="50" r="10" fill="#1A237E"/>
    <circle cx="46" cy="46" r="4" fill="white" opacity="0.8"/>
    <circle cx="54" cy="54" r="2" fill="white" opacity="0.4"/>
  </svg>`
};

// ============================================================
// 实验状态管理
// ============================================================
const ExperimentApp = {
  // 状态
  state: {
    currentPage: 'welcome',
    participant: { id: '', age: '', gender: '' },
    currentTrialIndex: 0,
    phase: 'practice', // 'practice' | 'formal'
    trials: [],
    data: [],
    timerInterval: null,
    timeLeft: 30,
    audioFirstEnded: false,
    imagesShown: false,
    responded: false,
    playCount: 0,
    audioStartTime: null,
    trialStartTime: null,
    completionCode: ''
  },

  // 初始化
  init() {
    this.generateCompletionCode();
    this.showPage('welcome');
  },

  // 生成6位完成码
  generateCompletionCode() {
    this.state.completionCode = String(Math.floor(100000 + Math.random() * 900000));
  },

  // ============================================================
  // 页面切换（带过渡动画）
  // ============================================================
  showPage(pageName) {
    const currentPage = document.querySelector('.page.active');
    const newPage = document.getElementById('page-' + pageName);

    if (currentPage && newPage && currentPage !== newPage) {
      // 当前页面淡出
      currentPage.classList.add('exiting');

      setTimeout(() => {
        currentPage.classList.remove('active', 'exiting');
        // 新页面淡入
        newPage.classList.add('active');
        this.state.currentPage = pageName;
      }, 200);
    } else if (newPage) {
      newPage.classList.add('active');
      this.state.currentPage = pageName;
    }
  },

  // ============================================================
  // 欢迎页 → 信息页
  // ============================================================
  startExperiment() {
    this.showPage('info');
  },

  // ============================================================
  // 信息页验证
  // ============================================================
  submitInfo() {
    const id = document.getElementById('participant-id').value.trim();
    const age = document.getElementById('participant-age').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // 清除旧提示
    document.querySelectorAll('.field-error').forEach(e => e.remove());

    let hasError = false;

    if (!id) {
      this.showFieldError('participant-id', '请填写被试编号');
      hasError = true;
    }
    if (!age || isNaN(age) || age < 1 || age > 120) {
      this.showFieldError('participant-age', '请填写有效年龄');
      hasError = true;
    }
    if (!gender) {
      this.showFieldError('gender-group', '请选择性别');
      hasError = true;
    }

    if (hasError) return;

    this.state.participant = {
      id: id,
      age: parseInt(age),
      gender: gender.value
    };

    this.showPage('instructions');
  },

  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId) || document.querySelector('.gender-group');
    const error = document.createElement('div');
    error.className = 'field-error';
    error.textContent = message;
    error.style.color = '#E53935';
    error.style.fontSize = '13px';
    error.style.marginTop = '4px';
    field.parentNode.insertBefore(error, field.nextSibling);
  },

  // ============================================================
  // 开始练习
  // ============================================================
  startPractice() {
    this.state.phase = 'practice';
    this.state.currentTrialIndex = 0;
    this.state.data = [];
    this.state.trials = this.buildTrials(PRACTICE_TRIALS, false);
    this.showPage('experiment');
    this.startTrial();
  },

  // ============================================================
  // 开始正式实验
  // ============================================================
  startFormal() {
    this.state.phase = 'formal';
    this.state.currentTrialIndex = 0;
    this.state.trials = this.buildTrials(FORMAL_TRIALS, true);
    this.showPage('experiment');
    this.startTrial();
  },

  // ============================================================
  // 构建试次列表（随机化图片位置）
  // ============================================================
  buildTrials(trialConfig, shuffle) {
    const trials = trialConfig.map((t, i) => {
      const options = [t.word, ...t.distractors];
      // 随机排列选项位置
      const shuffled = this.shuffleArray([...options]);
      return {
        originalIndex: i + 1,  // 原始编号（用于数据记录）
        word: t.word,
        category: t.category,
        options: shuffled,
        correctAnswer: t.word
      };
    });
    // 正式实验随机顺序
    if (shuffle) {
      return this.shuffleArray(trials);
    }
    return trials;
  },

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // ============================================================
  // 单个试次逻辑
  // ============================================================
  startTrial() {
    const trial = this.state.trials[this.state.currentTrialIndex];
    const displayIndex = this.state.currentTrialIndex + 1;  // 显示连续题号
    this.state.audioFirstEnded = false;
    this.state.imagesShown = false;
    this.state.responded = false;
    this.state.playCount = 0;
    this.state.audioStartTime = null;
    this.state.timeLeft = 30;

    // 更新顶部信息 - 显示连续题号
    const totalTrials = this.state.phase === 'practice' ? PRACTICE_TRIALS.length : FORMAL_TRIALS.length;
    const phaseLabel = this.state.phase === 'practice' ? '练习' : '正式';
    document.getElementById('trial-header').textContent =
      `第 ${displayIndex} 题 / 共 ${totalTrials} 题（${phaseLabel}）`;

    // 重置播放按钮
    const playBtn = document.getElementById('play-btn');
    playBtn.textContent = '▶ 播放音频';
    playBtn.disabled = false;
    playBtn.classList.remove('playing');

    // 隐藏图片区域
    const imagesArea = document.getElementById('images-area');
    imagesArea.style.display = 'none';
    imagesArea.innerHTML = '';

    // 隐藏反馈
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.className = '';
    feedbackArea.style.display = '';

    // 启动倒计时
    this.startCountdown();
  },

  // ============================================================
  // 倒计时
  // ============================================================
  startCountdown() {
    this.clearTimer();
    this.state.timeLeft = 30;
    this.updateTimerDisplay();

    this.state.timerInterval = setInterval(() => {
      this.state.timeLeft--;
      this.updateTimerDisplay();

      if (this.state.timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  },

  updateTimerDisplay() {
    const timerEl = document.getElementById('timer-display');
    const t = this.state.timeLeft;
    timerEl.textContent = `${t}s`;

    // 颜色变化（移除 timer-blink，CSS 动画自动处理）
    timerEl.className = 'timer-value';
    if (t > 10) {
      timerEl.classList.add('timer-green');
    } else if (t > 5) {
      timerEl.classList.add('timer-orange');
    } else {
      timerEl.classList.add('timer-red');
    }
  },

  clearTimer() {
    if (this.state.timerInterval) {
      clearInterval(this.state.timerInterval);
      this.state.timerInterval = null;
    }
  },

  // ============================================================
  // 音频播放
  // ============================================================
  playAudio() {
    if (this.state.responded) return;

    const trial = this.state.trials[this.state.currentTrialIndex];
    const playBtn = document.getElementById('play-btn');

    this.state.playCount++;
    playBtn.textContent = '🔊 播放中...';
    playBtn.classList.add('playing');

    // 尝试 Web Speech API
    if ('speechSynthesis' in window) {
      // 先取消之前的播放
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(trial.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;

      // 设置超时检测 - 如果2秒内没有开始播放，使用降级方案
      let speechStarted = false;
      let fallbackUsed = false;

      const fallbackTimeout = setTimeout(() => {
        if (!speechStarted && !fallbackUsed) {
          fallbackUsed = true;
          console.log('Web Speech API 未响应，使用降级方案');
          window.speechSynthesis.cancel();
          this.simulateAudioEnd();
        }
      }, 2000);

      utterance.onstart = () => {
        speechStarted = true;
        clearTimeout(fallbackTimeout);
        // 同时播放一个提示音效
        this.playBeep();
      };

      utterance.onend = () => {
        clearTimeout(fallbackTimeout);
        if (!fallbackUsed) {
          playBtn.textContent = '▶ 重新播放';
          playBtn.classList.remove('playing');

          if (!this.state.audioFirstEnded) {
            this.state.audioFirstEnded = true;
            this.state.audioStartTime = Date.now();
            this.showImages();
          }
        }
      };

      utterance.onerror = (e) => {
        clearTimeout(fallbackTimeout);
        if (!fallbackUsed) {
          console.log('Web Speech API 错误:', e.error);
          playBtn.textContent = '▶ 重新播放';
          playBtn.classList.remove('playing');
          this.simulateAudioEnd();
        }
      };

      // 尝试播放
      try {
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        clearTimeout(fallbackTimeout);
        console.log('Web Speech API 异常:', e);
        this.simulateAudioEnd();
      }
    } else {
      // 无 Web Speech API，直接降级
      console.log('Web Speech API 不可用，使用降级方案');
      this.simulateAudioEnd();
    }
  },

  // 播放提示音效（使用 Web Audio API 生成简单音调）
  playBeep() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 440; // A4 音调
      oscillator.type = 'sine';
      gainNode.gain.value = 0.3;

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // 忽略音效错误
    }
  },

  simulateAudioEnd() {
    const playBtn = document.getElementById('play-btn');

    // 先播放提示音
    this.playBeep();

    setTimeout(() => {
      // 再播放一次提示音表示结束
      this.playBeep();

      playBtn.textContent = '▶ 重新播放';
      playBtn.classList.remove('playing');

      if (!this.state.audioFirstEnded) {
        this.state.audioFirstEnded = true;
        this.state.audioStartTime = Date.now();
        this.showImages();
      }
    }, 1500);
  },

  // ============================================================
  // 显示图片选项
  // ============================================================
  showImages() {
    if (this.state.imagesShown) return;
    this.state.imagesShown = true;

    const trial = this.state.trials[this.state.currentTrialIndex];
    const imagesArea = document.getElementById('images-area');
    imagesArea.innerHTML = '';
    imagesArea.style.display = 'flex';

    trial.options.forEach((word, idx) => {
      const card = document.createElement('div');
      card.className = 'image-card';
      card.dataset.word = word;

      const svgContainer = document.createElement('div');
      svgContainer.className = 'svg-icon';
      svgContainer.innerHTML = SVG_ICONS[word] || `<svg viewBox="0 0 100 100"><text x="50" y="55" text-anchor="middle" font-size="14" fill="#666">${word}</text></svg>`;

      const label = document.createElement('div');
      label.className = 'image-label';
      label.textContent = word;

      card.appendChild(svgContainer);
      card.appendChild(label);

      card.addEventListener('click', () => this.selectImage(word, card));
      imagesArea.appendChild(card);
    });
  },

  // ============================================================
  // 选择图片
  // ============================================================
  selectImage(selectedWord, cardElement) {
    if (this.state.responded || !this.state.imagesShown) return;
    this.state.responded = true;

    this.clearTimer();

    const trial = this.state.trials[this.state.currentTrialIndex];
    const rt = this.state.audioStartTime
      ? Date.now() - this.state.audioStartTime
      : 30000;
    const isCorrect = selectedWord === trial.correctAnswer;

    // 高亮选中
    cardElement.classList.add('selected');

    // 记录数据
    const record = {
      participant_id: this.state.participant.id,
      age: this.state.participant.age,
      gender: this.state.participant.gender,
      phase: this.state.phase,
      trial_index: trial.originalIndex,  // 使用原始编号
      audio: trial.word + '.mp3',
      correct_image: trial.correctAnswer + '.jpg',
      response: selectedWord + '.jpg',
      correct: isCorrect,
      rt_ms: rt,
      play_count: this.state.playCount,
      timeout: false,
      timestamp: new Date().toISOString()
    };
    this.state.data.push(record);

    // 练习阶段显示反馈
    if (this.state.phase === 'practice') {
      this.showFeedback(isCorrect, trial.correctAnswer);
      setTimeout(() => this.nextTrial(), 1500);
    } else {
      // 正式阶段：500ms后下一题
      setTimeout(() => this.nextTrial(), 500);
    }
  },

  // ============================================================
  // 超时处理
  // ============================================================
  handleTimeout() {
    if (this.state.responded) return;
    this.state.responded = true;
    this.clearTimer();

    const trial = this.state.trials[this.state.currentTrialIndex];

    // 记录超时数据
    const record = {
      participant_id: this.state.participant.id,
      age: this.state.participant.age,
      gender: this.state.participant.gender,
      phase: this.state.phase,
      trial_index: trial.originalIndex,  // 使用原始编号
      audio: trial.word + '.mp3',
      correct_image: trial.correctAnswer + '.jpg',
      response: 'timeout',
      correct: false,
      rt_ms: 30000,
      play_count: this.state.playCount,
      timeout: true,
      timestamp: new Date().toISOString()
    };
    this.state.data.push(record);

    // 显示超时提示
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.className = 'feedback timeout show';
    feedbackArea.textContent = '⏰ 超时！';

    // 图片变灰
    document.querySelectorAll('.image-card').forEach(c => {
      c.classList.add('disabled');
    });

    // 练习阶段显示正确答案
    if (this.state.phase === 'practice') {
      setTimeout(() => this.nextTrial(), 1500);
    } else {
      setTimeout(() => this.nextTrial(), 1000);
    }
  },

  // ============================================================
  // 显示反馈（练习阶段）
  // ============================================================
  showFeedback(isCorrect, correctAnswer) {
    const feedbackArea = document.getElementById('feedback-area');

    if (isCorrect) {
      feedbackArea.className = 'feedback correct show';
      feedbackArea.textContent = '✅ 正确！';
    } else {
      feedbackArea.className = 'feedback incorrect show';
      feedbackArea.textContent = `❌ 错误，正确答案是 ${correctAnswer}`;
      // 高亮正确图片
      document.querySelectorAll('.image-card').forEach(c => {
        if (c.dataset.word === correctAnswer) {
          c.classList.add('correct-highlight');
        }
      });
    }
  },

  // ============================================================
  // 下一个试次
  // ============================================================
  nextTrial() {
    this.state.currentTrialIndex++;

    if (this.state.phase === 'practice' &&
        this.state.currentTrialIndex >= this.state.trials.length) {
      // 练习结束，进入正式实验
      this.showPage('formal-intro');
      return;
    }

    if (this.state.phase === 'formal' &&
        this.state.currentTrialIndex >= this.state.trials.length) {
      // 正式实验结束
      this.showEndPage();
      return;
    }

    // 短暂空屏后开始下一题
    this.showBlankScreen(() => {
      this.startTrial();
    });
  },

  showBlankScreen(callback) {
    const content = document.getElementById('experiment-content');
    content.style.transition = 'opacity 0.3s ease';
    content.style.opacity = '0';
    setTimeout(() => {
      callback();
      content.style.opacity = '1';
    }, 350);
  },

  // ============================================================
  // 结束页
  // ============================================================
  showEndPage() {
    this.clearTimer();
    this.showPage('end');

    document.getElementById('completion-code').textContent = this.state.completionCode;

    // 提交数据
    this.submitData();
  },

  async submitData() {
    // 显示 loading 状态
    document.getElementById('submit-loading').style.display = 'inline';

    console.log('=== 实验数据提交 ===');
    console.log('被试信息:', this.state.participant);
    console.log('实验数据:', this.state.data);

    try {
      // 使用 FormData 发送 JSON 字符串
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.state.data));

      const response = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('服务器响应:', result);

      document.getElementById('submit-loading').style.display = 'none';

      if (result.status === 'success') {
        document.getElementById('submit-success').style.display = 'inline';
        console.log('数据提交成功:', result.message);
      } else {
        document.getElementById('submit-error').style.display = 'inline';
        console.error('服务器返回错误:', result.message);
      }

    } catch (error) {
      // 提交失败
      document.getElementById('submit-loading').style.display = 'none';
      document.getElementById('submit-error').style.display = 'inline';
      console.error('数据提交失败:', error);
    }
  },

  // ============================================================
  // CSV 下载
  // ============================================================
  generateCSV() {
    const headers = [
      'participant_id', 'age', 'gender', 'phase', 'trial_index',
      'audio', 'correct_image', 'response', 'correct', 'rt_ms',
      'play_count', 'timeout', 'timestamp'
    ];

    const csvRows = [headers.join(',')];

    this.state.data.forEach(row => {
      const values = headers.map(h => {
        const val = row[h];
        if (typeof val === 'string' && val.includes(',')) {
          return `"${val}"`;
        }
        return val;
      });
      csvRows.push(values.join(','));
    });

    return csvRows.join('\n');
  },

  downloadCSV() {
    const csv = this.generateCSV();
    const BOM = '﻿'; // UTF-8 BOM for Excel
    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `experiment_data_${this.state.participant.id}_${this.state.completionCode}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // ============================================================
  // Preview 模式（用于 Figma 导入）
  // ============================================================
  preview: {
    // 检测 URL 是否有 preview 参数
    check() {
      const params = new URLSearchParams(window.location.search);
      return params.get('preview');
    },

    // 初始化 preview 模式
    init(previewMode) {
      console.log('[Preview Mode]', previewMode);

      // 设置 mock 数据
      ExperimentApp.state.participant = {
        id: 'S_PREVIEW',
        age: 25,
        gender: '女'
      };
      ExperimentApp.state.completionCode = '123456';

      // 根据不同模式渲染
      switch (previewMode) {
        case 'welcome':
          this.showWelcome();
          break;
        case 'participant':
          this.showParticipant();
          break;
        case 'instruction':
          this.showInstruction();
          break;
        case 'trial-before-audio':
          this.showTrialBeforeAudio();
          break;
        case 'trial-images-visible':
          this.showTrialImagesVisible(15);
          break;
        case 'trial-countdown-orange':
          this.showTrialImagesVisible(8);
          break;
        case 'trial-countdown-red':
          this.showTrialImagesVisible(3);
          break;
        case 'practice-correct':
          this.showPracticeFeedback(true);
          break;
        case 'practice-wrong':
          this.showPracticeFeedback(false);
          break;
        case 'timeout':
          this.showTimeout();
          break;
        case 'end':
          this.showEnd();
          break;
        default:
          console.warn('Unknown preview mode:', previewMode);
      }
    },

    // 欢迎页
    showWelcome() {
      ExperimentApp.showPage('welcome');
    },

    // 被试信息填写页
    showParticipant() {
      ExperimentApp.showPage('info');
    },

    // 实验说明页
    showInstruction() {
      ExperimentApp.showPage('instructions');
    },

    // 试次页 - 播放前（只有播放按钮）
    showTrialBeforeAudio() {
      ExperimentApp.state.phase = 'formal';
      ExperimentApp.state.trials = ExperimentApp.buildTrials(FORMAL_TRIALS, false);
      ExperimentApp.state.currentTrialIndex = 0;

      ExperimentApp.showPage('experiment');
      ExperimentApp.startTrial();

      // 停止倒计时，保持30秒
      ExperimentApp.clearTimer();
      ExperimentApp.state.timeLeft = 30;
      ExperimentApp.updateTimerDisplay();
    },

    // 试次页 - 图片可见
    showTrialImagesVisible(timeLeft) {
      ExperimentApp.state.phase = 'formal';
      ExperimentApp.state.trials = ExperimentApp.buildTrials(FORMAL_TRIALS, false);
      ExperimentApp.state.currentTrialIndex = 0;
      ExperimentApp.state.audioFirstEnded = true;
      ExperimentApp.state.imagesShown = false;
      ExperimentApp.state.responded = false;

      const trial = ExperimentApp.state.trials[0];
      const totalTrials = FORMAL_TRIALS.length;

      // 设置顶部信息
      document.getElementById('trial-header').textContent = `第 1 题 / 共 ${totalTrials} 题（正式）`;

      // 重置播放按钮
      const playBtn = document.getElementById('play-btn');
      playBtn.textContent = '▶ 重新播放';
      playBtn.disabled = false;
      playBtn.classList.remove('playing');

      // 清空反馈
      const feedbackArea = document.getElementById('feedback-area');
      feedbackArea.className = '';

      // 显示页面
      ExperimentApp.showPage('experiment');

      // 停止倒计时并设置时间
      ExperimentApp.clearTimer();
      ExperimentApp.state.timeLeft = timeLeft;
      ExperimentApp.updateTimerDisplay();

      // 直接渲染图片（绕过 showImages 的状态检查）
      const imagesArea = document.getElementById('images-area');
      imagesArea.innerHTML = '';
      imagesArea.style.display = 'flex';

      trial.options.forEach((word) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.dataset.word = word;

        const svgContainer = document.createElement('div');
        svgContainer.className = 'svg-icon';
        svgContainer.innerHTML = SVG_ICONS[word] || `<svg viewBox="0 0 100 100"><text x="50" y="55" text-anchor="middle" font-size="14" fill="#666">${word}</text></svg>`;

        const label = document.createElement('div');
        label.className = 'image-label';
        label.textContent = word;

        card.appendChild(svgContainer);
        card.appendChild(label);
        imagesArea.appendChild(card);
      });

      ExperimentApp.state.imagesShown = true;
    },

    // 练习反馈
    showPracticeFeedback(isCorrect) {
      ExperimentApp.state.phase = 'practice';
      ExperimentApp.state.trials = ExperimentApp.buildTrials(PRACTICE_TRIALS, false);
      ExperimentApp.state.currentTrialIndex = 0;
      ExperimentApp.state.audioFirstEnded = true;
      ExperimentApp.state.imagesShown = false;
      ExperimentApp.state.responded = false;

      const trial = ExperimentApp.state.trials[0];
      const totalTrials = PRACTICE_TRIALS.length;

      // 设置顶部信息
      document.getElementById('trial-header').textContent = `第 1 题 / 共 ${totalTrials} 题（练习）`;

      // 重置播放按钮
      const playBtn = document.getElementById('play-btn');
      playBtn.textContent = '▶ 重新播放';
      playBtn.disabled = false;
      playBtn.classList.remove('playing');

      // 清空反馈
      const feedbackArea = document.getElementById('feedback-area');
      feedbackArea.className = '';

      // 显示页面
      ExperimentApp.showPage('experiment');

      // 停止倒计时并设置时间
      ExperimentApp.clearTimer();
      ExperimentApp.state.timeLeft = 15;
      ExperimentApp.updateTimerDisplay();

      // 直接渲染图片
      const imagesArea = document.getElementById('images-area');
      imagesArea.innerHTML = '';
      imagesArea.style.display = 'flex';

      trial.options.forEach((word) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.dataset.word = word;

        const svgContainer = document.createElement('div');
        svgContainer.className = 'svg-icon';
        svgContainer.innerHTML = SVG_ICONS[word] || `<svg viewBox="0 0 100 100"><text x="50" y="55" text-anchor="middle" font-size="14" fill="#666">${word}</text></svg>`;

        const label = document.createElement('div');
        label.className = 'image-label';
        label.textContent = word;

        card.appendChild(svgContainer);
        card.appendChild(label);
        imagesArea.appendChild(card);
      });

      ExperimentApp.state.imagesShown = true;

      // 模拟选择和反馈
      setTimeout(() => {
        const cards = document.querySelectorAll('.image-card');
        let wrongOption = trial.options.find(w => w !== trial.correctAnswer);

        cards.forEach(c => {
          if (isCorrect && c.dataset.word === trial.correctAnswer) {
            c.classList.add('selected');
          } else if (!isCorrect && c.dataset.word === wrongOption) {
            c.classList.add('selected');
          }
        });

        ExperimentApp.showFeedback(isCorrect, trial.correctAnswer);
      }, 100);
    },

    // 超时状态
    showTimeout() {
      ExperimentApp.state.phase = 'formal';
      ExperimentApp.state.trials = ExperimentApp.buildTrials(FORMAL_TRIALS, false);
      ExperimentApp.state.currentTrialIndex = 0;
      ExperimentApp.state.audioFirstEnded = true;
      ExperimentApp.state.imagesShown = false;
      ExperimentApp.state.responded = true;

      const trial = ExperimentApp.state.trials[0];
      const totalTrials = FORMAL_TRIALS.length;

      // 设置顶部信息
      document.getElementById('trial-header').textContent = `第 1 题 / 共 ${totalTrials} 题（正式）`;

      // 重置播放按钮
      const playBtn = document.getElementById('play-btn');
      playBtn.textContent = '▶ 重新播放';
      playBtn.disabled = false;
      playBtn.classList.remove('playing');

      // 清空反馈
      const feedbackArea = document.getElementById('feedback-area');
      feedbackArea.className = '';

      // 显示页面
      ExperimentApp.showPage('experiment');

      // 停止倒计时并设置时间
      ExperimentApp.clearTimer();
      ExperimentApp.state.timeLeft = 0;
      ExperimentApp.updateTimerDisplay();

      // 直接渲染图片
      const imagesArea = document.getElementById('images-area');
      imagesArea.innerHTML = '';
      imagesArea.style.display = 'flex';

      trial.options.forEach((word) => {
        const card = document.createElement('div');
        card.className = 'image-card disabled';
        card.dataset.word = word;

        const svgContainer = document.createElement('div');
        svgContainer.className = 'svg-icon';
        svgContainer.innerHTML = SVG_ICONS[word] || `<svg viewBox="0 0 100 100"><text x="50" y="55" text-anchor="middle" font-size="14" fill="#666">${word}</text></svg>`;

        const label = document.createElement('div');
        label.className = 'image-label';
        label.textContent = word;

        card.appendChild(svgContainer);
        card.appendChild(label);
        imagesArea.appendChild(card);
      });

      ExperimentApp.state.imagesShown = true;

      // 显示超时提示
      const feedback = document.getElementById('feedback-area');
      feedback.className = 'feedback timeout show';
      feedback.textContent = '⏰ 超时！';
    },

    // 结束页
    showEnd() {
      // 生成 mock 数据
      ExperimentApp.state.data = FORMAL_TRIALS.map((t, i) => ({
        participant_id: 'S_PREVIEW',
        age: 25,
        gender: '女',
        phase: 'formal',
        trial_index: i + 1,
        audio: t.word + '.mp3',
        correct_image: t.word + '.jpg',
        response: t.word + '.jpg',
        correct: true,
        rt_ms: 1500 + Math.floor(Math.random() * 1000),
        play_count: 1,
        timeout: false,
        timestamp: new Date().toISOString()
      }));

      ExperimentApp.showPage('end');
      document.getElementById('completion-code').textContent = ExperimentApp.state.completionCode;
    }
  }
};

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 检测 preview 模式
  const previewMode = ExperimentApp.preview.check();
  if (previewMode) {
    ExperimentApp.preview.init(previewMode);
  } else {
    ExperimentApp.init();
  }
});
