import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import ClassroomList from './components/ClassroomList'

const ClassroomStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const StudentCard = (props) => {
  const student = props.students;
  return (
    <ClassroomStyles>
        <div>

      <img src={student.image} alt={student.name}/>
      <h3>Name:{student.name}</h3>
       <h3>Age:{student.age}</h3>
        </div>
    </ClassroomStyles>
  );
};

export default StudentCard;