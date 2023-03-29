import{_ as t,c as l,o as i,N as d}from"./chunks/framework.258a25b0.js";const m=JSON.parse('{"title":"设计中台","description":"","frontmatter":{},"headers":[],"relativePath":"guide/middleground.md","lastUpdated":1680101611000}'),a={name:"guide/middleground.md"},e=d('<h1 id="设计中台" tabindex="-1">设计中台 <a class="header-anchor" href="#设计中台" aria-label="Permalink to &quot;设计中台&quot;">​</a></h1><p>试想一下，当你每次接手新项目设计需求时（这个需求可能只是改其中某个模块的几行字或某个图标），却找不到设计源文件会是什么感觉？如果没有源文件，你就得把其他模块全部重新设计一遍，这也就算了，关键是你还得保证间距、字体、色彩、网格……都跟之前的设计吻合，设计成本一下子就被抬高了。</p><p>现在我们给业务线设计完需求后，他们的对接人都要多问一句“源文件一起发给我好吗？”怕后期再有什么小的改动，没有源文件就犯难了。</p><p>而建立完善的设计中台就可以解决设计师找不到源文件、不清楚设计规范、不了解产品流程、没有设计思路等问题，这个设计中台到底指的是什么呢？</p><h2 id="中台和设计中台" tabindex="-1">中台和设计中台 <a class="header-anchor" href="#中台和设计中台" aria-label="Permalink to &quot;中台和设计中台&quot;">​</a></h2><p>中台是一个比较新的概念，设计师对这一块了解得不多，因为中台的概念早先被应用在技术模块，简单来讲，中台就是企业能力的复用平台，你要注意这样三个关键词。</p><ul><li>企业级平台： 代表了中台是多面覆盖、统筹全局的顶层机制，而不是单一系统或服务体系；</li><li>能力： 打通不同维度的信息，将业务、技术、算法、数据等各式各样的能力组合成企业多维能力网，同步协作推动各项工作高效展开；</li><li>复用： 这是中台的核心价值所在，企业更敏捷、更低成本运转的核心精髓。</li></ul><p>那这么复杂得企业级平台，跟设计有什么关系呢？</p><p>得益于现在设计使用工具的转变，设计中台的价值越来越显现。比如阿里的 DPL（Design Pattern Library）组件库，很多设计师应该都听过，它就是一套详细的设计样式控件库，它把交互规范、视觉规范、前端代码融合到了一起。我们看到的每一个标准样式，背后都对应着现成的代码：</p><ul><li>对设计师来说，可以不断复用规范里的通用样式，设计的统一性和效率自然都能得到很大的提升。</li><li>对开发人员来说，直接获取到样式代码，在样式上不会出错，还降低了每次重复写代码的成本。</li></ul><p>了解的设计师可能会说这和蓝湖（一款产品文档和设计图的共享平台）很像，设计师将设计好的文件上传到蓝湖、开发人员直接可以看到对应的代码和切图，项目组的所有人都可以看到。而蓝湖平台给设计师所带来的便捷性，也促使我们要建立一个设计中台。</p><p>设计中台（在 2015 年的时候，阿里和腾讯就有了这个概念）是将设计规范成有能力可复用的产品平台， 这跟企业复用平台一样，只不过针对的是设计层面，是设计规范产品化思路的一种体现，我们从所有的业务设计中梳理出可形成统一规范、可复用的设计样式，将这些样式设计成灵活的通用组件。这里包括交互、视觉、UI、GUI、产品原型、设计流程、规范、品牌形象等设计，可以在很大程度上提高设计师的工作效率。</p><p>既然设计中台意义很大，为什么之前没有设计中台的概念呢？</p><p>这要归功于设计师所使用软件的变化，也就是 Sketch、蓝湖的普及。现在设计界面使用 Sketch 的设计师应该越来越多了，它的优点很明显，运行起来很轻便，没有 PS 那么笨重，占用内存也很小，关键是上传蓝湖很方便。而在这之前，设计界面的软件主要还是 PS，切图和标注都要设计师自己完成。</p><p>蓝湖就是一个类似于阿里 DPL 组件库的一个平台，你把设计文件传上去，直接可以分享给所有人查看，技术人员可以直接打开界面样式，找到对应的代码和切图。</p><p>当然了，你可能用的是摹客，因为摹客上传设计文件实现同蓝湖一样的功能，还可以制作原型，功能类似于蓝湖。</p><p>正因为这些软件和平台的实用性，大大提高了我们的工作效率，所以我们才想将这些软件的优势利用起来，组建设计中台。</p><h2 id="如何建设计中台呢" tabindex="-1">如何建设计中台呢？ <a class="header-anchor" href="#如何建设计中台呢" aria-label="Permalink to &quot;如何建设计中台呢？&quot;">​</a></h2><p>建立设计中台主要是想提高设计师的工作效率、解决设计师在设计中经常遇到的问题，比如：</p><ul><li>设计规范统一的问题；</li><li>重复设计相同模块；</li><li>设计源文件归类；</li><li>找不到文件；</li><li>……</li></ul><p>在解决设计问题的同时，你还要考虑平台的功能是否可以满足，所以首先要根据团队需要选择好建立设计中台的适合的平台，然后再开始组建设计项目、规范等。</p><ul><li>选择适合的平台；</li><li>建立设计项目；</li><li>建立设计规范；</li><li>建立设计情绪板。</li></ul><ol><li>如何选择合适的平台</li></ol><p>蓝湖或摹客平台都是可以将所有的项目传上去，方便我们查看，也方便开发人员直接使用。但蓝湖不能在线设计产品原型，摹客在这块功能相对强大一点。可是蓝湖的规范云功能出得比较早，摹客的设计规范是后出来的，所以蓝湖规范云优先占据了市场的主动权，在规范云中的规范模块都是可以灵活使用的，你可以根据需要轻松地拖动到Sketch中使用。</p><table><thead><tr><th>名称</th><th>上传项目</th><th>在线设计原型</th><th>上传原型</th><th>查看项目</th><th>设计规范</th><th>费用</th></tr></thead><tbody><tr><td>蓝湖</td><td>✔</td><td>✔</td><td>❌</td><td>体验号</td><td>✔</td><td>收费</td></tr><tr><td>摹客</td><td>✔</td><td>✔</td><td>✔</td><td>体验不太好</td><td>✔</td><td>免费</td></tr></tbody></table><ol start="2"><li>如何建立设计项目</li></ol><p>蓝湖和摹客都提供了快捷的上传项目的模式，这是平台最初给我们吸引我们，提高效率的地方。我们只需要安装好对应平台的插件，就可以将设计稿直接上传到平台上，分享给项目组的所有相关人员。</p><p>当然，有些企业有自己独立的平台，不用非得上传到蓝湖和摹客。比如阿里的 DPL 组件库，可以实现类似的功能，但目的都是一样的。</p><p>想要上传这些项目，在设计的时候，就需要将切图的地方编好组，文字信息之类的都是灵活呈现，填色之类尽量少使用图片等，这些都是方便上传平台开发人员可以看到可编译的代码，直接复用，大大提高工作效率。</p><ol start="3"><li>如何建立设计规范</li></ol><p>设计规范对设计师统一整个产品的设计至关重要，统一对外品牌形象的一致性。没有严格的设计规范很难保证每位设计师的设计风格与产品的设计风格保持一致。其实设计规范大家一直都在做，但我们之前的设计规范更多的参照，多是已图片的形式展示，很难直接复用。设计中台中的规范，是可以直接复用源文件，我们可以把每次设计中的通用模块都整理成设计规范，以便在后续的设计中可以直接复用。</p><ol start="4"><li>如何建立设计情绪版</li></ol><p>情绪板是设计师填充不同种类的东西以至于能将想法和概念形象化的画板。情绪板在设计领域很流行，与线框和原型不同，情绪板不显示未来项目的详细图片。它们意在传递正确的情绪，并带来产品期望的情感。</p><p>情绪板是一个有用的工具，帮助设计师有效地与客户和团队成员合作。纸板可以在一个紧凑的时间框架内轻松地被创建，并把抽象的想法变成现实。这样，设计师可以有效地与他人分享他们的想法，因为情绪板表达出来的设计肯定比描述性的想象要好得多。</p>',34),p=[e];function r(o,h,n,s,c,_){return i(),l("div",null,p)}const P=t(a,[["render",r]]);export{m as __pageData,P as default};
