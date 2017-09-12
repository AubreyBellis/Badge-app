def get_classroom_data
    classroom_data = {
      '(5th Grade)' => {
      grade_level: 'fifth grade',
      students:[],
      teacher: current_teacher
      },
      '(2nd Grade)' => {
        grade_level: 'second grade',
        students:[],
        teacher: current_teacher
      },
      '(1st Grade)' => {
        grade_level: 'first grade',
        students:[],
        teacher: current_teacher
      },
      '(3rd Grade)' => {
        grade_level: 'third grade',
        students:[],
        teacher: current_teacher
      },
    }
    classroom_data
  end
