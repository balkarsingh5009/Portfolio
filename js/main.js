/* ------------------------------------------------------------------ *
 * Content protection — deter copy / cut / right-click / save shortcuts.
 * Note: this only stops casual copying; client-side rules can never
 * fully prevent a determined user from reading page source.
 * ------------------------------------------------------------------ */
(function () {
  var block = function (e) { e.preventDefault(); return false; };
  ['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart'].forEach(function (evt) {
    document.addEventListener(evt, block);
  });
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c', 'x', 'a', 's', 'u', 'p'].indexOf(k) !== -1) {
      e.preventDefault();
      return false;
    }
  });
})();

function openModal(key) {
  var p = projects[key];
  if (!p) return;

  document.getElementById('modalIcon').className = 'modal-icon ' + p.iconClass;
  document.getElementById('modalIcon').textContent = p.icon;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;

  var body = '';

  if (p.domain) {
    body += '<div class="domain-badge"><span>Domain &middot;</span> <span class="dept">' + p.domain + '</span></div>';
  }

  body += '<div class="modal-section"><div class="modal-section-title">Overview</div><p class="modal-text">' + p.overview + '</p></div>';
  body += '<div class="modal-section"><div class="modal-section-title">The Problem</div><p class="modal-text">' + p.problem + '</p></div>';

  body += '<div class="modal-section"><div class="modal-section-title">What I Built</div><ul class="modal-bullets">';
  for (var i = 0; i < p.built.length; i++) {
    body += '<li>' + p.built[i] + '</li>';
  }
  body += '</ul></div>';

  body += '<div class="modal-section"><div class="modal-section-title">Impact & Metrics</div><div class="modal-metrics">';
  for (var i = 0; i < p.metrics.length; i++) {
    body += '<div class="modal-metric-card"><div class="modal-metric-val">' + p.metrics[i].val + '</div><div class="modal-metric-lbl">' + p.metrics[i].lbl + '</div></div>';
  }
  body += '</div></div>';

  body += '<div class="modal-section"><div class="modal-section-title">Tools Used</div><div class="modal-pills">';
  for (var i = 0; i < p.tools.length; i++) {
    body += '<span class="pill p-purple">' + p.tools[i] + '</span>';
  }
  body += '</div></div>';

  body += '<div class="modal-section"><div class="modal-section-title">Principles Applied</div><div class="modal-principles-grid">';
  for (var i = 0; i < p.principles.length; i++) {
    body += '<div class="modal-principle"><div class="modal-principle-name">' + p.principles[i].name + '</div><div class="modal-principle-desc">' + p.principles[i].desc + '</div></div>';
  }
  body += '</div></div>';

  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.querySelectorAll('.learn-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      openModal(this.getAttribute('data-project'));
    });
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      var vo = document.getElementById('visionOverlay');
      if(vo && vo.classList.contains('open')){ vo.classList.remove('open'); document.body.style.overflow=''; }
    }
  });
});

(function(){
  var sections=[
    {id:'about-sec',sel:'[href="#about-sec"]'},
    {id:'projects-sec',sel:'[href="#projects-sec"]'},
    {id:'impact-sec',sel:'[href="#impact-sec"]'},
    {id:'exp-sec',sel:'[href="#exp-sec"]'},
    {id:'skills-sec',sel:'[href="#skills-sec"]'},
    {id:'edu-sec',sel:'[href="#edu-sec"]'},
    {id:'vision-sec',sel:'[href="#vision-sec"]'}
  ];
  window.addEventListener('scroll',function(){
    var scrollY=window.scrollY+80;
    sections.forEach(function(s){
      var el=document.getElementById(s.id);
      if(!el) return;
      var links=document.querySelectorAll('.nav-link'+s.sel);
      links.forEach(function(link){
        if(el.offsetTop<=scrollY && el.offsetTop+el.offsetHeight>scrollY){
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var href=a.getAttribute('href');
      var target=document.querySelector(href);
      if(target){
        e.preventDefault();
        var top=target.getBoundingClientRect().top+window.scrollY-60;
        window.scrollTo({top:top,behavior:'smooth'});
      }
      var mob=document.getElementById('nav-mobile');
      if(mob) mob.classList.remove('nav-open');
    });
  });
})();