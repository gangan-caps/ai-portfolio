import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import T2iPage from './T2iPage'
import VQAPage from './VQAPage'
import VisionDescPage from './VisionDescPage'
import './T2iPage.css'
import './VQAPage.css'
import './VisionDescPage.css'

/* ===== Project Data — each work has its own images paired with description ===== */
const projectData = {
  t2i: {
    id: 't2i',
    nameZh: '文生图',
    nameEn: 'Text-to-Image',
    intro: '构建系统化的文本到图像生成质量评测框架，从语义准确性、视觉美感、细节保真度等多个维度对主流T2I模型进行量化评估，为模型选型与迭代提供数据支撑。',
    works: [
      {
        id: 1,
        title: '评测指标体系设计',
        tag: '框架设计',
        thought: '基于用户研究提炼出语义一致性、美学评分、细节精度、风格可控性四大评测维度，每个维度下细分3-5个子指标。',
        process: '通过专家评审 + 用户调研双通道验证指标有效性，确保评测结果与实际使用体验高度相关。',
        dimensions: '指令遵循度 / 商品清晰度 / 文字质量 / 美学',
        optimize: '加强多语言prompt的指标适配，提升跨文化场景覆盖。',
        link: '#',
        images: [
          { id: 1, label: '评测指标体系架构图', alt: 'Placeholder — 替换为指标体系架构图' },
          { id: 2, label: '指标维度权重分布', alt: 'Placeholder — 替换为权重分布图' },
        ],
      },
      {
        id: 2,
        title: '多模型横向对比',
        tag: '横向评测',
        thought: '设计标准化测试集覆盖100+场景类型，对5款主流T2I模型进行全维度横评。',
        process: '采用自动化评分 + 人工评审混合模式，确保评测结果的客观性和覆盖面。',
        dimensions: '模型一致性 / 场景覆盖 / 评分稳定性',
        optimize: '扩大测试集规模，增加边缘场景用例。',
        link: '#',
        images: [
          { id: 3, label: '模型对比评测结果', alt: 'Placeholder — 替换为对比评测截图' },
          { id: 4, label: '场景覆盖率分析', alt: 'Placeholder — 替换为场景分析图' },
        ],
      },
      {
        id: 5,
        title: '可视化评测报告',
        tag: '数据呈现',
        thought: '将复杂的评测数据转化为直观的可视化报告，支持多维度对比和趋势分析。',
        process: '使用交互式图表展示各模型在不同场景下的表现差异，辅助决策。',
        dimensions: '信息密度 / 可读性 / 交互体验',
        optimize: '增加实时数据流接入，支持动态更新报告。',
        link: '#',
        images: [
          { id: 5, label: '可视化报告界面', alt: 'Placeholder — 替换为报告界面截图' },
          { id: 6, label: '多维度对比图表', alt: 'Placeholder — 替换为对比图表' },
        ],
      },
    ],
  },
  t2v: {
    nameZh: '文生视频',
    nameEn: 'Text-to-Video',
    layout: 'video-process',
    heroTitle: '从文字到影像，构建你的未来视频世界',
    heroSubtitle: '整合角色设定、场景设定、镜头脚本与视频预览，让文生视频的创作流程更清晰、更高效、更具表现力。',
    capabilities: [
      { title: '多模态理解', desc: '深度解析文本语义与视觉关联' },
      { title: '一致性生成', desc: '角色形象与场景风格高度统一' },
      { title: '高画质输出', desc: '影视级画面质量与细节保真' },
      { title: '可控可复用', desc: '模块化流程，参数化精细调控' },
    ],
    modules: [
      { id: 'character', title: '角色设定', desc: '精细化角色建模与多维度设定，保证形象一致与可控。' },
      { id: 'scene', title: '场景构建', desc: '从概念设定到环境细化，快速搭建统一世界观。' },
      { id: 'script', title: '脚本流程', desc: '结构化镜头脚本生成，让创作逻辑清晰可见。' },
    ],
    character: {
      title: '角色设定示例：机甲少女',
      info: [
        ['代号', '赫利俄斯'],
        ['姓名', '未知'],
        ['身高', '168cm'],
        ['体重', '53kg'],
        ['年龄', '20+'],
        ['定位', '近战突击'],
        ['武装', '能量拳套'],
        ['单位', '人类特战部队'],
      ],
      highlights: [
        '轻量化高机动装甲',
        '能量驱动关节',
        '右臂能量拳套',
        '模块化背部结构',
        '神经接口头盔',
      ],
      image: '/assets/t2v-character.png',
      alt: '机甲少女三视图',
    },
    scenes: {
      title: '场景世界观搭建',
      subtitle: '从云端平台到废墟巷道，快速建立统一视觉语境。',
      items: [
        { title: '云端天台', image: '/assets/t2v-scene-1.jpg' },
        { title: '高空楼顶平台', image: '/assets/t2v-scene-2.jpg' },
        { title: '机甲街区', image: '/assets/t2v-scene-3.jpg' },
        { title: '巨虎机甲战场', image: '/assets/t2v-scene-4.jpg' },
        { title: '废墟巷道', image: '/assets/t2v-scene-5.jpg' },
      ],
    },
    script: {
      title: '一个完整视频脚本的构成',
      image: '/assets/t2v-flowchart.png',
      alt: '完整视频脚本构成流程图',
      flow: [
        { num: '①', title: '基础信息', color: '#4a9eff', items: [['镜头编号 Shot','shot'], ['时间 Duration','clock']] },
        { num: '②', title: '镜头设计', color: '#3ecf8e', items: [['景别','landscape'], ['镜头角度','angle'], ['焦距','lens'], ['运镜','move'], ['摄影机速度','speed']] },
        { num: '③', title: '画面内容', color: '#f5a623', items: [['主体','person'], ['动作','action'], ['环境','tree'], ['光线','sun'], ['色彩','palette'], ['特效','sparkle'], ['材质','layers']] },
        { num: '④', title: '视听风格', color: '#9f8cff', items: [['情绪','mood'], ['画质','hd'], ['参考风格','star'], ['音效','sfx'], ['音乐','music']] },
        { num: '⑤', title: '后期与衔接', color: '#6ce6ff', items: [['转场','transition'], ['镜头节奏','rhythm'], ['视觉连续性','chain']] },
      ],
      template: ['镜头编号','时间','景别','机位','焦距','运镜','主体','动作','环境','光线','色彩','材质','特效','情绪','画质','参考风格','音效','音乐','转场'],
      frames: [
      { num: '01', title: '云端俯视，女主登场', image: '/assets/t2v-frame-01.png' },
      { num: '02', title: '机械手抬起，能量核心点亮', image: '/assets/t2v-frame-02.png' },
      { num: '03', title: '觉醒确认，装甲协议启动', image: '/assets/t2v-frame-03.png' },
      { num: '04', title: '胸甲覆盖，身体机械化', image: '/assets/t2v-frame-04.png' },
      { num: '05', title: '背甲闭合，推进系统上线', image: '/assets/t2v-frame-05.png' },
      { num: '06', title: '全身装甲完成，转入战斗姿态', image: '/assets/t2v-frame-06.png' },
      { num: '07', title: '头盔合拢，感知系统启动', image: '/assets/t2v-frame-07.png' },
      { num: '08', title: '红色面甲落下，敌我识别', image: '/assets/t2v-frame-08.png' },
      { num: '09', title: '头盔完成，喷气准备下坠', image: '/assets/t2v-frame-09.png' },
      { num: '10', title: '高空俯冲，穿入巨构街区', image: '/assets/t2v-frame-10.png' },
      { num: '11', title: '低空突进，巨型敌人出现', image: '/assets/t2v-frame-11.png' },
      { num: '12', title: '落地冲刺，红色光刃生成', image: '/assets/t2v-frame-12.png' },
      { num: '13', title: '近距对峡，战斗爆发前', image: '/assets/t2v-frame-13.png' },
      { num: '14', title: '定格海报，进入下一场战斗', image: '/assets/t2v-frame-14.png' }
      ],
    },
    video: '/assets/case-t2v-01.mp4',
    poster: '/assets/case-t2v-01-poster.jpg',
    works: [],
  },
  vqa: {
    id: 'vqa',
    nameZh: '视觉理解',
    nameEn: 'Visual Question Answering',
    intro: '评估视觉问答系统在复杂场景下的理解能力，涵盖物体识别、空间推理、常识推理等核心能力维度，推动VQA模型的可解释性评测。',
    works: [
      {
        id: 1,
        title: '多粒度理解能力评测',
        tag: '粒度评测',
        thought: '从物体级、关系级、场景级三个粒度设计评测任务，全面检验模型的视觉理解深度。',
        process: '构建分层测试集，从简单识别到复杂推理逐级提升难度。',
        dimensions: '结构完整性 / 空间透视 / 细节连贯 / 光影',
        optimize: '增加动态场景和多视角理解评测。',
        link: '#',
        images: [
          { id: 1, label: '多粒度评测示例', alt: 'Placeholder — 替换为评测示例图' },
          { id: 2, label: '分层测试集结构', alt: 'Placeholder — 替换为测试集结构图' },
        ],
      },
      {
        id: 2,
        title: '推理过程可解释性分析',
        tag: '可解释性',
        thought: '不仅评测最终答案的正确性，还分析模型的推理路径是否合理。',
        process: '设计注意力可视化 + 推理链验证双重分析方法。',
        dimensions: '推理路径合理性 / 注意力分布 / 链式验证',
        optimize: '引入反事实推理测试，增强可解释性分析覆盖。',
        link: '#',
        images: [
          { id: 3, label: '注意力可视化', alt: 'Placeholder — 替换为注意力热力图' },
        ],
      },
      {
        id: 3,
        title: '鲁棒性与对抗性测试',
        tag: '鲁棒性',
        thought: '通过精心设计的对抗样本测试模型在边界情况下的表现。',
        process: '构建包含视觉干扰、问题歧义、反常识场景的对抗测试集。',
        dimensions: '对抗鲁棒性 / 干扰容忍度 / 边界表现',
        optimize: '扩展对抗样本类型，覆盖更多边界场景。',
        link: '#',
        images: [
          { id: 4, label: '对抗测试样本', alt: 'Placeholder — 替换为对抗样本图' },
          { id: 5, label: '鲁棒性测试结果', alt: 'Placeholder — 替换为测试结果图' },
        ],
      },
    ],
  },
  caption: {
    id: 'caption',
    nameZh: '视觉描述',
    nameEn: 'Visual Caption',
    intro: '评测图像描述生成模型的语义完整性和表达质量，关注描述的自然度、信息密度、以及对图像关键内容的覆盖程度。',
    works: [
      {
        id: 1,
        title: '语义完整性评测',
        tag: '语义评测',
        thought: '评估生成的描述是否完整覆盖图像中的关键物体、动作、场景和关系。',
        process: '设计信息覆盖率指标，自动检测描述中遗漏的图像关键元素。',
        dimensions: '信息覆盖率 / 语义准确度 / 元素完整性',
        optimize: '引入层次化语义分析，区分核心与次要元素。',
        link: '#',
        images: [
          { id: 1, label: '语义覆盖率分析', alt: 'Placeholder — 替换为覆盖率分析图' },
          { id: 2, label: '关键元素检测示例', alt: 'Placeholder — 替换为检测示例' },
        ],
      },
      {
        id: 2,
        title: '语言质量评估',
        tag: '语言评测',
        thought: '从流畅度、多样性、冗余度三个维度评估描述的语言质量。',
        process: '结合N-gram分析和人工评审，建立语言质量评分标准。',
        dimensions: '流畅度 / 多样性 / 冗余控制 / 自然度',
        optimize: '增加多语言描述质量评测覆盖。',
        link: '#',
        images: [
          { id: 3, label: '语言质量评分面板', alt: 'Placeholder — 替换为评分面板截图' },
        ],
      },
      {
        id: 3,
        title: '细粒度内容对齐',
        tag: '对齐评测',
        thought: '验证描述中的每个语义单元是否与图像中的视觉元素正确对应。',
        process: '设计区域-文本对齐评测方法，检测描述中的幻觉和遗漏。',
        dimensions: '区域对齐度 / 幻觉检测 / 遗漏率',
        optimize: '引入分割级对齐评测，精确到像素级别。',
        link: '#',
        images: [
          { id: 4, label: '区域-文本对齐可视化', alt: 'Placeholder — 替换为对齐可视化图' },
          { id: 5, label: '幻觉检测示例', alt: 'Placeholder — 替换为幻觉检测图' },
        ],
      },
    ],
  },
}

