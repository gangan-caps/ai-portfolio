function VisionDescPage() {
  return (
    <div className="vision-desc-page">
      {/* 图片 Caption 描述 */}
      <section className="vd-block image-caption-block">
        <div className="vd-block-header">
          <div>
            <span className="vd-number">01</span>
            <h2>图片 Caption 描述</h2>
            <em>IMAGE CAPTIONING</em>
          </div>
          <p>
            通过对图像内容的理解与分析，自动生成自然语言描述，提升模型对图像整体语义的理解能力。
          </p>
        </div>

        <div className="image-caption-grid">
          {/* 左侧输入图片与输出 */}
          <div className="vd-left-column">
            <div className="vd-image-panel">
              <div className="panel-title">
                <span>输入图片</span>
                <em>INPUT IMAGE</em>
              </div>
              <img src="/images/vision-desc/1.png" alt="输入图片" />
            </div>

            <div className="vd-output-panel">
              <div className="panel-title">
                <span>示例输出</span>
                <em>OUTPUT EXAMPLE</em>
              </div>

              <div className="image-output-content">
                <div className="output-table">
                  <div className="output-row">
                    <strong>主题描述：</strong>
                    <p>一只柯基犬戴着厨师帽，穿着围裙，在厨房里用锅铲翻炒蔬菜。</p>
                  </div>
                  <div className="output-row">
                    <strong>色调：</strong>
                    <p>暖色调、高饱和度。整体以暖黄、暖棕为画面基底，木质厨具与彩椒、番茄等食材色彩鲜亮浓郁，整体氛围温暖柔和。</p>
                  </div>
                  <div className="output-row">
                    <strong>角度：</strong>
                    <p>平拍。拍摄视角与柯基主体的视线高度基本齐平，呈现平视视觉效果，画面代入感强。</p>
                  </div>
                  <div className="output-row">
                    <strong>构图：</strong>
                    <p>中心构图。柯基厨师作为核心视觉主体居于画面正中心，左右两侧的厨房元素分布均衡，视觉焦点高度集中。</p>
                  </div>
                  <div className="output-row">
                    <strong>景别：</strong>
                    <p>近景。画面聚焦呈现柯基的上半身与烹饪动作，同时保留前景厨具、中景主体与背景厨房环境，清晰交代场景关系。</p>
                  </div>
                  <div className="output-row">
                    <strong>光影：</strong>
                    <p>自然光、软光。主光源来自左侧窗户的自然日光，光线质感柔和弥散，阴影过渡自然平缓，无生硬的明暗边界。</p>
                  </div>
                  <div className="output-row">
                    <strong>焦距：</strong>
                    <p>35mm-50mm。采用标准焦段拍摄，室内空间透视自然真实，无明显广角畸变；主体清晰锐利，背景呈现自然的渐进式虚化效果。</p>
                  </div>
                </div>
              </div>

              <div className="complete-caption">
                <span>AI</span>
                <p>
                  一只柯基犬戴着厨师帽，穿着围裙，在厨房里用锅铲翻炒蔬菜。画面采用平拍视角，与主体视线高度齐平，中心构图强化视觉聚焦；景别为近景，突出柯基上半身与烹饪动作，同时保留厨房环境信息。整体色调为暖色调且饱和度偏高，以暖黄与暖棕为基底，木质厨具与彩椒、番茄等食材色彩鲜亮浓郁。主光源来自左侧窗户的自然日光，软光质感让阴影过渡平滑；焦距在 35mm-50mm 区间，透视自然真实，主体清晰锐利，背景呈现渐进式虚化，氛围温暖柔和且富有治愈感。
                </p>
              </div>
            </div>
          </div>

          {/* 右侧说明与标签流程 */}
          <div className="vd-right-column">
            <div className="vd-info-panel">
              <h3>一、什么是图片 Caption 描述？</h3>
              <p>
                图片 Caption 描述是指 AI 根据图片内容，自动生成自然语言文本的能力，
                用于理解图片的整体语义和关键信息。
              </p>

              <div className="caption-purpose-flow">
                <div className="purpose-item">
                  <div className="purpose-icon">◎</div>
                  <strong>1. 目标</strong>
                  <p>增强模型对图像内容的理解能力。</p>
                </div>
                <div className="purpose-arrow">→</div>
                <div className="purpose-item">
                  <div className="purpose-icon">▤</div>
                  <strong>2. 规则</strong>
                  <p>通过标签和细节描述，让图像语义更清晰。</p>
                </div>
                <div className="purpose-arrow">→</div>
                <div className="purpose-item">
                  <div className="purpose-icon">▧</div>
                  <strong>3. 结果</strong>
                  <p>提升生成描述的一致性和整体质量。</p>
                </div>
              </div>
            </div>

            <div className="vd-info-panel">
              <h3>二、标签流程</h3>
              <p className="sub-title">1. 标签挂载</p>

              <div className="tag-grid">
                <div className="tag-box">
                  <strong>色调</strong>
                  <span>暖色调</span>
                  <span>冷色调</span>
                  <span>低饱和度</span>
                  <span>高饱和度</span>
                </div>
                <div className="tag-box">
                  <strong>角度</strong>
                  <span>平拍</span>
                  <span>仰拍</span>
                  <span>俯拍</span>
                  <span>其他</span>
                </div>
                <div className="tag-box">
                  <strong>构图</strong>
                  <span>对称构图</span>
                  <span>三分构图</span>
                  <span>中心构图</span>
                  <span>曲线构图</span>
                </div>
                <div className="tag-box">
                  <strong>景别</strong>
                  <span>大全景</span>
                  <span>远景</span>
                  <span>全景</span>
                  <span>近景</span>
                </div>
                <div className="tag-box">
                  <strong>光影</strong>
                  <span>自然光</span>
                  <span>人造光</span>
                  <span>硬光</span>
                  <span>软光</span>
                </div>
                <div className="tag-box">
                  <strong>焦距</strong>
                  <span>&lt; 24mm</span>
                  <span>24mm-35mm</span>
                  <span>35mm-50mm</span>
                  <span>50mm-135mm</span>
                </div>
              </div>

              <div className="caption-formula">
                <strong>2. 图片描述</strong>
                <p>
                  完整描述图片内容，主要从画面内容、画面属性、艺术风格、专业维度进行描述，
                  通过结构化输出提高描述质量。
                </p>
                <div>[主题描述] + [修饰词] + [细节补充] + [风格/艺术形式]</div>
              </div>

              <div className="caption-formula">
                <strong>3. 提效方法</strong>
                <p>
                  可以将规则文档写入提示词，让模型根据输入图片输出相应描述，
                  也可以做成自动化工作流，提高标注效率。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频 Caption 描述 */}
      <section className="vd-block video-caption-block">
        <div className="vd-block-header">
          <div>
            <span className="vd-number">02</span>
            <h2>视频 Caption 描述</h2>
            <em>VIDEO CAPTIONING</em>
          </div>
          <p>
            通过对视频内容的理解与分析，自动生成自然语言描述，提升模型对视频整体语义与时序关系的理解能力。
          </p>
        </div>

        <div className="video-caption-grid">
          {/* 左侧视频说明 */}
          <div className="video-left">
            <div className="vd-info-panel">
              <h3>一、什么是视频 Caption 描述？</h3>
              <p>
                视频 Caption 描述是指 AI 根据视频内容，自动生成自然语言文本的能力，
                用于理解视频的整体语义、关键动作、场景变化与时间信息。
              </p>

              <div className="caption-purpose-flow">
                <div className="purpose-item">
                  <div className="purpose-icon">◎</div>
                  <strong>1. 目标</strong>
                  <p>增强模型对视频内容的理解能力。</p>
                </div>
                <div className="purpose-arrow">→</div>
                <div className="purpose-item">
                  <div className="purpose-icon">▤</div>
                  <strong>2. 规则</strong>
                  <p>通过视频添加标签和详细描述，形成训练数据。</p>
                </div>
                <div className="purpose-arrow">→</div>
                <div className="purpose-item">
                  <div className="purpose-icon">▧</div>
                  <strong>3. 结果</strong>
                  <p>提升生成视频的一致性和整体质量。</p>
                </div>
              </div>
            </div>

            <div className="vd-info-panel">
              <h3>四、抽帧处理</h3>
              <div className="red-formula">
                [主题描述] + [修饰词] + [镜头运动] + [细节补充]
              </div>

              <div className="timeline-layout">
                <div className="timeline-list">
                  <div className="timeline-item">
                    <img src="/images/vision-desc/3.png" alt="视频帧1" />
                    <div>
                      <strong>00:00-00:02</strong>
                      <p>阴暗的远古遗迹，残破石柱与浓雾营造神秘氛围。</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <img src="/images/vision-desc/4.png" alt="视频帧2" />
                    <div>
                      <strong>00:02-00:04</strong>
                      <p>两位神话人物对峙，金色光源在画面中央升起。</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <img src="/images/vision-desc/5.png" alt="视频帧3" />
                    <div>
                      <strong>00:04-00:06</strong>
                      <p>金箍棒贯穿云层，光芒逐渐增强，镜头快速推进。</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <img src="/images/vision-desc/6.png" alt="视频帧4" />
                    <div>
                      <strong>00:06-00:08</strong>
                      <p>双方展开激烈战斗，火焰与粒子特效交织。</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <img src="/images/vision-desc/7.png" alt="视频帧5" />
                    <div>
                      <strong>00:08-00:10</strong>
                      <p>金色书法"大圣"出现，画面以史诗感收束。</p>
                    </div>
                  </div>
                </div>

                <div className="ai-caption-output">
                  <h4>AI Caption 输出</h4>
                  <p>
                    视频展示了一场史诗级东方神话战斗场景。开场为黑暗遗迹，
                    浓雾与残破石柱营造出压迫氛围。随后两位角色在云层中对峙，
                    金箍棒出现并引发强烈战斗。画面以暗黑国风为主，
                    配合火焰、烟雾与粒子特效，镜头快速切换，呈现出紧张激烈的视觉节奏。
                  </p>

                  <div className="caption-keywords">
                    <span>东方神话</span>
                    <span>史诗战斗</span>
                    <span>暗黑国风</span>
                    <span>孙悟空</span>
                    <span>二郎神</span>
                    <span>金箍棒</span>
                    <span>火焰特效</span>
                    <span>云海</span>
                    <span>大圣字幕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧标签与示例输出 */}
          <div className="video-right">
            <div className="vd-info-panel">
              <h3>二、标签流程</h3>
              <p className="sub-title">1. 标签挂载</p>

              <div className="tag-grid video-tag-grid">
                <div className="tag-box">
                  <strong>色调</strong>
                  <span>暖色调</span>
                  <span>冷色调</span>
                  <span>低饱和度</span>
                  <span>高饱和度</span>
                </div>
                <div className="tag-box">
                  <strong>角度</strong>
                  <span>平拍</span>
                  <span>仰拍</span>
                  <span>俯拍</span>
                  <span>其他</span>
                </div>
                <div className="tag-box">
                  <strong>构图</strong>
                  <span>对称构图</span>
                  <span>三分构图</span>
                  <span>中心构图</span>
                  <span>水平构图</span>
                </div>
                <div className="tag-box">
                  <strong>景别</strong>
                  <span>大远景</span>
                  <span>远景</span>
                  <span>全景</span>
                  <span>近景</span>
                </div>
                <div className="tag-box">
                  <strong>光影</strong>
                  <span>自然光</span>
                  <span>火焰光</span>
                  <span>体积光</span>
                  <span>逆光</span>
                </div>
                <div className="tag-box">
                  <strong>镜头移动</strong>
                  <span>固定镜头</span>
                  <span>推进</span>
                  <span>摇摄</span>
                  <span>快速切换</span>
                </div>
              </div>
            </div>

            <div className="vd-info-panel">
              <h3>三、视频输入</h3>

              <div className="video-preview-card">
                <video src="/images/vision-desc/3.mp4" controls preload="metadata" />
                <div className="fake-video-control">
                  <span>▶</span>
                  <div className="progress">
                    <i></i>
                  </div>
                  <em>00:06 / 00:10</em>
                </div>
              </div>

              <div className="video-spec-grid">
                <div className="video-spec-item"><strong>色调：</strong><span>冷暖对比、高对比、高饱和</span></div>
                <div className="video-spec-item"><strong>角度：</strong><span>平拍为主，穿插仰拍</span></div>
                <div className="video-spec-item"><strong>构图：</strong><span>全程中心构图</span></div>
                <div className="video-spec-item"><strong>景别：</strong><span>中景 → 远景 → 中景 → 近景 → 特写递进</span></div>
                <div className="video-spec-item"><strong>光影：</strong><span>人造特效光 + 火焰硬光，侧光 / 顺光结合</span></div>
                <div className="video-spec-item"><strong>镜头运动：</strong><span>固定镜头为主，单段缓慢推镜</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="vd-info-panel timedesc-panel">
          <h3>五、关键帧描述</h3>

          <div className="timedesc-list">
            <div className="timedesc-item">
              <div className="timedesc-media">
                <img src="/images/vision-desc/3.png" alt="0-2秒画面" loading="lazy" />
              </div>
              <div className="timedesc-body">
                <div className="timedesc-time">0-2 秒</div>
                <div className="timedesc-tags">
                  <div><strong>色调：</strong><span>冷色调、低饱和</span></div>
                  <div><strong>角度：</strong><span>平视</span></div>
                  <div><strong>构图：</strong><span>中心构图</span></div>
                  <div><strong>景别：</strong><span>中景</span></div>
                  <div><strong>光影：</strong><span>人造光、左侧光、硬光</span></div>
                  <div><strong>镜头运动：</strong><span>固定镜头</span></div>
                </div>
                <div className="timedesc-desc">
                  <strong>画面描述：</strong>
                  <p>这段画面展示了古代军阵前的肃杀场景。一位身着玄铁兽面铠甲的将领立于阵前，头戴装饰繁复的战盔，左手托举着一座泛着幽蓝冷光的玲珑宝塔。他神情肃穆冷峻，铠甲上的龙纹与兽首浮雕纹理清晰，金属质感厚重锐利。他的身后是乌云翻涌下的古代城楼，两侧列阵的士兵手持长兵整齐排布，云层中隐约有闪电划过，整个场景庄重压抑，充满大战将至的紧绷感。冷调的光线均匀落在金属铠甲上，色彩低饱和偏冷，营造出肃穆威严的战前氛围。</p>
                </div>
              </div>
            </div>

            <div className="timedesc-item">
              <div className="timedesc-media">
                <img src="/images/vision-desc/4.png" alt="2-4秒画面" loading="lazy" />
              </div>
              <div className="timedesc-body">
                <div className="timedesc-time">2-4 秒</div>
                <div className="timedesc-tags">
                  <div><strong>色调：</strong><span>冷色调、高对比</span></div>
                  <div><strong>角度：</strong><span>俯拍</span></div>
                  <div><strong>构图：</strong><span>中心构图</span></div>
                  <div><strong>景别：</strong><span>远景</span></div>
                  <div><strong>光影：</strong><span>人造光、硬光</span></div>
                  <div><strong>镜头运动：</strong><span>固定镜头</span></div>
                </div>
                <div className="timedesc-desc">
                  <strong>画面描述：</strong>
                  <p>这段画面展示了神兵出世的震撼场景。刻有 “如意金箍棒” 金色篆字的神棍垂直立于画面中心，冲破螺旋状翻涌的厚重阴云直插天际。棒身的金色文字散发着耀眼的暖光，周围的乌云呈漩涡状围绕神棍旋转，云层明暗层次分明。整个场景气势磅礴，天地间的气流仿佛都被神棍搅动，冷调的云层与金色文字形成强烈色彩对比，营造出开天辟地般的压迫感与神圣感。</p>
                </div>
              </div>
            </div>

            <div className="timedesc-item">
              <div className="timedesc-media">
                <img src="/images/vision-desc/5.png" alt="4-6秒画面" loading="lazy" />
              </div>
              <div className="timedesc-body">
                <div className="timedesc-time">4-6 秒</div>
                <div className="timedesc-tags">
                  <div><strong>色调：</strong><span>暖色调、高饱和</span></div>
                  <div><strong>角度：</strong><span>平拍</span></div>
                  <div><strong>构图：</strong><span>中心构图</span></div>
                  <div><strong>景别：</strong><span>中景</span></div>
                  <div><strong>光影：</strong><span>火焰人造光、左侧光、硬光</span></div>
                  <div><strong>镜头运动：</strong><span>慢推镜头</span></div>
                </div>
                <div className="timedesc-desc">
                  <strong>画面描述：</strong>
                  <p>这段画面展示了战后沙场的场景。齐天大圣孙悟空单膝跪于战场废墟之上，身着黑金雕花战甲，肩披被战火灼烧得残破的红色披风，右手持金箍棒撑住地面。他垂首俯身，战甲上沾着尘土与战损痕迹，神情沉凝带着战后的疲惫与狠厉。他的身侧是战死士兵散落的铠甲，身后是熊熊燃烧的火焰，火星在空气中四散飞溅。暖橙色的火光从侧方打在他的战甲上，色彩饱和度高，明暗对比强烈，营造出惨烈又充满力量感的战场氛围。</p>
                </div>
              </div>
            </div>

            <div className="timedesc-item">
              <div className="timedesc-media">
                <img src="/images/vision-desc/6.png" alt="6-8秒画面" loading="lazy" />
              </div>
              <div className="timedesc-body">
                <div className="timedesc-time">6-8 秒</div>
                <div className="timedesc-tags">
                  <div><strong>色调：</strong><span>冷色调、高对比</span></div>
                  <div><strong>角度：</strong><span>平视</span></div>
                  <div><strong>构图：</strong><span>中心构图</span></div>
                  <div><strong>景别：</strong><span>近景</span></div>
                  <div><strong>光影：</strong><span>火焰光、硬光</span></div>
                  <div><strong>镜头运动：</strong><span>固定镜头</span></div>
                </div>
                <div className="timedesc-desc">
                  <strong>画面描述：</strong>
                  <p>这段画面展示了妖王觉醒的特写场景。孙悟空从俯身状态骤然抬头，眼神锐利如刃，瞳孔泛着慑人的红光。他依旧保持半跪姿态，右手紧攥金箍棒，残破的红披风被气流吹得向后猎猎翻飞。他的身后是火光中若隐若现的古代城楼，火星依旧在周身飘散。侧方的火焰照亮他半张面庞，另一半隐在阴影中，近景镜头突出他神情中的肃杀与桀骜，冷暖光线交织，将妖王的压迫感与战意烘托到极致。</p>
                </div>
              </div>
            </div>

            <div className="timedesc-item">
              <div className="timedesc-media">
                <img src="/images/vision-desc/7.png" alt="8-10秒画面" loading="lazy" />
              </div>
              <div className="timedesc-body">
                <div className="timedesc-time">8-10 秒</div>
                <div className="timedesc-tags">
                  <div><strong>色调：</strong><span>暖色调、高饱和</span></div>
                  <div><strong>角度：</strong><span>平视</span></div>
                  <div><strong>构图：</strong><span>中心构图</span></div>
                  <div><strong>景别：</strong><span>特写</span></div>
                  <div><strong>光影：</strong><span>发光源光、硬光</span></div>
                  <div><strong>镜头运动：</strong><span>固定镜头</span></div>
                </div>
                <div className="timedesc-desc">
                  <strong>画面描述：</strong>
                  <p>这段画面展示了主题文字出现的收尾场景。笔锋遒劲有力的 “大圣” 二字以金色书法字体在纯黑背景中骤然显现，字体边缘带着飞溅的金粉粒子，细碎的火星状光点在文字周围缓缓飘散。纯黑背景与亮金色文字形成极强的视觉对比，文字厚重且富有力量感，金色粒子自带发光效果，色彩明亮饱和，营造出霸气张扬的氛围，将齐天大圣的狂傲气场定格在画面中。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vd-info-panel sequence-panel">
          <h3>六、时序整合</h3>

          <div className="sequence-block">
            <h4 className="sequence-subtitle">整体标签挂载</h4>
            <div className="sequence-grid">
              <div className="sequence-item"><strong>色调：</strong><span>冷暖对比、高对比、高饱和</span></div>
              <div className="sequence-item"><strong>角度：</strong><span>平拍为主，穿插仰拍</span></div>
              <div className="sequence-item"><strong>构图：</strong><span>全程中心构图</span></div>
              <div className="sequence-item"><strong>景别：</strong><span>中景 → 远景 → 中景 → 近景 → 特写递进</span></div>
              <div className="sequence-item"><strong>光影：</strong><span>人造特效光 + 火焰硬光，侧光 / 顺光结合</span></div>
              <div className="sequence-item"><strong>镜头运动：</strong><span>固定镜头为主，单段缓慢推镜</span></div>
            </div>
          </div>

          <div className="sequence-block">
            <h4 className="sequence-subtitle">整体画面描述</h4>
            <p className="sequence-paragraph">
              这段视频是暗黑国风风格的齐天大圣主题 CG 短片，整体节奏张弛有度，从肃杀铺垫到神兵震撼，再到情绪爆发最终点题，完整呈现了“大圣战归”的叙事脉络。开篇以阴云压城的古代军阵为背景，托塔神将立于阵前托举泛着蓝光的玲珑宝塔，铺垫出三界大战将至的压抑紧绷感；随即镜头切向冲破螺旋云层的如意金箍棒，以仰拍视角展现神兵直插天际的开天气势，棒身金字发光搅动风云，将情绪推至第一个高潮；随后镜头落至遍布残甲的战后废墟，齐天大圣单膝跪地，以金箍棒撑住身体喘息，黑金战损甲胄搭配被火烧破的红披风，在漫天火星与熊熊烈焰中呈现出刚经历恶战的沉淀与疲惫；紧接着悟空骤然抬头，瞳孔泛着红光的近景镜头将妖王的桀骜杀性完全释放，猎猎翻飞的破披风将战意烘托至顶点；最终以笔锋遒劲的金色“大圣”书法字在黑幕中炸开收尾，飞溅的金粉粒子将齐天大圣的狂傲气场彻底定格。全片以中心构图贯穿始终，冷调阴云与暖调烈焰形成强烈视觉对冲，金属甲胄纹理、布料破损细节、火星粒子特效的质感细腻真实，光影层次丰富厚重，整体氛围肃杀磅礴充满史诗感，将暗黑神话的厚重质感与齐天大圣的人物特质展现得极具冲击力。
            </p>
          </div>
        </div>

        <div className="vd-info-panel efficiency-panel">
          <h3>七、提效方法</h3>

          <div className="efficiency-flow">
            <div className="efficiency-item">
              <div>▣</div>
              <strong>视频输入</strong>
              <span>导入视频文件</span>
            </div>

            <em>→</em>

            <div className="efficiency-item">
              <div>⌖</div>
              <strong>抽帧处理</strong>
              <span>提取关键帧</span>
            </div>

            <em>→</em>

            <div className="efficiency-item">
              <div>▤</div>
              <strong>关键帧描述</strong>
              <span>生成关键帧描述</span>
            </div>

            <em>→</em>

            <div className="efficiency-item">
              <div>⌁</div>
              <strong>时序整合</strong>
              <span>整合时序信息</span>
            </div>

            <em>→</em>

            <div className="efficiency-item">
              <div>☑</div>
              <strong>输出描述</strong>
              <span>生成完整视频描述</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionDescPage
