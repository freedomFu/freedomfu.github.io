<h2 id="research-works" class="section-heading">Publications</h2>

<div class="publications" data-publications>
  <div class="publication-controls">
    <h3>
      Publications
      <span class="view-switcher" aria-label="Change publication view">
        (
        <button type="button" class="view-control is-active" data-publication-view="selected" aria-pressed="true">show selected</button>
        <span aria-hidden="true">/</span>
        <button type="button" class="view-control" data-publication-view="date" aria-pressed="false">show all by date</button>
        <span aria-hidden="true">/</span>
        <button type="button" class="view-control" data-publication-view="topic" aria-pressed="false">show all by topic</button>
        )
      </span>
    </h3>

    <p class="topic-controls">
      <strong>Topics:</strong>
      <button type="button" data-topic-filter="password-managers">Password Managers</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-topic-filter="usable-security">Usable Security</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-topic-filter="empirical-security">Empirical Security</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-topic-filter="digital-certificate">Digital Certificate</button>
      <span class="topic-note">(* indicates equal contribution)</span>
    </p>
  </div>

  <p class="publication-status" data-publication-status aria-live="polite"></p>

  <ol class="bibliography" data-publication-list>
    {% for link in site.data.publications.main %}
    <li
      class="publication-card"
      data-year="{{ link.year }}"
      data-selected="{{ link.selected }}"
      data-primary-topic="{{ link.primary_topic }}"
      data-topics="{{ link.topics | join: ' ' }}"
    >
      <div class="publication-number" aria-hidden="true">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</div>
      <div class="publication-body">
        <h4 class="title">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
        </h4>
        <div class="author">{{ link.authors }}</div>
        <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
          {% if link.code %}<a href="{{ link.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
          {% if link.page %}<a href="{{ link.page }}" target="_blank" rel="noopener">Project</a>{% endif %}
          {% if link.slides %}<a href="{{ link.slides }}" target="_blank" rel="noopener">Slides</a>{% endif %}
          {% if link.bibtex %}<a href="{{ link.bibtex }}" target="_blank" rel="noopener">BibTeX</a>{% endif %}
          {% if link.ccfa %}<span class="rank rank-a">CCF-A</span>{% endif %}
          {% if link.ccfb %}<span class="rank rank-b">CCF-B</span>{% endif %}
          {% if link.ccfc %}<span class="rank rank-c">CCF-C</span>{% endif %}
          {% if link.ccfd %}<span class="rank rank-other">CCF-None</span>{% endif %}
          {% if link.notes %}<span class="note">{{ link.notes }}</span>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>