/* ===== Inline Image / Video with Lightbox ===== */
function WorkImage({ image, onOpen, ...qoderProps }) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  /* Lazy-load: only mount media when scrolling into view */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={["work-image-item", qoderProps?.className].filter(Boolean).join(" ")}
      onClick={() => onOpen(image)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(image)}
      aria-label={`查看${image.label}`}
     style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
      {!inView ? (
        /* Placeholder shown until scrolled into view */
        image.poster ? (
          <img src={image.poster} alt={image.alt} className="work-video-poster"  data-qoder-id="qel-work-video-poster-25e3ce8c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-video-poster-25e3ce8c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;work-video-poster&quot;,&quot;loc&quot;:{&quot;line&quot;:232,&quot;column&quot;:11}}"/>
        ) : image.src ? (
          <img src={image.src} alt={image.alt} loading="lazy" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)}  data-qoder-id="qel-img-c8525707" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-c8525707&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:234,&quot;column&quot;:11}}"/>
        ) : (
          <div className="work-placeholder" data-qoder-id="qel-work-placeholder-ace03ede" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-placeholder-ace03ede&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;work-placeholder&quot;,&quot;loc&quot;:{&quot;line&quot;:236,&quot;column&quot;:11}}"><span data-qoder-id="qel-span-b943852d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-b943852d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:236,&quot;column&quot;:45}}">{image.label}</span></div>
        )
      ) : image.video ? (
        /* Video element — autoplay, loop, muted, inline */
        <video
          className="work-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={image.poster || undefined}
          onLoadedData={() => setLoaded(true)}
         data-qoder-id="qel-work-video-1cf5b25a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-video-1cf5b25a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;work-video&quot;,&quot;loc&quot;:{&quot;line&quot;:240,&quot;column&quot;:9}}">
          <source src={image.video} type="video/mp4"  data-qoder-id="qel-source-541f2625" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-source-541f2625&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;source&quot;,&quot;loc&quot;:{&quot;line&quot;:250,&quot;column&quot;:11}}"/>
        </video>
      ) : image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={loaded ? 'loaded' : ''}
         data-qoder-id="qel-img-c1524c02" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-c1524c02&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:253,&quot;column&quot;:9}}"/>
      ) : (
        <div className="work-placeholder" data-qoder-id="qel-work-placeholder-a9e03a25" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-placeholder-a9e03a25&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;work-placeholder&quot;,&quot;loc&quot;:{&quot;line&quot;:261,&quot;column&quot;:9}}">
          <span data-qoder-id="qel-span-2a40a303" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-2a40a303&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkImage&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:262,&quot;column&quot;:11}}">{image.label}</span>
        </div>
      )}
    </div>
  )
}

