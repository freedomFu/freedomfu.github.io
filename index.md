---
layout: homepage
last_updated: 2026-11-22
---

<header class="profile">
  <img class="portrait" src="{{ site.avatar | relative_url }}" alt="Yanduo Fu" width="180" height="240">
  <div class="profile-info">
    <h1>Yanduo Fu <span lang="zh">(付彦铎)</span></h1>
    <p class="position">Eng.D. Candidate</p>
    <p><a href="{{ site.affiliation_link }}">{{ site.affiliation }}</a><br>Tianjin, China</p>
    <p class="email">Email: <a href="mailto:fuyanduo@foxmail.com">fuyanduo@foxmail.com</a></p>
    <div class="profile-links" aria-label="Academic profiles">
      <a href="{{ site.google_scholar }}">Google Scholar</a>
      <a href="{{ site.github_link }}">GitHub</a>
      <a href="{{ site.research_gate }}">ResearchGate</a>
    </div>
  </div>
</header>

<section id="about" class="block">
  <h2>About Me</h2>
  <p>I am a final-year Eng.D. candidate at <a href="https://www.nankai.edu.cn/">Nankai University</a>, advised by <a href="https://cssnku.github.io/">Prof. Ding Wang</a>. I study digital identity security, with a focus on password managers, password security, and usable security. My work uses empirical measurements and security analysis to examine authentication mechanisms, system behavior, and the security and privacy issues users encounter in practice.</p>
  <p>Previously, I received a Master of Engineering degree through a joint program at the <a href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences (UCAS)</a> and the <a href="https://www.iie.ac.cn/">Institute of Information Engineering (IIE), Chinese Academy of Sciences</a>. I was supervised by <a href="https://dblp.uni-trier.de/pid/52/8379.html">Qiongxiao Wang, Professor-Level Senior Engineer</a>, in the research team led by <a href="https://lin-jingqiang.github.io/">Prof. Jingqiang Lin</a>. My work during this period focused on certificate-related security. I also participated in an academic seminar led by <a href="https://www.researchgate.net/profile/Bingyu-Li-12">Prof. Bingyu Li</a>.</p>
  <p>I joined <a href="https://dreamtech.team/">Prof. Huawei Mei's Dreamtech group</a> as an intern in my sophomore year at <a href="https://net.ncepu.edu.cn/">North China Electric Power University (NCEPU)</a> in Baoding.</p>
  <p>Alongside my main research, I am interested in digital forensics and software testing. Outside research, I enjoy indoor climbing, yoga, running, and reading.</p>
</section>

<section id="research" class="block">
  <h2>Research Interests</h2>
  <p>My primary research area is <strong>{{ site.research_area }}</strong>, covering:</p>
  <ul class="research-interests">
    {% for interest in site.research_interests %}
    <li>{{ interest }}</li>
    {% endfor %}
  </ul>
</section>

<section id="dispatches" class="block news">
  <h2>News</h2>
  <ul>
    <li><time datetime="2026-08">Aug. 2026</time><span>Our paper on authentication mechanisms in cloud-based password managers was accepted at <strong>ICICS 2026</strong>.</span></li>
    <li><time datetime="2024-09">Sep. 2024</time><span>Our paper on password management protocols was accepted at <strong>IEEE S&amp;P 2025</strong>.</span></li>
    <li><time datetime="2024-08">Aug. 2024</time><span>Our paper on password-manager autofill was accepted at <strong>ACSAC 2024</strong>.</span></li>
  </ul>
</section>

<section id="works" class="block works">
  <h2>Publications <a class="section-link" href="{{ site.google_scholar }}">Google Scholar</a></h2>
  {% for paper in site.data.publications.main %}
  <article class="publication">
    <div class="publication-label">{{ paper.venue_short }}<span>{{ paper.year }}</span></div>
    <div class="publication-body">
      <h3>{% if paper.pdf %}<a href="{{ paper.pdf }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
      <p class="authors">{{ paper.authors }}</p>
      <p class="venue">{{ paper.conference }}</p>
      <p class="paper-links">
        {% if paper.pdf %}<a href="{{ paper.pdf }}">[Paper]</a>{% endif %}
        {% if paper.code %}<a href="{{ paper.code }}">[Code]</a>{% endif %}
        {% if paper.page %}<a href="{{ paper.page }}">[Project]</a>{% endif %}
        {% if paper.slides %}<a href="{{ paper.slides | relative_url }}">[Slides]</a>{% endif %}
        {% if paper.bibtex %}<a href="{{ paper.bibtex | relative_url }}">[BibTeX]</a>{% endif %}
      </p>
    </div>
  </article>
  {% endfor %}
</section>

<section id="service" class="block service">
  <h2>Service</h2>
  <ul>
    <li>Reviewer, IEEE Transactions on Dependable and Secure Computing (<strong>TDSC</strong>), 2026–present.</li>
    <li>External Reviewer, International Conference on Information and Communications Security (<strong>ICICS</strong>), 2023.</li>
  </ul>
</section>
