import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TeacherStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    font-family: 'Fjalla One', sans-serif;
    padding: 5px 0;
  }
`;

const TeacherCard = (props) => {
  const teacher = props.teacher;
  return (
    <TeacherStyles>
      <Link to={`/teacher/${teacher.id}`}>
        <img src={teacher.image} alt={teacher.name} />
        </Link>
        <h3>{teacher.name}</h3>
        <h3>{teacher.title}</h3>
    </TeacherStyles>
  );
};

export default TeacherCard;