/* ===== Lightbox ===== */
function Lightbox({ image, onClose, ...qoderProps }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  /* Auto-play video when lightbox opens */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className={["lightbox", qoderProps?.className].filter(Boolean).join(" ")} onClick={onClose} role="dialog" aria-label={image.video ? '视频查看' : '图片查看'} style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
      <button className="lightbox-close" onClick={onClose} aria-label="关闭" data-qoder-id="qel-button-8c098080" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-button-8c098080&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;button&quot;,&quot;loc&quot;:{&quot;line&quot;:288,&quot;column&quot;:7}}">✕</button>
      <div onClick={(e) => e.stopPropagation()} data-qoder-id="qel-div-32943ffb" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-32943ffb&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:289,&quot;column&quot;:7}}">
        {image.video ? (
          <video
            ref={videoRef}
            className="lightbox-video"
            controls
            autoPlay
            playsInline
            poster={image.poster || undefined}
           data-qoder-id="qel-lightbox-video-84b89e16" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-lightbox-video-84b89e16&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;lightbox-video&quot;,&quot;loc&quot;:{&quot;line&quot;:291,&quot;column&quot;:11}}">
            <source src={image.video} type="video/mp4"  data-qoder-id="qel-source-609ae133" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-source-609ae133&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;source&quot;,&quot;loc&quot;:{&quot;line&quot;:299,&quot;column&quot;:13}}"/>
          </video>
        ) : image.src ? (
          <img src={image.src} alt={image.alt}  data-qoder-id="qel-img-ac1243b4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-ac1243b4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:302,&quot;column&quot;:11}}"/>
        ) : (
          <div style={{
            width: '60vw', maxWidth: 600, aspectRatio: '16/10',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--seed-surface-muted)', borderRadius: 'var(--seed-radius)',
            color: 'var(--fg-muted)', fontSize: 16,
          }} data-qoder-id="qel-div-36944647" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-36944647&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Lightbox&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:304,&quot;column&quot;:11}}">
            {image.label} — 大图预览
          </div>
        )}
      </div>
    </div>
  )
}

/* ===== Single Work Card — image paired with description ===== */
function WorkCard({ work, index, ...qoderProps }) {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <article className={["work-card", qoderProps?.className].filter(Boolean).join(" ")} data-component="work-card" style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
      {/* Case number label */}
      <div className="work-case-label" data-qoder-id="qel-work-case-label-c37cd437" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-case-label-c37cd437&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-case-label&quot;,&quot;loc&quot;:{&quot;line&quot;:266,&quot;column&quot;:7}}">CASE {String(index + 1).padStart(2, '0')}</div>

      {/* Paired layout: images left, description right */}
      <div className="work-card-body" data-qoder-id="qel-work-card-body-da98de28" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-card-body-da98de28&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-card-body&quot;,&quot;loc&quot;:{&quot;line&quot;:269,&quot;column&quot;:7}}">
        {/* Image side */}
        <div className="work-card-gallery" data-qoder-id="qel-work-card-gallery-d2aeaf0b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-card-gallery-d2aeaf0b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-card-gallery&quot;,&quot;loc&quot;:{&quot;line&quot;:271,&quot;column&quot;:9}}">
          {work.images.map((img) => (
            <WorkImage key={img.id} image={img} onOpen={setLightboxImage}  data-qoder-id="qel-workimage-6f29ace4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-workimage-6f29ace4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;workimage&quot;,&quot;loc&quot;:{&quot;line&quot;:273,&quot;column&quot;:13}}"/>
          ))}
        </div>

        {/* Description side */}
        <div className="work-card-desc" data-qoder-id="qel-work-card-desc-957ea13a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-card-desc-957ea13a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-card-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:278,&quot;column&quot;:9}}">
          <div className="work-tag" data-qoder-id="qel-work-tag-9e9525ab" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-tag-9e9525ab&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-tag&quot;,&quot;loc&quot;:{&quot;line&quot;:279,&quot;column&quot;:11}}">{work.tag}</div>
          <h3 className="work-title" data-qoder-id="qel-work-title-67250c7a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-title-67250c7a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-title&quot;,&quot;loc&quot;:{&quot;line&quot;:280,&quot;column&quot;:11}}">{work.title}</h3>
          <p className="work-thought" data-qoder-id="qel-work-thought-cafdfdd5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-thought-cafdfdd5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-thought&quot;,&quot;loc&quot;:{&quot;line&quot;:281,&quot;column&quot;:11}}">{work.thought}</p>
          <div className="work-section" data-qoder-id="qel-work-section-d0a09d9b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-d0a09d9b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section&quot;,&quot;loc&quot;:{&quot;line&quot;:282,&quot;column&quot;:11}}">
            <span className="work-section-label" data-qoder-id="qel-work-section-label-a93b13c3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-label-a93b13c3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section-label&quot;,&quot;loc&quot;:{&quot;line&quot;:283,&quot;column&quot;:13}}">创作过程</span>
            <p className="work-process" data-qoder-id="qel-work-process-5d2aac55" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-process-5d2aac55&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-process&quot;,&quot;loc&quot;:{&quot;line&quot;:284,&quot;column&quot;:13}}">{work.process}</p>
          </div>
          <div className="work-section" data-qoder-id="qel-work-section-5ba83431" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-5ba83431&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section&quot;,&quot;loc&quot;:{&quot;line&quot;:286,&quot;column&quot;:11}}">
            <span className="work-section-label" data-qoder-id="qel-work-section-label-aa3b1556" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-label-aa3b1556&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section-label&quot;,&quot;loc&quot;:{&quot;line&quot;:287,&quot;column&quot;:13}}">重点维度</span>
            <p className="work-dimensions" data-qoder-id="qel-work-dimensions-bed6aed8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-dimensions-bed6aed8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-dimensions&quot;,&quot;loc&quot;:{&quot;line&quot;:288,&quot;column&quot;:13}}">{work.dimensions}</p>
          </div>
          <div className="work-section" data-qoder-id="qel-work-section-5ca835c4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-5ca835c4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section&quot;,&quot;loc&quot;:{&quot;line&quot;:290,&quot;column&quot;:11}}">
            <span className="work-section-label" data-qoder-id="qel-work-section-label-af3b1d35" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-section-label-af3b1d35&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-section-label&quot;,&quot;loc&quot;:{&quot;line&quot;:291,&quot;column&quot;:13}}">可优化方向</span>
            <p className="work-optimize" data-qoder-id="qel-work-optimize-d8e84f5f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-optimize-d8e84f5f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-optimize&quot;,&quot;loc&quot;:{&quot;line&quot;:292,&quot;column&quot;:13}}">{work.optimize}</p>
          </div>
          {work.link && work.link !== '#' && (
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-link" data-qoder-id="qel-work-link-9af13292" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-work-link-9af13292&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;work-link&quot;,&quot;loc&quot;:{&quot;line&quot;:295,&quot;column&quot;:13}}">
              参考链接 ↗
            </a>
          )}
        </div>
      </div>

      {/* Lightbox — portal to body to escape page-enter transform */}
      {lightboxImage && createPortal(
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)}  data-qoder-id="qel-lightbox-d85e8b55" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-lightbox-d85e8b55&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;WorkCard&quot;,&quot;elementRole&quot;:&quot;lightbox&quot;,&quot;loc&quot;:{&quot;line&quot;:364,&quot;column&quot;:9}}"/>,
        document.body
      )}
    </article>
  )
}


