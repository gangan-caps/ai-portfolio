import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── 水墨意象 SVG ── 淡墨线稿风 ── */

/* 文生图 — 远山轮廓 · 层叠峰峦 */
const MountainIcon = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="node-icon" data-qoder-id="qel-node-icon-a594cdf0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-icon-a594cdf0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;node-icon&quot;,&quot;loc&quot;:{&quot;line&quot;:8,&quot;column&quot;:3}}">
    {/* 远山 — 最淡 */}
    <path d="M0 72 C8 52, 16 42, 24 48 C30 38, 38 28, 46 34 C52 26, 60 20, 68 28 C74 22, 78 30, 80 38 L80 72 Z"
      stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.25" data-qoder-id="qel-path-5f9de917" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-5f9de917&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:10,&quot;column&quot;:5}}"/>
    {/* 中山 */}
    <path d="M5 78 C12 58, 20 48, 28 54 C34 44, 42 34, 50 40 C56 30, 64 24, 72 32 L76 78"
      stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.45" data-qoder-id="qel-path-5e9de784" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-5e9de784&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:13,&quot;column&quot;:5}}"/>
    {/* 近山 — 最浓 */}
    <path d="M0 85 C6 68, 14 56, 22 62 C28 50, 36 40, 44 48 C50 38, 58 30, 66 38 C72 32, 78 42, 80 50 L80 85"
      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" data-qoder-id="qel-path-5d9de5f1" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-5d9de5f1&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:16,&quot;column&quot;:5}}"/>
    {/* 山间雾气 */}
    <path d="M18 66 C24 64, 32 65, 38 63" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.2" data-qoder-id="qel-path-5c9de45e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-5c9de45e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:19,&quot;column&quot;:5}}"/>
    <path d="M44 56 C50 54, 58 55, 64 53" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.2" data-qoder-id="qel-path-5b9de2cb" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-5b9de2cb&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:20,&quot;column&quot;:5}}"/>
    {/* 水面倒影线 */}
    <line x1="8" y1="90" x2="72" y2="90" stroke="currentColor" strokeWidth="0.4" opacity="0.15" data-qoder-id="qel-line-adc5c43a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-line-adc5c43a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;line&quot;,&quot;loc&quot;:{&quot;line&quot;:22,&quot;column&quot;:5}}"/>
    <line x1="16" y1="94" x2="64" y2="94" stroke="currentColor" strokeWidth="0.3" opacity="0.1" data-qoder-id="qel-line-a0c5afc3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-line-a0c5afc3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;MountainIcon&quot;,&quot;elementRole&quot;:&quot;line&quot;,&quot;loc&quot;:{&quot;line&quot;:23,&quot;column&quot;:5}}"/>
  </svg>
)

