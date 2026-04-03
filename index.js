let collapseBtn = document.getElementById('Collapse-Btn')

let sidebar = document.getElementById('sidebar')

let sidebarShown =  true;

collapseBtn.addEventListener('click', () => {
    updateSidebar()
})

function updateSidebar() {
    sidebarShown = !sidebarShown;
    const mainContent = document.querySelector('main'); // Wir greifen auf das Main-Element zu

    if (!sidebarShown) {
        sidebar.classList.add('collapsed');
        collapseBtn.style.transform = 'rotate(180deg)';
        collapseBtn.style.left = '20px';
        
        // Verschiebt den Inhalt nach links, lässt aber Platz für den Button (ca. 60px)
        mainContent.style.marginLeft = '60px'; 
        mainContent.style.transition = 'margin-left 250ms ease';
    } else {
        sidebar.classList.remove('collapsed');
        collapseBtn.style.transform = 'rotate(0deg)';
        collapseBtn.style.left = '180px';
        
        // Setzt den Abstand zurück auf den Standardwert deiner Sidebar-Breite
        mainContent.style.marginLeft = '0px'; 
    }
}
