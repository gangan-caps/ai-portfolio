export default function VQAPage() {
  return (
    <div className="vqa-page">
      {/* 01 顶部主视觉 */}
      <section className="vqa-hero-section">
        <div className="vqa-hero-left">
          <div className="vqa-index">01</div>
          <div className="vqa-eyebrow">VISION QUESTION ANSWERING</div>
          <h1>
            <span>VQA</span>
            视觉理解评测
          </h1>
          <p>
            让 AI 真正理解图像，而不是只识别图像。从目标检测到关系推理，
            再到复杂问答，全面评测 AI 视觉智能。
          </p>

          <div className="vqa-feature-tags">
            <div className="vqa-feature-tag">
              <strong>多模态理解</strong>
              <span>Multi-modal</span>
            </div>
            <div className="vqa-feature-tag">
              <strong>复杂推理</strong>
              <span>Reasoning</span>
            </div>
            <div className="vqa-feature-tag">
              <strong>精准定位</strong>
              <span>Localization</span>
            </div>
            <div className="vqa-feature-tag">
              <strong>全面评测</strong>
              <span>Evaluation</span>
            </div>
          </div>
        </div>

        <div className="vqa-hero-image-card">
          <img src="/images/vqa/1.png" alt="VQA视觉理解主视觉" />
        </div>
      </section>

      {/* 02 VQA 工作流程 */}
      <section className="vqa-panel vqa-pipeline-section">
        <div className="vqa-section-title">
          <span>02</span>
          <h2>VQA工作流程</h2>
          <em>VQA PIPELINE</em>
        </div>

        <div className="vqa-pipeline">
          <div className="pipeline-item">
            <div className="pipeline-icon">▧</div>
            <strong>输入图像</strong>
            <span>Input Image</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">⌖</div>
            <strong>目标检测</strong>
            <span>Object Detection</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">OCR</div>
            <strong>OCR识别</strong>
            <span>OCR Recognition</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">◎</div>
            <strong>区域定位</strong>
            <span>Region Localization</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">⌁</div>
            <strong>关系推理</strong>
            <span>Relation Reasoning</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">?</div>
            <strong>回答问题</strong>
            <span>Answer Question</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-item">
            <div className="pipeline-icon">✓</div>
            <strong>结果评分</strong>
            <span>Score Evaluation</span>
          </div>
        </div>
      </section>

      {/* 03 核心能力展示 */}
      <section className="vqa-panel vqa-capability-section">
        <div className="vqa-section-title">
          <span>03</span>
          <h2>核心能力展示</h2>
          <em>CORE CAPABILITIES</em>
        </div>

        <div className="vqa-capability-grid">
          <article className="capability-card">
            <h3>目标检测</h3>
            <p>Object Detection</p>
            <img src="/images/vqa/2.png" alt="目标检测" />
            <div className="qa-box">
              <span>Q：图中有几个人物？</span>
              <strong>A：2个人物</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>99%</b>
            </div>
          </article>

          <article className="capability-card">
            <h3>OCR识别</h3>
            <p>OCR Recognition</p>
            <img src="/images/vqa/3.png" alt="OCR识别" />
            <div className="qa-box">
              <span>Q：图中有没有文字？</span>
              <strong>A：没有文字</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>100%</b>
            </div>
          </article>

          <article className="capability-card">
            <h3>属性识别</h3>
            <p>Attribute Recognition</p>
            <img src="/images/vqa/4.png" alt="属性识别" />
            <div className="qa-box">
              <span>Q：左边人物哪里是什么颜色？</span>
              <strong>A：金色</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>98%</b>
            </div>
          </article>

          <article className="capability-card">
            <h3>关系理解</h3>
            <p>Relation Understanding</p>
            <img src="/images/vqa/5.png" alt="关系理解" />
            <div className="qa-box">
              <span>Q：两人是什么关系？</span>
              <strong>A：敌对关系</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>97%</b>
            </div>
          </article>

          <article className="capability-card">
            <h3>逻辑推理</h3>
            <p>Logical Reasoning</p>
            <img src="/images/vqa/6.png" alt="逻辑推理" />
            <div className="qa-box">
              <span>Q：谁更可能是胜利者？</span>
              <strong>A：无法确定</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>89%</b>
            </div>
          </article>

          <article className="capability-card">
            <h3>计数能力</h3>
            <p>Counting</p>
            <img src="/images/vqa/7.png" alt="计数能力" />
            <div className="qa-box">
              <span>Q：图中有几个塔楼？</span>
              <strong>A：15座塔楼</strong>
            </div>
            <div className="score-row">
              <em>Score</em>
              <b>96%</b>
            </div>
          </article>
        </div>
      </section>

      {/* 04 案例问答展示 */}
      <section className="vqa-panel vqa-example-section">
        <div className="vqa-section-title">
          <span>04</span>
          <h2>案例问答展示</h2>
          <em>EXAMPLE Q&A</em>
        </div>

        <div className="vqa-example-content">
          <div className="example-image-card">
            <img src="/images/vqa/8.png" alt="案例问答展示图" />
          </div>

          <div className="vqa-qa-table">
            <div className="vqa-qa-row vqa-qa-head">
              <div className="vqa-qa-cell">问题 Question</div>
              <div className="vqa-qa-cell">答案 Answer</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">图中有几个人物？</div>
              <div className="vqa-qa-cell">2 个人物</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">左边人物手里拿的是什么？</div>
              <div className="vqa-qa-cell">如意金箍棒</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">右边人物手里拿的是什么？</div>
              <div className="vqa-qa-cell">三尖两刃刀</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">他们正在做什么？</div>
              <div className="vqa-qa-cell">正在战斗</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">背景是什么地方？</div>
              <div className="vqa-qa-cell">古代宫殿与云海</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">天气 / 光线如何？</div>
              <div className="vqa-qa-cell">云层翻滚，光线戏剧性</div>
            </div>

            <div className="vqa-qa-row">
              <div className="vqa-qa-cell">这张图的风格是什么？</div>
              <div className="vqa-qa-cell">中国神话，史诗级战斗</div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 AI 推理过程 */}
      <section className="vqa-panel vqa-reason-section">
        <div className="vqa-section-title">
          <span>05</span>
          <h2>AI推理过程</h2>
          <em>REASONING PROCESS</em>
        </div>

        <div className="reason-flow">
          <div className="reason-item">
            <div className="reason-cube">01</div>
            <strong>视觉编码器</strong>
            <span>Vision Encoder</span>
          </div>

          <div className="reason-arrow">→</div>

          <div className="reason-item">
            <div className="reason-cube">02</div>
            <strong>特征提取</strong>
            <span>Feature Extractor</span>
          </div>

          <div className="reason-arrow">→</div>

          <div className="reason-item">
            <div className="reason-cube">03</div>
            <strong>跨模态注意力</strong>
            <span>Cross Attention</span>
          </div>

          <div className="reason-arrow">→</div>

          <div className="reason-item">
            <div className="reason-cube">04</div>
            <strong>大语言模型</strong>
            <span>LLM</span>
          </div>

          <div className="reason-arrow">→</div>

          <div className="reason-item">
            <div className="reason-cube">05</div>
            <strong>逻辑推理</strong>
            <span>Reasoning</span>
          </div>

          <div className="reason-arrow">→</div>

          <div className="reason-item">
            <div className="reason-cube">✓</div>
            <strong>输出答案</strong>
            <span>Answer Output</span>
          </div>
        </div>
      </section>
    </div>
  )
}
