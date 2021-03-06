const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
  <!-- ////////////////////////////////////////////////////////////////////////// -->
  console.log(allLessons);
  /*
  {
    lesson1:
     { materia: 'Matemática',
       numeroEstudantes: 20,
       professor: 'Maria Clara',
       turno: 'manhã' },
    lesson2:
     { materia: 'História',
       numeroEstudantes: 20,
       professor: 'Carlos',
       turno: 'noite' },
    lesson3:
     { materia: 'Matemática',
       numeroEstudantes: 10,
       professor: 'Maria Clara',
       turno: 'noite' }
  };
  */
  
  <!-- ////////////////////////////////////////////////////////////////////////////// -->
  
  console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'
  
  <!-- ////////////////////////////////////////////////////////////////////////////// -->
  
  console.log(verifyPair(lesson3, 'turno', 'noite'));
  // Output: true,
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  // Output: false