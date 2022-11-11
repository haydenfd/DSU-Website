import styled from "styled-components"

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
`

const Title = styled.h1`
    color: #F3A47D;
    font-size: 3em;
    font-weight:700;
    margin: 1em 0 0 0;
    text-align: center;
`

const SubTitle = styled.h2`
    color: #F3A47D;
    font-size: 2.5em;
    font-weight:600;
    text-align: center;
    margin-bottom:1em;
`

const About = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-image: url('/Users/hayden2905/Desktop/DSU-Website/src/Images/who-we-are.png');
    background-size: contain;
`

const EmphasizedText = styled.p`
    display: inline-block;
    color: #f3a47d;
    font-weight: 700;
`

const AboutDescription = styled.p`
    font-size: 1.5em;
    color: white;
    text-align: center;
    width:70%;
    margin: auto;
    padding-bottom: 2em;
`

const StatsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5em 0;
`

const Companies = styled.img`
    width:80vw;
    margin-bottom: 3em;
`
export {
  Title,
  TitleWrapper,
  SubTitle,
  About,
  AboutDescription,
  EmphasizedText,
  StatsWrapper,
  Companies,
}