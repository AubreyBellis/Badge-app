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

const ClassroomCard = (props) => {
  const classroom = props.classrooms;
  return (
    <ClassroomStyles>
        <div>
      <Link to={`/classroom/${classroom.id}`}>
        {/* <img src={teacher.image} alt={teacher.name} /> */}
        <h3>{classroom.grade_level}</h3>
        </Link>
      {/* </Link> */}
      </div>
    </ClassroomStyles>
  );
};

export default ClassroomCard;