/* 文生视频 — 风中竹影 */
const BambooIcon = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="node-icon" data-qoder-id="qel-node-icon-96d67a5f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-icon-96d67a5f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;node-icon&quot;,&quot;loc&quot;:{&quot;line&quot;:29,&quot;column&quot;:3}}">
    {/* 主竹竿 */}
    <path d="M32 95 C32 80, 30 60, 28 40 C27 28, 26 16, 26 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65" data-qoder-id="qel-path-c5cea3ab" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-c5cea3ab&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:31,&quot;column&quot;:5}}"/>
    {/* 竹节 */}
    <line x1="29" y1="32" x2="33" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" data-qoder-id="qel-line-aca86e6a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-line-aca86e6a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;line&quot;,&quot;loc&quot;:{&quot;line&quot;:33,&quot;column&quot;:5}}"/>
    <line x1="28.5" y1="52" x2="32.5" y2="52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" data-qoder-id="qel-line-aba86cd7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-line-aba86cd7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;line&quot;,&quot;loc&quot;:{&quot;line&quot;:34,&quot;column&quot;:5}}"/>
    <line x1="28" y1="72" x2="32" y2="72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" data-qoder-id="qel-line-aaa86b44" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-line-aaa86b44&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;line&quot;,&quot;loc&quot;:{&quot;line&quot;:35,&quot;column&quot;:5}}"/>
    {/* 竹叶 — 风动 */}
    <path d="M28 30 C22 24, 14 20, 8 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.55" data-qoder-id="qel-path-c9cea9f7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-c9cea9f7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:37,&quot;column&quot;:5}}"/>
    <path d="M29 28 C24 20, 18 16, 12 16" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" data-qoder-id="qel-path-c8cea864" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-c8cea864&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:38,&quot;column&quot;:5}}"/>
    <path d="M28 48 C34 42, 42 38, 50 40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.55" data-qoder-id="qel-path-cbcead1d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-cbcead1d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:39,&quot;column&quot;:5}}"/>
    <path d="M28 46 C34 38, 44 34, 52 34" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" data-qoder-id="qel-path-caceab8a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-caceab8a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:40,&quot;column&quot;:5}}"/>
    <path d="M30 68 C24 62, 16 58, 10 60" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" data-qoder-id="qel-path-bdce9713" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-bdce9713&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:41,&quot;column&quot;:5}}"/>
    {/* 第二竹竿 — 淡 */}
    <path d="M50 95 C50 82, 49 68, 48 54 C47.5 44, 47 36, 47 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" data-qoder-id="qel-path-bcce9580" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-bcce9580&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:43,&quot;column&quot;:5}}"/>
    <path d="M48 52 C54 46, 62 42, 68 44" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" data-qoder-id="qel-path-b3c7cb90" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b3c7cb90&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:44,&quot;column&quot;:5}}"/>
    <path d="M47 38 C42 32, 36 30, 32 32" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" data-qoder-id="qel-path-b4c7cd23" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b4c7cd23&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;BambooIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:45,&quot;column&quot;:5}}"/>
  </svg>
)

/* 视觉理解 — 古松 */
const PineIcon = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="node-icon" data-qoder-id="qel-node-icon-f0dd9bf2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-icon-f0dd9bf2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;node-icon&quot;,&quot;loc&quot;:{&quot;line&quot;:51,&quot;column&quot;:3}}">
    {/* 主干 — 苍劲 */}
    <path d="M40 95 C38 82, 36 68, 35 56 C34 46, 34 38, 36 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.65" data-qoder-id="qel-path-94b5699b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-94b5699b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:53,&quot;column&quot;:5}}"/>
    {/* 枝干伸展 */}
    <path d="M35 56 C28 50, 18 48, 10 52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" data-qoder-id="qel-path-99b5717a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-99b5717a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:55,&quot;column&quot;:5}}"/>
    <path d="M35 44 C42 38, 52 36, 62 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" data-qoder-id="qel-path-9ab5730d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-9ab5730d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:56,&quot;column&quot;:5}}"/>
    <path d="M36 34 C30 28, 22 26, 14 30" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.45" data-qoder-id="qel-path-97b56e54" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-97b56e54&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:57,&quot;column&quot;:5}}"/>
    {/* 松针团 — 远山墨点风 */}
    <circle cx="10" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" data-qoder-id="qel-circle-dcbc75fd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-dcbc75fd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:59,&quot;column&quot;:5}}"/>
    <circle cx="62" cy="38" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" data-qoder-id="qel-circle-cdbc5e60" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cdbc5e60&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:60,&quot;column&quot;:5}}"/>
    <circle cx="14" cy="28" r="7" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.12" data-qoder-id="qel-circle-cebc5ff3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cebc5ff3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:61,&quot;column&quot;:5}}"/>
    {/* 松针细节线 */}
    <path d="M6 48 L10 44 L14 48" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" data-qoder-id="qel-path-9bb7b337" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-9bb7b337&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:63,&quot;column&quot;:5}}"/>
    <path d="M56 36 L62 32 L68 36" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" data-qoder-id="qel-path-9ab7b1a4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-9ab7b1a4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:64,&quot;column&quot;:5}}"/>
    <path d="M58 40 L62 36 L66 40" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" fill="none" opacity="0.2" data-qoder-id="qel-path-9db7b65d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-9db7b65d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:65,&quot;column&quot;:5}}"/>
    <path d="M10 26 L14 22 L18 26" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" fill="none" opacity="0.25" data-qoder-id="qel-path-9cb7b4ca" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-9cb7b4ca&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:66,&quot;column&quot;:5}}"/>
    {/* 根部 */}
    <path d="M36 90 C32 92, 28 94, 24 94" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" data-qoder-id="qel-path-97b7aceb" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-97b7aceb&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:68,&quot;column&quot;:5}}"/>
    <path d="M40 92 C44 94, 48 94, 52 92" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" data-qoder-id="qel-path-96b7ab58" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-96b7ab58&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;PineIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:69,&quot;column&quot;:5}}"/>
  </svg>
)

