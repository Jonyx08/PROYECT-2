    var sections = ['home', 'about', 'contact'];
    var currentSection = 0;

    /* lo que hace es tomar todas las id de el html */
    function showSection(id ) {
        /* selecciona todas las secciones y luego usa un for each para al hacer click remover el active de los que no se hicieron click y asi mostrar solo el que se hizo click */
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      /* usando el dom de el id en el classList al hacer click lo que hace es añadirle el active para mostrarlo */
      document.getElementById(id).classList.add('active');
    }

    // Event listeners for the buttons
    
   document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        if (e.key === 'ArrowRight') {
            currentSection = (currentSection + 1) % sections.length;
        } else if (e.key === 'ArrowLeft') {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
        showSection(sections[currentSection]);
    }
      
   });