/* Flowchart Icons */
const FcIcons = {
  shot: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-5977da69" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-5977da69&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:409,&quot;column&quot;:9}}"><rect x="3" y="5" width="14" height="10" rx="2" data-qoder-id="qel-rect-2d9921d6" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-rect-2d9921d6&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;rect&quot;,&quot;loc&quot;:{&quot;line&quot;:409,&quot;column&quot;:108}}"/><circle cx="10" cy="10" r="3" data-qoder-id="qel-circle-3a4e4286" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-3a4e4286&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:409,&quot;column&quot;:157}}"/><circle cx="15" cy="7" r="0.8" fill="currentColor" data-qoder-id="qel-circle-3b4e4419" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-3b4e4419&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:409,&quot;column&quot;:188}}"/></svg>,
  clock: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-5d84aca8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-5d84aca8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:410,&quot;column&quot;:10}}"><circle cx="10" cy="10" r="7" data-qoder-id="qel-circle-394e40f3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-394e40f3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:410,&quot;column&quot;:109}}"/><path d="M10 6v4l3 2" data-qoder-id="qel-path-62db7dbc" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-62db7dbc&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:410,&quot;column&quot;:140}}"/></svg>,
  landscape: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-6484b7ad" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-6484b7ad&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:411,&quot;column&quot;:14}}"><path d="M2 16l5-8 4 5 3-4 4 7z" data-qoder-id="qel-path-64db80e2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-64db80e2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:411,&quot;column&quot;:113}}"/><circle cx="14" cy="6" r="2" data-qoder-id="qel-circle-3d4e473f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-3d4e473f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:411,&quot;column&quot;:147}}"/></svg>,
  angle: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-5784a336" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-5784a336&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:412,&quot;column&quot;:10}}"><path d="M4 16L10 4l6 12" data-qoder-id="qel-path-67db859b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-67db859b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:412,&quot;column&quot;:109}}"/><path d="M6.5 11h7" data-qoder-id="qel-path-64ddbf79" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-64ddbf79&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:412,&quot;column&quot;:136}}"/></svg>,
  lens: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-6486f644" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-6486f644&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:413,&quot;column&quot;:9}}"><circle cx="10" cy="10" r="7" data-qoder-id="qel-circle-42508db5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-42508db5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:413,&quot;column&quot;:108}}"/><circle cx="10" cy="10" r="3" data-qoder-id="qel-circle-41508c22" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-41508c22&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:413,&quot;column&quot;:139}}"/><circle cx="10" cy="10" r="1" data-qoder-id="qel-circle-3c508443" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-3c508443&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:413,&quot;column&quot;:170}}"/></svg>,
  move: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-6086eff8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-6086eff8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:414,&quot;column&quot;:9}}"><path d="M4 10h12M12 6l4 4-4 4" data-qoder-id="qel-path-66ddc29f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-66ddc29f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:414,&quot;column&quot;:108}}"/><path d="M2 7v6" opacity="0.5" data-qoder-id="qel-path-65ddc10c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-65ddc10c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:414,&quot;column&quot;:141}}"/></svg>,
  speed: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-5d86eb3f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-5d86eb3f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:415,&quot;column&quot;:10}}"><path d="M3 14a7 7 0 0114 0" data-qoder-id="qel-path-6bddca7e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-6bddca7e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:415,&quot;column&quot;:109}}"/><path d="M10 14l3-5" data-qoder-id="qel-path-eae0d102" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-eae0d102&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:415,&quot;column&quot;:139}}"/><circle cx="10" cy="14" r="1.5" fill="currentColor" data-qoder-id="qel-circle-cf491ce7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cf491ce7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:415,&quot;column&quot;:161}}"/></svg>,
  person: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-d57f5962" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-d57f5962&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:416,&quot;column&quot;:11}}"><circle cx="10" cy="6" r="3" data-qoder-id="qel-circle-d149200d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-d149200d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:416,&quot;column&quot;:110}}"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" data-qoder-id="qel-path-e6e0cab6" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-e6e0cab6&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:416,&quot;column&quot;:140}}"/></svg>,
  action: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-d07f5183" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-d07f5183&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:417,&quot;column&quot;:11}}"><circle cx="8" cy="5" r="2.5" data-qoder-id="qel-circle-cc49182e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cc49182e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:417,&quot;column&quot;:110}}"/><path d="M5 18l3-7 3 3 4-6" data-qoder-id="qel-path-e5e0c923" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-e5e0c923&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:417,&quot;column&quot;:141}}"/><path d="M8 11l-2 2" data-qoder-id="qel-path-f2e0dd9a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-f2e0dd9a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:417,&quot;column&quot;:170}}"/></svg>,
  tree: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-dc7f6467" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-dc7f6467&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:418,&quot;column&quot;:9}}"><path d="M10 2l-5 7h3l-4 6h12l-4-6h3z" data-qoder-id="qel-path-f0e3190b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-f0e3190b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:418,&quot;column&quot;:108}}"/><path d="M10 15v3" data-qoder-id="qel-path-efe31778" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-efe31778&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:418,&quot;column&quot;:148}}"/></svg>,
  sun: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-d7819b1f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-d7819b1f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:419,&quot;column&quot;:8}}"><circle cx="10" cy="10" r="4" data-qoder-id="qel-circle-d14b5ea4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-d14b5ea4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:419,&quot;column&quot;:107}}"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.9 4.9l1.4 1.4M13.7 13.7l1.4 1.4M4.9 15.1l1.4-1.4M13.7 6.3l1.4-1.4" data-qoder-id="qel-path-f4e31f57" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-f4e31f57&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:419,&quot;column&quot;:138}}"/></svg>,
  palette: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-d4819666" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-d4819666&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:12}}"><path d="M10 2a8 8 0 100 16c1 0 1.5-.5 1.5-1.2 0-.3-.1-.6-.3-.8-.2-.2-.3-.5-.3-.8 0-.7.5-1.2 1.2-1.2H14a4 4 0 004-4c0-4.4-3.6-8-8-8z" data-qoder-id="qel-path-f6e3227d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-f6e3227d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:111}}"/><circle cx="7" cy="8" r="1" fill="currentColor" data-qoder-id="qel-circle-cd4b5858" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cd4b5858&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:246}}"/><circle cx="11" cy="6" r="1" fill="currentColor" data-qoder-id="qel-circle-cc4b56c5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cc4b56c5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:295}}"/><circle cx="14" cy="9" r="1" fill="currentColor" data-qoder-id="qel-circle-cb4b5532" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cb4b5532&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:345}}"/></svg>,
  sparkle: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-57668e22" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-57668e22&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:421,&quot;column&quot;:12}}"><path d="M10 2l1.5 5.5L17 9l-5.5 1.5L10 16l-1.5-5.5L3 9l5.5-1.5z" data-qoder-id="qel-path-67f99aaf" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-67f99aaf&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:421,&quot;column&quot;:111}}"/></svg>,
  layers: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-55668afc" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-55668afc&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:422,&quot;column&quot;:11}}"><path d="M2 10l8 4 8-4" data-qoder-id="qel-path-69f99dd5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-69f99dd5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:422,&quot;column&quot;:110}}"/><path d="M2 14l8 4 8-4" opacity="0.5" data-qoder-id="qel-path-62f992d0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-62f992d0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:422,&quot;column&quot;:135}}"/><path d="M10 2L2 6l8 4 8-4z" data-qoder-id="qel-path-63f99463" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-63f99463&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:422,&quot;column&quot;:174}}"/></svg>,
  mood: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-516684b0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-516684b0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:423,&quot;column&quot;:9}}"><circle cx="10" cy="10" r="7" data-qoder-id="qel-circle-cd58244b" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cd58244b&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:423,&quot;column&quot;:108}}"/><circle cx="7.5" cy="8.5" r="0.8" fill="currentColor" data-qoder-id="qel-circle-ca581f92" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-ca581f92&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:423,&quot;column&quot;:139}}"/><circle cx="12.5" cy="8.5" r="0.8" fill="currentColor" data-qoder-id="qel-circle-cb582125" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-cb582125&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:423,&quot;column&quot;:194}}"/><path d="M7 12.5c.8 1.2 1.8 1.8 3 1.8s2.2-.6 3-1.8" data-qoder-id="qel-path-6cfbe125" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-6cfbe125&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:423,&quot;column&quot;:250}}"/></svg>,
  hd: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" data-qoder-id="qel-svg-5c68d498" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-5c68d498&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:424,&quot;column&quot;:7}}"><rect x="2" y="5" width="16" height="10" rx="2" data-qoder-id="qel-rect-348a2251" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-rect-348a2251&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;rect&quot;,&quot;loc&quot;:{&quot;line&quot;:424,&quot;column&quot;:106}}"/><path d="M6 8v4M6 10h2.5M8.5 8v4" data-qoder-id="qel-path-69fbdc6c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-69fbdc6c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:424,&quot;column&quot;:155}}"/><path d="M11.5 8v4c1.5 0 3-.8 3-2s-1.5-2-3-2z" data-qoder-id="qel-path-68fbdad9" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-68fbdad9&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:424,&quot;column&quot;:190}}"/></svg>,
  star: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-6068dae4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-6068dae4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:425,&quot;column&quot;:9}}"><path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.3l-4.8 2.6.9-5.4L2.2 7.7l5.4-.8z" data-qoder-id="qel-path-66fbd7b3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-66fbd7b3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:425,&quot;column&quot;:108}}"/></svg>,
  sfx: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-6268de0a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-6268de0a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:426,&quot;column&quot;:8}}"><path d="M3 8v4h3l4 4V4L6 8z" data-qoder-id="qel-path-74fbedbd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-74fbedbd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:426,&quot;column&quot;:107}}"/><path d="M14 7c1 1 1.5 2 1.5 3s-.5 2-1.5 3" opacity="0.6" data-qoder-id="qel-path-73fbec2a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-73fbec2a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:426,&quot;column&quot;:138}}"/><path d="M15.5 5c1.5 1.5 2.5 3.2 2.5 5s-1 3.5-2.5 5" opacity="0.3" data-qoder-id="qel-path-4daf51d7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-4daf51d7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:426,&quot;column&quot;:197}}"/></svg>,
  music: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-7ddd0d26" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-7ddd0d26&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:427,&quot;column&quot;:10}}"><path d="M8 16V5l8-2v11" data-qoder-id="qel-path-4faf54fd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-4faf54fd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:427,&quot;column&quot;:109}}"/><circle cx="6" cy="16" r="2.5" data-qoder-id="qel-circle-bf7ee5e8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-bf7ee5e8&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:427,&quot;column&quot;:135}}"/><circle cx="14" cy="14" r="2.5" data-qoder-id="qel-circle-c67ef0ed" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-c67ef0ed&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:427,&quot;column&quot;:167}}"/></svg>,
  transition: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-81dd1372" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-81dd1372&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:428,&quot;column&quot;:15}}"><path d="M4 7h10l-3-3" data-qoder-id="qel-path-4baf4eb1" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-4baf4eb1&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:428,&quot;column&quot;:114}}"/><path d="M16 13H6l3 3" data-qoder-id="qel-path-4aaf4d1e" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-4aaf4d1e&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:428,&quot;column&quot;:138}}"/></svg>,
  rhythm: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-86dd1b51" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-86dd1b51&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:429,&quot;column&quot;:11}}"><circle cx="10" cy="10" r="7" data-qoder-id="qel-circle-b97edc76" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-circle-b97edc76&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;circle&quot;,&quot;loc&quot;:{&quot;line&quot;:429,&quot;column&quot;:110}}"/><path d="M10 5v5l3.5 2" data-qoder-id="qel-path-47ad09ce" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-47ad09ce&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:429,&quot;column&quot;:141}}"/><path d="M6 3l1 1M14 3l-1 1" opacity="0.5" data-qoder-id="qel-path-48ad0b61" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-48ad0b61&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:429,&quot;column&quot;:166}}"/></svg>,
  chain: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-qoder-id="qel-svg-7adac9d6" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-svg-7adac9d6&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;svg&quot;,&quot;loc&quot;:{&quot;line&quot;:430,&quot;column&quot;:10}}"><rect x="2" y="7" width="7" height="6" rx="3" data-qoder-id="qel-rect-ff40b669" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-rect-ff40b669&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;rect&quot;,&quot;loc&quot;:{&quot;line&quot;:430,&quot;column&quot;:109}}"/><rect x="11" y="7" width="7" height="6" rx="3" data-qoder-id="qel-rect-0040b7fc" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-rect-0040b7fc&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;rect&quot;,&quot;loc&quot;:{&quot;line&quot;:430,&quot;column&quot;:156}}"/><path d="M9 10h2" data-qoder-id="qel-path-4cad11ad" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-path-4cad11ad&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;path&quot;,&quot;loc&quot;:{&quot;line&quot;:430,&quot;column&quot;:204}}"/></svg>,
}