/* 视觉描述 — 水墨荷花 */
const LotusIcon = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="node-icon" data-qoder-id="qel-node-icon-126a957a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-icon-126a957a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;node-icon&quot;,&quot;loc&quot;:{&quot;line&quot;:75,&quot;column&quot;:3}}">
    {/* 花茎 */}
    <path d="M40 95 C40 80, 38 65, 36 50 C35 42, 34 36, 34 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.55" data-qoder-id="qel-path-3e062e0b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-3e062e0b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:77,&quot;column&quot;:5}}"/>
    {/* 花瓣 — 主花 */}
    <path d="M34 30 C30 22, 28 14, 34 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" data-qoder-id="qel-path-3b062952" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-3b062952&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:79,&quot;column&quot;:5}}"/>
    <path d="M34 30 C38 22, 40 14, 34 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" data-qoder-id="qel-path-3c062ae5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-3c062ae5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:80,&quot;column&quot;:5}}"/>
    <path d="M34 30 C26 24, 20 18, 22 12" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" data-qoder-id="qel-path-b50da525" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b50da525&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:81,&quot;column&quot;:5}}"/>
    <path d="M34 30 C42 24, 48 18, 46 12" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" data-qoder-id="qel-path-b40da392" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b40da392&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:82,&quot;column&quot;:5}}"/>
    <path d="M34 30 C22 28, 16 22, 18 16" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" data-qoder-id="qel-path-b30da1ff" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b30da1ff&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:83,&quot;column&quot;:5}}"/>
    <path d="M34 30 C46 28, 52 22, 50 16" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" data-qoder-id="qel-path-b20da06c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b20da06c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:84,&quot;column&quot;:5}}"/>
    {/* 花蕊 */}
    <circle cx="34" cy="24" r="2.5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" data-qoder-id="qel-circle-c07a847f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-c07a847f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:86,&quot;column&quot;:5}}"/>
    {/* 荷叶 — 大面积留白 */}
    <path d="M54 70 C46 62, 38 60, 30 64 C24 58, 18 60, 14 68 C18 72, 26 74, 34 72 C42 74, 50 74, 54 70 Z"
      stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.35" data-qoder-id="qel-path-b00d9d46" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-b00d9d46&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:88,&quot;column&quot;:5}}"/>
    {/* 叶脉 */}
    <path d="M34 66 L34 72" stroke="currentColor" strokeWidth="0.4" opacity="0.2" data-qoder-id="qel-path-af0d9bb3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-af0d9bb3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:91,&quot;column&quot;:5}}"/>
    <path d="M34 66 L26 70" stroke="currentColor" strokeWidth="0.3" opacity="0.15" data-qoder-id="qel-path-ae0d9a20" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-ae0d9a20&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:92,&quot;column&quot;:5}}"/>
    <path d="M34 66 L42 70" stroke="currentColor" strokeWidth="0.3" opacity="0.15" data-qoder-id="qel-path-bd0db1bd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-bd0db1bd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:93,&quot;column&quot;:5}}"/>
    {/* 小荷叶 */}
    <path d="M60 82 C56 78, 52 76, 48 78 C50 82, 54 84, 60 82 Z"
      stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.25" data-qoder-id="qel-path-bc0db02a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-bc0db02a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:95,&quot;column&quot;:5}}"/>
    {/* 水纹 */}
    <path d="M20 92 C28 90, 36 91, 44 89 C52 91, 60 90, 68 92" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" fill="none" opacity="0.12" data-qoder-id="qel-path-af0b5d1c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-af0b5d1c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;LotusIcon&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:98,&quot;column&quot;:5}}"/>
  </svg>
)

