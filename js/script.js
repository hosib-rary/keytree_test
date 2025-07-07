document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const logo = document.querySelector('#sitelogo');
    const topSection = document.querySelector('#top');
    const footer = document.querySelector('footer');
    const windowWidth = window.innerWidth;

    const change = topSection.offsetHeight - 100;

    if (windowWidth <= 600) {
        header.classList.add('scrolled');
    }

    if (windowWidth <=1024){
        header.classList.add('scrolled2');
    }

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // ✅ 헤더 처리 (PC 환경)
        if (windowWidth > 600) {
            if (scrollY >= change) {
                header.classList.add('scrolled');
                if (logo) logo.src = 'images/logo2.png'; 
            } else {
                header.classList.remove('scrolled');
                if (logo) logo.src = 'images/logo1.png'; 
            }
        }

        // ✅ 푸터 투명도 처리 (항상 실행)
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollRatio = scrollY / docHeight;
        const opacity = 0.8 + scrollRatio * 0.2;
        footer.style.backgroundColor = `rgba(226, 237, 234, ${opacity})`;
    });

    const target  = document.getElementById('dynamic');
    const words   = ['sleeping bud','UI/UX Designer','Web Designer','Web Publisher'];
    const speed   = 90;      // typing speed
    const stay    = 1800; 

    let i = 0, j = 0, del = false;

    function loop(){
        const word = words[i];
        if(!del){
        target.textContent = word.slice(0, ++j);
        if(j === word.length){ del = true; setTimeout(loop, stay); return; }
        }else{
        target.textContent = word.slice(0, --j);
        if(j === 0){ del = false; i = (i+1)%words.length; }
        }
        setTimeout(loop, del ? speed/2 : speed);
    }
    loop();
});

const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('#menu a, #menu05 a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  let current = '';

  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    // 모든 메뉴에서 먼저 active 제거
    link.classList.remove('active');

    // #menu 영역에 있는 메뉴만 active 적용
    const href = link.getAttribute('href');
    if (href === `#${current}` && link.closest('#menu') && !link.closest('#menu05')) {
      link.classList.add('active');
    }
  });


//Project  
const projectLayout = document.getElementById('project_layout');
const pageBtns = document.querySelectorAll('.page-btn');

pageBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // 슬라이드 이동
    projectLayout.style.transform = `translateX(-${index * 100}%)`;

    // active 클래스 처리
    pageBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

  // 기본 첫 번째 버튼 활성화
  if (pageBtns[0]) pageBtns[0].classList.add('active');

  //Work패널 ul 메뉴 인터렉션

  const tabs = document.querySelectorAll('#work ul li');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });


});