/* ===== Video Process Layout (t2v) ===== */
function VideoProcessLayout({ project }) {
  const [lightboxImage, setLightboxImage] = useState(null)
  const openLb = (data) => setLightboxImage(data)

  return (
    <>
      {/* 文生视频顶部标题说明区 */}
      <section className="project-top-intro video-top-intro">
        <div className="project-top-eyebrow">TEXT TO VIDEO</div>
        <h1 className="project-top-title">文生视频</h1>
        <p className="project-top-desc">
          通过文本提示词驱动画面生成，将角色设定、场景构建、镜头语言与时间叙事整合为连续影像，
          提升 AI 视频生成的可控性与表现力。
        </p>
      </section>

      {/* Hero */}
      <section className="pm-hero" data-qoder-id="qel-pm-hero-c31781b6" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-hero-c31781b6&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-hero&quot;,&quot;loc&quot;:{&quot;line&quot;:374,&quot;column&quot;:7}}">
        <div className="pm-hero-copy" data-qoder-id="qel-pm-hero-copy-bccc65a5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-hero-copy-bccc65a5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-hero-copy&quot;,&quot;loc&quot;:{&quot;line&quot;:375,&quot;column&quot;:9}}">
          <div className="pm-eyebrow" data-qoder-id="qel-pm-eyebrow-b4933b96" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-eyebrow-b4933b96&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-eyebrow&quot;,&quot;loc&quot;:{&quot;line&quot;:376,&quot;column&quot;:11}}">AI · 文生视频 · 创作无界</div>
          <h1 className="pm-h1" data-qoder-id="qel-pm-h1-24a09237" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-h1-24a09237&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-h1&quot;,&quot;loc&quot;:{&quot;line&quot;:377,&quot;column&quot;:11}}">
            从文字到影像，<br  data-qoder-id="qel-br-8e6d9184" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-br-8e6d9184&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;br&quot;,&quot;loc&quot;:{&quot;line&quot;:378,&quot;column&quot;:20}}"/>
            <span className="pm-h1-accent" data-qoder-id="qel-pm-h1-accent-1e15cc45" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-h1-accent-1e15cc45&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-h1-accent&quot;,&quot;loc&quot;:{&quot;line&quot;:379,&quot;column&quot;:13}}">构建你的未来视频世界</span>
          </h1>
          <p className="pm-hero-desc" data-qoder-id="qel-pm-hero-desc-8e6ec976" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-hero-desc-8e6ec976&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-hero-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:381,&quot;column&quot;:11}}">{project.heroSubtitle}</p>
          <div className="pm-icon-row" data-qoder-id="qel-pm-icon-row-1f8e56be" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-icon-row-1f8e56be&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-icon-row&quot;,&quot;loc&quot;:{&quot;line&quot;:382,&quot;column&quot;:11}}">
            {project.capabilities.map((c, i) => <span key={i} data-qoder-id="qel-span-86603030" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-span-86603030&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;span&quot;,&quot;loc&quot;:{&quot;line&quot;:383,&quot;column&quot;:49}}"><i className="pm-dot" data-qoder-id="qel-pm-dot-5e7b2f63" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-dot-5e7b2f63&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-dot&quot;,&quot;loc&quot;:{&quot;line&quot;:383,&quot;column&quot;:63}}"></i>{c.title}</span>)}
          </div>
        </div>
        <div
          className="pm-hero-visual"
          onClick={() => openLb({ video: project.video, poster: project.poster })}
          role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && openLb({ video: project.video, poster: project.poster })}
         data-qoder-id="qel-pm-hero-visual-f573d72a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-hero-visual-f573d72a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-hero-visual&quot;,&quot;loc&quot;:{&quot;line&quot;:386,&quot;column&quot;:9}}">
          <video autoPlay loop muted playsInline preload="metadata" poster={project.poster} data-qoder-id="qel-video-2bd7f975" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-video-2bd7f975&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;video&quot;,&quot;loc&quot;:{&quot;line&quot;:392,&quot;column&quot;:11}}">
            <source src={project.video} type="video/mp4"  data-qoder-id="qel-source-fbeffb51" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-source-fbeffb51&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;source&quot;,&quot;loc&quot;:{&quot;line&quot;:393,&quot;column&quot;:13}}"/>
          </video>
          <div className="pm-play" data-qoder-id="qel-pm-play-278b94c9" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-play-278b94c9&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-play&quot;,&quot;loc&quot;:{&quot;line&quot;:395,&quot;column&quot;:11}}"></div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="pm-features" data-qoder-id="qel-pm-features-885e3dd4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-features-885e3dd4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-features&quot;,&quot;loc&quot;:{&quot;line&quot;:405,&quot;column&quot;:7}}">
        {project.modules.map((mod) => (
          <button key={mod.id} className="pm-feature" onClick={() => {
            const el = document.getElementById('pm-' + mod.id)
            if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: 'smooth' }) }
          }} data-qoder-id="qel-pm-feature-822b9051" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-feature-822b9051&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-feature&quot;,&quot;loc&quot;:{&quot;line&quot;:407,&quot;column&quot;:11}}">
            <span className="pm-feature-title" data-qoder-id="qel-pm-feature-title-cba47bc9" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-feature-title-cba47bc9&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-feature-title&quot;,&quot;loc&quot;:{&quot;line&quot;:411,&quot;column&quot;:13}}">{mod.title}</span>
            <span className="pm-feature-desc" data-qoder-id="qel-pm-feature-desc-3c1a3f1d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-feature-desc-3c1a3f1d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-feature-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:412,&quot;column&quot;:13}}">{mod.desc}</span>
            <span className="pm-arrow" data-qoder-id="qel-pm-arrow-a2360707" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-arrow-a2360707&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-arrow&quot;,&quot;loc&quot;:{&quot;line&quot;:413,&quot;column&quot;:13}}">→</span>
          </button>
        ))}
      </section>

      {/* Character */}
      <section id="pm-character" className="pm-panel" data-qoder-id="qel-pm-character-baefd375" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-character-baefd375&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-character&quot;,&quot;loc&quot;:{&quot;line&quot;:419,&quot;column&quot;:7}}">
        <aside className="pm-side" data-qoder-id="qel-pm-side-e7ccb8f3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-e7ccb8f3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side&quot;,&quot;loc&quot;:{&quot;line&quot;:420,&quot;column&quot;:9}}">
          <h2 className="pm-side-title" data-qoder-id="qel-pm-side-title-830db7a7" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-title-830db7a7&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side-title&quot;,&quot;loc&quot;:{&quot;line&quot;:421,&quot;column&quot;:11}}">{project.character.title}</h2>
          <div className="pm-char-section" data-qoder-id="qel-pm-char-section-6e3001e0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-section-6e3001e0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-section&quot;,&quot;loc&quot;:{&quot;line&quot;:438,&quot;column&quot;:11}}">
            <h3 className="pm-char-subtitle" data-qoder-id="qel-pm-char-subtitle-3d53e440" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-subtitle-3d53e440&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-subtitle&quot;,&quot;loc&quot;:{&quot;line&quot;:439,&quot;column&quot;:13}}">角色信息</h3>
            <dl className="pm-char-info" data-qoder-id="qel-pm-char-info-43b011e0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-info-43b011e0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-info&quot;,&quot;loc&quot;:{&quot;line&quot;:440,&quot;column&quot;:13}}">
              {project.character.info.map(([k, v], i) => (
                <div key={i} className="pm-char-row" data-qoder-id="qel-pm-char-row-f486747c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-row-f486747c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-row&quot;,&quot;loc&quot;:{&quot;line&quot;:442,&quot;column&quot;:17}}">
                  <dt data-qoder-id="qel-dt-f3c56a35" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-dt-f3c56a35&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;dt&quot;,&quot;loc&quot;:{&quot;line&quot;:443,&quot;column&quot;:19}}">{k}</dt>
                  <dd data-qoder-id="qel-dd-3f195042" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-dd-3f195042&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;dd&quot;,&quot;loc&quot;:{&quot;line&quot;:444,&quot;column&quot;:19}}">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="pm-char-section" data-qoder-id="qel-pm-char-section-74300b52" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-section-74300b52&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-section&quot;,&quot;loc&quot;:{&quot;line&quot;:449,&quot;column&quot;:11}}">
            <h3 className="pm-char-subtitle" data-qoder-id="qel-pm-char-subtitle-4353edb2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-char-subtitle-4353edb2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-char-subtitle&quot;,&quot;loc&quot;:{&quot;line&quot;:450,&quot;column&quot;:13}}">设计要点</h3>
            <ul className="pm-bullets" data-qoder-id="qel-pm-bullets-8df3b879" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-bullets-8df3b879&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-bullets&quot;,&quot;loc&quot;:{&quot;line&quot;:451,&quot;column&quot;:13}}">
              {project.character.highlights.map((h, i) => <li key={i} data-qoder-id="qel-li-6b10f5ac" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-li-6b10f5ac&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;li&quot;,&quot;loc&quot;:{&quot;line&quot;:452,&quot;column&quot;:59}}">{h}</li>)}
            </ul>
          </div>
        </aside>
        <div
          className="pm-img-block"
          onClick={() => openLb({ src: project.character.image, alt: project.character.alt })}
          role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && openLb({ src: project.character.image, alt: project.character.alt })}
         data-qoder-id="qel-pm-img-block-b4ae17f3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-img-block-b4ae17f3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-img-block&quot;,&quot;loc&quot;:{&quot;line&quot;:426,&quot;column&quot;:9}}">
          <img src={project.character.image} alt={project.character.alt} loading="lazy"  data-qoder-id="qel-img-91316e9c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-91316e9c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:432,&quot;column&quot;:11}}"/>
          <div className="pm-img-hint" data-qoder-id="qel-pm-img-hint-8d902763" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-img-hint-8d902763&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-img-hint&quot;,&quot;loc&quot;:{&quot;line&quot;:433,&quot;column&quot;:11}}">点击查看大图</div>
        </div>
      </section>

      {/* Scenes */}
      <section id="pm-scene" className="pm-panel pm-panel-reverse" data-qoder-id="qel-pm-scene-deb34403" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-scene-deb34403&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-scene&quot;,&quot;loc&quot;:{&quot;line&quot;:438,&quot;column&quot;:7}}">
        <aside className="pm-side" data-qoder-id="qel-pm-side-e3ca7410" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-e3ca7410&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side&quot;,&quot;loc&quot;:{&quot;line&quot;:439,&quot;column&quot;:9}}">
          <h2 className="pm-side-title" data-qoder-id="qel-pm-side-title-790fe680" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-title-790fe680&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side-title&quot;,&quot;loc&quot;:{&quot;line&quot;:440,&quot;column&quot;:11}}">{project.scenes.title}</h2>
          <p className="pm-side-desc" data-qoder-id="qel-pm-side-desc-fa129c66" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-desc-fa129c66&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:441,&quot;column&quot;:11}}">{project.scenes.subtitle}</p>
          <div className="pm-tag-list" data-qoder-id="qel-pm-tag-list-83dd7650" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-tag-list-83dd7650&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-tag-list&quot;,&quot;loc&quot;:{&quot;line&quot;:442,&quot;column&quot;:11}}">
            {project.scenes.items.map((s, i) => <div key={i} data-qoder-id="qel-div-dcdc5ed2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-dcdc5ed2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:443,&quot;column&quot;:49}}"><i data-qoder-id="qel-i-e90cfe91" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-i-e90cfe91&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;i&quot;,&quot;loc&quot;:{&quot;line&quot;:443,&quot;column&quot;:62}}"></i>{s.title}</div>)}
          </div>
        </aside>
        <div className="pm-scenes-grid" data-qoder-id="qel-pm-scenes-grid-9662f21d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-scenes-grid-9662f21d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-scenes-grid&quot;,&quot;loc&quot;:{&quot;line&quot;:446,&quot;column&quot;:9}}">
          {project.scenes.items.map((s, i) => (
            <div
              key={i}
              className={"pm-scene-card" + (i === 2 ? " pm-scene-wide" : "")}
              onClick={() => openLb({ src: s.image, alt: s.title })}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLb({ src: s.image, alt: s.title })}
             data-qoder-id="qel-div-dbdc5d3f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-dbdc5d3f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:448,&quot;column&quot;:13}}">
              <img src={s.image} alt={s.title} loading="lazy"  data-qoder-id="qel-img-8e159366" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-8e159366&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:455,&quot;column&quot;:15}}"/>
              <div className="pm-scene-label" data-qoder-id="qel-pm-scene-label-9f79c50d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-scene-label-9f79c50d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-scene-label&quot;,&quot;loc&quot;:{&quot;line&quot;:456,&quot;column&quot;:15}}">{s.title}</div>
              <div className="pm-img-hint" data-qoder-id="qel-pm-img-hint-9d927f2a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-img-hint-9d927f2a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-img-hint&quot;,&quot;loc&quot;:{&quot;line&quot;:457,&quot;column&quot;:15}}">点击查看大图</div>
            </div>
          ))}
        </div>
      </section>
      {/* Workflow / Script */}
      <section id="pm-script" className="pm-panel" data-qoder-id="qel-pm-script-263584c3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-script-263584c3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-script&quot;,&quot;loc&quot;:{&quot;line&quot;:458,&quot;column&quot;:7}}">
        <aside className="pm-side" data-qoder-id="qel-pm-side-65e58433" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-65e58433&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side&quot;,&quot;loc&quot;:{&quot;line&quot;:459,&quot;column&quot;:9}}">
          <h2 className="pm-side-title" data-qoder-id="qel-pm-side-title-f8f4d983" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-title-f8f4d983&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side-title&quot;,&quot;loc&quot;:{&quot;line&quot;:460,&quot;column&quot;:11}}">{project.script.title}</h2>
          <p className="pm-side-desc" data-qoder-id="qel-pm-side-desc-7bf31561" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-side-desc-7bf31561&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-side-desc&quot;,&quot;loc&quot;:{&quot;line&quot;:461,&quot;column&quot;:11}}">结构化五大模块，覆盖从镜头设计、画面内容、视听风格到后期衔接的完整流程。</p>
          <div className="pm-script-frames" data-qoder-id="qel-pm-script-frames-3ee2d8ea" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-script-frames-3ee2d8ea&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-script-frames&quot;,&quot;loc&quot;:{&quot;line&quot;:519,&quot;column&quot;:9}}">
          {[0, 6, 10, 13].map((idx) => {
            const f = project.script.frames[idx]
            return (
              <div
                key={f.num}
                className="pm-frame-card"
                onClick={() => openLb({ src: f.image, alt: f.title })}
                role="button" tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLb({ src: f.image, alt: f.title })}
               data-qoder-id="qel-pm-frame-card-32975ef5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-frame-card-32975ef5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-frame-card&quot;,&quot;loc&quot;:{&quot;line&quot;:523,&quot;column&quot;:15}}">
                <div className="pm-frame-num" data-qoder-id="qel-pm-frame-num-ff091118" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-pm-frame-num-ff091118&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;pm-frame-num&quot;,&quot;loc&quot;:{&quot;line&quot;:530,&quot;column&quot;:17}}">{f.num}</div>
                <img src={f.image} alt={f.title} loading="lazy"  data-qoder-id="qel-img-d16cdb1c" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-img-d16cdb1c&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;img&quot;,&quot;loc&quot;:{&quot;line&quot;:531,&quot;column&quot;:17}}"/>
              </div>
            )
          })}
        </div>
        </aside>
        <div className="fc-container" data-qoder-id="qel-fc-container-8b391070" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-container-8b391070&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-container&quot;,&quot;loc&quot;:{&quot;line&quot;:539,&quot;column&quot;:9}}">
          <div className="fc-title" data-qoder-id="qel-fc-title-d6f59fd4" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-title-d6f59fd4&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-title&quot;,&quot;loc&quot;:{&quot;line&quot;:540,&quot;column&quot;:11}}">一个完整视频脚本的构成</div>
          {project.script.flow.map((stage, si) => (
            <div key={si} className="fc-stage" style={{ '--stage-color': stage.color }} data-qoder-id="qel-fc-stage-a59c08bb" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-stage-a59c08bb&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-stage&quot;,&quot;loc&quot;:{&quot;line&quot;:542,&quot;column&quot;:13}}">
              <div className="fc-stage-head" data-qoder-id="qel-fc-stage-head-6c67d765" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-stage-head-6c67d765&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-stage-head&quot;,&quot;loc&quot;:{&quot;line&quot;:543,&quot;column&quot;:15}}">
                <span className="fc-stage-num" data-qoder-id="qel-fc-stage-num-5ab08431" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-stage-num-5ab08431&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-stage-num&quot;,&quot;loc&quot;:{&quot;line&quot;:544,&quot;column&quot;:17}}">{stage.num}</span>
                <span className="fc-stage-title" data-qoder-id="qel-fc-stage-title-c10446b2" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-stage-title-c10446b2&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-stage-title&quot;,&quot;loc&quot;:{&quot;line&quot;:545,&quot;column&quot;:17}}">{stage.title}</span>
              </div>
              <div className="fc-items" data-qoder-id="qel-fc-items-71bd6c85" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-items-71bd6c85&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-items&quot;,&quot;loc&quot;:{&quot;line&quot;:547,&quot;column&quot;:15}}">
                {stage.items.map((item, ii) => (
                  <span key={ii} className="fc-item" data-qoder-id="qel-fc-item-60b5defd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-item-60b5defd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-item&quot;,&quot;loc&quot;:{&quot;line&quot;:549,&quot;column&quot;:19}}"><span className="fc-icon" data-qoder-id="qel-fc-icon-defc44f9" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-icon-defc44f9&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-icon&quot;,&quot;loc&quot;:{&quot;line&quot;:576,&quot;column&quot;:404}}">{FcIcons[item[1]]}</span>{item[0]}</span>
                ))}
              </div>
              {si < project.script.flow.length - 1 && <div className="fc-arrow" data-qoder-id="qel-fc-arrow-90f22dfd" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-arrow-90f22dfd&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-arrow&quot;,&quot;loc&quot;:{&quot;line&quot;:552,&quot;column&quot;:55}}"></div>}
            </div>
          ))}
          <div className="fc-template" data-qoder-id="qel-fc-template-fb9e925d" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-template-fb9e925d&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-template&quot;,&quot;loc&quot;:{&quot;line&quot;:555,&quot;column&quot;:11}}">
            <div className="fc-template-label" data-qoder-id="qel-fc-template-label-f6a1a7c5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-template-label-f6a1a7c5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-template-label&quot;,&quot;loc&quot;:{&quot;line&quot;:556,&quot;column&quot;:13}}">推荐输出模板</div>
            <div className="fc-template-flow" data-qoder-id="qel-fc-template-flow-c5be8d5a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-template-flow-c5be8d5a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-template-flow&quot;,&quot;loc&quot;:{&quot;line&quot;:557,&quot;column&quot;:13}}">
              {project.script.template.map((t, i) => (
                <span key={i} className="fc-template-item" data-qoder-id="qel-fc-template-item-7cd85717" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-fc-template-item-7cd85717&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;fc-template-item&quot;,&quot;loc&quot;:{&quot;line&quot;:559,&quot;column&quot;:17}}">
                  {t}{i < project.script.template.length - 1 ? ' → ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && createPortal(
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)}  data-qoder-id="qel-lightbox-e3d423bf" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-lightbox-e3d423bf&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;VideoProcessLayout&quot;,&quot;elementRole&quot;:&quot;lightbox&quot;,&quot;loc&quot;:{&quot;line&quot;:515,&quot;column&quot;:9}}"/>,
        document.body
      )}
    </>
  )
}

