import styled from "styled-components";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 26px;
  width: 100%;

`

const Question = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`

const Response = styled.p`
  font-weight: 500;
  line-height: 135%;
  padding-left: 2%;
`

export { 
  Question, 
  Response,
  QuestionContainer,
}