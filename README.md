# Fu Yanduo's Websites

This website is forked from [yaoyao-liu's template](https://img.shields.io/github/license/yaoyao-liu/minimal-light). If you like or use this template, please follow the link to the original project.

## Homepage maintenance

The homepage uses the existing Jekyll/GitHub Pages setup. Its layout is inspired by [Tian Tan's academic homepage](https://silverbullettt.bitbucket.io/), with a pale green palette and responsive styling implemented locally.

- Edit biography and service in `index.md`.
- Set `last_updated` in the front matter of `index.md` when updating homepage content; the footer shows this date rather than the build date.
- Edit the primary research area and interest labels in `_config.yml`. English text prefers locally installed SF Mono with monospace fallbacks; Chinese text prefers KaiTi/STKaiti.
- Edit publication records in `_data/publications.yml`; `venue_short` is the label displayed beside each paper.
- Edit page structure in `_layouts/homepage.html` and colors/spacing in `assets/css/style-no-dark-mode.scss`.
- Run `bundle install`, then `bundle exec jekyll serve` to preview at `http://localhost:4000`.

## License

This work is licensed under a [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE) License.

## Acknowledgements

Our project uses the source code from the following repositories:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