/* ===== Main Page ===== */
export default function ProjectDetailPage(qoderProps) {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) {
    return (
      <div className={["detail-page page-enter", qoderProps?.className].filter(Boolean).join(" ")} data-component="detail-page" style={qoderProps?.style} data-qoder-id={qoderProps?.["data-qoder-id"]} data-qoder-source={qoderProps?.["data-qoder-source"]}>
        <div className="detail-header" data-qoder-id="qel-detail-header-49ba280f" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-header-49ba280f&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-header&quot;,&quot;loc&quot;:{&quot;line&quot;:318,&quot;column&quot;:9}}">
          <h1 className="detail-title" data-qoder-id="qel-detail-title-a1c0fc65" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-title-a1c0fc65&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-title&quot;,&quot;loc&quot;:{&quot;line&quot;:319,&quot;column&quot;:11}}">页面未找到</h1>
          <p className="detail-intro" data-qoder-id="qel-detail-intro-4b3569bf" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-intro-4b3569bf&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-intro&quot;,&quot;loc&quot;:{&quot;line&quot;:320,&quot;column&quot;:11}}">请返回首页查看可用项目。</p>
        </div>
        <div className="back-container" data-qoder-id="qel-back-container-ddfd37a0" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-back-container-ddfd37a0&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;back-container&quot;,&quot;loc&quot;:{&quot;line&quot;:322,&quot;column&quot;:9}}">
          <Link to="/" className="detail-back" data-qoder-id="qel-detail-back-29225302" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-back-29225302&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-back&quot;,&quot;loc&quot;:{&quot;line&quot;:323,&quot;column&quot;:11}}">← 返回首页</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="detail-page page-enter" data-component="detail-page" data-qoder-id="qel-detail-page-02cab4d5" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-page-02cab4d5&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-page&quot;,&quot;loc&quot;:{&quot;line&quot;:505,&quot;column&quot;:5}}">
      {project.layout !== 'video-process' && (
        <header className="detail-header" data-qoder-id="qel-detail-header-3ce2fa13" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-header-3ce2fa13&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-header&quot;,&quot;loc&quot;:{&quot;line&quot;:544,&quot;column&quot;:9}}">
          <div className="detail-label" data-qoder-id="qel-detail-label-e401a419" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-label-e401a419&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-label&quot;,&quot;loc&quot;:{&quot;line&quot;:545,&quot;column&quot;:11}}">{project.nameEn}</div>
          <h1 className="detail-title" data-qoder-id="qel-detail-title-1ea697bc" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-title-1ea697bc&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-title&quot;,&quot;loc&quot;:{&quot;line&quot;:546,&quot;column&quot;:11}}">{project.nameZh}</h1>
          <p className="detail-intro" data-qoder-id="qel-detail-intro-83b0c696" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-intro-83b0c696&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-intro&quot;,&quot;loc&quot;:{&quot;line&quot;:547,&quot;column&quot;:11}}">{project.intro}</p>
        </header>
      )}

      {project.layout === 'video-process' ? (
        <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 24px' }} data-qoder-id="qel-div-b8b0ca75" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-b8b0ca75&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:552,&quot;column&quot;:9}}">
          <VideoProcessLayout project={project}  data-qoder-id="qel-videoprocesslayout-d2a3be28" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-videoprocesslayout-d2a3be28&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;videoprocesslayout&quot;,&quot;loc&quot;:{&quot;line&quot;:553,&quot;column&quot;:11}}"/>
        </div>
      ) : project.id === 't2i' ? (
        <T2iPage />
      ) : project.id === 'vqa' ? (
        <VQAPage />
      ) : project.id === 'caption' ? (
        <VisionDescPage />
      ) : (
        <div className="works-list" data-qoder-id="qel-works-list-5cf1a345" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-works-list-5cf1a345&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;works-list&quot;,&quot;loc&quot;:{&quot;line&quot;:518,&quot;column&quot;:9}}">
          {project.works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i}  data-qoder-id="qel-workcard-b1d0d98a" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-workcard-b1d0d98a&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;workcard&quot;,&quot;loc&quot;:{&quot;line&quot;:520,&quot;column&quot;:13}}"/>
          ))}
        </div>
      )}

      {/* Back button */}
      <div className="back-container" data-qoder-id="qel-back-container-dff06ed3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-back-container-dff06ed3&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;back-container&quot;,&quot;loc&quot;:{&quot;line&quot;:526,&quot;column&quot;:7}}">
        <Link to="/" className="detail-back" data-qoder-id="qel-detail-back-39383281" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-detail-back-39383281&quot;,&quot;filePath&quot;:&quot;react-vite/src/pages/ProjectDetailPage.jsx&quot;,&quot;componentName&quot;:&quot;ProjectDetailPage&quot;,&quot;elementRole&quot;:&quot;detail-back&quot;,&quot;loc&quot;:{&quot;line&quot;:527,&quot;column&quot;:9}}">← 返回首页</Link>
      </div>
    </div>
  )
}
