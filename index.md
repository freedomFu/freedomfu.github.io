---
layout: homepage
---

<section class="epigraph">
  <blockquote>
    <p>“Be real, stay curious, keep dreaming.”</p>
    <!-- <cite>Personal motto</cite> -->
  </blockquote>
</section>

<section class="about">
  <div class="portrait-frame">
    <img class="portrait" src="{{ site.avatar | relative_url }}" alt="Fu Yanduo">
  </div>
  <div>
    <p class="mission-text">I study the fragile boundary between convenience and security in identity systems. My work focuses on password managers, authentication, and usable security, with the aim of making real-world protection both dependable and humane.</p>
    <p>I am a final-year Eng.D. candidate at <a href="https://cc.nankai.edu.cn/" target="_blank" rel="noopener">Nankai University</a>, advised by <a href="https://cssnku.github.io/" target="_blank" rel="noopener">Professor Ding Wang</a>.</p>
    <p>Outside research, I enjoy yoga, running, and reading.</p>
    <p class="contact"><a href="mailto:fuyanduo@foxmail.com">fuyanduo@foxmail.com</a> &nbsp;·&nbsp; <a href="{{ site.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a> &nbsp;·&nbsp; <a href="{{ site.github_link }}" target="_blank" rel="noopener">GitHub</a> &nbsp;·&nbsp; <a href="{{ site.research_gate }}" target="_blank" rel="noopener">ResearchGate</a></p>
  </div>
</section>

<details class="full-bio">
  <summary>view full biography</summary>
  <div class="full-bio-content">
    <p>My name is Yanduo Fu (付彦铎 in Chinese). I am currently a final-year Eng.D. candidate at <a href="https://www.nankai.edu.cn/" target="_blank" rel="noopener">Nankai University</a>, fortunate to be supervised by <a href="https://cssnku.github.io/" target="_blank" rel="noopener">Professor Ding Wang</a>.</p>
    <p>Prior to this, I earned a joint Master of Engineering degree with the University of Chinese Academy of Sciences (<a href="https://www.ucas.ac.cn/" target="_blank" rel="noopener">UCAS</a>) and the Institute of Information Engineering (<a href="https://www.iie.ac.cn/" target="_blank" rel="noopener">IIE</a>), Chinese Academy of Sciences. I was supervised by <a href="https://dblp.uni-trier.de/pid/52/8379.html" target="_blank" rel="noopener">Professor-Level Senior Engineer Qiongxiao Wang</a> in the research team led by <a href="https://lin-jingqiang.github.io/" target="_blank" rel="noopener">Professor Jingqiang Lin</a>. During this period, I also participated in an academic seminar led by <a href="https://www.researchgate.net/profile/Bingyu-Li-12" target="_blank" rel="noopener">Professor Bingyu Li</a>.</p>
    <p>I have also been interning with <a href="https://dreamtech.team/" target="_blank" rel="noopener">Professor Huawei Mei's Dreamtech group</a> since my sophomore year at North China Electric Power University (<a href="https://net.ncepu.edu.cn/" target="_blank" rel="noopener">NCEPU</a>) in Baoding.</p>
    <p>My research mainly focuses on <strong>identity authentication, password managers, and usable security</strong>. I am also interested in <strong>empirical security studies, digital forensics, and software testing</strong>. More broadly, I hope to build security technologies that better protect users' privacy and improve the trustworthiness of real-world systems.</p>
    <p>Outside research, I enjoy indoor climbing, yoga, reading, and other forms of movement that help me better understand the body and maintain balance.</p>
  </div>
</details>

<section id="dispatches" class="block dispatches">
  <h2><span>Dispatches</span></h2>
  <ul>
    <li><time>08 / 2026</time>Paper on password manager authentication mechanism accepted by <strong>ICICS 2026</strong>.</li>
    <li><time>09 / 2024</time>Paper on protocol analysis accepted by <strong>IEEE S&P 2025</strong>. Congratulations to my colleagues.</li>
    <li><time>08 / 2024</time>Paper on password-manager autofill accepted by <strong>ACSAC 2024</strong>.</li>
  </ul>
  <details>
    <summary>view earlier dispatches</summary>
    <ul>
      <li><time>09 / 2022</time>Started my Eng.D. study at Nankai University.</li>
    </ul>
  </details>
</section>

<section id="works" class="block works">
  <h2><span>Publications</span></h2>
  {% for paper in site.data.publications.main %}
  <article>
    <p class="title">{% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</p>
    <p class="authors">{{ paper.authors }}</p>
    <p class="venue">{{ paper.conference }}</p>
    {% if paper.pdf or paper.code or paper.page or paper.slides or paper.ccfa or paper.ccfb or paper.ccfc or paper.ccfd %}
    <p class="meta">
      {% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener">paper</a>{% endif %}
      {% if paper.code %}<a href="{{ paper.code }}" target="_blank" rel="noopener">code</a>{% endif %}
      {% if paper.page %}<a href="{{ paper.page }}" target="_blank" rel="noopener">project</a>{% endif %}
      {% if paper.slides %}<a href="{{ paper.slides }}" target="_blank" rel="noopener">slides</a>{% endif %}
      {% if paper.ccfa %}<span class="rank rank-a">CCF-A</span>{% endif %}
      {% if paper.ccfb %}<span class="rank rank-b">CCF-B</span>{% endif %}
      {% if paper.ccfc %}<span class="rank rank-c">CCF-C</span>{% endif %}
      {% if paper.ccfd %}<span class="rank rank-other">CCF-None</span>{% endif %}
    </p>
    {% endif %}
  </article>
  {% endfor %}
</section>

<section id="service" class="block service">
  <h2><span>Service</span></h2>
  <ul>
    <li>IEEE Transactions on Dependable and Secure Computing (<strong>TDSC</strong>) &nbsp;·&nbsp; Reviewer &nbsp;·&nbsp; 2026–present</li>
    <li>International Conference on Information and Communications Security (<strong>ICICS</strong>) &nbsp;·&nbsp; External Reviewer &nbsp;·&nbsp; 2023</li>
  </ul>
</section>