/* ── 朱砂印章 ── */
const RedSeal = ({ num, ...qoderProps }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={["node-seal", qoderProps?.className].filter(Boolean).join(" ")} style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
    <rect x="1.5" y="1.5" width="21" height="21" rx="1.5" stroke="#a03030" strokeWidth="1.2" fill="color-mix(in srgb, #a03030 8%, transparent)" data-qoder-id="qel-rect-5bfba2b8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-rect-5bfba2b8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;RedSeal&quot;,&quot;elementRole&quot;:&quot;rect&quot;,&quot;loc&quot;:{&quot;line&quot;:105,&quot;column&quot;:5}}"/>
    <text x="12" y="15.5" textAnchor="middle" fill="#a03030" fontSize="9" fontWeight="700" fontFamily="'Noto Serif SC', serif" data-qoder-id="qel-text-43e6f1bd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-text-43e6f1bd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;RedSeal&quot;,&quot;elementRole&quot;:&quot;text&quot;,&quot;loc&quot;:{&quot;line&quot;:106,&quot;column&quot;:5}}">{num}</text>
  </svg>
)

/* ── 项目数据 ── */
const projects = [
  { id: 't2i',     nameZh: '文生图片', nameEn: 'Text-to-Image',  desc: '文本到图像生成的质量评测体系',        Icon: MountainIcon },
  { id: 't2v',     nameZh: '文生视频', nameEn: 'Text-to-Video',  desc: '文本到视频生成的多维度评测',          Icon: BambooIcon },
  { id: 'vqa',     nameZh: '视觉理解', nameEn: 'Visual QA',      desc: '视觉问答系统的准确性与理解力评估',      Icon: PineIcon },
  { id: 'caption', nameZh: '视觉描述', nameEn: 'Visual Caption', desc: '图像描述生成的语义完整性评测',         Icon: LotusIcon },
]

