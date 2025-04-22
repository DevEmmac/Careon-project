 document.addEventListener('DOMContentLoaded', function() {
      const tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');
      let lastActiveTabIndex = 0;
      
      tabEls.forEach((tab, index) => {
        tab.addEventListener('show.bs.tab', event => {
          const currentTabIndex = Array.from(tabEls).indexOf(event.target);
          const direction = currentTabIndex > lastActiveTabIndex ? 'next' : 'prev';
          
          // Remove previous direction classes
          document.querySelectorAll('.pane').forEach(pane => {
            pane.classList.remove('prev-tab');
          });
          
          // Add direction class to the target tab
          const targetTab = document.querySelector(event.target.getAttribute('data-bs-target'));
          if (direction === 'prev') {
            targetTab.classList.add('prev-tab');
          }
          
          // Store the current index for next comparison
          lastActiveTabIndex = currentTabIndex;
          
          // Animate the image
          const targetImage = targetTab.querySelector('.tab-image');
          targetImage.style.transform = 'scale(0.9)';
          setTimeout(() => {
            targetImage.style.transform = 'scale(1)';
          }, 50);
        });
      });
    });