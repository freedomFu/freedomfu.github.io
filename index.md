---
layout: homepage
last_updated: 2026-11-22
---

<header class="profile">
  <img class="portrait" src="{{ site.avatar | relative_url }}" alt="Yanduo Fu" width="180" height="240">
  <div class="profile-info">
    <h1>Yanduo Fu <span lang="zh">(付彦铎)</span></h1>
    <p class="position">Eng.D. Candidate</p>
    <p><a target="_blank" rel="noopener noreferrer" href="{{ site.affiliation_link }}">{{ site.affiliation }}</a><br>Tianjin, China</p>
    <p class="email">Email: <a target="_blank" rel="noopener noreferrer" href="mailto:fuyanduo@foxmail.com">fuyanduo@foxmail.com</a></p>
    <div class="profile-links" aria-label="Academic profiles">
      <a target="_blank" rel="noopener noreferrer" href="{{ site.google_scholar }}">Google Scholar</a>
      <a target="_blank" rel="noopener noreferrer" href="{{ site.github_link }}">GitHub</a>
      <a target="_blank" rel="noopener noreferrer" href="{{ site.research_gate }}">ResearchGate</a>
    </div>
  </div>
</header>

<section id="about" class="block">
  <h2>About Me</h2>
  <p>I am a final-year Eng.D. candidate at <a target="_blank" rel="noopener noreferrer" href="{{ site.affiliation_link }}">Nankai University</a>, advised by <a target="_blank" rel="noopener noreferrer" href="https://cssnku.github.io/">Prof. Ding Wang</a>. I study digital identity security, with a focus on password managers, password security, and usable security. My work uses empirical measurements and security analysis to examine authentication mechanisms, system behavior, and the security and privacy issues users encounter in practice.</p>
  <p>Previously, I received a Master of Engineering degree through a joint program at the <a target="_blank" rel="noopener noreferrer" href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences (UCAS)</a> and the <a target="_blank" rel="noopener noreferrer" href="https://www.iie.ac.cn/">Institute of Information Engineering (IIE), Chinese Academy of Sciences</a>. I was supervised by <a target="_blank" rel="noopener noreferrer" href="https://dblp.uni-trier.de/pid/52/8379.html">Qiongxiao Wang, Professor-Level Senior Engineer</a>, in the research team led by <a target="_blank" rel="noopener noreferrer" href="https://lin-jingqiang.github.io/">Prof. Jingqiang Lin</a>. My work during this period focused on certificate-related security. I also participated in an academic seminar led by <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/profile/Bingyu-Li-12">Prof. Bingyu Li</a>.</p>
  <p>I joined <a target="_blank" rel="noopener noreferrer" href="https://dreamtech.team/">Prof. Huawei Mei's Dreamtech group</a> as an intern in my sophomore year at <a target="_blank" rel="noopener noreferrer" href="https://net.ncepu.edu.cn/">North China Electric Power University (NCEPU)</a> in Baoding.</p>
  <p>Alongside my main research, I am interested in digital forensics and software testing. Outside research, I enjoy working out, bouldering, yoga, running, and reading, or just going for a walk.</p>
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

<section id="works" class="block works">
  <h2>Publications <a target="_blank" rel="noopener noreferrer" class="section-link" href="{{ site.google_scholar }}">Google Scholar</a></h2>
  {% for paper in site.data.publications.main %}
  <article class="publication">
    <div class="publication-label">{{ paper.venue_short }}<span>{{ paper.year }}</span></div>
    <div class="publication-body">
      <h3>{% if paper.pdf %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.pdf }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
      <p class="authors">{{ paper.authors }}</p>
      <p class="venue">{{ paper.conference }}</p>
      <p class="paper-links">
        {% if paper.pdf %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.pdf }}">[Paper]</a>{% endif %}
        {% if paper.code %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.code }}">[Code]</a>{% endif %}
        {% if paper.page %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.page }}">[Project]</a>{% endif %}
        {% if paper.slides %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.slides | relative_url }}">[Slides]</a>{% endif %}
        {% if paper.bibtex %}<a target="_blank" rel="noopener noreferrer" href="{{ paper.bibtex | relative_url }}">[BibTeX]</a>{% endif %}
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
