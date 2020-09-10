import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { styled as styledUI } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const Wrapper = styled.div`
display:flex;
flex-flow:column;
justify-content: center;
align-items: center;
width:80%;
margin:auto;
`
const HeaderWrapper = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
align-items: center;
margin: 100px auto 60px;
padding-bottom:20px;
border-bottom: solid 1px #cccbcb;
`
const JokeWrapper = styled.div`
display: inline-block;
width: 60%;
`
const GetJokeButton = styledUI(Button)({
  background: '#92d292',
  border: 0,
  borderRadius: 20,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: 10,
})
const PunchButton = styledUI(Button)({
  background: '#6facd2',
  border: 0,
  borderRadius: 20,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: 10,
  margin: 40,
  minWidth: 140,
})
const Setup = styled.p`
  display:flex;
  justify-content:flex-start;
`
const PunchButtonWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:80%;
`
const PunchLine = styled.p`
  display:flex;
  justify-content:flex-end;
`


const APILinkButton = styledUI(Button)({
  fontSize: 10,
})



export default function App() {
  
  const [showPunch, setShowPunch] = useState(false)
  const [isFresh, setIsFresh] = useState(true)
  
  const GetJoke = () => {
    const {loading, error, data } = useQuery('jokeData', () =>
    fetch('https://official-joke-api.appspot.com/random_joke').then(res =>
      res.json()
    )
  )
  const _onSetShowPunchLine = () => {
    setShowPunch(!showPunch)
  }
  setIsFresh(true)
  
  console.log({...data})
  
  if (loading) return <h2>Loading...</h2>
  
  if (error) return <h2>An error has occurred: {error.message}</h2>
  console.log({data})
  if (data) return (
    <JokeWrapper>
       <Setup>{data.setup}</Setup>
       <PunchButtonWrapper>
         <PunchButton variant="contained" onClick={_onSetShowPunchLine}>{showPunch ?  'Hide Punchline' : 'Show Punch Line' }</PunchButton>
       </PunchButtonWrapper>
         {
           showPunch &&
         <PunchLine>{data.punchline}</PunchLine>
         }
    </JokeWrapper>
  )
}

const _onGetNewJoke = () => {
// setIsFresh(false)
}
  return (


    <Wrapper>
      <HeaderWrapper>
          <GetJokeButton variant="contained" onClick={_onGetNewJoke}>Get a new Random Joke</GetJokeButton>
          <APILinkButton href="https://github.com/15Dkatz/official_joke_api" color="primary"> View API Docs </APILinkButton>
      </HeaderWrapper>
    
     {
       isFresh &&
       <GetJoke/>
  
      }
  </Wrapper>
  )
}