export default function HomePage(qoderProps) {
  const cardsRef = useRef([])
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const LOOP_END = 10
    const handleTimeUpdate = () => {
      if (vid.currentTime >= LOOP_END) {
        vid.currentTime = 0
        vid.play()
      }
    }
    vid.addEventListener('timeupdate', handleTimeUpdate)
    vid.play().catch(() => {})
    return () => vid.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={["page-enter", qoderProps?.className].filter(Boolean).join(" ")} data-component="home-page" style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
      <section className="home-hero" data-qoder-id="qel-home-hero-a1b0e62e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-hero-a1b0e62e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-hero&quot;,&quot;loc&quot;:{&quot;line&quot;:154,&quot;column&quot;:7}}">

        {/* Background — unchanged */}
        <div className="home-bg" aria-hidden="true" data-qoder-id="qel-home-bg-4f63f28e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-bg-4f63f28e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-bg&quot;,&quot;loc&quot;:{&quot;line&quot;:157,&quot;column&quot;:9}}">
          <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" data-qoder-id="qel-video-02c7bf3f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-video-02c7bf3f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;video&quot;,&quot;loc&quot;:{&quot;line&quot;:158,&quot;column&quot;:11}}">
            <source src="/assets/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="home-overlay" aria-hidden="true"  data-qoder-id="qel-home-overlay-18d5812a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-overlay-18d5812a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-overlay&quot;,&quot;loc&quot;:{&quot;line&quot;:162,&quot;column&quot;:9}}"/>

        {/* Content — unchanged */}
        <div className="home-content" data-qoder-id="qel-home-content-953f6d01" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-content-953f6d01&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-content&quot;,&quot;loc&quot;:{&quot;line&quot;:165,&quot;column&quot;:9}}">
          <header data-qoder-id="qel-header-7f8a0ec8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-header-7f8a0ec8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;header&quot;,&quot;loc&quot;:{&quot;line&quot;:166,&quot;column&quot;:11}}">
            <h1 className="home-name font-extrabold" data-qoder-id="qel-home-name-3f9c5d0b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-name-3f9c5d0b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-name&quot;,&quot;loc&quot;:{&quot;line&quot;:167,&quot;column&quot;:13}}">王洁</h1>
            <p className="home-subtitle" data-qoder-id="qel-home-subtitle-e33c746a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-subtitle-e33c746a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-subtitle&quot;,&quot;loc&quot;:{&quot;line&quot;:168,&quot;column&quot;:13}}">Wang Jie · AI Evaluation</p>
          </header>
          <p className="home-bio" data-qoder-id="qel-home-bio-f8255c6f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-home-bio-f8255c6f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;home-bio&quot;,&quot;loc&quot;:{&quot;line&quot;:170,&quot;column&quot;:11}}">
            以设计视角切入人工智能评测，专注于多模态AI能力的质量度量与体验优化
          </p>
        </div>

        {/* ── Navigation Nodes ── 悬浮导航节点 ── */}
        <div className="nodes-section" data-qoder-id="qel-nodes-section-401e8356" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-nodes-section-401e8356&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;nodes-section&quot;,&quot;loc&quot;:{&quot;line&quot;:176,&quot;column&quot;:9}}">
          <div className="nodes-row" data-qoder-id="qel-nodes-row-4fce215a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-nodes-row-4fce215a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;nodes-row&quot;,&quot;loc&quot;:{&quot;line&quot;:177,&quot;column&quot;:11}}">
            {projects.map((p, i) => {
              const IconComp = p.Icon
              const zh = p.nameZh ?? ''
              const mid = zh.length <= 4 ? 2 : Math.ceil(zh.length / 2)
              const zhLine1 = zh.slice(0, mid)
              const zhLine2 = zh.slice(mid)
              return (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="nav-node reveal"
                  ref={(el) => (cardsRef.current[i] = el)}
                  data-component="project-card"
                  style={{ transitionDelay: `${i * 120}ms` }}
                 data-qoder-id="qel-project-card-5b0f3c96" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-project-card-5b0f3c96&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;project-card&quot;,&quot;loc&quot;:{&quot;line&quot;:181,&quot;column&quot;:17}}">
                  <div className="node-icon-wrap" data-qoder-id="qel-node-icon-wrap-837928d7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-icon-wrap-837928d7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;node-icon-wrap&quot;,&quot;loc&quot;:{&quot;line&quot;:189,&quot;column&quot;:19}}">
                    <IconComp  data-qoder-id="qel-iconcomp-0ba47482" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-iconcomp-0ba47482&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;iconcomp&quot;,&quot;loc&quot;:{&quot;line&quot;:190,&quot;column&quot;:21}}"/>
                  </div>
                  <div className="node-text" data-qoder-id="qel-node-text-fbf1ba61" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-text-fbf1ba61&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;node-text&quot;,&quot;loc&quot;:{&quot;line&quot;:192,&quot;column&quot;:19}}">
                    <span className="node-title" data-qoder-id="qel-node-title-25a694c2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-title-25a694c2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;node-title&quot;,&quot;loc&quot;:{&quot;line&quot;:193,&quot;column&quot;:21}}">
                      <span>{zhLine1}</span>
                      {!!zhLine2 && <span>{zhLine2}</span>}
                    </span>
                    <span className="node-en" data-qoder-id="qel-node-en-52207ca3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-en-52207ca3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;node-en&quot;,&quot;loc&quot;:{&quot;line&quot;:194,&quot;column&quot;:21}}">{p.nameEn}</span>
                  </div>
                  <p className="node-desc" data-qoder-id="qel-node-desc-069fb21a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-node-desc-069fb21a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;node-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:196,&quot;column&quot;:19}}">{p.desc}</p>
                  <RedSeal num={i + 1}  data-qoder-id="qel-redseal-14eb3207" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-redseal-14eb3207&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;redseal&quot;,&quot;loc&quot;:{&quot;line&quot;:197,&quot;column&quot;:19}}"/>
                </Link>
              )
            })}
          </div>
          <p className="nodes-footer" data-qoder-id="qel-nodes-footer-4edc3395" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-nodes-footer-4edc3395&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/HomePage.jsx&quot;,&quot;componentName&quot;:&quot;HomePage&quot;,&quot;elementRole&quot;:&quot;nodes-footer&quot;,&quot;loc&quot;:{&quot;line&quot;:202,&quot;column&quot;:11}}">设计因自然而生 · 体验因洞察而优</p>
        </div>

      </section>
    </div>
  )
}
