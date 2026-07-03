export default function T2iPage() {
  return (
    <div className="t2i-page">
      {/* Hero 主视觉 */}
      <section className="t2i-hero-card">
        <img
          className="t2i-hero-img"
          src="/images/t2i-dragon.png"
          alt="东方幻想龙文生图案例"
        />
        <div className="t2i-hero-mask"></div>
        <div className="t2i-hero-content">
          <div className="t2i-hero-label">PROMPT TO VISUAL</div>
          <h2>让提示词，变成高质量图像</h2>
          <p>
            掌握提示词结构、镜头构图与生成流程，将抽象想法转化为稳定可控的视觉作品。
          </p>
          <div className="t2i-tags">
            <div className="t2i-tag">
              <span className="tag-icon">✦</span>
              <div>
                <strong>Prompt Driven</strong>
                <em>精准表达想象</em>
              </div>
            </div>
            <div className="t2i-tag">
              <span className="tag-icon">◎</span>
              <div>
                <strong>Style Control</strong>
                <em>风格自由掌控</em>
              </div>
            </div>
            <div className="t2i-tag">
              <span className="tag-icon">◈</span>
              <div>
                <strong>Cinematic Output</strong>
                <em>电影级画面输出</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 案例演示标题 */}
      <section className="t2i-section-heading">
        <div className="heading-line"></div>
        <div>
          <h2>案例演示</h2>
          <p>从提示词到图像的完整实践</p>
        </div>
        <div className="heading-line"></div>
      </section>

      {/* 案例演示区 */}
      <section className="t2i-case-grid">
        <article className="t2i-case-card">
          <div className="case-card-header">
            <span className="case-badge">CASE 01</span>
            <h3>东方幻想场景案例</h3>
          </div>
          <div className="case-image-wrap">
            <img src="/images/t2i-dragon.png" alt="东方幻想场景案例" />
          </div>
          <div className="prompt-info-list">
            <div className="prompt-info-item">
              <span>主题提示词</span>
              <p>东方水乡古镇、青蓝色能量巨龙、雨夜灯火、山峦云雾、电影级氛围、8K细节。</p>
            </div>
            <div className="prompt-info-item">
              <span>镜头与构图</span>
              <p>超广角镜头、远景空间层次、中心构图、低机位仰拍，突出巨龙压迫感。</p>
            </div>
            <div className="prompt-info-item">
              <span>负面提示词</span>
              <p>模糊、低清晰度、文字水印、logo、畸形结构、画面脏乱、比例错误。</p>
            </div>
          </div>
        </article>

        <article className="t2i-case-card">
          <div className="case-card-header">
            <span className="case-badge purple">CASE 02</span>
            <h3>梦幻人像案例</h3>
          </div>
          <div className="case-image-wrap">
            <img src="/images/t2i-girl.png" alt="梦幻人像案例" />
          </div>
          <div className="prompt-info-list">
            <div className="prompt-info-item">
              <span>主题提示词</span>
              <p>花园中短发女孩、彩色星云泡泡、阳光花海、梦幻气泡、柔和光影、童话氛围。</p>
            </div>
            <div className="prompt-info-item">
              <span>镜头与构图</span>
              <p>近景人像、低角度仰拍、人物位于左下区域，背景形成包围式梦幻空间。</p>
            </div>
            <div className="prompt-info-item">
              <span>负面提示词</span>
              <p>面部崩坏、五官畸形、过曝、噪点、文字水印、手部错误、杂乱背景。</p>
            </div>
          </div>
        </article>
      </section>

      {/* 提示词结构与流程 */}
      <section className="t2i-process-section">
        <div className="process-left">
          <span className="process-label">PROMPT STRUCTURE</span>
          <h2>提示词结构与全流程</h2>
          <p>
            科学的提示词结构决定图像生成的稳定性。不是单纯堆砌形容词，
            而是把画面信息拆解为主体、场景、风格、镜头、光影、细节与输出规则。
          </p>
          <div className="flow-chain">
            <div>主体</div>
            <span>→</span>
            <div>场景</div>
            <span>→</span>
            <div>风格</div>
            <span>→</span>
            <div>镜头</div>
          </div>
          <div className="flow-chain second">
            <div>光影</div>
            <span>→</span>
            <div>细节</div>
            <span>→</span>
            <div>负面</div>
            <span>→</span>
            <div>输出</div>
          </div>
          <div className="process-points">
            <div className="process-point">
              <strong>结构化拆解</strong>
              <p>让想法更清晰，避免提示词混乱。</p>
            </div>
            <div className="process-point">
              <strong>全流程可控</strong>
              <p>从构想到输出，每一步都有明确目标。</p>
            </div>
            <div className="process-point">
              <strong>高质量复现</strong>
              <p>通过稳定模板提升图像一致性。</p>
            </div>
          </div>
        </div>
        <div className="process-right">
          <img src="/images/t2i-flow.png" alt="文生图提示词结构与全流程" />
        </div>
      </section>

      {/* 底部总结 */}
      <section className="t2i-final-rule">
        <span>不是词越多越好</span>
        <strong>而是信息清楚、层级明确、重点突出。</strong>
      </section>
    </div>
  )
}